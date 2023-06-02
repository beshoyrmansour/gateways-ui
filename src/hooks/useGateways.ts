import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { fetchGateways } from '../api/gateways';
import { Gateway } from '../types/Gateway'
import { useNavigate } from 'react-router-dom';
import { Paths } from '../router/paths';
import { GATEWAY_DETAILS_SELECTOR, QUEY_KEYS } from '../shared/constants';


const useGateways = () => {
  const navigate = useNavigate()
  const [gatewaysData, setgatewaysData] = useState<Array<Gateway>>();
  const gatewaysQuery = useQuery<Promise<string | AxiosResponse<Array<Gateway>>>, AxiosError, AxiosResponse<Array<Gateway>>>(
    [QUEY_KEYS.GATEWAY], () => fetchGateways());

  const { data, isLoading, isFetched, isSuccess, isError } = gatewaysQuery;

  useEffect(() => {
    if (isFetched && isSuccess) {
      setgatewaysData(data.data)
    }
  }, [data])

  const onDeleteGatway = (gateway: Gateway) => {
    if (gateway) {
      setgatewaysData((prev => prev?.filter((_gateway: Gateway) => _gateway.serialNumber !== gateway.serialNumber)))
    }
  }

  const onViewGatway = (gateway: Gateway) => {
    if (gateway) {
      navigate(Paths.GETWAY_DETAILS.replace(`:${GATEWAY_DETAILS_SELECTOR}`, gateway.serialNumber));
    }
  }

  return {
    isError,
    isLoading,
    isFetched,
    gatewaysData,
    onDeleteGatway,
    onViewGatway,
  }
}

export default useGateways
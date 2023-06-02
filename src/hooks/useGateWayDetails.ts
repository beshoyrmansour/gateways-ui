import { useEffect, useState } from 'react'
import { useQueries, useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { fetchGatewayDetails, updateGateway } from '../api/gateways';
import { Gateway } from '../types/Gateway'
import { useParams } from 'react-router-dom';
import { GATEWAY_DETAILS_SELECTOR, QUEY_KEYS } from '../shared/constants';
import { Device } from '../types/Device';


const useGateWayDetails = () => {
  const [gatewayData, setgatewayData] = useState<Gateway>();
  const { [GATEWAY_DETAILS_SELECTOR]: gatewayId } = useParams()

  // const gatewayQuery = useQuery<Promise<string | AxiosResponse<Gateway>>, AxiosError, AxiosResponse<Gateway>>(
  //   [QUEY_KEYS.GATEWAY, gatewayId], () => fetchGatewayDetails(gatewayId || ''), {
  //   enabled: Boolean(gatewayId)
  // });

  const queries = useQueries([{
    queryKey: [QUEY_KEYS.GATEWAY, gatewayId],
    queryFn: () => fetchGatewayDetails(gatewayId || '')
  },
  {
    queryKey: [QUEY_KEYS.UPDATE_GATEWAY, gatewayData],
    queryFn: () => updateGateway(gatewayId || '', gatewayData)
  }])

  const {
    data,
    isLoading,
    isFetched,
    isSuccess,
    isError,
    refetch
  } = queries[0]

  useEffect(() => {
    if (isFetched && isSuccess) {
      setgatewayData(data.data)
    }
  }, [data])

  const onDeleteGatway = (device: Device, gateway: Gateway) => {
    if (device && gateway) {
      const newDevicesList = gateway.devices.filter((_device: Device) => _device.uuid !== device.uuid)
      setgatewayData({
        ...gateway,
        devices: [...newDevicesList]
      })
    }
  }

  const onAddGatwayDevice = (device: Device, gateway: Gateway) => {
    if (device && gateway) {
      const newGateway = {
        ...gateway,
        devices: [
          ...gateway?.devices, {
            ...device,
            uuid: `UUID-${device.uuid}`,
          }
        ]
      }
      setgatewayData(newGateway)
      const updateGatewayQuery = queries[1]
      // useQuery<Promise<string | AxiosResponse<Gateway>>, AxiosError, AxiosResponse<Gateway>>(
      //   [QUEY_KEYS.UPDATE_GATEWAY], () => updateGateway(gatewayId || '', newGateway));
      console.log({ queries, updateGatewayQuery });

    }


  }

  return {
    isError,
    isLoading,
    isFetched,
    gatewayData,
    onDeleteGatway,
    onAddGatwayDevice,

  }
}

export default useGateWayDetails
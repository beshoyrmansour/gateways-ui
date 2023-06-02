import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { fetchGatewayDetails } from '../api/gateways';
import { Gateway } from '../types/Gateway'
import { useParams } from 'react-router-dom';
import { GATEWAY_DETAILS_SELECTOR, QUEY_KEYS } from '../shared/constants';
import { Device } from '../types/Device';


const useGateWayDetails = () => {
  const [gatewayData, setgatewayData] = useState<Gateway>();
  const { [GATEWAY_DETAILS_SELECTOR]: gatewayId } = useParams()

  const gatewayQuery = useQuery<Promise<string | AxiosResponse<Gateway>>, AxiosError, AxiosResponse<Gateway>>(
    [QUEY_KEYS.GATEWAY, gatewayId], () => fetchGatewayDetails(gatewayId || ''), {
    enabled: Boolean(gatewayId)
  });

  const {
    data,
    error,
    isLoading,
    isFetched,
    isSuccess,
    isError
  } = gatewayQuery;
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
      setgatewayData({
        ...gateway,
        devices: [
          ...gateway?.devices, {
            ...device,
            uuid: `UUID-${device.uuid}`,
          }
        ]
      })
    }
  }

  return {
    error,
    isError,
    isLoading,
    isFetched,
    gatewayData,
    onDeleteGatway,
    onAddGatwayDevice,

  }
}

export default useGateWayDetails
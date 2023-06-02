import { AxiosResponse } from "axios"
import instance from "../adapters/rest"
import { Gateway } from "../types/Gateway"

export const fetchGateways: () => Promise<AxiosResponse<Array<Gateway>, any>> = () => {
  return instance({
    method: 'GET',
    url: '/gateways'
  })
}
export const fetchGatewayDetails: (gatewayId: string) => Promise<AxiosResponse<Gateway, any>> = (gatewayId) => {
  return instance({
    method: 'GET',
    url: `/gateways/${gatewayId}`
  })
}

export const updateGateway: (gatewayId: string, gateway?: Gateway) => Promise<AxiosResponse<Gateway, any>> = (gatewayId, gateway) => {
  return instance({
    method: 'put',
    url: `/gateways/${gatewayId}`,
    data: { ...gateway }
  })
}
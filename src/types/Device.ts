export enum DeviceStatus {
  offline = 'offline',
  online = 'online',
}

export type Device = {
  gateway_ipv4Address: string,
  uuid: string,
  vendor: string,
  createdAt: string,
  status: DeviceStatus
}

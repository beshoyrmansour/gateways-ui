import { Device } from "./Device"
export type Gateway = {
  serialNumber: string,
  name: string,
  IPv4Address: string,
  devices: Array<Device>,
  createdAt: string,
}
export type GateWayAction = {
  callBack: Function,
  title: string,
  color: "inherit" | "error" | "primary" | "secondary" | "success" | "info" | "warning",
}
export type Device = {
  id: string
  createdAt: Date
  name: string
  enabled: boolean
}

export type AddNewDeviceData = {
  name: string
  enabled: boolean
}
import React from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm, SubmitHandler } from "react-hook-form";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputAdornment from '@mui/material/InputAdornment';

import { Gateway } from '../types/Gateway'
import { Device, DeviceStatus } from '../types/Device';

type Props = {
  gateway: Gateway,
  onSubmitNew: (device: Device, gateway: Gateway) => void,
}
type Inputs = {
  uuid: string,
  vendor: string,
};

const AddNewDeviceForm = ({ gateway, onSubmitNew }: Props) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    onSubmitNew({
      ...data,
      createdAt: (new Date()).toString(),
      status: DeviceStatus.offline,
      gateway_ipv4Address: gateway.IPv4Address
    }, gateway)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant='subtitle2'>
        Add New Device
      </Typography>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='flex-end'
        alignItems='flex-end'
      >
        <Box
          width='100%'
          component="form"
          display='flex'
          gap={2}
          marginBottom={2}
        >
          <Stack width={'100%'}>
            <TextField
              {...register("uuid", { required: true })}
              size='small' fullWidth label="UUID" id="uuid"
              InputProps={{
                startAdornment: <InputAdornment position="start">UUID-</InputAdornment>,
              }} />
            {errors.uuid && <span>This field is required</span>}
          </Stack>
          <Stack width={'100%'}>
            <TextField
              {...register("vendor", { required: true })}
              size='small' fullWidth label="Vendor" id="vendor" />
            {errors.vendor && <span>This field is required</span>}
          </Stack>

        </Box>
        <Button type="submit" variant='contained' disabled={!isValid} > Submit </Button>
      </Box>

    </form>
  )
}

export default AddNewDeviceForm
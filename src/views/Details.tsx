import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import { Gateway } from '../types/Gateway'
import useGateWayDetails from '../hooks/useGateWayDetails'
import { Device } from '../types/Device';
import DeviceCard from '../components/DeviceCard';
import GatwayCard from '../components/GatwayCard';
import AddNewDeviceForm from '../components/AddNewDeviceForm';
import Loader from '../components/Loader';


const Details = () => {
  const [showAddNew, setShowAddNew] = useState(false)
  const {
    isError,
    isLoading,
    isFetched,
    gatewayData,
    onDeleteGatway,
    onAddGatwayDevice
  } = useGateWayDetails()

  const handleAddGatwayDevice = (device: Device, gateway: Gateway) => {
    onAddGatwayDevice(device, gateway);
    setShowAddNew(false);
  }
  ``
  if (isLoading) {
    <Loader />
  }
  if (isError) {
    <Typography component='h2' variant='h2' color='danger'>Error...</Typography>
  }
  if (isFetched) {
    return (
      <Grid container spacing={1} gap={2}>

        <Grid container columns={13} xs={12} md={5} lg={5} marginBottom={3} >
          {gatewayData &&
            <Grid item xs={12} md={12} lg={12}>
              <GatwayCard gateway={gatewayData} />
            </Grid>
          }
        </Grid>
        {gatewayData?.devices &&
          <Grid container xs={12} md={7} lg={7}>
            {showAddNew &&
              <Grid item xs={12} md={12} lg={12} marginBottom={3}>
                {gatewayData && <AddNewDeviceForm gateway={gatewayData} onSubmitNew={handleAddGatwayDevice} />}
              </Grid>
            }
            <Box width='100%' display='flex' justifyContent='space-between' alignItems='baseline'>
              <Typography variant='subtitle1' color='primary' mb={2}>Devices {gatewayData?.devices.length} / 10</Typography>
              <Button
                variant='outlined'
                disabled={gatewayData.devices.length >= 10}
                onClick={() => setShowAddNew(prev => !prev)}
              >{showAddNew ? 'Cancel' : 'Add Device'}</Button>
            </Box>
            <List sx={{ width: '100%', }}>
              {gatewayData?.devices.map((device: Device) => (
                <Paper key={device.uuid} elevation={2}>
                  <DeviceCard device={device} onDelete={
                    (device) => onDeleteGatway(device, gatewayData)
                  } />
                </Paper>
              ))}
            </List>
          </Grid>
        }
      </Grid >
    )
  }
}

export default Details
import React from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import RouterIcon from '@mui/icons-material/Router';

import { GateWayAction, Gateway } from '../types/Gateway'
import { formatDate } from '../shared/utils';

type Props = { gateway: Gateway, actions?: Array<GateWayAction> }

const GatwayCard = ({ gateway, actions }: Props) => {


  return (
    <Paper elevation={3} style={{ position: 'relative' }}>
      <Grid container spacing={2} padding={2}>
        <>
          <Grid item xs={12} md={2} lg={4}>
            <RouterIcon fontSize='large' />
          </Grid>
          <Grid item xs={12} md={10} lg={8}>
            <Typography variant='subtitle2'>{gateway.name}</Typography>
            <Typography variant='overline'>SN: {gateway.serialNumber}</Typography>
          </Grid>
        </>
        {/* IPv4Address */}
        <>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant='body2'>IPv4 address</Typography>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Typography variant='body1'>{gateway.IPv4Address}</Typography>
          </Grid>
        </>
        {/* createdAt */}
        <>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant='body2'>Created at</Typography>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Typography variant='body1'>{formatDate(gateway.createdAt)}</Typography>
          </Grid>
        </>
        {/* devices */}
        <>
          <Grid item xs={12} md={4} lg={4}>
            <Typography variant='body2'>Devices count</Typography>
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
            <Typography variant='body1'>{gateway.devices.length} / 10</Typography>
          </Grid>
        </>
        {/* actions */}
        {actions && < Grid item xs={12} md={12} lg={12} justifyContent='end' alignItems='center' display='flex'>
          {actions.map((action: GateWayAction) => (
            <Button onClick={() => action.callBack(gateway)} color={action.color}>{action.title}</Button>
          ))}
        </Grid>}
      </Grid>
    </Paper >
  )
}

export default GatwayCard
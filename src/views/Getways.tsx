import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Gateway } from '../types/Gateway'
import useGateways from '../hooks/useGateways'
import GatwayCard from '../components/GatwayCard';
import Loader from '../components/Loader';

const Getways = () => {
  const {
    isError,
    isLoading,
    isFetched,
    gatewaysData,
    onDeleteGatway,
    onViewGatway,
  } = useGateways()

  const handleDeleteGatway = (gateway: Gateway) => {
    if (gateway) {
      onDeleteGatway(gateway)
    }
  }

  const handleViewGatway = (gateway: Gateway) => {
    if (gateway) {
      onViewGatway(gateway)
    }
  }

  if (isLoading) {
    <Loader />
  }
  if (isError) {
    <Typography component='h2' variant='h2' color='danger'>Error...</Typography>
  }
  if (isFetched) {
    return (
      <Grid container spacing={3}>
        {gatewaysData?.map((gateway: Gateway) => (
          <Grid item xs={12} md={6} lg={4} marginBottom={3}>

            <GatwayCard gateway={gateway}
              actions={[
                {
                  callBack: handleDeleteGatway,
                  title: 'Delete',
                  color: 'error'
                },
                {
                  callBack: handleViewGatway,
                  title: 'View',
                  color: 'primary'
                },
              ]}
            />
          </Grid>
        ))}
      </Grid>
    )
  }
}

export default Getways
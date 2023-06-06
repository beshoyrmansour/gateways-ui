import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green, grey } from '@mui/material/colors';
import WifiTetheringIcon from '@mui/icons-material/WifiTethering';
import WifiTetheringOffIcon from '@mui/icons-material/WifiTetheringOff';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Device, DeviceStatus } from '../../../../types/Device'
import { formatDate } from '../../../../shared/utils';

type Props = {
  device: Device,
  onDelete: (device: Device) => void,
}

const DeviceCard = ({ device, onDelete }: Props) => {
  const { createdAt, status, uuid, vendor } = device;
  return (
    <ListItem
      secondaryAction={
        <IconButton aria-label="Delete device" color='error' onClick={() => onDelete(device)}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      }
      alignItems="flex-start" sx={{ bgcolor: 'background.paper', marginBottom: '1rem' }}>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: status === DeviceStatus.offline ? grey[500] : green[500] }}>
          {status === DeviceStatus.offline ? <WifiTetheringOffIcon /> : <WifiTetheringIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={uuid}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {vendor} -
            </Typography>
            {' '}{formatDate(createdAt)}
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

export default DeviceCard
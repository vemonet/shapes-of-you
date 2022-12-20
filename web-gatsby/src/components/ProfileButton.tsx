import React from 'react';
import { Tooltip, Button, Link } from "@mui/material";


const ProfileButton = ({ label, href, tooltip, color, icon }: any) => {

  return(
    <Tooltip title={tooltip}>
      <Button href={href}
        target="_blank"
        component={Link}
        variant="contained"
        color={color}
        startIcon={icon}
        style={{ textTransform: 'none' }}
      >
        {label}
      </Button>
    </Tooltip>
  )
}
export default ProfileButton;
import React from 'react'
import { Toolbar, AppBar, Typography, IconButton } from '@material-ui/core';

export default props => 
        <div>
          <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="subtitle1"  color="inherit">
                  Exercise Database
                </Typography>
            </Toolbar>
            </AppBar>       
        </div>

import React, {Component} from 'react';
import { AppBar, Typography, Toolbar, Container} from '@material-ui/core';

class SuperMarketToolbar extends React.Component{
    render(){
        return(
            <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    Supermercado
                </Typography>
                </Toolbar>
            </AppBar>
            </div>
        ); 
    }
}


export default SuperMarketToolbar;
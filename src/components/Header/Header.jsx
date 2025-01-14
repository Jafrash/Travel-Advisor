import React from 'react'
import {CssBaseline,Grid} from "@material-ui/core"
import {Autocomplete} from "@react-google-maps/api";
import {AppBar,Toolbar,Typography,InputBase,Box} from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search"
import useStyles from "./styles"
function Header() {
    const classes=useStyles()
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
        Travel Companion
        </Typography>

        <Box display="flex">
        <Typography variant="h6" className={classes.title}>
        Travel Companion
        </Typography>
       
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon/>
                </div>
                <InputBase placeholder="Search..." classes={{root:classes.inputRoot, input:classes.inputInput}}/>
            </div>
        

        </Box>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header

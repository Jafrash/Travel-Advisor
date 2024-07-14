import React from 'react'
import GoogleMapReact from "google-maps-react-17"
import {Paper,Typography,useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from "@material-ui/lab";
import useStyles from "./styles";



function Map() {
  const classes=useStyles();
  const isMobile=useMediaQuery('(min-width:600px)');
  const coordinates={lat:0,lng:0};
  
  return (
    <div>
      <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{keys:'AIzaSyA29E2aHQUU5DCAgI7aep9MnPr_FybYAAw'}}
      defaultCenter={coordinates}
      center={coordinates}
      margin={[50,50,50,50]}
      defaultZoom={14}
      options={''}
      onChange={''}
      onChildClick={''}
      >
      
      </GoogleMapReact>
      </div>
    </div>
  );
}

export default Map

/*
AIzaSyAbY3Z0SZZ7H-Q7WARGGuLRdUQTolWByVk
*/

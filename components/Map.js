import React, { useState } from 'react'
import ReactMapGL,{Marker, Popup} from 'react-map-gl'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import {getCenter} from "geolib"

function Map({searchResults}) {
   const [selected, setSelected]=useState({});

    const coordinates = searchResults.map(item => ({
      longitude: item.long,
      latitude: item.lat
    }))

    const centerOfAllLocations= getCenter(coordinates);
    // console.log(centerOfAllLocations);

    const [viewport,setViewPort]= useState({
      width:"100%",
      height: '100%',
      longitude: centerOfAllLocations.longitude,
      latitude: centerOfAllLocations.latitude,
      zoom:11,
  });
  
  return (
    <ReactMapGL
        mapStyle='mapbox://styles/ayosef/cl62jw57i002o14pamo0g9s21'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onMove={event => setViewPort(event.viewState)}
    >
      {searchResults.map(location => (
        <div key={location.long}>
          <Marker longitude={location.long} latitude={location.lat} offsetLeft={-20} offSetTop={-10}>
            <p onClick={() => setSelected(location)} className='cursor-pointer text-2xl animate-bounce'>
            <LocationMarkerIcon className='h-7 text-yellow-500 font-bold'/>
            </p>
           </Marker>
           {/* {selected.long === location.long ? console.log("location clicked") : false} */}
           {selected.long === location.long && 
          
            (<Popup
            onClose={() => setSelected({})}
            closeOnClick={false}
            longitude={location.long}
            latitude={location.lat}>
              <h3 className=' font-bold'>{location.title}</h3>
              <h4 className='ml-10'>{location.price}</h4>
           </Popup>
           )
           }
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map
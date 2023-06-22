import * as React from "react";
import ReactMapGL, { GeolocateControl, Marker, NavigationControl } from "react-map-gl";
import MarkrPNG from "../assets/images/marker1.png";
import { Box } from "@chakra-ui/react";
import { FaShareAlt } from "react-icons/fa";


export default function App() {
  const [viewport, setViewport] = React.useState({
    zoom: 8,
    longitude:85.0937,
    latitude:25.7,
  });

  const [marker, setMarker] = React.useState({
    latitude: viewport.latitude,
    longitude: viewport.longitude,
  });

  const [shareURL, setShareURL] = React.useState("");

  React.useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
        enableHighAccuracy: true,
      });
    } else {
      console.log("Not Available");
    }
  }, []);

  const successLocation = (position) => {
    console.log("success Locations");
    setViewport({
      ...viewport,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    
    generateShareURL(position.coords.latitude, position.coords.longitude);
  };

  const errorLocation = () => {
    console.log("error Locations");
    

  };
  const handleMarkerDrag = (event) => {
    setMarker({
      latitude: event.lngLat[1],
      longitude: event.lngLat[0],
    });
    generateShareURL(event.lngLat[1], event.lngLat[0]);
  };

  const generateShareURL = (latitude, longitude) => {
    const shareUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    setShareURL(shareUrl);
  };


  const handleShareButtonClick = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Live Location",
        url: shareURL,
      });
    } else {
      console.log("Share API not supported");
    }
  };

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactMapGL
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={setViewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Marker
            latitude={marker.latitude}
            longitude={marker.longitude}
            draggable
            onDragEnd={handleMarkerDrag}
          >
            <img src={MarkrPNG} alt="" />
          </Marker>
          <div className="nav-control">
            <NavigationControl />
          </div>
          <div className="gg">
          <GeolocateControl />
          </div>
          
        </ReactMapGL>

      </div>
      <Box className="share-button" p={2} position="absolute" top="80%" display="Flex"  left="50%" transform="translateX(-50%)" color="red" background="back">
        <FaShareAlt size={26} style={{ marginRight: "0.5rem" }} />
        <button onClick={handleShareButtonClick}> Live Location</button>
      </Box>
      <style jsx>{`
        .nav-control {
          position: absolute;
          top: 80%;
          left: 95%;
          transform: translateY(-50%);
        }
        .share-button {
          position: absolute;
          top: 7.5%;
          left: 92%;
          color:#F9629F;
          background:white;
          border-radius:3px;
          font:poppins;
          font:bold;
          padding:10px;
          transform: translateX(-50%);
        }
        .gg{
          padding:10px;

        }
      `}</style>
    </>
  );
}

// import { css } from "@emotion/core";
import { divIcon } from "leaflet";
import { Map, Marker, TileLayer } from "react-leaflet";

const markerPosition = `width: 23px; transform: translate(-50%,-50%)`;

const markerPositionText = `transform: translateX(-35px);`;

const iconHTML = `
  <div style="${markerPosition}">
    <img src="/static/marker.svg" alt="Marker"/>
    <div style="${markerPositionText}">
       <img src="/static/marker-logo.svg" alt="Logo" />
    </div>
  </div>
`;

const markerIcon = divIcon({
  html: iconHTML,
  iconSize: [0, 0],
});

console.log(markerIcon);
const ContactMap = () => {
  const lat = 40.365429;
  const long = 49.836172;

  return (
    <Map
      style={{ width: "100%", height: "100%" }}
      center={[40.365436, 49.836201]}
      zoom={25}
      scrollWheelZoom={true}
      zoomControl={false}
      maxZoom={19}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]} icon={markerIcon}></Marker>
    </Map>
  );
};

export default ContactMap;

//  <img src="/static/marker.svg" alt="Marker" icon={} />
//         <div css={markerText}>
//           <img src="/static/marker-logo.svg" alt="Logo" />
//         </div>

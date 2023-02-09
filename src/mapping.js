

import {Circle, MapContainer, TileLayer, Marker, Popup , Polyline} from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
// import icon from "../Images/icon.png";
import L from "leaflet";
import "./plot.css"


const customIcon = new L.Icon({//creating a custom icon to use in Marker
    iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=',
    iconSize: [25, 35],
    iconAnchor: [5, 30]
  });

{/* <Marker icon={customIcon} position={center1}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker> */}
const Mapping= (props)=>{

    console.log("I am here 1");
    console.log(props.mit);
    console.log("I am here 2");
    console.log(props.mit1);
    console.log("I am here 3 mit2")
    console.log(props.mit2);
    var positions= [];
    var COG_Cordi= [];
    var start= [];
    var end= [];
    var i=0;
    var tot= [];
    var start1= [17.6868, 83.2185];
    var end1= [20.156,65.21];
    var start2= [37.6868, 113.2185];
    var end2= [50.156,95.21];

    props.mit.map((iterator)=>{
        const {Latitude}= iterator;
        const {Longitude}= iterator;
        var pos= [Latitude,Longitude];
        positions= [...positions,pos];
    })
    props.mit1.map((iterator)=>{
        const {Latitude_COG}= iterator;
        const {Longitude_COG}= iterator;
        var pos1= [Latitude_COG,Longitude_COG];
        COG_Cordi= [...COG_Cordi,pos1];
    })

    props.mit2.map((iterator)=>{
        const {Latitude}= iterator;
        const {Longitude}= iterator;
        var lin1= [Latitude,Longitude];
        const {Latitude_COG}= iterator;
        const {Longitude_COG}= iterator;
        var lin2= [Latitude_COG,Longitude_COG];
        var lin3= [lin1,lin2];
        tot= [...tot,lin3];
    })
    {console.log("I am the tot",tot);}

    console.log(COG_Cordi);
    var center1= [17.6868, 83.2185];


    // var center2= [54.505,1];
    return(
    <MapContainer className="lakshmi" center={center1} zoom={12}>
    <TileLayer
    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

     {/* <Polyline positions={[start1, end1]} color="orange" weight={.75} />
     <Polyline positions={[start2,end2]} color="purple" weight={.75}/> */}
     {
     props.mit2.map((iterator)=>{
        const {Latitude}= iterator;
        const {Longitude}= iterator;
        const {Latitude_COG}= iterator;
        const {Longitude_COG}= iterator;
        var s1= [Latitude,Longitude];
        var s2= [Latitude_COG,Longitude_COG];
        return(
        <Polyline positions={[s1,s2]} color="purple" weight= {.75}/>
        )
     })
     }

      {/* <Marker position={start1} icon={customIcon}>
        <Popup>
          Start
        </Popup>
      </Marker>
      <Marker position={end1} icon={customIcon}>
        <Popup>
          End
        </Popup>
      </Marker> */}
    
    {/* {
        tot!== null && 
        tot.map((iterator)=>{
        var po1= iterator[0];
        var po2= iterator[1];

        {console.log("I am coming into loop but not joining",iterator[0],iterator[1])}
        <Polyline positions={[po1,po2]} color="orange" weight={.75}/>
        {console.log("I am coming into loop but not joining",iterator[0],iterator[1])}
        })
    }
     */}


      

    {COG_Cordi.map((position, index) => (
        <Marker key={index} position={position} icon={customIcon} >
          <Popup>
            Marker {index + 1}
          </Popup>
        </Marker>
      ))}

      {positions.map((position, index) => (
        <Circle
          key={index}
          center={[position[0], position[1]]}
          radius={500}
          color="#f03"
          fillColor="#f03"
          fillOpacity={0.5}
        />
      ))}


    </MapContainer>
)
}
export default Mapping;


    // props.mit2.map((iterator)=>{
    //     const {Latitude}= iterator;
    //     const {Longitude}= iterator;
    //     const {Latitude_COG}= iterator;
    //     const {Longitude_COG}= iterator;
    //     start= [Latitude,Longitude];
    //     end= [Latitude_COG,Longitude_COG];
    //     console.log("Start of iter",start);
    //     console.log("end of iter",end);
    //     {/* <Polyline positions={[start, end]} color="pink" weight={3} opacity={1} smoothFactor= {1}/> */}
    //     <Polyline positions={[start1, end1]} color="orange" weight={.75} />
    // })
  

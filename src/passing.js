import React from 'react';
import {useState} from 'react';
import Mapping from './mapping';

const Count= (ExcelData)=>{
    {
      var rand= [];
      var temp= [];
      var cnt=  [];
      var cnt1= [];
      var hexa= [];
        ExcelData.ExcelData.map((iterator)=>{
          const {Latitude} = iterator;
          const {Longitude}= iterator;
          const {Latitude_COG}= iterator;
          const {Longitude_COG}= iterator;
          const {Volume}= iterator;
          var cordi= {Latitude, Longitude}
          var cordi_1= {Latitude, Longitude,Latitude_COG,Longitude_COG};
          var cordi_2= {Latitude_COG,Longitude_COG};
          var cordi_3= {Volume,cordi,cordi_1,cordi_2};
          rand= [...rand,cordi];
          temp= [...temp,cordi_3];
          hexa= [...hexa,cordi_1];
          cnt1= [...cnt1,cordi_2];
        })
    }

    console.log("rand",rand);
    console.log("temp",temp);
    console.log("cnt1",cnt1);
    return(
        <Mapping mit={rand} mit1={cnt1} mit2={hexa}/>
    )
}
export default Count;
import React from "react";
import Img1 from "../img/1.png";
import Img2 from "../img/2.png";
import Img3 from "../img/3.png";
import Img4 from "../img/4.png";
import Img5 from "../img/5.png";
import Img6 from "../img/6.png";


export default function Numbers({data}){

    if(data==undefined){return;}

let img1;
let img2;
let img3;
let img4;
let mycolor="";
let mycolor1="";
let text="";
let text1="";

   switch(data[0]){
    case 1:img1=Img1;break;
    case 2:img1=Img2;break;
    case 3:img1=Img3;break;
    case 4:img1=Img4;break;
    case 5:img1=Img5;break;
    case 6:img1=Img6;break;
    
   }
   switch(data[1]){
    case 1:img2=Img1;break;
    case 2:img2=Img2;break;
    case 3:img2=Img3;break;
    case 4:img2=Img4;break;
    case 5:img2=Img5;break;
    case 6:img2=Img6;break;
    
   } switch(data[2]){
    case 1:img3=Img1;break;
    case 2:img3=Img2;break;
    case 3:img3=Img3;break;
    case 4:img3=Img4;break;
    case 5:img3=Img5;break;
    case 6:img3=Img6;break;
    
   } switch(data[3]){
    case 1:img4=Img1;break;
    case 2:img4=Img2;break;
    case 3:img4=Img3;break;
    case 4:img4=Img4;break;
    case 5:img4=Img5;break;
    case 6:img4=Img6;break;
    
   }
   if((data[0]+data[1])>(data[2]+data[3])){
      
      mycolor="red";
      text="победил";
   }
   else if((data[0]+data[1])<(data[2]+data[3])){
      mycolor1="red";
      text1="победил";
   }
   else{
      mycolor="red";
      text="ничья";
      mycolor1="red";
      text1="ничья";
   }


    return(
        <>
       <div style={{color:mycolor}}>Компьтер {text} {data[0]+data[1]}</div>
       <div className="kosti">
       <img src={img1}/>
       <img src={img2}/>
        </div>
        
       

        <div style={{color:mycolor1}}>Человек {text1} {data[2]+data[3]}</div>
        <div className="kosti">
            <img src={img3}/>
            <img src={img4}/>
          
        </div>
        </>
    )
}


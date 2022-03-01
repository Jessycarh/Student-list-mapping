import React from "react"; 
import './App.css';
import Pik1 from "./images/pik1.jpg";
import Pik2 from "./images/pik2.jpg";
import Pik3 from "./images/pik3.jpeg";
import Pik4 from "./images/pik4.jpg";
import Pik5 from "./images/pik5.jpg";
import Pik6 from "./images/pik6.jpeg";
import Pik7 from "./images/img.png";
import Pik8 from "./images/img24..png";
import Pik9 from "./images/img25.jpg";
import Pik10 from "./images/img26.jpg";

function App() {
 
const lsetf = [
  {
    image: <div> <img src={Pik1} className="Passport"/> </div>,
    name: "Biola",
    age: 15,
    sex: "Female",
    
    
  },

  {
    image: <div> <img src ={Pik2} className= "Passport"/> </div>,
    name:"Victor",
    age: 25,
    sex: "Male",
 
  },

  {
    image: <div> <img src = {Pik3} className = "Passport"/> </div>,
    name: "James",
    age: 40,
    sex: "Male",
 
  },

  {
    image: <div> <img src = {Pik4} className = "Passport" /> </div>,
    name: "Wura",
    age: 20,
    sex: "Female",

  },

  {
    image: <div> <img src = {Pik5} className = "Passport" /> </div>,
    name: "Akeem",
    age: 40,
    sex: "Male",
   
  },

  {
    image: <div> <img src = {Pik6} className = "Passport" /> </div>,
    name: "Yemisi",
    age: 22,
    sex: "Female",
    
      
  },
  
  {
    image: <div> <img src = {Pik7} className = "Passport" /> </div>,
    name: "Grace",
    age: 26,
    sex: "Female",
  
  },

  {
    image: <div> <img src = {Pik8} className = "Passport" /> </div>,
    name: "Chibuike",
    age: 18,
    sex: "Male",
   
  },

  {
    image: <div> <img src = {Pik9} className = "Passport" /> </div>,
    name: "Sophia",
    age: 24,
    sex: "Female",
   
  },
  
  {
    image: <div> <img src = {Pik10} className = "Passport" /> </div>,
    name: "Tola",
    age: 30,
    sex: "Female",
    
  },

]
return (
 <div className='Cardholder'>
   {lsetf.map((props) => (
     <div className='Card'>
       <div className='Picture'> {props.image}</div>
       <div>Name:{props.name} </div>
       <div>Age: {props.age} </div>
       <div>Sex:{props.sex} </div>
       
   
     </div>


   ))}

 </div>

 )
 
}
export default App;

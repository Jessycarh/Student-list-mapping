import React from "react"; 
import './App.css';

function App() {
 
const lsetf = [
  {
    name: "Biola",
    age: 15,
    sex: "Female"
  },

  {
    name:"Victor",
    age: 25,
    sex: "Male"
  },

  {
    name: "James",
    age: 40,
    sex: "Male"

  },

  {
    name: "Wura",
    age: 20,
    sex: "Female"
  },

  {
    name: "Akeem",
    age: 40,
    sex: "Male"
  },

  {
    name: "Yemisi",
    age: 22,
    sex: "Female"

  },
  
  {
    name: "Grace",
    age: 26,
    sex: "Female"
  },

  {
    name: "Chibuike",
    age: 18,
    sex: "Male"
  },

  {
    name: "Sophia",
    age: 24,
    sex: "Female"

  },
  
  {
    name: "Tola",
    age: 30,
    sex: "Female"
  },

]
return (
 <div className='Cardholder'>
   {lsetf.maps((props) => (
     <div className='Card'>
       <div>Name:{props.name} </div>
       <div>Age: {props.age} </div>
       <div>Sex:{props.sex} </div>
   
     </div>


   ))}

 </div>

 )
 
}
export default App;

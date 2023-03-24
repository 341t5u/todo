/*import React from 'react';
import ReactDOM from 'react-dom/client';
class Mine extends React.Component{
  constructor(props){
  super(props);
  this.state={
  Name:"Havana",
  Gender:"Female", 
  Age:24
};
  };
  changeName=() =>{ this.setState({Name:"Erbeqa"})};
render(){
  return(
    <div>
      <h1>My form {this.state.Name}</h1>
      <p>
        <li>Hi i am {this.state.Name};</li>
        <li>{this.state.Gender}</li>
        <li>{this.state.Age}</li>

      </p>
      <button type ="button" onClick={this.changeName}>Change Name</button>
    </div>
  );
};
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Mine/> );
import React from 'react'
import  ReactDOM  from 'react-dom/client';
function Sa(){
  console.log(React);
  return <h1> cheak all Hooks listining in </h1>;

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sa/>);*/
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
function Polo(){
  const [Name,setName]=useState("FIFO");
  return (
    <>
  <h1>Hi {Name}</h1>
  <button type ="button" onClick={()=>setName("Dan")}>Change Me</button>
  </>)
  };
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Polo/>);

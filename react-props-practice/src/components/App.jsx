import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
  return (
  <Card 
  key= {contact.id}
  name= {contact.name}
  imgURL= {contact.imgURL}
  tel= {contact.phone}
  email= {contact.email}
  />
  );
}

function App() {
  return (
    <div>
    <h1 className="heading">My Contacts</h1>

    <Avatar img="https://media-exp1.licdn.com/dms/image/C4D03AQEeXxtNaUFH7A/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=HyD99nredij4XYV6WFSWt0l5FEVMBPwrWVw4l1Cgmeo" />

    {contacts.map(createCard)}

    {/* <Card name={contacts[0].name} 
    imgURL={contacts[0].imgURL} 
    phone={contacts[0].phone} 
    email={contacts[0].email}/>

    <Card name={contacts[1].name} 
    imgURL={contacts[1].imgURL} 
    phone={contacts[1].phone} 
    email={contacts[1].email}/>

    <Card name={contacts[2].name} 
    imgURL={contacts[2].imgURL} 
    phone={contacts[2].phone} 
    email={contacts[2].email}/> */}
    </div>
  )
};

export default App;

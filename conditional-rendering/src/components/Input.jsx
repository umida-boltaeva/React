import React from "react";
import { createPropertySignature } from "typescript";

function Input(props){
    return (
    <div>
    <input autoComplete="none" type={props.type} placeholder={props.placeholder} />
   
    </div>
    );
}

export default Input;
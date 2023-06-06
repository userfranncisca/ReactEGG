import {useState} from "react";


export const useUserForm = ( initialState = {} ) =>{


  const [form,Setform]= useState(initialState);

  const handleChanges = ({target})=>{
    
    const { name, value }= target;
    
    console.log("target ", target);
     console.log("name ", name);
     console.log("value ", value);





    Setform(
       
        {
           ...form,
           [name]:value,

        }
    )
    
    return {
        form,Setform,handleChanges,
    
    }
  }




}
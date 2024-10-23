import React, { createContext, useState } from 'react'

export  const addProjectResponseContext = createContext()
export const editprojectResponseContext= createContext();
function ContextShare({children}) {
    //create a state that need to be share;
    const [addProjectResponse,setAddProjectResponse]=useState({});
    const [editprojectReaponse,setEditprojectResponse]=useState({});
  return (
    <>
    <addProjectResponseContext.Provider value={{addProjectResponse,setAddProjectResponse}}>
      <editprojectResponseContext.Provider  value={{editprojectReaponse,setEditprojectResponse}}>
      {children}
      </editprojectResponseContext.Provider>
             
    </addProjectResponseContext.Provider>
    
    
    
    
    
    </>
  )
}

export default ContextShare
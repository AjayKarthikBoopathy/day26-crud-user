import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Base = ({children}) => {
    const history = useHistory();
    
    return (
        <div className='main-component base-component'>
  
            <div className="heading-lists">
                <div>
                <h3>Student Website</h3>
                </div>
                <div>
                <button className="list-button"
                onClick={()=>history.push("/")}
                ><h4>Goto List</h4></button>
                </div>
            </div>
  
        

            <main className='main-segment'>
               
               <div>
                 {children}
               </div>
           </main>

           
      </div>
    )
}

export default Base;
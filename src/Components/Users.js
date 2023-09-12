import React from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
//import data from './Data/data';

function Users({userdata,setUserdata}) {
    //const [userdata, setUserdata] = useState(data)
    console.log(userdata);
    //const [editIdx, setEditIdx] = useState();
    const history = useHistory()
    
    //delete 
    const deleteUser = (studId)=>{
        const remainingUsers = userdata.filter((stud, idx)=> idx !== studId)
        setUserdata(remainingUsers)
    }

    return (
        <Base>
        <div className="newuser">
        <button className="newuser-button"
        onClick={()=>history.push("/add")}
        >Click to add User</button></div>

        <div className="card-container">
            
            {userdata.map((stud, idx) => (
                <div className="card" key={idx}>
                        <div className="content">
                            <h3>{stud.name}</h3>
                            <p>{stud.batch}</p>
                            <p>{stud.gender}</p>
                            <p>{stud.qualification}</p>
                        </div>

                        <div className="control">
                            <button className="btn" onClick={()=>history.push(`/edit/${idx}`)}>edit</button> {" "}
                            <button className="btn" onClick={()=>deleteUser(idx)}>delete</button>
                        </div>
                        
                </div>
            ))}


        </div>
        </Base>
        
    );
}

export default Users;

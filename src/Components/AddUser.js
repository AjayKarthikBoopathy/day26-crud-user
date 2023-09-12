import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Base from "../Base/Base";


function AddUser({userdata,setUserdata}) {
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory()


    const createUser = () => {
        //creating object from input states
        const newUser = {
            name:name,
            batch:batch,
            gender,
            qualification
        }
        //console.log(newUser)
        setUserdata([...userdata, newUser])
        setName("")
        setBatch("")
        setGender("")
        setQualification("")
        history.push("/")
    }

    return (
        <Base>
        <div className="addentry">
            
            <input
            placeholder="Enter Name"
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input
            placeholder="Enter Batch"
            type="text"
            value={batch}
            onChange={(e)=>setBatch(e.target.value)}
            />
            <input
            placeholder="Enter Gender"
            type="text"
            value={gender}
            onChange={(e)=>setGender(e.target.value)}
            />
            <input
            placeholder="Enter Qualification"
            type="text"
            value={qualification}
            onChange={(e)=>setQualification(e.target.value)}
            />

            <button className="add-button"
            onClick={createUser}
            >Add new User</button>
        </div>
        </Base>
        
    );
}

export default AddUser
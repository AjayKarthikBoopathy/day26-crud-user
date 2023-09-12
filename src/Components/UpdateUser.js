import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import Base from "../Base/Base";

function UpdateUser({userdata, setUserdata}) {
    const {id} = useParams();
    const editUser = userdata[id]
    const history = useHistory()

    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

    useEffect(()=>{
        console.log(id)
        setName(editUser.name)
        setBatch(editUser.batch)
        setGender(editUser.gender)
        setQualification(editUser.qualification)
    }, [id])

    function updateUser() {
        const updatedObject = {
            name : name,
            batch : batch,
            gender : gender,
            qualification : qualification
        }
        console.log(updatedObject)
        userdata[id] = updatedObject
        setUserdata([...userdata])
        history.push("/")
    }
    return (
        <Base>
        <div className="editentry">
            
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

            <button className="edit-button"
            onClick={updateUser}
            >Update User</button>
        </div>
        </Base>
        
    );
}

export default UpdateUser
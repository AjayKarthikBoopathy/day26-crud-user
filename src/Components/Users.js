import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from 'react';
import React, { useState } from 'react';
import LoadingComp from "./LoadingComp";
import EachComp from "./EachComp";

const listUser = "";
const endpoint = "";


function Users() {

    const [product1, setProduct1] = useState("tv");
    const [product, setProduct] = useState([]);
    console.log(product);

    const handleChange2 = (event) => {
        //endpoint=event.target.value;
        setProduct1(event.target.value)
    };


  
    useEffect(()=>{
      const getProducts = async () =>{
          //const response = await fetch("http://localhost:9001/products?q=mobile", {
          const response = await fetch(`https://webscrape-bctl.onrender.com/products?q=${product1}`); 
          const data = await response.json();
          if(data){
            setProduct(data);
            console.log(product);
          }
      }
      getProducts();
    }, [product1])




    
    console.log(product);
    
    const history = useHistory()
   
    return (
        <Base>
        <div className="newuser">
            <div>
                <h3>Check your product price here...</h3>
            </div>
        {/* <button className="newuser-button"
        
        >Click</button> */}
        </div>

                {/* <Box>
                <FormControl sx={{ m: 1, minWidth: 110 }} size="small">
                    <InputLabel id="demo-select-small-label">Product</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={listUser}
                        label="Product"
                        onChange={handleChange2}
                    >
                        <MenuItem value={"mobile"}>Mobile</MenuItem>
                        <MenuItem value={"tv"}>TV</MenuItem>
                        
                    </Select>
                </FormControl>
                </Box> */}


   {/* <div>
     <label>
       Choose your Item
       <select value={listUser} onChange={handleChange2}>
         <option value="mobile">Mobile</option>
         <option value="tv">TV</option>
         <option value="laptop">Laptop</option>
       </select>
     </label>   */}
     {/* <p>We eat {value}!</p> */}
   {/*</div> */}


        <div className='value-area'>
            <div style={{ paddingTop: "4.5px"}}>
              <label><strong>Choose your Item</strong></label>
            </div>

            <div>
              <select name='country' className='inputss' style={{ width: "190px", height: "40px" }} onChange={(e) => handleChange2(e)}>
                <option value=""> --Select Item--</option>
                <option value="mobile">Mobile</option>
                <option value="tv">TV</option>
                {/* <option value="laptop">Laptop</option>   */}
              </select> 
            </div>
            
        </div>


        <div className="card-container">
            
            { product.length==0? <LoadingComp /> : <EachComp product={product} setProduct={setProduct} /> }

        </div>
        </Base>
        
    );
}

export default Users;


export {endpoint}

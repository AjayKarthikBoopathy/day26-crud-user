import { useHistory } from "react-router-dom";
import Base from "../Base/Base";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from 'react';
import React, { useState } from 'react';

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

                <Box>
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
                </Box>

        <div className="card-container">
            
            {product.map((prod, idx) => (
                <div className="card" key={idx}>
                        <div className="content">
                            
                            <h3 className="prodname">{prod.productName}</h3>
                            
                            <div>
                            <img src={prod.imageUrl} className="img" alt="Image not available" />
                            </div>

                            <p className="rate">{prod.price}</p>

                            <div className="longtexts">
                            <a href={prod.productLink}  target="_blank">{prod.productLink}</a>
                            
                            </div>
                        </div>

                        
                </div>
            ))}


        </div>
        </Base>
        
    );
}

export default Users;


export {endpoint}

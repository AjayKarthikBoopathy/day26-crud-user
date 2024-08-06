import React from 'react'

const EachComp = ({ product, setProduct }) => {
  return (
    <>
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
            )) }
    </>
  )
}

export default EachComp

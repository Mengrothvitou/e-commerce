
import React, { useState } from 'react';




export async function getStaticProps() {
  const user = await fetch('http://localhost:8000/api/users')
  const product = await fetch('http://localhost:8000/api/products')
  const userdata = await user.json()
  const productdata = await product.json()
  return {
    
    props: {userdata, productdata },
  }
}

export default function admin({ userdata , productdata }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>users</h1>
      {
        userdata.map((user,index) => {
          return (
            <div>
              <h3 key={user._id} style={{ textAlign: "center" }}>{user.name} {user.email} {user.phone_number} {user.gender} {user._id}</h3>
            </div>
          )
          })
      }
      <h1 style={{ textAlign: "center" }}>products</h1>
      {
        productdata.map((product,index) => {
          return (
            <div>
              <h3 key={product._id} style={{ textAlign: "center" }}>{product.name} {product._id}</h3>
            </div>
          )
          })
      }
    </div>
  );
}

import React, { useState } from 'react';
import UserCard from '../components/presentations/UserCard'
import Grid from '@material-ui/core/Grid';


export async function getStaticProps() {
  const user = await fetch('http://localhost:8000/api/users')
  const userdata = await user.json()
  return {
    
    props: {userdata },
  }
}

export default function admin({ userdata  }) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Users</h1>
      <Grid container justify="center" spacing={3}>
          {
            userdata.map((user,index) => {
              return (
                // <div>
                //   <h3 key={user._id} style={{ textAlign: "center" }}>{user.username} {user.email} {user.phoneNumber} {user.gender} {user._id}</h3>
                // </div>
                <Grid item xs={10} sm={5} md={3} style={{marginTop: 15,marginBottom: 10,}}>
                  <UserCard 
                    avatar={user.avatar}
                    username={user.user}
                    gender={user.gender}
                    phoneNumber={user.phoneNumber}
                    email={user.email}
                    password={user.password}
                  
                  />
                </Grid>
              )
              })
          }
      </Grid>
      
      {/* <h1 style={{ textAlign: "center" }}>Products</h1>
      {
        productdata.map((product,index) => {
          return (
            <div>
              <h3 key={product._id} style={{ textAlign: "center" }}>{product.name} {product.id} {product.price} {product.type} {product.desc}</h3>
            </div>
          )
          })
      } */}
    </div>
  );
}
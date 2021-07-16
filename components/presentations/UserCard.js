import React from 'react'


const UserCard = ({userName,password,avatar,phoneNumber,email,gender}) => {
    return ( 
        <div style={{height: 500,}}>
            <form style={{border: 1, borderColor: 'red'}}>  
                <img style={{
                    width: 75,
                    height: 75,
                    alt:"üser",
                    display: 'rounded',
                }} src={avatar} alt="user-avatar"/>
                <label>Username: </label>
                <input type="text" value={userName}></input><br/>
                <label>Gender: </label>
                <input type="text" value={gender}></input><br/>
                <label>PhoneNumber: </label>
                <input type="number" value={phoneNumber}></input><br/>
                <label>Email: </label>
                <input type="email" value={email}></input><br/>
                <label>Password: </label>
                <input type="password" value={password}></input><br/>




            </form>
        </div>
     );
}
 
export default UserCard;
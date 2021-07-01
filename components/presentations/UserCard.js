import React from 'react';

const UserCard = ({username,id,gender,phoneNumber,email}) => {
    return ( 
        <div>
            <form style={{
                maxWidth: 300,
                height: 300,
                float: "left",
                border: 1,
                borderColor: "black",

            }}>
                <label>Username:</label>
                <input type="text" value={username}></input>
                <label>User ID:</label>
                <input type="text" value={id}></input>
                <label>Gender:</label>
                <input type="text" value={gender}></input>
                <label>Phone Number:</label>
                <input type="Number" value={phoneNumber}></input>
                <label>Email:</label>
                <input type="email" value={email}></input>
            </form>
        </div>
     );
}
 
export default UserCard;
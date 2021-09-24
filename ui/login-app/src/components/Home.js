import axios from 'axios';
import React,{useEffect,useState} from 'react';

function Home () {

    const [user, setUsers] = useState([]);

    // fetching user data via GET request to the backend
    const getUsers = () =>{
        axios.get('http://localhost/backend/UserInfo.php')
        .then ((response) =>{
            console.log(response);
            const myRepo=response.data;
            setUsers(myRepo);
        });
    };


    useEffect(()=>getUsers(),[]);
    return ( 

        <div>
            <table>
                <tbody>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                    {user.map((users =>{
                        return(
                            <tr key={users.id}>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.username}</td>
                                <td>{users.email}</td>
                            </tr>
                        );
                    }))}
                </tbody>
            </table>
        </div>
    )
}

export default Home ;
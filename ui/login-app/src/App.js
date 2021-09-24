import React, {useState} from 'react';
import Home from './components/Home';
import LoginForm from './components/LoginForm'
import axios from 'axios';
import './App.css';

function App() {

  const[user,setUser]=useState({email:"", password: ""});
  const[logged,setLogged]=useState(false);

  const Login = async (details) =>{
    console.log(details)

    //integrating this service to fetch HTTP response by POST request to the backend
    const url = "http://localhost/backend/Login.php";
    const response = await axios.post(url,{
      email:details.email,
      password: details.password
    })

    const data = response.data;

    //if there is a response
    if(!Object.keys(data).length==0){

      setUser({
        email:details.email,
        password:details.password
      });
      setLogged(true);
      alert("Login successful!! You have logged in.....")
    }

    else{
      alert("Invalid Credentials entered! Please try again....")
    }
  }


  //function to set logged state false
  const Logout = () =>{
    console.log("Logged out")
    setLogged(false);
    alert("You have Logged out!!!...")
  }

  return (
    <div className="App">
      {/* if user is in logged state Home will be rendered, other wise directed to Login Form */}
      {(logged) ? (
        <div >
          <h2 style={{marginTop :'10%'}}><span>Welcome {user.email}</span></h2>
          <Home/>
          <button style={{width:'280px', background:'red', color:'white', margin:'20px'}} onClick={Logout}>LOGOUT</button>
        </div>
      ) : (
        <LoginForm Login={Login}/>
      )
      }
    </div>
  );
}

export default App;

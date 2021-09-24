import React,{useState} from "react";


function LoginForm({Login}) {

    const [details,setDetails]=useState({email:"", password:""});

    // Handling Login submit form
    const submitHandler = e =>{

        e.preventDefault();
        Login(details);

    }

    return ( 
        <div className="Container" style={{margin :'10%'}}>
            <h1>Login</h1>
            <form  onSubmit={submitHandler} noValidate>
            <div className="Row">
                 <div className="col-md-12 form-group">
                    <input style={{width:'300px'}} name="email" type="email" required placeholder="Enter your email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 form-group">
                    <input style={{width:'300px'}} name="password" type="password" required placeholder="Enter your password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}  />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 form-group">
                    <button style={{width:'280px', background:'green', color:'white', margin:'20px'}} type="submit">Login</button>
                </div>
            </div>
            </form>
        </div>


     );
}

export default LoginForm;
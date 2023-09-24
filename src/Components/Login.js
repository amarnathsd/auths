import React,{useState} from "react";
// import axios from "axios";
import auth from "../utils/auth";

const Login = ({setToken}) => {
   
    const [user,setUser] = useState({email:"",password:""});
    const [error,setError] = useState("");
    const [success,setSuccess] = useState("");
    

    const {email,password} = user;

    async function implementSignup(e){
        e.preventDefault();

        if(!email || !password){
            setError("Please fill all the fields");
            setSuccess("")
            return
        }

        // api call
        try{
            //  const response =  await axios.post("https://instagram-express-app.vercel.app/api/auth/login",
            const response =  await auth.post("/login",
             {email:email, password:password})
            //  console.log(response.data) 
                setSuccess(response.data.message)
                setToken(response.data.data.token)
                setError("")
                //save token to local storage:
                localStorage.setItem("token",response.data.data.token)
        }

        catch(err){
            console.log(err)
            console.log(err.response)
            console.log(err.response.data)
            console.log(err.response.data.message)
            setError(err.response.data.message)
            setSuccess("")

        }
        
    }


    return(
        <div>

            {
                error && <h3>{error}</h3>
            }
            {
                success && <h3>{success}</h3>
            }

            <form className="signup-form" onSubmit={implementSignup}>
                
               
                <input type="email" placeholder="Enter ur Email" 
                onChange={(e)=>setUser({...user,email:e.target.value})}
                />
                <input type="password" placeholder="Enter ur Password" 
                onChange={(e)=>setUser({...user,password:e.target.value})}
                />
               
                <button type="submit">Login</button>

            </form>
        </div>
    )
}

export default Login;




// response.data = {
//     "success": true,
//     "message": "User saved successfully",
//     "data": {
//         "name": "Abhishek",
//         "email": "theabhishek.srmajgfii@gmail.com",
//         "password": "$2b$10$bfXCnHKn3y5YCnYJIs70CeY7LhdwA3GEAMq4PMwhB9vgotOW00yDS",
//         "_id": "650b0bd8f6a2cbf85be33db1",
//         "createdAt": "2023-09-20T15:12:24.164Z",
//         "updatedAt": "2023-09-20T15:12:24.187Z",
//         "__v": 0,
//         "token": "89e2ea38-2685-4b35-b710-c687632e5d60"
// }}

// response.data.data.name


// function sumOf2(){}



// sumOf2(10,20)
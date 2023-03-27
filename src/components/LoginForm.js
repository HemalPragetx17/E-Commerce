import React, {useState} from "react";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { toggleLogin } from "../store/slices/loginSlice";
import { toggleSignup } from "../store/slices/signupSlice";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";


const LoginForm = () => {

    const dispatch = useDispatch();

    const handleCloseLogin = (close) => {
        dispatch(toggleLogin(close));
    };

    const handleOpenSignup = (open) => {
        dispatch(toggleSignup(open));
      };

    //   const navigate = useNavigate()

      const [value, setvalue] = useState({
        email: "",
        password: ""
      });

      const [error, seterror] = useState("");

      const handlesubmit = () => {
        if (value.email === "" || value.password === "") {
                  seterror("Please enter your email and password");
                  return;
        }
        seterror("")
               
        signInWithEmailAndPassword(auth, value.email, value.password)
        .then(async () => {
            // navigate("/home")
        })
        .catch((err) => {
            seterror(err.message)
        })
      }


    return (
        <>
            <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleCloseLogin(false)}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-4">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(e)=>setvalue((prev)=>({...prev, email:e.target.value}))}/>
                                </div>
                                <div className="mb-4">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setvalue((prev)=>({...prev, password:e.target.value}))}/>
                                </div>
                                <div>
                                    <b className="text-danger">{error}</b>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Login</button>
                            </form>
                        </div>
                        <div className="ms-3">
                            <div>
                                <p>Don't have an account? <span  data-bs-toggle="modal" data-bs-target="#staticBackdrop2" onClick={() => handleOpenSignup(true)} style={{color:"blue", textDecoration:"underline", cursor:"pointer"}}>Sign Up</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;






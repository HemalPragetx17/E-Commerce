import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSignup } from "../store/slices/signupSlice";
import { toggleLogin } from "../store/slices/loginSlice";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase";


const Signup = () => {

    const dispatch = useDispatch();

    const handleCloseSignup = (close) => {
        dispatch(toggleSignup(close));
    };

    const handleOpenLogin = (open) => {
        dispatch(toggleLogin(open));


        if (value.name === "" || value.email === "" || value.password === "") {
            seterror("Please enter your name, email and password");
            return;
        }
        seterror("")

        createUserWithEmailAndPassword(auth, value.email, value.password)
            .then(async () => {

            })
            .catch((err) => {
                seterror(err.message)
            })
    }


    const [value, setvalue] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, seterror] = useState("");


    return (
        <>
            <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-2" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Sign Up</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleCloseSignup(false)}></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-4">
                                    <input type="text" className="form-control" id="exampleInputName1" placeholder="User Name" onChange={(e) => setvalue((prev) => ({ ...prev, name: e.target.value }))} />
                                </div>
                                <div className="mb-4">
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" onChange={(e) => setvalue((prev) => ({ ...prev, email: e.target.value }))} />
                                </div>
                                <div className="mb-4">
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setvalue((prev) => ({ ...prev, password: e.target.value }))} />
                                </div>
                            </form>
                        </div>
                        <div>
                            <b className="text-danger">{error}</b>
                        </div>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" onClick={() => handleOpenLogin(true)}>Signup</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;






import React from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useFont } from "react-router-dom";


function Login() {
    let history = useHistory();
    return (
        <div className="container">
            <form onSubmit={(e) => login(e)}>
                <div class="form-group">
                    <label class="form-label"></label>

                </div>
                <div class="form-group">
                    <label class="form-label">Simple Login Page</label>

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="form-label">Email ID</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="form-group">
                    <label class="form-label"></label>

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="form-group">
                    <label class="form-label"></label>

                </div>
                <button type="submit" onClick={() => { history.push("/question"); }} class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

function login(e) {
    e.preventDefault();
    let request = {
        email: document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('exampleInputPassword1').value
    }
    axios.post('http://localhost:4000/login', request)
        .then(resp => {
            alert(resp.data.message);
        })
        .catch(err => {
            console.log(err);
        })
}

export default Login;

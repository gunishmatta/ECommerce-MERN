import React, { useState } from 'react';
import Base from '../core/Base';
import { Link } from 'react-router-dom';


const Signin = () => {

    const signInForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form>
    
                        <div className="form-group">
                            <label className="text-light">
                                Email
                        </label>
                            <input type="text" className="form-control" />
                        </div>
    
                        <div className="form-group">
                            <label className="text-light">
                                Password
                        </label>
                            <input type="password" className="form-control" />
                        </div>
                    <button className="btn btn-success btn-block">Login</button>
                    </form>
                </div>
            </div>
        )
    }
    
    return (
        <Base title="Sign in Page" description="Page for user to signin">
       <h1> Signin Works</h1>
{signInForm()}
        </Base>
    )
}

export default Signin;

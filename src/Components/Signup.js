import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useState } from "react";
import User from "../api/User";


function Signup() {




  const[Data ,setData]=  useState({
    username:"",
    name:"",
    number:"",
    password: '',
    confirm_password: '',
    email: '',
    })


    const handleInputs = (e) => {
        let valueattr = e.target.value;
        let nameattr = e.target.name;
        setData({ ...Data, [nameattr]: valueattr });
        console.table(Data);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const main = new User();
        console.log("main", main);
        const response = main.login(Data);
        response.then((res) => {
            console.log(res);
            toast.success(res.data.msg)
        }).catch((err) => {
            const error = err.errors;
            toast.error(error)
            console.log(error);
        });
    };


    return (
        <section id="signup">
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className="flex container">
                            <img src="logo192.png" alt="eee" className="mt-2 mb-2" />
                            <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                        </div>
                        <form>
                            <div>
                                <label>Full Name</label>
                                <input type="text"
                                onChange={handleInputs}
                                defaultValue={User.name}
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="name"
                                     placeholder="Full Name" />
                            </div>
                            <div>
                                <label>User Name</label>
                                <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="username" 
                                    onChange={handleInputs}
                                    defaultValue={User.username}
                                    placeholder="UserName" />
                            </div>
                            <div>
                                <label>Mobile Number</label>
                                <input type="number" 
                                onChange={handleInputs}
                                defaultValue={User.number}class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="number" placeholder="mobile" />
                            </div>
                            <div>
                                <label>
                                    Email
                                </label>
                                <input
                                    type="text"
                                    onChange={handleInputs}
                                    defaultValue={User.email}
                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email" />
                            </div>
                            <div>
                                <label>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    onChange={handleInputs}
                                    defaultValue={User.password}
                                    placeholder=" Password" />
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="confirm_password"
                                    onChange={handleInputs}
                                    defaultValue={User.confirm_password}
                                    placeholder="Confirm Password" />
                            </div>
                            <div class="text-center text-sm text-grey-dark mt-4 mb-3 mr-2">
                                <input type="checkbox" className="mr-1" />
                                By signing up, you agree to the
                                Terms of Service
                                and
                                Privacy Policy

                            </div>
                            <button
                                type="submit"
                                onClick={handleFormSubmit}
                                class="w-full text-center py-3 rounded  focus:outline-none my-1"
                            >Create Account</button>
                        </form>
                        <Toaster  position="top-center" reverseOrder={false} />
                        <div className="text-black mt-2  text-center">
                            Already have an account?
                            <Link class="no-underline border-b border-blue text-blue"
                                to="/">
                                Log in
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;


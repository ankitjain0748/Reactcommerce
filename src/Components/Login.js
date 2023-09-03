import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import User from "../api/User";

function Login() {

    const [data, setdata] = useState({
        username: "",
        password: "",
        email: ''
    })

    const navigate = useNavigate();

    const handleInputs = (e) => {
        let valueattr = e.target.value;
        let nameattr = e.target.name;
        setdata({ ...data, [nameattr]: valueattr });
        console.table(data);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const main = new User();
        console.log("main", main);
        const response = main.login(data);
        response.then((res) => {
            console.log(res);
            if (res.data) {
                if (res.data.role === "0") {
                    navigate('/')
                }
                else {
                    navigate('/forget')
                }
            }
            toast.success(res.data.msg)
        }).catch((err) => {
            const error = err.errors;
            toast.error(err)
            console.log(error);
        });
    };


    return (
        <section id="signup">
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className="flex container">
                            <img src="logo192.png" alt="img" className="mt-2 mb-2" />
                            <h1 className="mb-8 text-3xl text-center">Login </h1>
                        </div>
                        <form>

                            <div>
                                <label>User Name</label>
                                <input type="text"
                                    onChange={handleInputs}
                                    defaultValue={User.username}
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="username" placeholder="UserName" />
                            </div>
                            <div>
                                <label>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    onChange={handleInputs}
                                    defaultValue={User.email}
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="email"
                                    placeholder="Email" />
                            </div>
                            <div>
                                <label>
                                    Password
                                </label>
                                <input

                                    onChange={handleInputs}
                                    defaultValue={User.password}
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder=" Password" />
                            </div>
                            <button
                                type="submit"
                                onClick={handleFormSubmit}
                                className="w-full text-center py-3 rounded  focus:outline-none my-1"
                            >Login</button>
                        </form>



                        <div className="mr-2 ml-2  text-center container">
                            <div className="text-black bg-blue">
                                Do not any account please SignUp?
                                <Link className="no-underline border-b border-blue  bg-blue text-black"
                                    to="/signup">
                                    SignUp
                                </Link>
                            </div>
                            <div className="test-blue">
                                <Link to='/forget'>
                                    Forget PassWord
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
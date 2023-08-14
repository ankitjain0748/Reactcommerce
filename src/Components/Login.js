import { Link } from "react-router-dom";

function Login() {
    return (
        <section id="signup">
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className="flex container">
                            <img src="logo192.png" alt ="img" className="mt-2 mb-2" />
                            <h1 class="mb-8 text-3xl text-center">Login </h1>
                        </div>
                        <form>

                            <div>
                                <label>User Name</label>
                                <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname" placeholder="UserName" />
                            </div>
                            <div>
                                <label>
                                    Email
                                </label>
                                <input
                                    type="text"
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
                                    name="confirm_password"
                                    placeholder=" Password" />
                            </div>
                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded  focus:outline-none my-1"
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
                                    <Link to ='/forget'>
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
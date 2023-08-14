import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Signup() {
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
                                <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname" placeholder="Full Name" />
                            </div>
                            <div>
                                <label>User Name</label>
                                <input type="text" class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="fullname" placeholder="UserName" />
                            </div>
                            <div>
                                <label>Mobile Number</label>
                                <input type="number" class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="mobile" placeholder="mobile" />
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
                            <div>
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    class="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="confirm_password"
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


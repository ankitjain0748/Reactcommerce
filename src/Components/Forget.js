function Forget() {
    return (  
        <>
         <section id="signup">
            <div class="bg-grey-lighter min-h-screen flex flex-col">
                <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <div className="flex container">
                            <img src="logo192.png" alt ="img" className="mt-2 mb-2" />
                            <h1 class="mb-8 text-3xl text-center">Forget Password</h1>
                        </div>
                        <form>
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
                          
                           
                            <button
                                type="submit"
                                class="w-full text-center py-3 rounded  focus:outline-none my-1"
                            > Forget Password</button>
                        </form>

                     

                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Forget;
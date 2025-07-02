import { useState } from "react";
import Header from "./Header";

function Login() {
  const [isSignInForm, setisSignInForm] = useState(true);

  const handleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
        />
      </div>

      <div className="bg-black/60">
        <form className="relative w-4/12  bg-black/80 top-30 left-[550px] px-18 py-12">
          <h1 className="text-white text-4xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-black/70 text-gray-200 h-12 rounded-md p-2 mt-3 w-full"
            />
          )}

          <input
            type="email"
            placeholder="email address"
            className="bg-black/70 text-gray-200 h-12 rounded-md p-2 mt-3 w-full"
          />
          <input
            type="password"
            placeholder="password"
            className="bg-black/70 text-gray-200 h-12 rounded-md p-2 mt-3 w-full"
          />
          <button className="p-3 mt-5 rounded-md  bg-red-500 w-full text-white text-m font-bold cursor-pointer">
            Sign in
          </button>
          <h1 className="text-white z-1">Forgot password?</h1>
          <br />
          <p className="text-gray-300 z-1 text-center cursor-pointer">
            New to netflix?
            <span className="font-bold text-white" onClick={handleSignInForm}>
              Sign up now
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

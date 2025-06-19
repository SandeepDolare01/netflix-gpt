import Header from "./Components/Header";
import "./index.css";

function Body() {
  return (
    <div className="">
      <Header />
      <div className="">
        <img
          className="w-full h-[100vh] object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7968847f-3da9-44b3-8bbb-13a46579881f/web/IN-en-20250609-TRIFECTA-perspective_32b70b51-20d4-46db-8a1a-3d5428be5f0e_large.jpg"
        />
      </div>
      <div className="absolute top-0 w-full h-full text-center bg-black/70 ">
        <h1 className="pt-[200px] text-white text-5xl font-bold p-4">
          Unlimited movies, TV shows <br />
          and more
        </h1>
        <p className="text-white text-xl font-bold p-4">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-white text-xl p-4">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center items-center ">
          <div className="h-13">
            <input
              className="w-[366px] bg-black/50 p-4 text-gray-200 border-1 border-white/50"
              type="email"
              placeholder="Email address"
            />
          </div>
          <div>
            <button className=" bg-red-500 h-15 w-50 ml-3 text-3xl font-medium rounded-sm text-white ">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div>
        <img src="https://occ-0-3216-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYUCgDPIk4LvnEw_j-dC5ca65oxm4yP2Z7RFKlRcN6WYzCwNA4MhTNqTRrSAK9zND3cSjrYEpbQculmTCXPD09ZbvdCosdbuOjc.webp?r=062&quot" />
      </div>
    </div>
  );
}

export default Body;

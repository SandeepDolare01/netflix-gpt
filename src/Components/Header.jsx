// import { useNavigate } from "react-router-dom";

function Header() {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate("/login");
  //   };

  return (
    <div className="absolute z-10 bg-gradient-to-b from-black w-full">
      <div className="flex justify-between pl-35  ">
        <div className="w-50">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </div>
        <div className="pt-6 pr-40">
          <button className="rounded-sm h-8 w-20 bg-red-500 text-white font-bold text-s cursor-pointer">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

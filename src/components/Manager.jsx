import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Manager = () => {
  const [showPassword, setShowPassword] = useState();

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
      <div className="mycontainer">
        <div className=" text-4xl font-bold text-center">
          <span className="text-purple-500 ">&lt;</span>
          Password
          <span className="text-purple-600">Manager/&gt;</span>
          <p className="text-purple-700 text-xl"> Your own Password Manager</p>
        </div>
        <div className="flex flex-col pt-4 gap-4 items-center">
          <input
            type="text"
            className="rounded-lg border w-full border-purple-600 text-black p-4 py-1 "
            name=""
            placeholder="Enter Website URL"
            id=""
          />
          <div className="flex gap-8 w-full justify-between">
            <input
              type="text"
              className="border border-purple-600 rounded-lg w-full p-4 py-1"
              name=""
              placeholder="Enter User Name"
              id=""
            />
            <div className="relative">
              <input
                type="text"
                className="border border-purple-600 rounded-lg w-full p-4 py-1"
                name=""
                id=""
                placeholder="Enter Password"
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          <button className="border border-purple-800 bg-purple-400 hover:bg-purple-500 w-fit rounded-full font-semibold px-8 py-1 flex items-center gap-2 justify-center ">
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;

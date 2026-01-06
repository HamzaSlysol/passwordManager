import { useState, useEffect } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let password = localStorage.getItem("password");
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const savePassword = () => {
    setPasswordArray([...passwordArray, form]);
    localStorage.setItem("password", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [visiblePassword, setVisiblePassword] = useState({});
  const togglePassword = (index) => {
    setVisiblePassword((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
            name="site"
            placeholder="Enter Website URL"
            id="site"
            value={form.site}
            onChange={handleChange}
          />
          <div className="flex gap-8 w-full justify-between">
            <input
              type="text"
              className="border border-purple-600 rounded-lg w-full p-4 py-1"
              name="username"
              placeholder="Enter User Name"
              id="username"
              value={form.username}
              onChange={handleChange}
            />
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="border border-purple-600 rounded-lg w-full p-4 py-1"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="border border-purple-800 bg-purple-400 hover:bg-purple-500 w-fit rounded-full font-semibold px-8 py-1 flex items-center gap-2 justify-center "
          >
            <lord-icon
              src="https://cdn.lordicon.com/efxgwrkc.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div>
          <h2 className="py-4 text-2xl font-bold text-purple-700">
            Your Passwords
          </h2>
          {passwordArray.length === 0 && (
            <p className="font-semibold text-center text-2xl text-red-600">
              No passwords saved yet.
            </p>
          )}
          {passwordArray.length !== 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className=" bg-purple-800 text-white">
                <tr>
                  <th>Site</th>
                  <th>User Name</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody className="bg-purple-200 font-semibold">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className=" py-3 border border-white text-center">
                        <a
                          href={item.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.site}
                        </a>
                      </td>
                      <td className=" py-3 border border-white text-center">
                        {item.username}
                      </td>
                      <td className="py-3 border border-white text-center relative">
                        {visiblePassword[index] ? item.password : "•••••"}
                        <div className="absolute right-2 top-4">
                          <span
                            className="relative cursor-pointer"
                            onClick={() => togglePassword(index)}
                          >
                            {visiblePassword[index] ? <FiEyeOff /> : <FiEye />}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;

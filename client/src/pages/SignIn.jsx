import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

export default function SignIn() {
  const [formdata, setFormdata] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlechange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        // setLoading(false);
        // setError(data.message);
        dispatch(signInFailure(data.message));
        return;
      }
      // setLoading(false);
      // setError(null);
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };
  console.log(formdata);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* <input
          type="text"
          placeholder="username"
          className="p-3 border rounded-lg"
          id="username"
          onChange={handlechange}
        /> */}
        <input
          type="text"
          placeholder="email"
          className="p-3 border rounded-lg"
          id="email"
          onChange={handlechange}
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 border rounded-lg"
          id="password"
          onChange={handlechange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85">
          sign in
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p> Dont Have an Account</p>
        <Link to={"/signup"}>
          <span className="text-blue-800">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-700 mt-5">{error}</p>}
    </div>
  );
}

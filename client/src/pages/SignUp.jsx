import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="p-3 border rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="p-3 border rounded-lg"
          id="username"
        />
        <input
          type="text"
          placeholder="password"
          className="p-3 border rounded-lg"
          id="username"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85">
          sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an Account</p>
        <Link to={"/signIn"}>
          <span className="text-blue-800">Sign In</span>
        </Link>
      </div>
    </div>
  );
}

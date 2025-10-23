import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="w-full max-w-sm p-8 bg-base-100 rounded-2xl shadow-lg border border-base-300">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-200">
          Login
        </h2>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="label mb-1">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label mb-1">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full mt-2"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-neutral w-full mt-4"
          >
            Login
          </button>
        </form>

        {/* Optional Signup link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

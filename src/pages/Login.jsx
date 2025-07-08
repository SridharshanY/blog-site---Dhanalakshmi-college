const Login = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="mt-20 flex flex-col justify-center gap-4 items-center border-2 border-black rounded-xl p-6 w-2xl">
        <h1 className="text-4xl font-semibold">Login</h1>
        <input
          type="email"
          placeholder="Email ID"
          className="w-full px-4 py-2 border rounded-lg"
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg"
          name="password"
        />
        <button
          type="submit"
          className="text-red-600 bg-white w-full py-2 rounded-lg border border-red-600 hover:bg-red-600 hover:text-white transition 
          hover:cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

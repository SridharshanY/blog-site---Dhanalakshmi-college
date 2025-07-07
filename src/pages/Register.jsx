const Register = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="mt-20 flex flex-col justify-center gap-4 items-center border-2 border-black rounded-xl p-6 w-2xl">
        <h1 className="text-4xl font-semibold">Registration</h1>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg"
          name="name"
        />
        <div className="w-full">
          <span className="text-start">Date of Birth</span>
          <input
            type="date"
            placeholder=""
            className="w-full px-4 py-2 border rounded-lg"
            name="dob"
          />
        </div>
        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full px-4 py-2 border rounded-lg"
          name="phone"
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

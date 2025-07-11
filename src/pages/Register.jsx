import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await axios.post('http://localhost:3000/api/user/register', formData)
    alert(res.data.message)
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="mt-20 flex flex-col justify-center gap-4 items-center border-2 border-black rounded-xl p-6 w-2xl">
        <h1 className="text-4xl font-semibold">Registration</h1>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg"
          name="name"
        />
        <div className="w-full">
          <span className="text-start">Date of Birth</span>
          <input
            onChange={handleChange}
            type="date"
            placeholder=""
            className="w-full px-4 py-2 border rounded-lg"
            name="dob"
          />
        </div>
        <input
          onChange={handleChange}
          type="tel"
          placeholder="Mobile Number"
          className="w-full px-4 py-2 border rounded-lg"
          name="phone"
        />
        <input
          onChange={handleChange}
          type="email"
          placeholder="Email ID"
          className="w-full px-4 py-2 border rounded-lg"
          name="email"
        />
        <input
          onChange={handleChange}
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

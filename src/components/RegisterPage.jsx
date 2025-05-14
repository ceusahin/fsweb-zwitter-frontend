import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    biography: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    axios
      .post("http://localhost:9000/api/zwitter/auth/user/register", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setIsRegistered(true);
        console.log("Registration successful:", response.data);
      })
      .catch((error) => {
        console.error("Error during registration:", error.response);
      });

    setTimeout(() => {
      navigate("/main");
    }, 5000);
  };

  return (
    <div className="flex items-center justify-center gap-40 min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={formData.userName}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-xl"
          required
        />

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-xl"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-xl"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-xl"
          required
        />

        <textarea
          name="biography"
          placeholder="Biography"
          value={formData.biography}
          onChange={handleChange}
          className="w-full p-3 mb-3 border border-gray-300 rounded-xl"
        />

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-xl font-bold cursor-pointer hover:bg-gray-800"
        >
          Register
        </button>
      </form>
      {isRegistered && (
        <div className="mt-4 bg-gray-100 p-10 rounded-2xl shadow-lg">
          <p className="text-green-700 text-2xl ">Registration successful!</p>
          <p className="text-green-700 text-2xl mt-4">
            In 5 seconds, u will be redirected to the Zwitter page!
          </p>
          <div>
            <p className="mt-4 text-lg">
              <span className="text-green-700">Email: </span> {formData.email}
            </p>
            <p className="mt-4 text-lg">
              <span className="text-green-700">User Name: </span>
              {formData.userName}
            </p>
            <p className="mt-4 text-lg">
              <span className="text-green-700">Full Name: </span>
              {formData.fullName}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterPage;

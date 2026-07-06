import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const VALID_USER = {
  admin: "admin",
  standard_user: "secret_sauce",
  swatiAdmin: "123",
};

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (VALID_USER[username] === password) {
      Cookies.set("auth_token", btoa(username), {
        expires: 1,
        secure: false,
        sameSite: "Strict",
      });
      navigate("/inventory");
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded shadow w-80">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <input name="username" placeholder="Username" className="input" />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input mt-3"
        />
        <button className="w-full bg-green-500 text-white py-2 mt-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

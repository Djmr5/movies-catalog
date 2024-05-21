import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/constants";
import { useAppContext } from "../../store/app-context/useAppContext";
import { AuthError } from "firebase/auth";

interface UserRegister {
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();
  const [user, setUser] = useState<UserRegister>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    error && setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate(ROUTES.HOME);
    } catch (error: unknown) {
      const theError: AuthError = error as AuthError;
      setError(theError.message);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full mx-auto p-6 bg-white shadow rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && (
          <p className="text-red-500 mb-4 text-sm font-medium">{error}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email@test.com"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
          <Link
            to={ROUTES.REGISTER}
            className="block text-blue-500 mt-2 text-sm text-center hover:underline"
          >
            You don't have an account? Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;

import Background from "../components/ui/Background";
import Logo from "../components/layout/Logo";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import RememberRow from "../components/auth/RememberRow";
import AuthButton from "../components/auth/AuthButton";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContent } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log("check");
  // console.log(email);
  // console.log(password);

  const LoginHandler = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/login", {
        email,
        password,
      });
      if (data.success) {
        setIsLoggedin(true);
        getUserData();
        navigate("/");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Background>
      <div className="flex min-h-screen flex-col items-center justify-center gap-5">
        <Logo />

        <AuthCard title="Login">
          <div className="space-y-5">
            <AuthInput
              icon="mail"
              placeholder="Email"
              onChange={setEmail}
              value={email}
            />

            <AuthInput
              icon="lock"
              type="password"
              placeholder="Password"
              onChange={setPassword}
              value={password}
            />

            <RememberRow />

            <AuthButton onClick={LoginHandler}>Login</AuthButton>

            <p className="text-center text-sm text-white">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-[#27153D]">
                Register
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
    </Background>
  );
};

export default Login;

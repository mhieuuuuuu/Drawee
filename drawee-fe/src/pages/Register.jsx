import Background from "../components/ui/Background";
import Logo from "../components/layout/Logo";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import RememberRow from "../components/auth/RememberRow";
import AuthButton from "../components/auth/AuthButton";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useContext } from "react";
import { AppContent } from "../context/AppContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const RegisterHandler = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/register", {
        name,
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

        <AuthCard title="Register">
          <div className="space-y-5">
            <AuthInput
              icon="user"
              placeholder="Name"
              onChange={setName}
              value={name}
            />

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

            <AuthButton onClick={RegisterHandler}>Register</AuthButton>

            <p className="text-center text-sm text-white">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-[#27153D]">
                Login
              </Link>
            </p>
          </div>
        </AuthCard>
      </div>
    </Background>
  );
};

export default Register;

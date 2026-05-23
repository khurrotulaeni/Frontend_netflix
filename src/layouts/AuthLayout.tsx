import { useState } from "react";
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../components/organisms/RegisterForm";

export default function AuthLayout() {
  const [mode] = useState<"login" | "register">("login");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gray-950 text-white">

      {/* kiri */}
      <div className="flex flex-col items-center justify-center p-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          className="w-64 mb-6"
        />

        <h1 className="text-2xl font-semibold mb-3">
          Selamat Datang !
        </h1>

        <p className="text-center text-gray-400 max-w-sm">
          Nikmati hiburan tanpa batas dengan pengalaman streaming terbaik.
        </p>
      </div>

      {/* kanan */}
      <div className="flex items-center justify-center p-6">

        {mode === "login" ? (
          <LoginForm />
        ) : (
          <RegisterForm />
        )}
      </div>
    </div>
  );
}
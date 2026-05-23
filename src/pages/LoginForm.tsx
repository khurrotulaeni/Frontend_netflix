import { useForm } from "react-hook-form";
import { InputText } from "../components/atoms/InputText";
import { InputPassword } from "../components/atoms/InputPassword";
import { Button } from "../components/atoms/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

type FormData = {
    nim: string;
    password: string;
};

const schema = z.object({
    nim: z.string().min(1, "Nim Harus Diisi"),
    password: z.string().min(8, "Password Minimal 8 Karakter"),
});

// 2. Hapus parameter onSwitch karena navigasi sekarang diatur oleh router
export default function LoginForm() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Pastikan password yang kamu ketik saat testing adalah "admin123" (paling sedikit 8 karakter)
        if (data.nim === "24090086" && data.password === "admin123") {
            alert("Login Berhasil");

            login(data.nim);

            // Redirect ke halaman dashboard
            navigate("/dashboard");
        } else {
            alert("Nim atau password anda salah!");
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <div className="w-full max-w-lg bg-gray-900 p-10 rounded-xl shadow-lg">
                <h1 className="text-white text-2xl font-bold mb-6 text-center">
                    Login
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <InputText 
                        label="nim"
                        nama="nim"
                        register={register}
                        error={errors.nim?.message}
                    />

                    <InputPassword
                        label="Password"
                        nama="password"
                        register={register}
                        error={errors.password?.message}
                    />

                    <div>
                        <Button label="Login" variant="primary" />
                    </div>

                    <p className="text-sm text-center text-gray-400 mt-4">
                        Belum punya akun?{" "}
                        {/* 3. Ubah span menjadi Link router menuju path "/register" */}
                        <Link
                            to="/register"
                            className="text-red-500 font-medium hover:underline cursor-pointer"
                        >
                            Daftar
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
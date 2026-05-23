import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { InputText } from "../atoms/InputText";
import { InputPassword } from "../atoms/InputPassword";
import { Button } from "../atoms/Button";
import Select from "../atoms/Select";
import { TextArea } from "../atoms/Textarea";

import { zodResolver } from "@hookform/resolvers/zod";

import { registerSchema } from "../../schemas/registerSchema";
import type { RegisterType } from "../../schemas/registerSchema";

export default function RegisterForm() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterType>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = (data: RegisterType) => {
        console.log(data);

        alert("Register berhasil!");

        navigate("/login");
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-black">
            <div className="w-full max-w-lg min-height-[450px] bg-gray-900 p-10 rounded-xl shadow-lg">
                <h1 className="text-white text-2xl font-bold mb-6 text-center">
                    Sign Up
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    <InputText
                        label="Nama"
                        nama="name"
                        register={register}
                        error={errors.name?.message}
                    />

                    <InputText
                        label="Email"
                        nama="email"
                        register={register}
                        error={errors.email?.message}
                    />

                    <InputPassword
                        label="Password"
                        nama="password"
                        register={register}
                        error={errors.password?.message}
                    />

                    <InputPassword
                        label="Password Confirm"
                        nama="password_confirm"
                        register={register}
                        error={errors.password_confirm?.message}
                    />

                    <TextArea
                        label="Bio"
                        nama="bio"
                        register={register}
                        error={errors.bio?.message}
                        placeholder="Contoh: Movie lover dan suka film action"
                    />

                    <Select
                        label="Kategori"
                        nama="category"
                        register={register}
                        error={errors.category?.message}
                        options={[
                            { label: "Action", value: "action" },
                            { label: "Drama", value: "drama" },
                            { label: "Comedy", value: "comedy" },
                            { label: "Horror", value: "horror" },
                            { label: "Sci-Fi", value: "scifi" },
                        ]}
                    />

                    <div>
                        <Button label="Register" variant="primary" />
                    </div>

                    <p className="text-white text-sm text-center mt-4">
                        Sudah punya akun?{" "}
                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            className="text-red-500 hover:underline"
                        >
                            Login
                        </button>
                    </p>

                </form>
            </div>
        </div>
    );
}
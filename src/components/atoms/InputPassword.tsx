import { useState } from "react";

interface InputPasswordProps{
    label:string;
    nama:string;
    error?:string;
    register:any;
}

export const InputPassword: React.FC<InputPasswordProps> = ({
    label,
    nama,
    error,
    register,
}) => {

    const [show, setShow] = useState<boolean>(false);

    return(
        <div className="flex flex-col gap-1 mb-4">
            <label htmlFor={label} className="text-white text-sm">
        {label}
        </label>

        <div className="relative">
            <input
            type={ show ? "text" : "password"}
            {...register(nama)}
            placeholder={label}
            className="w-full p-2 bg-gray-800 text-white rounded"
        />
        <button type="button" onClick={() => setShow(!show)} 
            className=" text-white absolute right-2 top-2 text-sm">
            {show ? "hide" : "show"}
        </button>
        </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};
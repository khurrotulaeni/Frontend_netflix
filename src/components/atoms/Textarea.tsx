interface TextAreaProps {
  label: string;
  nama: string;
  register: any;
  error?: string;
  placeholder?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  nama,
  register,
  error,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-1 mb-4">

      {/* LABEL */}
      <label className="text-white text-sm">
        {label}
      </label>

      {/* TEXTAREA */}
      <textarea
        {...register(nama)}
        placeholder={placeholder || label}
        className="w-full p-3 bg-gray-800 text-white rounded h-24 resize-none outline-none focus:ring-2 focus:ring-red-600"
      />

      {/* ERROR */}
      {error && (
        <p className="text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};
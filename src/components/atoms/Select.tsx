type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  nama: string;
  register: any;
  error?: string;
  options: Option[];
};

export default function Select({
  label,
  nama,
  register,
  error,
  options,
}: Props) {
  return (
    <div className="w-full">

      <label className="text-white text-sm mb-1 block">
        {label}
      </label>

      <select
        {...register(nama)}
        className="w-full bg-gray-800 text-white p-3 rounded outline-none focus:ring-2 focus:ring-red-600"
      >
        <option value="">Pilih kategori</option>

        {options.map((opt, i) => (
          <option key={i} value={opt.value} className="text-black">
            {opt.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-red-500 text-xs mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
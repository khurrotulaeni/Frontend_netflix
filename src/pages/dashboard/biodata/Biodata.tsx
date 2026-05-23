export default function Biodata() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      
      <div className="w-full max-w-md rounded-2xl p-6 bg-zinc-900 border border-red-600 shadow-lg shadow-red-500/20">
        
        <h1 className="text-2xl font-bold text-center text-red-500 mb-6">
          Biodata Diri
        </h1>

        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full border-4 border-red-600 overflow-hidden shadow-md shadow-red-500/30">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1q762dwNZdoJH7QSyepZum8UGZCoiW5HxVg&s"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="space-y-4 text-gray-300">
          
          <div className="border-l-4 border-red-600 pl-3">
            <p className="text-xs text-gray-500">Nama</p>
            <p className="font-semibold text-white">Khurrotul Aeny</p>
          </div>

          <div className="border-l-4 border-red-600 pl-3">
            <p className="text-xs text-gray-500">Umur</p>
            <p className="font-semibold text-white">20 Tahun</p>
          </div>

          <div className="border-l-4 border-red-600 pl-3">
            <p className="text-xs text-gray-500">Alamat</p>
            <p className="font-semibold text-white">Jawa Tengah, Indonesia</p>
          </div>

          <div className="border-l-4 border-red-600 pl-3">
            <p className="text-xs text-gray-500">Email</p>
            <p className="font-semibold text-white">qurrotulaeni281@gmail.com</p>
          </div>

          <div className="border-l-4 border-red-600 pl-3">
            <p className="text-xs text-gray-500">Hobi</p>
            <p className="font-semibold text-white">
              Ngoding, Writing, Jualan Online
            </p>
          </div>
        </div>

        <button className="mt-6 w-full bg-red-600 text-white py-2 rounded-xl font-semibold hover:bg-red-700 transition shadow-md shadow-red-500/30">
          Hubungi Saya
        </button>

      </div>
    </div>
  );
}
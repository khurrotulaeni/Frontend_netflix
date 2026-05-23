export default function Studio() {
    const data = [
        {
            category:"Behind The Scenes",
            image: "https://i.ytimg.com/vi/QkDfwPhUJYc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA1vvyiqquPx4ltHYCfpmkiumTkOw"
        },
        {
            category:"Editing",
            image: "https://www.brandbeavers.com/wp-content/uploads/2025/07/Travel-Vloggers.jpg"
        },
        {
            category:"Content Creation",
            image: "https://i.ytimg.com/vi/JgouZ2cK3JU/maxresdefault.jpg"
        },
         {
            category:"Creative Process",
            image: "https://i.ytimg.com/vi/feHJzW6D47U/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBAC2Z5D0xkBkDpdt1-gfMgBd2z7Q"
        }
    ];

   const trending = [
    {
        title: "Behind The Viral TikTok Video",
        image: "https://asset.mediaindonesia.com/news/2025/05/11/1746973222_bad53d2ad1ac51416aa0.jpeg"
    },
    {
        title: "How We Shot a Brand Commercial",
        image: "https://i.ytimg.com/vi/nxyKLUwG1g4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCkl0G2Un_OlO8wrraEVenR_fI7oA"
    },
    {
        title: "How Creators Blow Up Overnight",
        image: "https://i.ytimg.com/vi/MjyRLiiOkOI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLASWPjt14mfWR6vQTt3NyiAGZZ1zw"
    },
    {
        title: "Daily Content Creator Routine",
        image: "https://i.ytimg.com/vi/_O2EsdfxIcU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA3PnLGQ52ZtyI_Z9cfiBpoPmcczg"
    },
    {
        title: "Color Grading Like a Pro",
        image: "https://i.ytimg.com/vi/0y9YCNncxd4/maxresdefault.jpg"
    }
];

    const categories = ["Behind The Scenes","Editing","Content Creation","Filmmaking","Creative Process"];

    return (
        <div className="bg-gray-950 min-h-screen text-white p-6">

            <div className="relative h-60 rounded-xl overflow-hidden mb-8">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                    alt="hero"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 .bg-gradient-to-r from-black via-black/70 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-center p-6 text-white z-10">
                    <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">
                        Studio Originals
                    </h1>

                    <p className="text-gray-300 mb-4 max-w-md drop-shadow">
                        Masuki dunia kreatif di balik layar. Lihat bagaimana ide berubah menjadi karya luar biasa!
                    </p>

                    <button className="bg-red-600 px-5 py-2 rounded-md w-fit hover:bg-red-500 transition shadow-lg shadow-red-600/30">
                       Jelajahi Studio
                    </button>
                </div>
            </div>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Cari creator, project, atau konten..."
                    className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
                />
            </div>

            <div className="flex gap-2 flex-wrap mb-6">
                {categories.map((cat, i) => (
                    <button
                        key={i}
                        className="px-3 py-1 bg-gray-800 hover:bg-red-600 rounded-full text-sm transition"
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
                <span>Featured Projects</span>
                <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                    Lihat Semua
                </span>
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-200px rounded-xl overflow-hidden relative group cursor-pointer 
                        hover:scale-105 transition duration-300 hover:shadow-lg hover:shadow-red-500/20"
                    >
                        <img
                            src={item.image}
                            className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 .bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                        <div className="absolute top-2 left-2 bg-black/70 text-xs px-2 py-1 rounded">
                            #{index + 1}
                        </div>

                        <div className="absolute top-2 right-2 bg-red-600 text-xs px-2 py-1 rounded">
                            {item.category}
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-semibold mt-10 mb-4">
                Trending Creations
            </h2>

           <div className="flex gap-8 overflow-x-auto pb-2">
                {trending.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-60 h-38 rounded-xl overflow-hidden relative group cursor-pointer 
                        transition-all duration-300 ease-out hover:scale-110 hover:z-20 hover:shadow-2xl hover:shadow-black/80"
                        >
                        <img
                            src={item.image}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                        />
                        <div className="absolute inset-0 .bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                        <div className="absolute bottom-0 p-3 z-10">
                            <h3 className="text-base font-bold drop-shadow-lg">
                            {item.title}
                            </h3>
                        </div>
                        </div>
        ))}
    </div>
        </div>
    );
}
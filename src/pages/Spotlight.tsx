export default function Spotlight() {
    const data = [
        {
            category:"Wednesday season 1",
            image: "https://idseducation.com/wp-content/uploads/2022/12/imgonline-com-ua-CompressToSize-MwYoxZ9iSXVl7.jpg"
        },
        {
            category:"The Mummy 2026",
            image: "https://static.promediateknologi.id/crop/9x94:1220x735/1200x0/webp/photo/p1/274/2026/02/19/Screenshot_2026-02-19-14-04-40-298_cominstagramandroid-edit-2550596475.jpg"
        },
        {
            category:"The Conjuring 2",
            image: "https://material.asset.catchplay.com/WAR-IN-001-A0075/artworks/posters/WAR-IN-001-A0075-P1200.jpg?hash=1777419450"
        },
         {
            category:"Final Destination 4",
            image: "https://i.ytimg.com/vi/6ew2Ll7Nzaw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA06cpEwP6O3wDzFg2Jpv_c-oUphQ"
        }
    ];

   const trending = [
    {
        title: "The Mitchells vs. the Machines",
        image: "https://www.hollywoodreporter.com/wp-content/uploads/2021/04/CON_cld110.1170_KV_lm_v4-H-2021-1618864468.jpg?w=1296&h=730&crop=1"
    },
    {
        title: "Glass Onion: A Knives Out Mystery",
        image: "https://friendshipheightsmd.gov/wp-content/uploads/2025/09/MovieGlassOnion.jpg"
    },
    {
        title: "The Big 4",
        image: "https://hypeabis.id/assets/content/2022121520485700000062AF8DEB4F314DDBA101707CCC84AC55.jpeg"
    },
    {
        title: "Agak Laen 2",
        image: "https://dam.mediacorp.sg/image/upload/s--vTViGjjv--/c_fill,g_auto,h_468,w_830/f_auto,q_auto/v1/mediacorp/cnabahasa/images/2025-12/agak-laen-2.jpg?itok=IHtbpCuy"
    },
    {
        title: "Ngeri Ngeri Sedap",
        image: "https://awsimages.detik.net.id/community/media/visual/2022/06/22/poster-film-ngeri-ngeri-sedap_169.jpeg?w=1200"
    }
];

    const categories = ["Trending","Viral","Comedy","Highlights","For You"];

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
                        Spotlight Now 
                    </h1>

                    <p className="text-gray-300 mb-4 max-w-md drop-shadow">
                        Pilihan terbaik dari Flim paling menarik hari ini. Dari yang viral sampai yang bikin penasaran!
                    </p>

                    <button className="bg-red-600 px-5 py-2 rounded-md w-fit hover:bg-red-500 transition shadow-lg shadow-red-600/30">
                       Lihat Spotlight
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
                <span>Viral Picks</span>
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
                 Comedy Picks
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
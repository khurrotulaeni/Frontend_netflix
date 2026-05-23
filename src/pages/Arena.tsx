export default function Arena() {
    const data = [
        {
            title: "A Quiet Place: Day One",
            date: "1 Juli 2026",
            image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/720x0/webp/photo/2024/06/26/3370885390.jpg"
        },
        {
            title: "180",
            date: " 17 April 2026",
            image:"https://decider.com/wp-content/uploads/2026/04/180-NETFLIX-REVIEW.jpg?quality=75&strip=all&w=680&h=356&crop=1"
        },
        {
            title: "Zootopia 2",
            date: "26 November 2025",
            image:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/11/zootopia-2-poster.jpg"
        },
        {
            title: "Hoppers",
            date: "6 Maret 2026",
            image:"https://static.promediateknologi.id/crop/33x101:1374x728/1200x600/webp/photo/p1/100/2026/03/06/Sinopsis-Film-Hoppers-888011485.jpg"
        }
    ];

    const trending = [
        {
            title: "Avatar 3",
            image: "https://garapmedia.com/wp-content/uploads/2025/11/Avatar-3-1024x575.jpg",
            views: "2.1M views"
        },
        {
            title: "Deadpool 3",
            image: "https://s.yimg.com/ny/api/res/1.2/hnjyHdXM0kTiF7a5Ic4iYw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xMzUwO2NmPXdlYnA-/https://s.yimg.com/os/creatr-uploaded-images/2024-07/89138fe0-4832-11ef-baff-af36428d3e36",
            views: "1.8M views"
        },
        {
            title: "Inside Out 2",
            image: "https://statik.tempo.co/data/2024/06/06/id_1308227/1308227_720.jpg",
            views: "3.2M views"
        },
        {
            title: "Pesugihan Sate Gagak",
            image: "https://cdn.teater.co/imgs/article-pesugihan-sate-gagak-2025-2_890_490.webp",
            views: "2.2M views"
        },
        {
            title: "Evil Dead Rise",
            image: "https://cms.disway.id/uploads/236615204598908fd72f03999610c170.jpg",
            views: "3.4M views"
        }
    ];

    const categories = ["Action", "Comedy", "Horror", "Animation", "Sci-Fi"];

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
                        National Innovation Challenge 2026
                    </h1>

                    <p className="text-gray-300 mb-4 max-w-md drop-shadow">
                        Tantang ide terbaikmu, ciptakan solusi untuk masa depan, dan menangkan total hadiah ratusan juta rupiah!
                    </p>

                    <button className="bg-red-600 px-5 py-2 rounded-md w-fit hover:bg-red-500 transition shadow-lg shadow-red-600/30">
                        Ikuti Sekarang
                    </button>
                </div>
            </div>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Cari film, series, atau event..."
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
                <span>Sedang Tayang</span>
                <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                    Lihat Semua
                </span>
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-2">
                {data.map((item, index) => (
                    <div
                    key={index}
                    className="min-width-[220px] rounded-xl overflow-hidden relative group cursor-pointer 
                    transition-all duration-300 hover:scale-110 hover:z-20 hover:shadow-2xl hover:shadow-black/80"
                    >
                    <img
                        src={item.image}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-125"
                    />

                    <div className="absolute inset-0 .bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>

                    <div className="absolute top-2 left-2 bg-black/70 text-xs px-2 py-1 rounded">
                        #{index + 1}
                    </div>

                    <div className="absolute bottom-0 p-3 z-10">
                        <h3 className="text-base font-bold drop-shadow-lg">
                        {item.title}
                        </h3>
                        <p className="text-xs text-gray-300 drop-shadow">
                        Tanggal Rilis: {item.date}
                        </p>
                    </div>
                </div>
                ))}
            </div>
            <h2 className="text-xl font-semibold mt-10 mb-4">
                Trending Now
            </h2>

            <div className="flex gap-8 overflow-x-auto pb-2">
                {trending.map((item, index) => (
                    <div
                        key={index}
                        className="min-w-60 h-36 rounded-xl overflow-hidden relative group cursor-pointer 
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
                            <p className="text-xs text-gray-300">
                            {item.views}
                            </p>
                        </div>
                        </div>
                ))}
            </div>

        </div>
    );
}
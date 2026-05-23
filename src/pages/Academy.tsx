export default function Academy() {
    const data = [
        {
            title: "Digital Marketing Strategy 2026",
            category:"Marketing",
            duration: "5 Jam",
            image: "https://i.ytimg.com/vi/yyv3FKt9vlg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCe6isxEAfOo8Bx6D05UqA88DcdkA"
        },
        {
            title: "UI/UX Design Fundamentals 2024",
            category:"Design",
            duration: "3 Jam",
            image: "https://img-c.udemycdn.com/course/480x270/5448158_126f_2.jpg"
        },
        {
            title: "Video Editing Fundamentals",
            category:"Video Editing",
            duration: "6 Jam",
            image: "https://i.ytimg.com/vi/KrOnvasLYuU/maxresdefault.jpg"
        },
         {
            title: "TikTok Shop & Online Selling Strategy",
            category:"Marketing",
            duration: "5 Jam",
            image: "https://storage.ghost.io/c/12/7b/127b828b-bdc2-4972-9cf2-de857df9c324/content/images/2024/01/tiktok-shop.png"
        }
    ];

   const trending = [
    {
        title: "CapCut Editing",
        image: "https://dibimbing-cdn.sgp1.cdn.digitaloceanspaces.com/1678271875216-15.png.webp",
        progress: 70,
        lesson: "7/10"
    },
    {
        title: "Adobe Premiere Pro",
        image: "https://jogjacourse.com/wp-content/uploads/2025/09/Jasa-Premiere-Wide-1.jpg",
        progress: 45,
        lesson: "4/12"
    },
    {
        title: "Viral Content Editing",
        image: "https://fw-fileupload-id.s3.ap-southeast-1.amazonaws.com/products/c9b28cf4-04fd-4998-a69b-9cdbaa0e9127/images/038df007-7d22-4f55-95ca-95f9d48a6f92.jpg",
        progress: 80,
        lesson: "8/10"
    },
    {
        title: "After Effects",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLp7b6JS0g_PzE9YWPXn_8UAy3tNBjnkxww&s",
        progress: 30,
        lesson: "3/15"
    }
];

    const categories = ["Design","Marketing","Video Editing","UI/UX","AI"];

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
                        Innovation Academy Series
                    </h1>

                    <p className="text-gray-300 mb-4 max-w-md drop-shadow">
                        Ciptakan inovasi yang mengubah masa depan dan jadilah bagian dari generasi pemenang!
                    </p>

                    <button className="bg-red-600 px-5 py-2 rounded-md w-fit hover:bg-red-500 transition shadow-lg shadow-red-600/30">
                       Mulai Belajar
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
                <span>Popular Courses</span>
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

                        <div className="absolute bottom-0 p-3 z-10">
                            <h3 className="text-sm font-semibold drop-shadow-lg">
                                {item.title}
                            </h3>

                            <p className="text-xs text-gray-300 drop-shadow">
                                {item.duration}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-semibold mt-10 mb-4">
                Continue Learning
            </h2>

          <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {trending.map((item, index) => (
            <div
                key={index}
                className="min-w-260px h-50 rounded-xl overflow-hidden relative group cursor-pointer 
                transition-all duration-300 ease-out hover:scale-110 hover:z-20 hover:shadow-2xl hover:shadow-black/80"
            >
            <img
                src={item.image}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
            />

            <div className="absolute inset-0 .bg-gradient-to-t from-black via-black/40 to-transparent"></div>

            <div className="absolute bottom-0 p-5 w-full z-10">
                <h3 className="text-sm font-semibold drop-shadow">
                {item.title}
                </h3>

                <p className="text-xs text-gray-300">
                Lesson: {item.lesson}
                </p>

                <div className="w-full bg-gray-700/60 h-1.5 rounded mt-2">
                <div
                    className="bg-red-600 h-1.5 rounded transition-all duration-500"
                    style={{ width: `${item.progress}%` }}
                ></div>
                </div>

                <p className="text-xs text-gray-400 mt-1">
                {item.progress}% selesai
                </p>
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition"></div>
            </div>
        ))}
        </div>
        </div>
    );
}
import Header from "../layouts/Header";
import { Button } from "../components/atoms/Button";
import { Card } from "../components/ui/Card";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";

function App() {
  const speakers = [
    {
      name: "The Conjuring (2013)",
      role: "kisah nyata di balik teror paling mencekam yang pernah terjadi.",
      imageUrl:
        "https://www.spectatornews.com/wp-content/uploads/2015/11/WEB_conjuring-675x900.jpg",
    },
    {
      name: "Thrash (2026)",
      role: "Kota tenggelam, ketakutan naik ke permukaan—dan sesuatu sedang mengintai di dalam air.",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BNWY2ZGFkNjktOWQ1NC00YjYzLTgzY2EtYzg3NTc1MDFkOWM3XkEyXkFqcGc@._V1_.jpg",
    },
    {
      name: "Terrifier 3 (2024)",
      role: "Tidak ada perayaan Natal yang aman ketika Art the Clown kembali.",
      imageUrl:
        "https://play-lh.googleusercontent.com/eykAs5lY7OCx_8oUlwACd2c0vZr3LUo-NDkHddTs49Vn5A7fWdUkmmAdp2X70jQzQ1WhEv4S6xitfauP6J0",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Netflix?",
      description:
        "Netflix adalah layanan streaming yang menawarkan beragam acara TV, film, anime, dokumenter, dan banyak lagi...",
    },
    {
      title: "Berapa biaya berlangganan Netflix?",
      description:
        "Paket berlangganan mulai dari Rp 54.000 hingga Rp 186.000/bulan.",
    },
    {
      title: "Di mana saya bisa menontonnya?",
      description:
        "Tonton di mana saja, kapan saja di berbagai perangkat.",
    },
  ];

  const cardItems = [
    {
      title: "Enjoy on your TV",
      description: "Saksikan di Smart TV dan perangkat lainnya.",
    },
    {
      title: "Download your shows",
      description: "Simpan film favorit Anda dengan mudah.",
    },
    {
      title: "Watch everywhere",
      description: "Streaming kapan saja, Di mana saja, Nikmati Hiburan Tanpa Henti.",
    },
    {
      title: "Create profiles for kids",
      description: "Profil khusus anak dengan konten aman, Edukatif dan Menyenangkan.",
    },
  ];

  return (
    <>
  <Header />

  <div className="bg-gray-950 text-white min-h-screen w-full">
    <div className="max-w-7xl mx-auto px-6">

       <section
              className="relative w-full min-h-screen py-20 flex  items-center justify-center bg-gray-950 text-center"
              style={{
                backgroundImage:
                  "url('https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_icon.svg')",
                backgroundSize: "center",
              }}
            >
              <div className="relative w-full z-10 flex flex-col gap-4 items-center -translate-y-10">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                  className="w-56 animate-pulse"
                />
      
                <p className="text-white text-lg text-center max-w-2xl">
                  <span className="font-bold text-5xl block">
                    Unlimited movies, TV shows, and more
                  </span>
      
                  <span className="text-gray-300 block mt-3">
                    Starts at IDR 54,000. Cancel anytime.
                  </span>
                </p>
      
                <p className="text-gray-300 text-sm mt-2">
                  Ready to watch? Enter your email to create or restart your membership.
                </p>
      
                <div className="w-full max-w-xl mt-6 flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="flex-1 px-4 py-3 rounded-l-md bg-black/60 border border-gray-600 text-white"
                  />
                  <Button
                    label="Get Started"
                    variant="primary"
                    className="px-6 py-3 rounded-md"
                  />
                </div>
              </div>
            </section>

      <section id="speaker" className="pt-12 pb-16">
        <h1 className="font-bold text-4xl mb-6 tracking-wide">
          Trending Film
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} {...speaker} />
          ))}
        </div>
      </section>

      <section className="mt-16 w-auto">
        <h1 className="font-bold text-4xl mb-10 tracking-wide">
          More Reasons to Join
        </h1>

        <div className="py-10 grid grid-cols-1 md:grid-cols-4 gap-10 px-3  ">
          {cardItems.map((item, index) => (
            <Card
  key={index}
  className="
            rounded-xl p-6
            h-full flex flex-col justify-between
            hover:border-red-600 hover:scale-105
            transition duration-300"
>
  <div>
    <h3 className="text-lg font-semibold mb-2">
      {item.title}
    </h3>

    <p className="text-gray-400 text-sm mb-4">
      {item.description}
    </p>
  </div>

  <Button
    label="Info Selengkapnya"
    variant="primary"
    className="text-red-500 text-sm hover:underline p-0 bg-transparent"
  />
</Card>
          ))}
        </div>
      </section>

      <section className="mt-16 pb-20">
        <h1 className="font-bold text-4xl mb-6 tracking-wide">
          Frequently Asked Questions
        </h1>

        <div className="flex flex-col gap-3">
          {collapseItems.map((item, index) => (
            <Collapse key={index} {...item} />
          ))}
        </div>
      </section>

    </div>
  </div>
</>
  );
}

export default App;
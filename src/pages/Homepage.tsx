import Header from "../layouts/Header";
import { Button } from "../components/atoms/Button";
import { Card } from "../components/ui/Card";
import { Collapse } from "../components/ui/Collapse";
import SpeakerCard from "../components/ui/SpeakerCard";
import './index.css';

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
        "Netflix adalah layanan streaming yang menawarkan beragam acara TV, film, anime, dokumenter, dan banyak lagi yang memenangkan penghargaan, di ribuan perangkat yang terhubung ke internet.Anda dapat menonton sebanyak yang Anda inginkan, kapan pun Anda mau tanpa iklan sama sekali - semuanya dengan harga bulanan yang rendah. Selalu ada sesuatu yang baru untuk ditemukan dan acara TV serta film baru ditambahkan setiap minggu!",
    },
    {
      title: "Berapa biaya berlangganan Netflix?",
      description:
        "Tonton Netflix di ponsel pintar, tablet, Smart TV, laptop, atau perangkat streaming Anda, semuanya dengan satu biaya bulanan tetap. Paket berlangganan mulai dari Rp 54.000 hingga Rp 186.000/bulan.",
    },
    {
      title: "Di mana saya bisa menontonnya?",
      description:
        "Tonton di mana saja, kapan saja. Masuk dengan akun Netflix Anda untuk menonton langsung di web di netflix.com dari komputer pribadi Anda atau di perangkat apa pun yang terhubung ke internet dan menawarkan aplikasi Netflix, termasuk TV pintar, ponsel pintar, tablet, pemutar media streaming, dan konsol game.",
    },
  ];

  const cardItems = [
    {
      title: "Enjoy on your TV",
      description:
        "Saksikan di Smart TV, PlayStation, Xbox, Chromecast, Apple TV, pemutar Blu-ray, dan banyak perangkat lain yang didukung untuk pengalaman menonton yang lancar dan sinematik di mana pun Anda berada.",
    },
    {
      title: "Download your shows to watch offline",
      description:
        "Simpan film favorit Anda dengan mudah dan selalu ada sesuatu untuk ditonton kapan pun Anda mau, sehingga Anda tidak akan pernah kehabisan hiburan yang menarik, apa pun momen atau suasana hati Anda.",
    },
    {
      title: "Watch everywhere",
      description:
        "Nikmati streaming film dan acara TV tanpa batas kapan saja, di mana saja, di ponsel, tablet, laptop, atau TV Anda, dan rasakan hiburan tanpa akhir di semua perangkat favorit Anda dengan mudah.",
    },
    {
      title: "Create profiles for kids",
      description:
        "Ajak anak-anak berpetualang seru bersama karakter favorit mereka di tempat yang aman, menyenangkan, dan dirancang khusus untuk mereka, di mana mereka dapat menjelajah dan menikmati hiburan tanpa batas.",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto ">
            <section
              id="hero"
              className="relative flex flex-col justify-center items-center text-center min-h-screen bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1608889175118-3f8c0a3f6c1c')",
              }}
            >
          <div className="flex flex-col gap-6 items-center -translate-y-20 test-anim">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD54UjzrDIlssURuc9n1CMS28kNcte5Lfz9A&s"
              alt=""
              className="w-72  "
            />
            <p className="text-gray-700 text-lg text-center max-w-md">
              <span className="font-bold text-4xl block">
                Unlimited movies, TV shows, and more
              </span>
              <span className="text-gray-700 block mt-3">
                Starts at IDR 54,000. Cancel anytime.
              </span>
            </p>
            <div className="flex gap-4 justify-center w-full max-w-md mx-auto mt-6">
              <Button 
                label="Mulai Sekarang" 
                variant="primary" 
                className="flex-1 text-center"
              />
              <Button 
                label="Pelajari Lebih Lanjut" 
                variant="outline" 
              />
            </div>
          </div>
        </section>

        <section id="speaker" className="py-24">
          <h1 className="font-bold text-5xl mb-20 text-red-900">Trending Film</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-3">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        <section>
          <h1 className="font-bold text-5xl text-red-900">More Reasons to Join</h1>
          <div id="cards"
          className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-3">
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                label="Info Selengkapnya"
                variant="primary"
                className="mt-4"
              />
            </Card>
          ))}
          </div>
        </section>

        <section className="mt-10">
          <h1 className="font-bold text-5xl text-red-900">Frequently Asked Questions</h1>
          <div  id="collapse" className="py-10 flex flex-col gap-2 px-3 ">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
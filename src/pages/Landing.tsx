import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";
import { 
  Music, 
  GalleryHorizontal, 
  Heart, 
  Users,
  Calendar,
  Gift,
  MapPin,
  RotateCw,
  Palette, 
  Zap, 
  DollarSign, 
  PaintBucket, 
  Pencil, 
  Eye, 
  Link as LinkIcon,
  Check,
  ImageOff,
  Image
} from "lucide-react";
import mocha from '../assets/themes/Mocha.png';
import royalBlue from '../assets/themes/Royal-blue.png';
import royalGold from '../assets/themes/Royal-gold.png';
import ThemeCard from "@/components/ThemeCard";

const stats = {
  invitationsSent: 10000,
  happyCustomers: 5000,
  themes: 9,
};

const animatedWords = [
  { word: "Elegan", color: "text-purple-600" },
  { word: "Premium", color: "text-blue-600" },
  { word: "Exclusive", color: "text-emerald-600" },
  { word: "Modern", color: "text-rose-600" },
  { word: "Classy", color: "text-amber-600" },
  { word: "Luxury", color: "text-indigo-600" },
  { word: "Terjangkau", color: "text-pink-600" },
];

const allFeatures = [
  {
    id: "music",
    title: "Music Request",
    icon: <Music className="h-10 w-10 text-purple-600" />,
    description: "Pilih musik sesuai dengan selera Anda untuk memperindah undangan",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    id: "gallery",
    title: "Gallery",
    icon: <GalleryHorizontal className="h-10 w-10 text-pink-600" />,
    description: "Tampilkan momen-momen spesial dalam galeri foto yang menarik",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
  {
    id: "love-story",
    title: "Love Story",
    icon: <Heart className="h-10 w-10 text-blue-600" />,
    description: "Bagikan kisah cinta Anda dengan tampilan yang romantis",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: "unlimited-guests",
    title: "Unlimited Guest Names",
    icon: <Users className="h-10 w-10 text-amber-600" />,
    description: "Tambahkan nama tamu sebanyak yang Anda butuhkan tanpa batasan",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    id: "rsvp",
    title: "RSVP",
    icon: <Calendar className="h-10 w-10 text-emerald-600" />,
    description: "Kelola konfirmasi kehadiran tamu dengan mudah dan efisien",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: "wedding-gift",
    title: "Wedding Gift",
    icon: <Gift className="h-10 w-10 text-indigo-600" />,
    description: "Fitur untuk menerima hadiah digital dari para tamu undangan",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    id: "google-maps",
    title: "Google Maps",
    icon: <MapPin className="h-10 w-10 text-rose-600" />,
    description: "Tunjukkan lokasi acara dengan integrasi Google Maps yang akurat",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    id: "unlimited-revisions",
    title: "Unlimited Revisions",
    icon: <RotateCw className="h-10 w-10 text-cyan-600" />,
    description: "Lakukan perubahan tanpa batas hingga undangan sesuai keinginan Anda",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
];

const themes = [
  {
    id: "mocha",
    title: "Mocha",
    image: mocha,
    category: "Pernikahan",
    description: "Tema elegan dengan sentuhan coklat hangat dan aksen emas untuk pernikahan yang mewah",
    noPhoto: "https://undangan.youvitation.com/mocha/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/mocha/adelio-elina/Nama%20Tamu",
  },
  {
    id: "royal-blue",
    title: "Royal Blue",
    image: royalBlue,
    category: "Pernikahan",
    description: "Tema mewah dengan dominasi warna biru royal dan sentuhan silver untuk pernikahan yang elegan",
    noPhoto: "https://undangan.youvitation.com/royal-blue/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/royal-blue/adelio-elina/Nama%20Tamu",
  },
  {
    id: "royal-gold",
    title: "Royal Gold",
    image: royalGold,
    category: "Pernikahan",
    description: "Tema mewah dengan sentuhan emas untuk pernikahan yang glamor",
    noPhoto: "https://undangan.youvitation.com/royal-gold/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/royal-gold/adelio-elina/Nama%20Tamu",
  },
];

const steps = [
  {
    number: 1,
    title: "Pilih Tema",
    description: "Pilih tema undangan yang sesuai dengan acara Anda",
    icon: <PaintBucket className="text-purple-600 w-6 h-6" />,
  },
  {
    number: 2,
    title: "Isi Informasi",
    description: "Masukkan detail acara, tanggal, lokasi, dan lain-lain",
    icon: <Pencil className="text-purple-600 w-6 h-6" />,
  },
  {
    number: 3,
    title: "Preview",
    description: "Tinjau undangan dan tambahkan nama tamu",
    icon: <Eye className="text-purple-600 w-6 h-6" />,
  },
  {
    number: 4,
    title: "Bagikan",
    description: "Bagikan link undangan kepada tamu Anda",
    icon: <LinkIcon className="text-purple-600 w-6 h-6" />,
  },
];

const testimonials = [
  {
    id: "1",
    name: "Putri Cahyani",
    image: "/placeholder.svg",
    text: "Undangannya bener-bener ngebantu banget! Desainnya modern dan cakep!",
    rating: 5,
  },
  {
    id: "2",
    name: "Siti Rahma",
    image: "/placeholder.svg",
    text: "Gampang dipakai dan hasilnya cantik banget. Tamu-tamu juga pada suka",
    rating: 5,
  },
  {
    id: "3",
    name: "Anisa Awalia",
    image: "/placeholder.svg",
    text: "Pokoknya puas banget deh, desainnya keren dan fiturnya komplit",
    rating: 4,
  },
  {
    id: "4",
    name: "Diana Putri",
    image: "/placeholder.svg",
    text: "Seneng banget sama undangan ini. Thanks Youvitation",
    rating: 5,
  },
  {
    id: "5",
    name: "Rina Eka Tri",
    image: "/placeholder.svg",
    text: "Fitur RSVP-nya ngebantu banget buat atur tamu. Makasih Youvitation!",
    rating: 5,
  },
  {
    id: "6",
    name: "Safira",
    image: "/placeholder.svg",
    text: "Undangannya cantik bangett dan proses bikinnya juga cepet.",
    rating: 4,
  },
  {
    id: "7",
    name: "Indriana",
    image: "/placeholder.svg",
    text: "Harganya ramah di kantong tapi fiturnya lengkap banget. Wajib coba sih!",
    rating: 5,
  },
  {
    id: "8",
    name: "Maya Anggraini",
    image: "/placeholder.svg",
    text: "CS-nya cepet banget responnya, Love banget dehh",
    rating: 4,
  },
  {
    id: "9",
    name: "Diana",
    image: "/placeholder.svg",
    text: "Tema Royal Gold-nya cakep parah! Orang-orang sampe pada bilang bikinnya dimana.",
    rating: 5,
  },
  {
    id: "10",
    name: "Fira Fitriani",
    image: "/placeholder.svg",
    text: "Pilihan musik sama galeri fotonya keren. Pas banget buat di pernikahan aku",
    rating: 5,
  },
  {
    id: "11",
    name: "Bella Natasya",
    image: "/placeholder.svg",
    text: "Fitur wedding gift-nya keren, jadi gampang kasih hadiah buat kita",
    rating: 4,
  },
  {
    id: "12",
    name: "Laras",
    image: "/placeholder.svg",
    text: "Undangan digital ini bikin persiapan nikah jadi lebih hemat dan mudah",
    rating: 5,
  },
  {
    id: "13",
    name: "Ayu Salim",
    image: "/placeholder.svg",
    text: "User-friendly banget, orang tua pun gampang makainya",
    rating: 4,
  },
];

const faqs = [
  {
    question: "Bagaimana cara membuat undangan digital?",
    answer: "Cukup pilih tema yang Anda inginkan, isi informasi acara, tambahkan nama tamu, lalu bagikan link undangan kepada tamu Anda.",
  },
  {
    question: "Berapa lama proses pembuatan undangan digital?",
    answer: "Proses pembuatan undangan digital hanya membutuhkan waktu beberapa menit saja setelah Anda mengisi semua informasi yang diperlukan.",
  },
  {
    question: "Bagaiman cara pembayarannya?",
    answer: "Setelah mengisi semua informasi acara, Anda dapat membayar pembuatan undangan digital melalui metode pembayaran yang tersedia.",
  },
  {
    question: "Bagaimana cara membagikan undangan digital?",
    answer: "Anda akan mendapatkan link undangan yang dapat dibagikan melalui email, whatsapp, atau media sosial.",
  },
];

const LandingPage = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const currentWord = animatedWords[wordIndex];

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setWordIndex((prevIndex) => (prevIndex + 1) % animatedWords.length);
        setIsTransitioning(false);
      }, 500);
      
    }, 3000);
    
    return () => clearInterval(transitionInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      
      <section id="beranda" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <ScrollAnimation className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Undangan Digital{" "}
            <span 
              className={`inline-block transition-all duration-1000 ease-in-out ${
                isTransitioning ? "opacity-0 transform -translate-y-3" : "opacity-100 transform translate-y-0"
              } ${currentWord.color}`}
            >
              {currentWord.word}
            </span>
            <br />
            untuk Momen Spesial Anda
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Buat undangan digital yang indah dan personal untuk acara spesial Anda dengan mudah
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 border-0" asChild>
              <Link to="/order-invitation">Buat Sekarang</Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link to="/themes">Lihat Tema</Link>
            </Button>
          </div>
        </ScrollAnimation>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <ScrollAnimation delay={100} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">
              <AnimatedCounter end={stats.invitationsSent} suffix="+" />
            </div>
            <div className="text-gray-500">Undangan di Bagikan</div>
          </ScrollAnimation>
          <ScrollAnimation delay={200} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">
              <AnimatedCounter end={stats.happyCustomers} suffix="+" />
            </div>
            <div className="text-gray-500">Undangan di Buat</div>
          </ScrollAnimation>
          <ScrollAnimation delay={300} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-3xl font-bold text-purple-600">
              <AnimatedCounter end={stats.themes} suffix="" />
            </div>
            <div className="text-gray-500">Tema Tersedia</div>
          </ScrollAnimation>
        </div>
      </section>

      <section id="fitur" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai fitur menarik yang akan membuat undangan digital Anda lebih berkesan
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {allFeatures.map((feature) => (
              <ScrollAnimation key={feature.id}>
                <div className={`${feature.bgColor} p-8 rounded-xl flex flex-col items-center text-center h-full`}>
                  <div className="mb-4 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Paket Harga</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan undangan Anda
            </p>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation delay={100}>
              <Card className="h-full transition-all hover:shadow-lg border-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <ImageOff className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">Tanpa Foto</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-purple-600">Rp80.000</span>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Semua fitur dasar</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Daftar tamu unlimited</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>RSVP & Konfirmasi kehadiran</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Musik background</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full" asChild>
                    <Link to="/order-invitation?type=no-photo">Pesan Sekarang</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            <ScrollAnimation delay={200}>
              <Card className="h-full transition-all hover:shadow-lg border-2 border-purple-200 bg-gradient-to-b from-purple-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-4">
                    <Image className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">Dengan Foto</h3>
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-purple-600">Rp100.000</span>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Semua fitur max</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Galeri foto</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Love story dengan foto</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Foto prewedding pasangan</span>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 border-0" asChild>
                    <Link to="/order-invitation?type=with-photo">Pesan Sekarang</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="tema" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tema Undangan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih dari berbagai tema undangan yang cantik dan elegan
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <ScrollAnimation key={theme.id} delay={index * 100} className="h-full">
                <ThemeCard 
                  id={theme.id}
                  title={theme.title}
                  image={theme.image}
                  category={theme.category}
                  description={theme.description}
                  noPhoto={theme.noPhoto}
                  photo={theme.photo}
                />
              </ScrollAnimation>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:opacity-90">
              <Link to="/themes" onClick={() => window.scrollTo(0, 0)}>Lihat Semua Tema</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="cara-kerja" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cara Kerja</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proses pembuatan undangan digital yang mudah dan cepat
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <ScrollAnimation key={step.number} delay={index * 100} className="text-center">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-xl font-bold mb-2">
                    {step.number}. {step.title}
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonial" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Testimoni</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apa kata meraka yang sudah menggunakan undangan digital kami
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <TestimonialCarousel testimonials={testimonials} />
          </ScrollAnimation>
        </div>
      </section>

      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan Umum</h2>
            <p className="text-xl text-gray-600">
              Berikut adalah beberapa pertanyaan yang sering diajukan
            </p>
          </ScrollAnimation>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 100}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </ScrollAnimation>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center">
        <ScrollAnimation className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Siap Untuk Membuat Undangan Digital?</h2>
          <p className="text-xl mb-8 opacity-90">
            Buat undangan digital yang indah untuk acara spesial Anda sekarang
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/order-invitation" onClick={() => window.scrollTo(0, 0)}>Order Now</Link>
          </Button>
        </ScrollAnimation>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;

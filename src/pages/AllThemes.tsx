import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import ThemeCard from "@/components/ThemeCard";
import mocha from '../assets/themes/Mocha.png';
import rusticBrown from '../assets/themes/Rustic.png';
import royalBlue from '../assets/themes/Royal-blue.png';
import royalGold from '../assets/themes/Royal-gold.png';
import skyPetals from '../assets/themes/Sky.png';
import sweetBlush from '../assets/themes/Sweet.png';
import rose from '../assets/themes/Rose.png';
import purpleHaze from '../assets/themes/Purple.png';
import brezze from '../assets/themes/Brezze.png';

// All themes data
const allThemes = [
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
    id: "brezze",
    title: "Brezze",
    image: brezze,
    category: "Pernikahan",
    description: "Tema elegan dengan sentuhan coklat hangat dan aksen emas untuk pernikahan yang mewah",
    noPhoto: "https://undangan.youvitation.com/brezze/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/brezze/adelio-elina/Nama%20Tamu",
  },
  {
    id: "rustic",
    title: "Rustic Brown",
    image: rusticBrown,
    category: "Pernikahan",
    description: "Tema rustic dengan warna coklat kayu dan hiasan klasik untuk pernikahan yang berkesan",
    noPhoto: "https://undangan.youvitation.com/rustic-brown/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/rustic-brown/adelio-elina/Nama%20Tamu",
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
  {
    id: "rose",
    title: "Rose",
    image: rose,
    category: "Pernikahan",
    description: "Tema mewah dengan sentuhan emas untuk pernikahan yang glamor",
    noPhoto: "https://undangan.youvitation.com/rose/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/rose/adelio-elina/Nama%20Tamu",
  },
  {
    id: "sky-petals",
    title: "Sky Petals",
    image: skyPetals,
    category: "Pernikahan",
    description: "Tema lembut dengan warna biru langit dan aksen bunga untuk pernikahan outdor yang indah",
    noPhoto: "https://undangan.youvitation.com/sky-petals/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/sky-petals/adelio-elina/Nama%20Tamu",
  },
  {
    id: "sweet-blush",
    title: "Sweet Blush",
    image: sweetBlush,
    category: "Ulang Tahun",
    description: "Tema ceria dengan warna biru langit untuk perayaan ulang tahun yang menyenangkan",
    noPhoto: "https://undangan.youvitation.com/sweet-blush/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/sweet-blush/adelio-elina/Nama%20Tamu",
  },
  {
    id: "purple-haze",
    title: "Purple Haze",
    image: purpleHaze,
    category: "Ulang Tahun",
    description: "Tema modern dengan warna ungu yang elegan untuk perayaan ulang tahun dewasa",
    noPhoto: "https://undangan.youvitation.com/purple-haze/adelio-elaina/Nama%20Tamu",
    photo: "https://undangan.youvitation.com/purple-haze/adelio-elina/Nama%20Tamu",
  }
];

const categories = ["Pernikahan"];

const AllThemes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter themes based on search term and category
  const filteredThemes = allThemes.filter((theme) => {
    const matchesSearch = theme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Semua" || theme.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      <div className="container pt-32 pb-20 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tema Undangan</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih dari berbagai tema undangan yang cantik dan elegan untuk acara spesial Anda
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cari tema..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Tabs defaultValue="Semua" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList>
              <TabsTrigger value="Semua">Semua</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {/* Theme Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredThemes.length > 0 ? (
            filteredThemes.map((theme) => (
              <div key={theme.id} className="h-full">
                <ThemeCard 
                  id={theme.id}
                  title={theme.title}
                  image={theme.image}
                  category={theme.category}
                  description={theme.description}
                  noPhoto={theme.noPhoto}
                  photo={theme.photo}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">Tidak ada tema yang ditemukan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllThemes;

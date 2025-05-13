
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import mocha from '../assets/themes/Mocha.png';
import rusticBrown from '../assets/themes/Rustic.png';
import royalBlue from '../assets/themes/Royal-blue.png';
import royalGold from '../assets/themes/Royal-gold.png';
import skyPetals from '../assets/themes/Sky.png';
import sweetBlush from '../assets/themes/Sweet.png';
import rose from '../assets/themes/Rose.png';
import purpleHaze from '../assets/themes/Purple.png';
import brezze from '../assets/themes/Brezze.png';

// All themes data - using the same data from AllThemes.tsx
// const allThemes = [
//   {
//     id: "mocha",
//     title: "Mocha",
//     image: "/placeholder.svg",
//     category: "Pernikahan",
//     description: "Tema elegan dengan sentuhan coklat hangat dan aksen emas untuk pernikahan yang mewah",
//   },
//   {
//     id: "rustic",
//     title: "Rustic Brown",
//     image: "/placeholder.svg",
//     category: "Pernikahan",
//     description: "Tema rustic dengan warna coklat kayu dan hiasan klasik untuk pernikahan yang berkesan",
//   },
//   {
//     id: "royal-blue",
//     title: "Royal Blue",
//     image: "/placeholder.svg",
//     category: "Pernikahan",
//     description: "Tema mewah dengan dominasi warna biru royal dan sentuhan silver untuk pernikahan yang elegan",
//   },
//   {
//     id: "royal-gold",
//     title: "Royal Gold",
//     image: "/placeholder.svg",
//     category: "Pernikahan",
//     description: "Tema mewah dengan sentuhan emas untuk pernikahan yang glamor",
//   },
//   {
//     id: "sky-petals",
//     title: "Sky Petals",
//     image: "/placeholder.svg",
//     category: "Pernikahan",
//     description: "Tema lembut dengan warna biru langit dan aksen bunga untuk pernikahan outdor yang indah",
//   },
// ];

const allThemes = [
  {
    id: "mocha",
    title: "Mocha",
    image: mocha,
    category: "Pernikahan",
    description: "Tema elegan dengan sentuhan coklat hangat dan aksen emas untuk pernikahan yang mewah",
  },
  {
    id: "brezze",
    title: "Brezze",
    image: brezze,
    category: "Pernikahan",
    description: "Tema elegan dengan sentuhan coklat hangat dan aksen emas untuk pernikahan yang mewah",
  },
  {
    id: "rustic",
    title: "Rustic Brown",
    image: rusticBrown,
    category: "Pernikahan",
    description: "Tema rustic dengan warna coklat kayu dan hiasan klasik untuk pernikahan yang berkesan",
  },
  {
    id: "royal-blue",
    title: "Royal Blue",
    image: royalBlue,
    category: "Pernikahan",
    description: "Tema mewah dengan dominasi warna biru royal dan sentuhan silver untuk pernikahan yang elegan",
  },
  {
    id: "royal-gold",
    title: "Royal Gold",
    image: royalGold,
    category: "Pernikahan",
    description: "Tema mewah dengan sentuhan emas untuk pernikahan yang glamor",
  },
  {
    id: "rose",
    title: "Rose",
    image: rose,
    category: "Pernikahan",
    description: "Tema mewah dengan sentuhan emas untuk pernikahan yang glamor",
  },
  {
    id: "sky-petals",
    title: "Sky Petals",
    image: skyPetals,
    category: "Pernikahan",
    description: "Tema lembut dengan warna biru langit dan aksen bunga untuk pernikahan outdor yang indah",
  },
  {
    id: "sweet-blush",
    title: "Sweet Blush",
    image: sweetBlush,
    category: "Pernikahan",
    description: "Tema ceria dengan warna biru langit untuk perayaan Pernikahan yang menyenangkan",
  },
  {
    id: "purple-haze",
    title: "Purple Haze",
    image: purpleHaze,
    category: "Pernikahan",
    description: "Tema modern dengan warna ungu yang elegan untuk perayaan Pernikahan dewasa",
  }
];

// Group themes by category
const themesByCategory = allThemes.reduce((acc, theme) => {
  if (!acc[theme.category]) {
    acc[theme.category] = [];
  }
  acc[theme.category].push(theme);
  return acc;
}, {} as Record<string, typeof allThemes>);

const OrderInvitation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedTheme: "",
    invitationType: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.selectedTheme || !formData.invitationType) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua kolom",
        variant: "destructive",
      });
      return;
    }
    
    // Find the selected theme title
    const selectedTheme = allThemes.find(theme => theme.id === formData.selectedTheme);
    if (!selectedTheme) return;

    // Calculate price based on invitation type
    const price = formData.invitationType === "with-photo" ? "Rp100.000" : "Rp80.000";
    
    // Prepare WhatsApp message
    const message = encodeURIComponent(
      `Halo, saya ingin memesan undangan digital dengan detail berikut:\n\n` +
      `Nama: ${formData.name}\n` +
      `No. HP: ${formData.phone}\n` +
      `Tema: ${selectedTheme.title}\n` +
      `Jenis: ${formData.invitationType === "with-photo" ? "Dengan Foto" : "Tanpa Foto"}\n` +
      `Harga: ${price}`
    );
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/6282329322353?text=${message}`, '_blank');
    
    // Show success toast
    toast({
      title: "Berhasil",
      description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan pemesanan",
    });
  };

  const selectedThemeDetails = formData.selectedTheme 
    ? allThemes.find(theme => theme.id === formData.selectedTheme) 
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navbar />
      <div className="container pt-32 pb-20 px-4">
        <div className="max-w-lg mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Link to="/">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <CardTitle>Pesan Undangan Digital</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Masukkan nama lengkap Anda"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Nomor WhatsApp</Label>
                  <Input 
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Contoh: 082123456789"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="theme">Pilih Tema</Label>
                  <Select
                    value={formData.selectedTheme}
                    onValueChange={(value) => handleChange("selectedTheme", value)}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Pilih tema undangan" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(themesByCategory).map(([category, themes]) => (
                        <React.Fragment key={category}>
                          <div className="px-2 py-1.5 text-sm font-medium text-muted-foreground">
                            {category}
                          </div>
                          {themes.map((theme) => (
                            <SelectItem key={theme.id} value={theme.id}>
                              {theme.title}
                            </SelectItem>
                          ))}
                        </React.Fragment>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {formData.selectedTheme && (
                  <div>
                    <Label htmlFor="invitationType">Jenis Undangan</Label>
                    <div className="grid grid-cols-2 gap-4 mt-2">
                      <div
                        className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${
                          formData.invitationType === "no-photo"
                            ? "border-primary bg-primary/10"
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                        onClick={() => handleChange("invitationType", "no-photo")}
                      >
                        <span className="font-medium mb-1">Tanpa Foto</span>
                        <span className="text-lg font-bold">Rp80.000</span>
                      </div>
                      
                      <div
                        className={`border rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all ${
                          formData.invitationType === "with-photo"
                            ? "border-primary bg-primary/10"
                            : "border-gray-200 hover:border-primary/50"
                        }`}
                        onClick={() => handleChange("invitationType", "with-photo")}
                      >
                        <span className="font-medium mb-1">Dengan Foto</span>
                        <span className="text-lg font-bold">Rp100.000</span>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedThemeDetails && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div>
                      <img src={selectedThemeDetails.image} alt="" className="w-full rounded-xl" />
                    </div>
                    <h3 className="text-sm font-medium my-2">Detail Tema</h3>
                    <p className="text-sm text-gray-600">{selectedThemeDetails.description}</p>
                  </div>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-amber-500 hover:opacity-90"
                >
                  <Send className="mr-2 h-4 w-4" /> Pesan via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderInvitation;

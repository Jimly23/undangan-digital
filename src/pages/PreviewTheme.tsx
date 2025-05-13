
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, Users, X } from "lucide-react";

// Mock theme data
const themes = [
  {
    id: "theme-1",
    title: "Pernikahan Elegan",
    category: "Pernikahan",
    colors: {
      primary: "bg-rose-100",
      secondary: "bg-rose-50",
      text: "text-rose-800",
      accent: "bg-rose-200",
    },
    fonts: {
      title: "font-serif",
      body: "font-sans",
    },
  },
  {
    id: "theme-2",
    title: "Ulang Tahun Ceria",
    category: "Ulang Tahun",
    colors: {
      primary: "bg-blue-100",
      secondary: "bg-blue-50",
      text: "text-blue-800",
      accent: "bg-blue-200",
    },
    fonts: {
      title: "font-sans",
      body: "font-sans",
    },
  },
  {
    id: "theme-3",
    title: "Baby Shower",
    category: "Keluarga",
    colors: {
      primary: "bg-purple-100",
      secondary: "bg-purple-50",
      text: "text-purple-800",
      accent: "bg-purple-200",
    },
    fonts: {
      title: "font-sans",
      body: "font-sans",
    },
  },
  {
    id: "inv-1",
    title: "Pernikahan Budi & Siti",
    category: "Pernikahan",
    colors: {
      primary: "bg-rose-100",
      secondary: "bg-rose-50",
      text: "text-rose-800",
      accent: "bg-rose-200",
    },
    fonts: {
      title: "font-serif",
      body: "font-sans",
    },
    details: {
      date: "15 Juli 2024",
      time: "13:00 WIB",
      location: "Hotel Grand Hyatt, Jakarta",
      description: "Dengan hormat kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami."
    }
  },
  {
    id: "inv-2",
    title: "Ulang Tahun ke-5 Dina",
    category: "Ulang Tahun",
    colors: {
      primary: "bg-blue-100",
      secondary: "bg-blue-50",
      text: "text-blue-800",
      accent: "bg-blue-200",
    },
    fonts: {
      title: "font-sans",
      body: "font-sans",
    },
    details: {
      date: "20 April 2024",
      time: "15:00 WIB",
      location: "Taman Bermain Wonderland, Bandung",
      description: "Mari rayakan ulang tahun ke-5 Dina dengan penuh kegembiraan!"
    }
  },
  {
    id: "inv-3",
    title: "Baby Shower Mira",
    category: "Keluarga",
    colors: {
      primary: "bg-purple-100",
      secondary: "bg-purple-50",
      text: "text-purple-800",
      accent: "bg-purple-200",
    },
    fonts: {
      title: "font-sans",
      body: "font-sans",
    },
    details: {
      date: "5 Mei 2024",
      time: "10:00 WIB",
      location: "Rumah Keluarga, Surabaya",
      description: "Mari berkumpul untuk menyambut kehadiran buah hati kami!"
    }
  },
];

const PreviewTheme = () => {
  const { themeId } = useParams<{ themeId: string }>();
  const [theme, setTheme] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBackButton, setShowBackButton] = useState(true);

  useEffect(() => {
    // Simulate API call to get theme data
    setIsLoading(true);
    setTimeout(() => {
      const foundTheme = themes.find((t) => t.id === themeId);
      setTheme(foundTheme || null);
      setIsLoading(false);
    }, 500);
  }, [themeId]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-purple-600 border-r-purple-600 border-b-gray-200 border-l-gray-200 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat tema...</p>
        </div>
      </div>
    );
  }

  if (!theme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">😕</div>
          <h2 className="text-2xl font-bold mb-2">Tema Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-6">
            Maaf, tema yang Anda cari tidak dapat ditemukan.
          </p>
          <Button asChild>
            <Link to="/">Kembali ke Beranda</Link>
          </Button>
        </div>
      </div>
    );
  }

  const toggleBackButton = () => {
    setShowBackButton(!showBackButton);
  };

  // Determine if we're looking at a theme or an invitation
  const isInvitation = theme.details !== undefined;

  return (
    <div className={`min-h-screen ${theme.colors.secondary}`}>
      {/* Preview Controls */}
      <div 
        className={`fixed top-4 left-4 z-10 transition-opacity duration-300 ${
          showBackButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link to={isInvitation ? "/admin" : "/"}>
          <Button variant="outline" size="icon" className="bg-white shadow-md">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div 
        className={`fixed top-4 right-4 z-10 transition-opacity duration-300 ${
          showBackButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <Button variant="outline" size="icon" className="bg-white shadow-md" onClick={toggleBackButton}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Full Screen Preview */}
      <div className="min-h-screen flex items-center justify-center p-4" onClick={toggleBackButton}>
        <Card className={`w-full max-w-md mx-auto overflow-hidden shadow-xl ${theme.colors.primary}`}>
          <CardContent className="p-0">
            {/* Header */}
            <div className={`p-6 text-center ${theme.colors.accent}`}>
              <div className={`text-sm font-medium ${theme.colors.text} mb-2`}>{theme.category}</div>
              <h1 className={`text-3xl ${theme.fonts.title} font-bold ${theme.colors.text} mb-4`}>{theme.title}</h1>
              
              {/* Decorative element */}
              <div className="flex justify-center items-center space-x-4 my-4">
                <div className="flex-grow h-px bg-gray-300"></div>
                <div className="text-2xl">💐</div>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className={`p-6 ${theme.fonts.body}`}>
              {isInvitation ? (
                <>
                  {/* Event details for invitations */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span>{theme.details.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span>{theme.details.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span>{theme.details.location}</span>
                    </div>
                    <div className="text-center mt-8">
                      <p className="italic">{theme.details.description}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Generic content for theme previews */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gray-500" />
                      <span>[Tanggal Acara]</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <span>[Waktu Acara]</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <span>[Lokasi Acara]</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span>[Informasi Penerima]</span>
                    </div>
                    <div className="text-center mt-8">
                      <p className="italic">Ini adalah contoh deskripsi acara. Teks ini akan diganti dengan informasi acara Anda.</p>
                    </div>
                  </div>
                </>
              )}
              
              {/* Footer */}
              <div className="text-center mt-12">
                <p className="text-sm text-gray-500">Dibuat dengan ♥ oleh Digital Invitation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Use theme button (only for theme previews, not invitations) */}
      {!isInvitation && (
        <div className="fixed bottom-8 inset-x-0 flex justify-center">
          <Button 
            className="bg-purple-600 hover:bg-purple-700 shadow-lg"
            size="lg"
            asChild
          >
            <Link to="/admin/create">Gunakan Tema Ini</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default PreviewTheme;

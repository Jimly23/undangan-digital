
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, Heart, X, Music } from "lucide-react";

const MochaTheme = () => {
  const { guestName } = useParams<{ guestName: string }>();
  const [showBackButton, setShowBackButton] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const decodedGuestName = guestName ? decodeURIComponent(guestName) : "Nama Tamu";

  useEffect(() => {
    // For demonstration, we would connect to an actual audio player here
    console.log("Audio player would initialize here");
    
    return () => {
      // Cleanup audio player
      console.log("Audio player would clean up here");
    };
  }, []);

  const toggleBackButton = () => {
    setShowBackButton(!showBackButton);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Here we would actually control the audio playback
  };

  return (
    <div className="min-h-screen bg-[#f9f5f1] font-serif overflow-hidden">
      {/* Preview Controls */}
      <div 
        className={`fixed top-4 left-4 z-30 transition-opacity duration-300 ${
          showBackButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link to="/">
          <Button variant="outline" size="icon" className="bg-white shadow-md">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div 
        className={`fixed top-4 right-4 z-30 transition-opacity duration-300 ${
          showBackButton ? "opacity-100" : "opacity-0"
        }`}
      >
        <Button variant="outline" size="icon" className="bg-white shadow-md" onClick={toggleBackButton}>
          <X className="h-5 w-5" />
        </Button>
      </div>

      {/* Music Control */}
      <div className="fixed bottom-4 right-4 z-30">
        <Button 
          variant="outline" 
          size="icon" 
          className={`rounded-full ${isPlaying ? 'bg-amber-700 text-white' : 'bg-white'} shadow-md h-12 w-12`} 
          onClick={toggleMusic}
        >
          <Music className="h-5 w-5" />
        </Button>
      </div>

      {/* Full Screen Preview */}
      <div className="min-h-screen" onClick={toggleBackButton}>
        {/* Top Decoration */}
        <div className="w-full h-40 bg-[#5C3D2A] relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618516976777-a725a6ece73e?q=80&w=1074')] bg-cover bg-center opacity-30"></div>
          <div className="w-full h-20 absolute -bottom-1 bg-[#f9f5f1] rounded-t-[50%]"></div>
        </div>

        {/* Main Content Container */}
        <div className="container max-w-md mx-auto px-6 -mt-20 relative z-10">
          {/* Couple Names */}
          <div className="text-center mb-10">
            <h1 className="font-serif text-3xl text-amber-800 mb-2">Adelio & Elaina</h1>
            <p className="text-amber-800 italic">We are getting married</p>
          </div>

          {/* Greeting Card */}
          <Card className="bg-white shadow-lg rounded-xl p-6 mb-10 border-amber-200">
            <div className="text-center">
              <p className="text-amber-800 mb-4">Dear,</p>
              <h2 className="font-serif text-2xl text-amber-900 mb-4">{decodedGuestName}</h2>
              <p className="text-amber-700 leading-relaxed">
                We are pleased to announce and invite you to our wedding ceremony. 
                We would be honored by your presence on our special day.
              </p>
            </div>
          </Card>

          {/* Countdown Timer */}
          <div className="flex justify-center mb-10">
            <div className="bg-[#5C3D2A] text-white px-10 py-6 rounded-xl shadow-md">
              <h3 className="text-center font-medium mb-3">Counting Down To</h3>
              <div className="flex gap-4 text-center">
                <div className="flex-1">
                  <div className="text-2xl font-bold">15</div>
                  <div className="text-xs">Days</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">08</div>
                  <div className="text-xs">Hours</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-xs">Minutes</div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold">31</div>
                  <div className="text-xs">Seconds</div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 gap-8 mb-12">
            <Card className="border-amber-200 rounded-xl overflow-hidden">
              <div className="bg-[#5C3D2A] text-white py-4 text-center">
                <h3 className="font-serif text-xl">The Wedding</h3>
              </div>
              <div className="p-6 text-center">
                <div className="mb-4 flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5 text-amber-700" />
                  <span className="text-amber-800">Saturday, 15 July 2024</span>
                </div>
                <div className="mb-4 flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-amber-700" />
                  <span className="text-amber-800">10:00 - 12:00 WIB</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <span className="text-amber-800">Grand Hyatt Hotel, Jakarta</span>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-amber-700 hover:bg-amber-800">
                    Google Maps
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="border-amber-200 rounded-xl overflow-hidden">
              <div className="bg-[#5C3D2A] text-white py-4 text-center">
                <h3 className="font-serif text-xl">The Reception</h3>
              </div>
              <div className="p-6 text-center">
                <div className="mb-4 flex items-center justify-center space-x-2">
                  <Calendar className="h-5 w-5 text-amber-700" />
                  <span className="text-amber-800">Saturday, 15 July 2024</span>
                </div>
                <div className="mb-4 flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-amber-700" />
                  <span className="text-amber-800">13:00 - 16:00 WIB</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <span className="text-amber-800">Grand Hyatt Hotel, Jakarta</span>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-amber-700 hover:bg-amber-800">
                    Add to Calendar
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Love Quote */}
          <div className="text-center mb-12">
            <Heart className="h-6 w-6 text-amber-700 mx-auto mb-3" />
            <p className="text-amber-800 italic">
              "Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres."
            </p>
            <p className="text-amber-700 mt-2">― 1 Corinthians 13:4-7</p>
          </div>

          {/* RSVP Section */}
          <Card className="border-amber-200 rounded-xl overflow-hidden mb-12">
            <div className="bg-[#5C3D2A] text-white py-4 text-center">
              <h3 className="font-serif text-xl">RSVP</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-amber-800 mb-6">
                We would be honored to have you at our wedding. Please let us know if you can make it.
              </p>
              <div className="flex justify-center gap-4">
                <Button className="bg-amber-700 hover:bg-amber-800 w-32">I'll Attend</Button>
                <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 w-32">Sorry, I Can't</Button>
              </div>
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center pb-20">
            <h3 className="font-serif text-2xl text-amber-800 mb-2">Thank You</h3>
            <p className="text-amber-700">Adelio & Elaina</p>
            <div className="mt-8 text-xs text-amber-600">
              Made with ♥ by Digital Invitation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MochaTheme;

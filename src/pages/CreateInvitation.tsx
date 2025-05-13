
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, Calendar, Clock, MapPin, Heart, Music, CreditCard, Image, Upload } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

const CreateInvitation = () => {
  // Store the current step in state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Template details
    templateName: "royal-blue",
    invitationType: "photo",
    slug: "",
    
    // Groom details
    groomFullName: "",
    groomNickname: "",
    groomFatherName: "",
    groomMotherName: "",
    groomWhatsapp: "",
    groomAddress: "",
    
    // Bride details
    brideFullName: "",
    brideNickname: "",
    brideFatherName: "",
    brideMotherName: "",
    brideWhatsapp: "",
    brideAddress: "",
    
    // Date details
    contractDate: "",
    contractPlace: "",
    contractTime: "",
    receptionDate: "",
    receptionVenue: "",
    receptionTime: "",
    
    // Location
    googleMapsUrl: "",
    
    // Bank details
    bankName1: "",
    accountNumber1: "",
    accountName1: "",
    bankName2: "",
    accountNumber2: "",
    accountName2: "",
    
    // Story
    loveStory: "",
    
    // Images
    backgroundPhoto: null,
    couplePhoto: null,
    groomPhoto: null,
    bridePhoto: null,
    galleryPhotos: [],
    
    // Music
    backgroundMusic: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    
    if (name === "galleryPhotos") {
      setFormData(prev => ({ 
        ...prev, 
        [name]: [...prev.galleryPhotos, ...Array.from(files)] 
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Fix the step navigation by making it a proper function that only navigates
  const nextStep = () => {
    console.log("Moving from step", step, "to step", step + 1);
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    console.log("Moving from step", step, "to step", step - 1);
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Berhasil Dibuat",
      description: "Undangan digital berhasil dibuat dan disimpan.",
    });
    console.log("Form submitted:", formData);
  };

  // No changes needed to renderFormStep since it's correctly returning JSX for each step
  const renderFormStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Pengaturan Template</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="templateName">Template Name</Label>
                <Input
                  id="templateName"
                  name="templateName"
                  value={formData.templateName}
                  onChange={handleInputChange}
                  className="mt-1 bg-blue-50 border-blue-200"
                  readOnly
                />
              </div>

              <div>
                <Label>Invitation Type</Label>
                <RadioGroup 
                  value={formData.invitationType} 
                  onValueChange={(value) => handleSelectChange("invitationType", value)}
                  className="flex gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="photo" id="photo" />
                    <Label htmlFor="photo">With Photo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no-photo" id="no-photo" />
                    <Label htmlFor="no-photo">No Photo</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="slug">Slug URL</Label>
                <div className="flex items-center mt-1">
                  <span className="bg-gray-100 px-3 py-2 rounded-l-md text-sm text-gray-500 border border-r-0 border-input">youvitation.com/</span>
                  <Input
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    placeholder="bridegroom-groom_bride"
                    className="rounded-l-none"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button onClick={nextStep} className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                Selanjutnya
              </Button>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-700">Detail Pengantin Pria</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="groomFullName">Nama Lengkap</Label>
                <Input
                  id="groomFullName"
                  name="groomFullName"
                  value={formData.groomFullName}
                  onChange={handleInputChange}
                  placeholder="Nama lengkap pengantin pria"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="groomNickname">Nama Panggilan</Label>
                <Input
                  id="groomNickname"
                  name="groomNickname"
                  value={formData.groomNickname}
                  onChange={handleInputChange}
                  placeholder="Nama panggilan"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="groomFatherName">Nama Ayah</Label>
                <Input
                  id="groomFatherName"
                  name="groomFatherName"
                  value={formData.groomFatherName}
                  onChange={handleInputChange}
                  placeholder="Nama ayah"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="groomMotherName">Nama Ibu</Label>
                <Input
                  id="groomMotherName"
                  name="groomMotherName"
                  value={formData.groomMotherName}
                  onChange={handleInputChange}
                  placeholder="Nama ibu"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="groomWhatsapp">Nomor WhatsApp</Label>
                <Input
                  id="groomWhatsapp"
                  name="groomWhatsapp"
                  value={formData.groomWhatsapp}
                  onChange={handleInputChange}
                  placeholder="Contoh: 081234567890"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="groomAddress">Alamat</Label>
                <Textarea
                  id="groomAddress"
                  name="groomAddress"
                  value={formData.groomAddress}
                  onChange={handleInputChange}
                  placeholder="Alamat lengkap"
                  className="mt-1"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Sebelumnya</Button>
              <Button onClick={nextStep} className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">Selanjutnya</Button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-700">Detail Pengantin Wanita</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="brideFullName">Nama Lengkap</Label>
                <Input
                  id="brideFullName"
                  name="brideFullName"
                  value={formData.brideFullName}
                  onChange={handleInputChange}
                  placeholder="Nama lengkap pengantin wanita"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="brideNickname">Nama Panggilan</Label>
                <Input
                  id="brideNickname"
                  name="brideNickname"
                  value={formData.brideNickname}
                  onChange={handleInputChange}
                  placeholder="Nama panggilan"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="brideFatherName">Nama Ayah</Label>
                <Input
                  id="brideFatherName"
                  name="brideFatherName"
                  value={formData.brideFatherName}
                  onChange={handleInputChange}
                  placeholder="Nama ayah"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="brideMotherName">Nama Ibu</Label>
                <Input
                  id="brideMotherName"
                  name="brideMotherName"
                  value={formData.brideMotherName}
                  onChange={handleInputChange}
                  placeholder="Nama ibu"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="brideWhatsapp">Nomor WhatsApp</Label>
                <Input
                  id="brideWhatsapp"
                  name="brideWhatsapp"
                  value={formData.brideWhatsapp}
                  onChange={handleInputChange}
                  placeholder="Contoh: 081234567890"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="brideAddress">Alamat</Label>
                <Textarea
                  id="brideAddress"
                  name="brideAddress"
                  value={formData.brideAddress}
                  onChange={handleInputChange}
                  placeholder="Alamat lengkap"
                  className="mt-1"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Sebelumnya</Button>
              <Button onClick={nextStep} className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">Selanjutnya</Button>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-700">Informasi Acara</h2>
            
            <div className="space-y-4">
              <h3 className="font-medium">Akad Nikah</h3>
              
              <div>
                <Label htmlFor="contractDate">Tanggal Akad</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="contractDate"
                    name="contractDate"
                    type="date"
                    value={formData.contractDate}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contractTime">Waktu Akad</Label>
                <div className="relative mt-1">
                  <Clock className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="contractTime"
                    name="contractTime"
                    type="time"
                    value={formData.contractTime}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contractPlace">Tempat Akad</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="contractPlace"
                    name="contractPlace"
                    value={formData.contractPlace}
                    onChange={handleInputChange}
                    placeholder="Lokasi acara akad nikah"
                    className="pl-10"
                  />
                </div>
              </div>

              <h3 className="font-medium mt-6">Resepsi</h3>
              
              <div>
                <Label htmlFor="receptionDate">Tanggal Resepsi</Label>
                <div className="relative mt-1">
                  <Calendar className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="receptionDate"
                    name="receptionDate"
                    type="date"
                    value={formData.receptionDate}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="receptionTime">Waktu Resepsi</Label>
                <div className="relative mt-1">
                  <Clock className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="receptionTime"
                    name="receptionTime"
                    type="time"
                    value={formData.receptionTime}
                    onChange={handleInputChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="receptionVenue">Tempat Resepsi</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="receptionVenue"
                    name="receptionVenue"
                    value={formData.receptionVenue}
                    onChange={handleInputChange}
                    placeholder="Lokasi acara resepsi"
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="googleMapsUrl">Google Maps URL</Label>
                <div className="relative mt-1">
                  <MapPin className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="googleMapsUrl"
                    name="googleMapsUrl"
                    value={formData.googleMapsUrl}
                    onChange={handleInputChange}
                    placeholder="URL Google Maps lokasi acara"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Sebelumnya</Button>
              <Button onClick={nextStep} className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">Selanjutnya</Button>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-700">Informasi Bank</h2>
            
            <div className="space-y-4">
              <h3 className="font-medium">Rekening 1</h3>
              
              <div>
                <Label htmlFor="bankName1">Nama Bank</Label>
                <div className="relative mt-1">
                  <CreditCard className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="bankName1"
                    name="bankName1"
                    value={formData.bankName1}
                    onChange={handleInputChange}
                    placeholder="Contoh: BCA, Mandiri, BRI"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="accountNumber1">Nomor Rekening</Label>
                <Input
                  id="accountNumber1"
                  name="accountNumber1"
                  value={formData.accountNumber1}
                  onChange={handleInputChange}
                  placeholder="Nomor rekening"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="accountName1">Atas Nama</Label>
                <Input
                  id="accountName1"
                  name="accountName1"
                  value={formData.accountName1}
                  onChange={handleInputChange}
                  placeholder="Nama pemilik rekening"
                  className="mt-1"
                />
              </div>

              <h3 className="font-medium mt-6">Rekening 2</h3>
              
              <div>
                <Label htmlFor="bankName2">Nama Bank</Label>
                <div className="relative mt-1">
                  <CreditCard className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="bankName2"
                    name="bankName2"
                    value={formData.bankName2}
                    onChange={handleInputChange}
                    placeholder="Contoh: BCA, Mandiri, BRI"
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="accountNumber2">Nomor Rekening</Label>
                <Input
                  id="accountNumber2"
                  name="accountNumber2"
                  value={formData.accountNumber2}
                  onChange={handleInputChange}
                  placeholder="Nomor rekening"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="accountName2">Atas Nama</Label>
                <Input
                  id="accountName2"
                  name="accountName2"
                  value={formData.accountName2}
                  onChange={handleInputChange}
                  placeholder="Nama pemilik rekening"
                  className="mt-1"
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Sebelumnya</Button>
              <Button onClick={nextStep} className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">Selanjutnya</Button>
            </div>
          </div>
        );
        
      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-700">Cerita Cinta</h2>
            
            <div>
              <Label htmlFor="loveStory">Cerita Cinta Anda</Label>
              <div className="relative mt-1">
                <Heart className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                <Textarea
                  id="loveStory"
                  name="loveStory"
                  value={formData.loveStory}
                  onChange={handleInputChange}
                  placeholder="Bagikan cerita cinta Anda, bagaimana Anda bertemu, dll."
                  className="pl-10 min-h-[200px]"
                />
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Sebelumnya</Button>
              <Button onClick={nextStep} className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">Selanjutnya</Button>
            </div>
          </div>
        );
        
      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-700">Upload Foto</h2>
            
            <div className="space-y-5">
              <div>
                <Label htmlFor="backgroundPhoto">Foto Background</Label>
                <div className="mt-1 border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
                  <Input
                    id="backgroundPhoto"
                    name="backgroundPhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="backgroundPhoto" className="cursor-pointer">
                    <Image className="mx-auto h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Klik untuk upload foto background</p>
                    <p className="text-xs text-gray-500">(Rasio 16:9 disarankan)</p>
                  </label>
                </div>
              </div>
              
              <div>
                <Label htmlFor="couplePhoto">Foto Bersama</Label>
                <div className="mt-1 border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
                  <Input
                    id="couplePhoto"
                    name="couplePhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="couplePhoto" className="cursor-pointer">
                    <Image className="mx-auto h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Klik untuk upload foto bersama</p>
                  </label>
                </div>
              </div>
              
              <div>
                <Label htmlFor="groomPhoto">Foto Pengantin Pria</Label>
                <div className="mt-1 border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
                  <Input
                    id="groomPhoto"
                    name="groomPhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="groomPhoto" className="cursor-pointer">
                    <Image className="mx-auto h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Klik untuk upload foto pengantin pria</p>
                  </label>
                </div>
              </div>
              
              <div>
                <Label htmlFor="bridePhoto">Foto Pengantin Wanita</Label>
                <div className="mt-1 border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
                  <Input
                    id="bridePhoto"
                    name="bridePhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="bridePhoto" className="cursor-pointer">
                    <Image className="mx-auto h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Klik untuk upload foto pengantin wanita</p>
                  </label>
                </div>
              </div>
              
              <div>
                <Label htmlFor="galleryPhotos">Foto Galeri</Label>
                <div className="mt-1 border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
                  <Input
                    id="galleryPhotos"
                    name="galleryPhotos"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="galleryPhotos" className="cursor-pointer">
                    <Image className="mx-auto h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Klik untuk upload beberapa foto untuk galeri</p>
                    <p className="text-xs text-gray-500">(Bisa pilih lebih dari 1 file)</p>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Sebelumnya</Button>
              <Button onClick={nextStep} className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">Selanjutnya</Button>
            </div>
          </div>
        );
        
      case 8:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-700">Musik Latar</h2>
            
            <div>
              <Label htmlFor="backgroundMusic">Pilih Musik Latar</Label>
              <div className="relative mt-1">
                <Music className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                <Select 
                  name="backgroundMusic" 
                  value={formData.backgroundMusic}
                  onValueChange={(value) => handleSelectChange("backgroundMusic", value)}
                >
                  <SelectTrigger className="pl-10">
                    <SelectValue placeholder="Pilih lagu untuk undangan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="song-1">Perfect - Ed Sheeran</SelectItem>
                    <SelectItem value="song-2">Can't Help Falling in Love - Elvis Presley</SelectItem>
                    <SelectItem value="song-3">A Thousand Years - Christina Perri</SelectItem>
                    <SelectItem value="song-4">Marry Me - Train</SelectItem>
                    <SelectItem value="song-5">All of Me - John Legend</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mt-4">
                <Label htmlFor="customMusic">Atau Upload Musik Sendiri</Label>
                <div className="mt-1 border border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 cursor-pointer">
                  <Input
                    id="customMusic"
                    name="customMusic"
                    type="file"
                    accept="audio/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="customMusic" className="cursor-pointer">
                    <Upload className="mx-auto h-10 w-10 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">Klik untuk upload file musik</p>
                    <p className="text-xs text-gray-500">(Format: MP3, maksimal 5MB)</p>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Sebelumnya</Button>
              <Button onClick={handleSubmit} className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                Buat Undangan
              </Button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link to="/admin" className="mr-4">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Buat Undangan Baru</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-between">
                <span>Form Undangan Pernikahan</span>
                <span className="text-sm font-normal text-gray-500">Langkah {step} dari 8</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <div className="flex items-center">
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="flex-1">
                    <div
                      className={`h-2 rounded-full ${
                        i + 1 <= step ? "bg-gradient-to-r from-primary to-purple-600" : "bg-gray-200"
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Prevent default form submission which might be causing the issue */}
            <div className="space-y-6">
              {renderFormStep()}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreateInvitation;

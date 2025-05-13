
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  Eye,
  Edit,
  Link as LinkIcon,
  Plus,
  Calendar,
  Users,
  MapPin
} from "lucide-react";
import { Invitation } from "@/data/models";

// Mock data for invitations
const invitations: Invitation[] = [
  {
    id: "inv-1",
    title: "Pernikahan Budi & Siti",
    themeId: "theme-1",
    eventDate: "2024-07-15",
    eventTime: "13:00",
    eventLocation: "Hotel Grand Hyatt, Jakarta",
    createdAt: "2024-03-01",
    status: "active",
    invitationUrl: "/preview/inv-1"
  },
  {
    id: "inv-2",
    title: "Ulang Tahun ke-5 Dina",
    themeId: "theme-2",
    eventDate: "2024-04-20",
    eventTime: "15:00",
    eventLocation: "Taman Bermain Wonderland, Bandung",
    createdAt: "2024-03-10",
    status: "draft",
    invitationUrl: "/preview/inv-2"
  },
  {
    id: "inv-3",
    title: "Baby Shower Mira",
    themeId: "theme-3",
    eventDate: "2024-05-05",
    eventTime: "10:00",
    eventLocation: "Rumah Keluarga, Surabaya",
    createdAt: "2024-03-15",
    status: "active",
    invitationUrl: "/preview/inv-3"
  }
];

// Stats for dashboard
const stats = [
  { title: "Total Undangan", value: "3", icon: <Calendar className="h-5 w-5 text-purple-600" /> },
  { title: "Undangan Aktif", value: "2", icon: <Users className="h-5 w-5 text-green-600" /> },
  { title: "Lokasi Teratas", value: "Jakarta", icon: <MapPin className="h-5 w-5 text-blue-600" /> },
];

// Format date function
const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

// Status badge color mapping
const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-800 hover:bg-green-200";
    case "draft":
      return "bg-amber-100 text-amber-800 hover:bg-amber-200";
    case "expired":
      return "bg-red-100 text-red-800 hover:bg-red-200";
    default:
      return "bg-gray-100 text-gray-800 hover:bg-gray-200";
  }
};

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Dasbor Admin</h1>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              <Link to="/admin/create">Buat Undangan Baru</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6 flex items-center">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Invitations List */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Daftar Undangan</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Judul</TableHead>
                    <TableHead>Tanggal Acara</TableHead>
                    <TableHead>Lokasi</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Dibuat Pada</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invitations.map((invitation) => (
                    <TableRow key={invitation.id}>
                      <TableCell className="font-medium">{invitation.title}</TableCell>
                      <TableCell>{formatDate(invitation.eventDate)}</TableCell>
                      <TableCell>{invitation.eventLocation}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(invitation.status)}>
                          {invitation.status === "active" ? "Aktif" : 
                           invitation.status === "draft" ? "Draft" : "Kadaluarsa"}
                        </Badge>
                      </TableCell>
                      <TableCell>{formatDate(invitation.createdAt)}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <LinkIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

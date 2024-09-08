'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Calendar } from "@/components/ui/calendar"
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { BedDouble, Pill, Users, Settings, UserPlus, LayoutDashboard, LogOut } from "lucide-react"
import Link from "next/link"

const data = [
  { name: 'Cardiology', value: 400 },
  { name: 'Neurology', value: 300 },
  { name: 'Pediatrics', value: 300 },
  { name: 'Orthopedics', value: 200 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const appointmentRequests = [
  { id: 1, name: "John Doe", department: "Cardiology", date: "2023-06-25", status: "Pending" },
  { id: 2, name: "Jane Smith", department: "Neurology", date: "2023-06-26", status: "Pending" },
  { id: 3, name: "Bob Johnson", department: "Pediatrics", date: "2023-06-27", status: "Pending" },
]

export default function AdminPanel() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [requests, setRequests] = useState(appointmentRequests)

  const handleApprove = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "Approved" } : req
    ))
  }

  const handleDeny = (id: number) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: "Denied" } : req
    ))
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
            <span className="text-lg font-bold text-gray-800 dark:text-white">Hospital Management</span>
          </div>
          <nav className="flex-1 overflow-y-auto">
            <ul className="p-4 space-y-2">
              <li>
                <Link href="/admin/dashboard" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <LayoutDashboard className="w-5 h-5 mr-3" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/admin/opd" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <Users className="w-5 h-5 mr-3" />
                  OPD Queue
                </Link>
              </li>
              <li>
                <Link href="/admin/beds" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <BedDouble className="w-5 h-5 mr-3" />
                  Bed Availability
                </Link>
              </li>
              <li>
                <Link href="/admin/inventory" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <Pill className="w-5 h-5 mr-3" />
                  Inventory
                </Link>
              </li>
              <li>
                <Link href="/admin/admission" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <UserPlus className="w-5 h-5 mr-3" />
                  Patient Admission
                </Link>
              </li>
              <li>
                <Link href="/admin/settings" className="flex items-center p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <Link href="/login" className="flex items-center w-full p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                </Link>
                </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-6 py-3">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Admin Dashboard</h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">Admin User</span>
              <img className="w-8 h-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">15,231</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Staff</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">245</div>
                  <p className="text-xs text-muted-foreground">+3 new hires this month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Appointments Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">89</div>
                  <p className="text-xs text-muted-foreground">12 more than yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue This Month</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$524,390</div>
                  <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="staff">Staff</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle>Revenue Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {data.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle>Recent Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li>New patient registered - John Doe</li>
                        <li>Appointment scheduled - Dr. Smith with Jane Doe</li>
                        <li>Inventory updated - 100 surgical masks added</li>
                        <li>Staff meeting scheduled for next week</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="patients">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Management</CardTitle>
                    <CardDescription>View and manage patient information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <Input placeholder="Search patients..." className="max-w-sm" />
                      <Button>Add New Patient</Button>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Age</TableHead>
                          <TableHead>Gender</TableHead>
                          <TableHead>Last Visit</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>John Doe</TableCell>
                          <TableCell>45</TableCell>
                          <TableCell>Male</TableCell>
                          <TableCell>2023-06-15</TableCell>
                          <TableCell>
                            <Button variant="ghost">View</Button>
                            <Button variant="ghost">Edit</Button>
                          </TableCell>
                        </TableRow>
                        {/* Add more rows as needed */}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="staff">
                <Card>
                  <CardHeader>
                    <CardTitle>Staff Management</CardTitle>
                    <CardDescription>View and manage staff information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <Input placeholder="Search staff..." className="max-w-sm" />
                      <Button>Add New Staff</Button>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Contact</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Dr. Jane Smith</TableCell>
                          <TableCell>Cardiologist</TableCell>
                          <TableCell>Cardiology</TableCell>
                          <TableCell>jane.smith@hospital.com</TableCell>
                          <TableCell>
                            <Button variant="ghost">View</Button>
                            <Button variant="ghost">Edit</Button>
                          </TableCell>
                        </TableRow>
                        {/* Add more rows as needed */}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="appointments">
                <Card>
                  <CardHeader>
                    <CardTitle>Appointment Management</CardTitle>
                    <CardDescription>View and manage appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4 mb-4">
                      <div className="flex-1">
                        <Input placeholder="Search appointments..." />
                      </div>
                      <div className="w-[350px]">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="rounded-md border"
                        />
                      </div>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Patient</TableHead>
                          <TableHead>Department</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {requests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell>{request.name}</TableCell>
                            <TableCell>{request.department}</TableCell>
                            <TableCell>{request.date}</TableCell>
                            <TableCell>{request.status}</TableCell>
                            <TableCell>
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline">View</Button>
                                </DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Appointment Request Details</DialogTitle>
                                    <DialogDescription>
                                      Review the appointment request details below.
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="name" className="text-right">
                                        Name
                                      </Label>
                                      <Input id="name" value={request.name} className="col-span-3" readOnly />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="department" className="text-right">
                                        Department
                                      </Label>
                                      <Input id="department" value={request.department} className="col-span-3" readOnly />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="date" className="text-right">
                                        Date
                                      </Label>
                                      <Input id="date" value={request.date} className="col-span-3" readOnly />
                                    </div>
                                  </div>
                                  <DialogFooter>
                                    <Button onClick={() => handleApprove(request.id)} className="bg-green-600 hover:bg-green-700">Approve</Button>
                                    <Button onClick={() => handleDeny(request.id)} variant="destructive">Deny</Button>
                                  </DialogFooter>
                                </DialogContent>
                              </Dialog>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="inventory">
                <Card>
                  <CardHeader>
                    <CardTitle>Inventory Management</CardTitle>
                    <CardDescription>View and manage hospital inventory</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-4">
                      <Input placeholder="Search inventory..." className="max-w-sm" />
                      <Button>Add New Item</Button>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item Name</TableHead>
                          <TableHead>Quantity</TableHead>
                          <TableHead>Unit</TableHead>
                          <TableHead>Reorder Level</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>Surgical Masks</TableCell>
                          <TableCell>5000</TableCell>
                          <TableCell>pieces</TableCell>
                          <TableCell>1000</TableCell>
                          <TableCell>
                            <Button variant="ghost">Update</Button>
                            <Button variant="ghost">Reorder</Button>
                          </TableCell>
                        </TableRow>
                        {/* Add more rows as needed */}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
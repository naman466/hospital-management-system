'use client'
import { useState } from 'react'
import Link from "next/link"
import { BedDouble, Pill, Users, Settings, UserPlus, LayoutDashboard, LogOut, Plus, Minus, Package} from "lucide-react"

type InventoryItem = {
  id: string
  name: string
  category: 'Medicine' | 'Consumable'
  stock: number
}

export default function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    { id: 'M001', name: 'Paracetamol', category: 'Medicine', stock: 500 },
    { id: 'M002', name: 'Amoxicillin', category: 'Medicine', stock: 200 },
    { id: 'C001', name: 'Surgical Gloves', category: 'Consumable', stock: 1000 },
    { id: 'C002', name: 'Syringes', category: 'Consumable', stock: 750 },
  ])

  const [newItem, setNewItem] = useState({ name: '', category: 'Medicine' as 'Medicine' | 'Consumable', stock: '' })

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault()
    const id = `${newItem.category === 'Medicine' ? 'M' : 'C'}${(inventory.length + 1).toString().padStart(3, '0')}`
    setInventory(prev => [...prev, { ...newItem, id, stock: parseInt(newItem.stock) }])
    setNewItem({ name: '', category: 'Medicine', stock: '' })
  }

  const updateStock = (id: string, amount: number) => {
    setInventory(prev => prev.map(item => 
      item.id === id ? { ...item, stock: Math.max(0, item.stock + amount) } : item
    ))
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
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
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Inventory Management</h1>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">Dr. Jane Doe</span>
              <img className="w-8 h-8 rounded-full" src="/placeholder.svg?height=32&width=32" alt="User avatar" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-100 dark:bg-gray-900">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add New Item</h2>
            <form onSubmit={handleAddItem} className="flex space-x-4">
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Item Name"
                className="flex-1 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <select
                value={newItem.category}
                onChange={(e) => setNewItem(prev => ({ ...prev, category: e.target.value as 'Medicine' | 'Consumable' }))}
                className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="Medicine">Medicine</option>
                <option value="Consumable">Consumable</option>
              </select>
              <input
                type="number"
                value={newItem.stock}
                onChange={(e) => setNewItem(prev => ({ ...prev, stock: e.target.value }))}
                placeholder="Initial Stock"
                className="w-32 p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                <Plus className="inline-block mr-2 h-4 w-4" />
                Add Item
              </button>
            </form>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Item ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {inventory.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Package className="h-5 w-5 text-gray-400 mr-2" />
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{item.id}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{item.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => updateStock(item.id, -1)}
                        className="text-red-600 hover:text-red-900 mr-2"
                      >
                        <Minus className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => updateStock(item.id, 1)}
                        className="text-green-600 hover:text-green-900"
                      >
                        <Plus className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
"use client"

import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../utils/AuthContext"
import apiService from "../utils/api"
import LoadingSpinner from "../components/LoadingSpinner"
import "../styles/Profile.css"
import { LogOut, User, ShoppingBag, Settings } from 'lucide-react'

const Profile = () => {
  const { user, logout, updateProfile } = useContext(AuthContext)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("info")

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: {
      street: user?.address?.street || "",
      city: user?.address?.city || "",
      state: user?.address?.state || "",
      zipCode: user?.address?.zipCode || "",
      country: user?.address?.country || "",
    },
  })

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || {},
      })
    }
  }, [user])

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        try {
          const userOrders = await apiService.getUserOrders()
          setOrders(userOrders)
        } catch (error) {
          console.error("Failed to fetch orders:", error)
        }
      }
      setLoading(false)
    }

    fetchOrders()
  }, [user])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name.includes(".")) {
      const [parent, child] = name.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleProfileUpdate = async (e) => {
    e.preventDefault()
    try {
      await updateProfile(formData)
    } catch (error) {
      console.error("Profile update error:", error)
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (!user) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img src={user.avatar || "./vite.svg"} alt="User Avatar" className="profile-avatar" />
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
      </div>

      <div className="profile-tabs">
        <button onClick={() => setActiveTab("info")} className={`tab-btn ${activeTab === "info" ? "active" : ""}`}>
          <User size={18} /> My Info
        </button>
        <button onClick={() => setActiveTab("orders")} className={`tab-btn ${activeTab === "orders" ? "active" : ""}`}>
          <ShoppingBag size={18} /> Orders
        </button>
        <button onClick={() => setActiveTab("settings")} className={`tab-btn ${activeTab === "settings" ? "active" : ""}`}>
          <Settings size={18} /> Settings
        </button>
      </div>

      <div className="profile-content">
        {activeTab === "info" && (
          <div className="info-section">
            <div className="info-group">
              <span className="info-label">Name</span>
              <span className="info-value">{user.name}</span>
            </div>
            <div className="info-group">
              <span className="info-label">Email</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-group">
              <span className="info-label">Phone</span>
              <span className="info-value">{user.phone || "Not provided"}</span>
            </div>
            <div className="info-group">
              <span className="info-label">Address</span>
              <span className="info-value">
                {user.address?.street ? `${user.address.street}, ${user.address.city}, ${user.address.state} ${user.address.zipCode}` : "Not provided"}
              </span>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="orders-section">
            <h2 className="section-title">Order History</h2>
            {orders.length > 0 ? (
              <ul className="order-list">
                {orders.map((order) => (
                  <li key={order._id} className="order-item-card">
                    <div className="order-summary-header">
                      <div className="order-summary-details">
                        <span className="order-summary-id">Order ID: {order._id.substring(0, 8)}...</span>
                        <span className="order-summary-date">{new Date(order.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="order-summary-status">
                        <span className="order-summary-total">${order.total.toFixed(2)}</span>
                        <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                      </div>
                    </div>
                    <div className="order-products-list">
                      {order.items.map((item) => (
                        <div key={item.product?._id || item._id} className="order-product-item">
                          <img src={item.product?.image} alt={item.product?.name} className="order-product-image" />
                          <div className="order-product-details">
                            <span className="order-product-name">{item.product?.name || 'Product not available'}</span>
                            <span className="order-product-quantity">Qty: {item.quantity}</span>
                          </div>
                          <span className="order-product-price">${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>You have no past orders.</p>
            )}
          </div>
        )}

        {activeTab === "settings" && (
          <div className="settings-section">
            <h2 className="section-title">Update Profile</h2>
            <form onSubmit={handleProfileUpdate} className="settings-form">
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full Name" />
              <input type="email" name="email" value={formData.email} disabled placeholder="Email" />
              <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" />
              <input type="text" name="address.street" value={formData.address.street} onChange={handleInputChange} placeholder="Street" />
              <input type="text" name="address.city" value={formData.address.city} onChange={handleInputChange} placeholder="City" />
              <input type="text" name="address.state" value={formData.address.state} onChange={handleInputChange} placeholder="State" />
              <input type="text" name="address.zipCode" value={formData.address.zipCode} onChange={handleInputChange} placeholder="Zip Code" />
              <button type="submit" className="update-btn">Save Changes</button>
            </form>
          </div>
        )}
      </div>

      <button onClick={logout} className="logout-button">
        <LogOut size={18} /> Logout
      </button>
    </div>
  )
}

export default Profile
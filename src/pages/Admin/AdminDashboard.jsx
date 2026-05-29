import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaFileInvoice, FaSync, FaCheckCircle, FaLayerGroup, FaChevronRight, FaEllipsisV } from "react-icons/fa";
import { BaseURL } from "../../lib/HighFunction";
import "./AdminCssFile/AdminDashboard.css";

const AdminDashboard = () => {
  const [recentOrders, setRecentOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
const storedName = localStorage.getItem("Name");
  const fetchLiveBookings = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BaseURL}bookings`);
      const incomingData = response.data.data || response.data || [];
      setRecentOrders(incomingData.reverse());
    } catch (error) {
      console.log("Err", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveBookings();
  }, []);

  return (
    <div className="dashboard_view">
      
      <div className="dashboard_welcome_header">
        <div>
          <h1>Welcome back, {storedName}!</h1>
          <p>Here is what's happening with your laundry facility today.</p>
        </div>
        <div className="header_action_buttons">
          <button className="export_btn" onClick={fetchLiveBookings} disabled={isLoading}>
            {isLoading ? "Refreshing..." : "Refresh Data"}
          </button>
          <button className="new_order_btn">New Order</button>
        </div>
      </div>

      <div className="stats_grid">
        
        <div className="stat_card">
          <div className="stat_card_top">
            <span className="stat_icon icon_new"><FaFileInvoice /></span>
            <span className="stat_label_badge">Live</span>
          </div>
          <div className="stat_card_middle">
            <h3>New Requests</h3>
            <h2>{recentOrders.length}</h2>
          </div>
          <p className="stat_card_change">Updated just now</p>
        </div>

        <div className="stat_card">
          <div className="stat_card_top">
            <span className="stat_icon icon_washing"><FaSync /></span>
            <span className="stat_label_badge">Ongoing</span>
          </div>
          <div className="stat_card_middle">
            <h3>Washing in Progress</h3>
            <h2>24</h2>
          </div>
          <p className="stat_card_change">+4% from last week</p>
        </div>

        <div className="stat_card">
          <div className="stat_card_top">
            <span className="stat_icon icon_ready"><FaCheckCircle /></span>
            <span className="stat_label_badge">Immediate</span>
          </div>
          <div className="stat_card_middle">
            <h3>Ready for Delivery</h3>
            <h2>08</h2>
          </div>
          <p className="stat_card_change">+4% from last week</p>
        </div>

        <div className="stat_card">
          <div className="stat_card_top">
            <span className="stat_icon icon_completed"><FaLayerGroup /></span>
            <span className="stat_label_badge">Total</span>
          </div>
          <div className="stat_card_middle">
            <h3>Completed Today</h3>
            <h2>156</h2>
          </div>
          <p className="stat_card_change">+4% from last week</p>
        </div>

      </div>

      <div className="activity_card">
        <div className="card_filter_header">
          <div>
            <h3>Recent Orders</h3>
            <p className="subtext">Latest transactions processed live from database.</p>
          </div>
          <button className="view_all_link">View All Orders <FaChevronRight /></button>
        </div>

        <div className="table_responsive">
          {isLoading && recentOrders.length === 0 ? (
            <div style={{ padding: "30px", textAlign: "center", color: "#64748b" }}>Loading live records...</div>
          ) : recentOrders.length === 0 ? (
            <div style={{ padding: "30px", textAlign: "center", color: "#64748b" }}>No customer bookings found.</div>
          ) : (
            <table className="orders_table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Pickup Address</th>
                  <th>Pickup Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={order._id || index}>
                    
                    <td className="order_id">
                      {order._id ? order._id.slice(-7).toUpperCase() : `ORD-${1000 + index}`}
                    </td>
                    
                    <td className="customer_name_cell">{order.fullName}</td>
                    <td className="address_cell_text">{order.address}</td>
                    <td className="date_cell_text">{order.dateAndTime}</td>
                    
                    <td>
                      <span className="status_badge_dash dynamic_new_request">
                        {order.status || "New Request"}
                      </span>
                    </td>
                    
                    <td>
                      <div className="actions_cell">
                        <button className="view_order_action_btn">View Order</button>
                        <button className="menu_dot_btn"><FaEllipsisV /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
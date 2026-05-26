import React from "react";
import { FaFileInvoice, FaSync, FaCheckCircle, FaLayerGroup, FaChevronRight, FaEllipsisV } from "react-icons/fa";
import "./AdminCssFile/AdminDashboard.css";

const AdminDashboard = () => {
  const stats = [
    { title: "New Requests", count: 12, label: "Today", change: "+4% from last week", icon: <FaFileInvoice />, iconClass: "icon_new" },
    { title: "Washing in Progress", count: 24, label: "Ongoing", change: "+4% from last week", icon: <FaSync />, iconClass: "icon_washing" },
    { title: "Ready for Delivery", count: "08", label: "Immediate", change: "+4% from last week", icon: <FaCheckCircle />, iconClass: "icon_ready" },
    { title: "Completed Today", count: 156, label: "Total", change: "+4% from last week", icon: <FaLayerGroup />, iconClass: "icon_completed" }
  ];

  const recentOrders = [
    { id: "ORD-8821", customer: "Sarah Jenkins", address: "122 Oakwood Dr, Springfield", date: "Mar 24, 2026", status: "New Request" },
    { id: "ORD-8819", customer: "Michael Ross", address: "45 Maple Ave, Heights", date: "Mar 23, 2026", status: "Washing" },
    { id: "ORD-8815", customer: "Emily Chen", address: "882 Broadway, Suite 4", date: "Mar 23, 2024", status: "Ready" },
    { id: "ORD-8812", customer: "Robert Miller", address: "10-B Industrial Park", date: "Mar 22, 2024", status: "Picked Up" },
    { id: "ORD-8808", customer: "Jessica Taylor", address: "712 Pine Street, Apt 12", date: "Mar 21, 2024", status: "Delivered" }
  ];

  const getStatusClass = (status) => status.toLowerCase().replace(" ", "_");

  return (
    <div className="dashboard_view">
      <div className="dashboard_welcome_header">
        <div>
          <h1>Welcome back, Admin</h1>
          <p>Here is what's happening with your laundry facility today.</p>
        </div>
        <div className="header_action_buttons">
          <button className="export_btn">Export Report</button>
          <button className="new_order_btn">New Order</button>
        </div>
      </div>

      <div className="stats_grid">
        {stats.map((item, index) => (
          <div className="stat_card" key={index}>
            <div className="stat_card_top">
              <span className={`stat_icon ${item.iconClass}`}>{item.icon}</span>
              <span className="stat_label_badge">{item.label}</span>
            </div>
            <div className="stat_card_middle">
              <h3>{item.title}</h3>
              <h2>{item.count}</h2>
            </div>
            <p className="stat_card_change">{item.change}</p>
          </div>
        ))}
      </div>

      <div className="activity_card">
        <div className="card_filter_header">
          <div>
            <h3>Recent Orders</h3>
            <p className="subtext">Latest transactions processed in the last 24 hours.</p>
          </div>
          <button className="view_all_link">View All Orders <FaChevronRight /></button>
        </div>

        <div className="table_responsive">
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
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td className="order_id">{order.id}</td>
                  <td className="customer_name_cell">{order.customer}</td>
                  <td className="address_cell_text">{order.address}</td>
                  <td className="date_cell_text">{order.date}</td>
                  <td>
                    <span className={`status_badge_dash ${getStatusClass(order.status)}`}>
                      {order.status}
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
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
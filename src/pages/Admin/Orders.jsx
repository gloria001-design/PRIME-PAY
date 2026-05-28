import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaSearch, FaFilter, FaChevronRight, FaEllipsisV } from 'react-icons/fa';
import { BaseURL } from "../../lib/HighFunction";
import "./AdminCssFile/Orders.css";

const OrdersPage = () => {
  const [ordersData, setOrdersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchLiveOrders = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${BaseURL}bookings`);
      const incomingData = response.data.data || response.data || [];
      setOrdersData(incomingData.reverse());
    } catch (error) {
      // console.log("Err:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveOrders();
  }, []);

  let filteredOrders = [];
  const searchString = searchTerm.toLowerCase();

  for (let order of ordersData) {
    const name = (order.fullName || "").toLowerCase();
    const phone = (order.phoneNumber || "").toLowerCase();
    const id = (order._id || "").toLowerCase();

    if (name.includes(searchString) || phone.includes(searchString) || id.includes(searchString)) {
      filteredOrders.push(order);
    }
  }

  return (
    <div className="orders_view_page">
      
      <div className="orders_header">
        <div className="orders_header_left">
          <h1>Order Management</h1>
          <p>Monitor and process customer laundry requests in real-time.</p>
        </div>
        <button className="new_order_btn">
          <FaPlus className="btn_icon" /> New Order
        </button>
      </div>

      <div className="filter_tabs_scroll">
        <button className="filter_tab_btn active">All Orders <span className="tab_counter_badge">{ordersData.length}</span></button>
        <button className="filter_tab_btn">New Request <span className="tab_counter_badge">{ordersData.length}</span></button>
        <button className="filter_tab_btn">Picked Up <span className="tab_counter_badge">0</span></button>
        <button className="filter_tab_btn">Washing <span className="tab_counter_badge">0</span></button>
        <button className="filter_tab_btn">Ready <span className="tab_counter_badge">0</span></button>
        <button className="filter_tab_btn">Delivered <span className="tab_counter_badge">0</span></button>
      </div>

      <div className="orders_main_card">
        
        <div className="card_action_toolbar">
          <div className="toolbar_title_block">
            <h3>Recent Activity</h3>
            <p>Displaying {filteredOrders.length} matching orders</p>
          </div>
          
          <div className="toolbar_search_actions">
            <div className="table_search_wrapper">
              <FaSearch className="table_search_icon" />
              <input 
                type="text" 
                placeholder="Search by ID, name, or phone..." 
                className="table_search_input" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="more_filters_btn">
              <FaFilter className="btn_icon_small" /> More Filters
            </button>
          </div>
        </div>

        <div className="table_scroll_container">
          {isLoading && ordersData.length === 0 ? (
            <div style={{ padding: "40px", textAlign: "center", color: "#64748b" }}>Loading orders...</div>
          ) : filteredOrders.length === 0 ? (
            <div style={{ padding: "40px", textAlign: "center", color: "#64748b" }}>No matching results found.</div>
          ) : (
            <table className="orders_data_table">
              <thead>
                <tr>
                  <th>Order ID ↑↓</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Pickup Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr key={order._id || index}>
                    
                    <td className="id_cell_text">
                      {order._id ? order._id.slice(-7).toUpperCase() : `ORD-${1000 + index}`}
                    </td>
                    
                    <td>
                      <div className="customer_profile_cell">
                        <img 
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" 
                          alt={order.fullName} 
                          className="table_customer_avatar" 
                        />
                        <div className="customer_cell_info">
                          <span className="customer_cell_name">{order.fullName}</span>
                          <span className="customer_cell_items">{order.phoneNumber || "No Phone"}</span>
                        </div>
                      </div>
                    </td>
                    
                    <td className="address_cell_text">{order.address}</td>
                    <td className="date_cell_text">{order.dateAndTime}</td>
                    
                    <td>
                      <span className="status_pill_badge new_request">
                        {order.status || 'New Request'}
                      </span>
                    </td>
                    
                    <td>
                      <div className="actions_cell_group">
                        <button className="table_view_action_btn">
                          View <FaChevronRight className="view_arrow" />
                        </button>
                        <button className="table_dot_menu_btn"><FaEllipsisV /></button>
                      </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        <footer className="table_pagination_footer">
          <div className="pagination_meta_text">
            Showing <span className="bold_meta">1-{filteredOrders.length}</span> of <span className="bold_meta">{ordersData.length}</span> orders
          </div>
          <div className="pagination_button_group">
            <button className="arrow_nav_btn" disabled>Previous</button>
            <button className="numeric_page_btn active">1</button>
            <button className="arrow_nav_btn" disabled>Next</button>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default OrdersPage;
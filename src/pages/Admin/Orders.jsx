import React from 'react';
import { FaPlus, FaSearch, FaFilter, FaChevronRight, FaEllipsisV } from 'react-icons/fa';
import "./AdminCssFile/Orders.css";

const OrdersPage = () => {
  const filterTabs = [
    { label: 'All Orders', count: 124, active: true },
    { label: 'New Request', count: 12, active: false },
    { label: 'Picked Up', count: 8, active: false },
    { label: 'Washing', count: 24, active: false },
    { label: 'Ready', count: 18, active: false },
    { label: 'Delivered', count: 62, active: false }
  ];

  const ordersData = [
    { id: 'ORD-8291', name: 'Sarah Johnson', items: '12 Items', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', address: '124 Bluebell Lane, Seattle', date: 'Mar 24, 2026', status: 'Washing' },
    { id: 'ORD-8292', name: 'Michael Chen', items: '5 Items', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', address: '889 Highland Ave, Seattle', date: 'Mar 24, 2026', status: 'Ready' },
    { id: 'ORD-8293', name: 'Emma Wilson', items: '8 Items', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', address: '42 Oak Street, Bellevue', date: 'Mar 23, 2026', status: 'Delivered' },
    { id: 'ORD-8294', name: 'David Miller', items: '3 Items', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', address: '712 Pineview Dr, Redmond', date: 'Mar 25, 2026', status: 'New Request' },
    { id: 'ORD-8295', name: 'Olivia Davis', items: '15 Items', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100', address: '19 Sunset Blvd, Seattle', date: 'Mar 24, 2026', status: 'Picked Up' }
  ];

  const getStatusClass = (status) => {
    return status.toLowerCase().replace(' ', '_');
  };

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
        {filterTabs.map((tab, idx) => (
          <button key={idx} className={`filter_tab_btn ${tab.active ? 'active' : ''}`}>
            {tab.label} <span className="tab_counter_badge">{tab.count}</span>
          </button>
        ))}
      </div>

      <div className="orders_main_card">
        
        <div className="card_action_toolbar">
          <div className="toolbar_title_block">
            <h3>Recent Activity</h3>
            <p>Displaying 5 orders matching current filters</p>
          </div>
          
          <div className="toolbar_search_actions">
            <div className="table_search_wrapper">
              <FaSearch className="table_search_icon" />
              <input type="text" placeholder="Search by ID or name..." className="table_search_input" />
            </div>
            <button className="more_filters_btn">
              <FaFilter className="btn_icon_small" /> More Filters
            </button>
          </div>
        </div>

        <div className="table_scroll_container">
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
              {ordersData.map((order) => (
                <tr key={order.id}>
                  <td className="id_cell_text">{order.id}</td>
                  <td>
                    <div className="customer_profile_cell">
                      <img src={order.avatar} alt={order.name} className="table_customer_avatar" />
                      <div className="customer_cell_info">
                        <span className="customer_cell_name">{order.name}</span>
                        <span className="customer_cell_items">{order.items}</span>
                      </div>
                    </div>
                  </td>
                  <td className="address_cell_text">{order.address}</td>
                  <td className="date_cell_text">{order.date}</td>
                  <td>
                    <span className={`status_pill_badge ${getStatusClass(order.status)}`}>
                      {order.status}
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
        </div>

        <footer className="table_pagination_footer">
          <div className="pagination_meta_text">
            Showing <span className="bold_meta">1-5</span> of <span className="bold_meta">124</span> orders
          </div>
          <div className="pagination_button_group">
            <button className="arrow_nav_btn" disabled>Previous</button>
            <button className="numeric_page_btn active">1</button>
            <button className="numeric_page_btn">2</button>
            <button className="numeric_page_btn">3</button>
            <span className="pagination_gap_dots">...</span>
            <button className="numeric_page_btn">12</button>
            <button className="arrow_nav_btn">Next</button>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default OrdersPage;
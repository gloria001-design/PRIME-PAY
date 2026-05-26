import React from "react";
import "../Admin/AdminCssFile/Orders.css";
import Cloth from "../../assets/cloth.png";
import Aisha from "../../assets/aisha.png"
import "../Admin/AdminCssFile/Customers.css"
import { 
  FaPrint, 
  FaEllipsisV, 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock, 
  FaTruck, 
  FaCheckCircle, 
  FaTruckMoving,
  FaSoap 
} from "react-icons/fa";

const OrderDetails = () => {
  const orderData = {
    id: "#ORD-8291",
    serviceName: "Premium Dry Clean",
    type: "Washing",
    date: "Mar 24, 2026, 10:45 AM",
    itemsCount: 12,
    paymentStatus: "Paid",
    value: "94.50",
    currentStep: 1, 
    customer: {
      name: "Sarah Johnson",
      phone: "+1 (555) 234-8901",
      email: "s.johnson@gmail.com"
    },
    logistics: {
      address: "124 Bluebell Lane, Seattle",
      time: "Mar 26, 2:00 PM - 4:00 PM",
      method: "Contactless Drop-off"
    },
    items: [
      { id: 1, desc: "Premium Cotton Shirt", cat: "Menswear", qty: 5, unit: 4.50, total: 22.50 },
      { id: 2, desc: "Formal Trousers", cat: "Menswear", qty: 3, unit: 6.00, total: 18.00 },
      { id: 3, desc: "King Size Bedsheet", cat: "Home", qty: 1, unit: 12.00, total: 12.00 },
      { id: 4, desc: "Silk Scarf", cat: "Delicates", qty: 2, unit: 8.50, total: 17.00 },
      { id: 5, desc: "Heavy Winter Coat", cat: "Outerwear", qty: 1, unit: 25.00, total: 25.00 }
    ],
    pricing: {
      subtotal: "94.50",
      fee: "4.72",
      total: "99.22"
    },
    adminNotes: "Customer requested extra starch on the formal shirts. Please ensure no plastic hangers are used for the silk scarf.",
    driver: null 
  };

  const timelineSteps = [
    { step: 1, label: "Request", desc: "Customer placed order via app" },
    { step: 2, label: "Pickup Scheduled", desc: "Driver assigned for 2:00 PM" },
    { step: 3, label: "Picked Up", desc: "Items collected and tagged" },
    { step: 4, label: "Washing", desc: "In progress at central facility" },
    { step: 5, label: "Ready", desc: "Cleaned, folded, and packed" },
    { step: 6, label: "Delivered", desc: "Returned to customer" }
  ];

  return (
    <div className="dashboard_view_container">
      
      <div className="dashboard_top_bar">
        <div className="breadcrumb">
          <span>Orders</span> &gt; <span className="active_crumb">{orderData.id}</span>
        </div>
        <div className="top_bar_actions">
          <button className="btn_invoice"><FaPrint /> Print Invoice</button>
          <button className="btn_more"><FaEllipsisV /></button>
        </div>
      </div>

      <div className="order_header_card">
        <div className="header_left_block">
          <div className="service_icon_box">
            <img src={Cloth} alt="Service Icon" className="service_icon_img" />
          </div>
          <div className="service_title_box">
            <h2>{orderData.serviceName}</h2>
            <div className="badge_row">
              <span className="badge_type">{orderData.type}</span>
              <span className="timestamp_text">• Created {orderData.date}</span>
            </div>
          </div>
        </div>
        <div className="header_right_block">
          <div className="stat_box">
            <span className="stat_label">ITEMS</span>
            <span className="stat_value_dark">{orderData.itemsCount} Total</span>
          </div>
          <div className="stat_box">
            <span className="stat_label">PAYMENT</span>
            <span className="badge_paid">{orderData.paymentStatus}</span>
          </div>
          <div className="stat_box">
            <span className="stat_label">VALUE</span>
            <span className="stat_value_blue">${orderData.value}</span>
          </div>
        </div>
      </div>

      <div className="dashboard_grid_layout">
        
        <div className="grid_left_side">
          
          <div className="info_cards_row">
            <div className="info_card">
              <h3 className="card_heading"><img src={Aisha} alt="Customer Icon" className="heading_icon" /> Customer Details</h3>
              
              <div className="data_item_row">
                <div className="data_icon_box">
                  <FaUser />
                </div>
                <div className="data_content">
                  <span className="data_label">FULL NAME</span>
                  <span className="data_value">{orderData.customer.name}</span>
                </div>
              </div>

              <div className="data_item_row">
                <div className="data_icon_box">
                  <FaPhone />
                </div>
                <div className="data_content">
                  <span className="data_label">PHONE NUMBER</span>
                  <span className="data_value">{orderData.customer.phone}</span>
                </div>
              </div>

              <div className="data_item_row">
                <div className="data_icon_box">
                  <FaEnvelope />
                </div>
                <div className="data_content">
                  <span className="data_label">EMAIL ADDRESS</span>
                  <span className="data_value">{orderData.customer.email}</span>
                </div>
              </div>
            </div>

            <div className="info_card">
              <h3 className="card_heading"><FaTruck className="heading_icon" /> Logistics Details</h3>
              
              <div className="data_item_row">
                <div className="data_icon_box">
                  <FaMapMarkerAlt />
                </div>
                <div className="data_content">
                  <span className="data_label">PICKUP ADDRESS</span>
                  <span className="data_value">{orderData.logistics.address}</span>
                </div>
              </div>

              <div className="data_item_row">
                <div className="data_icon_box">
                  <FaClock />
                </div>
                <div className="data_content">
                  <span className="data_label">PREFERRED TIME</span>
                  <span className="data_value">{orderData.logistics.time}</span>
                </div>
              </div>

              <div className="data_item_row">
                <div className="data_icon_box">
                  <FaTruck />
                </div>
                <div className="data_content">
                  <span className="data_label">DELIVERY METHOD</span>
                  <span className="data_value">{orderData.logistics.method}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="table_card">
            <div className="table_card_header">
              <div>
                <h3>Service Itemization</h3>
                <p>Detailed list of garments and service costs</p>
              </div>
              <button className="btn_edit_items">Edit Items</button>
            </div>

            <table className="items_table">
              <thead>
                <tr>
                  <th>Item Description</th>
                  <th>Category</th>
                  <th>Qty</th>
                  <th>Unit Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderData.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.desc}</td>
                    <td><span className={`cat_tag tag_${item.cat.toLowerCase()}`}>{item.cat}</span></td>
                    <td>{item.qty}</td>
                    <td>${item.unit.toFixed(2)}</td>
                    <td className="weight_bold">${item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="table_summary_box">
              <div className="summary_row">
                <span>Subtotal:</span>
                <span>${orderData.pricing.subtotal}</span>
              </div>
              <div className="summary_row">
                <span>Service Fee (5%):</span>
                <span>${orderData.pricing.fee}</span>
              </div>
              <div className="summary_row total_row">
                <span>Order Total:</span>
                <span>${orderData.pricing.total}</span>
              </div>
            </div>
          </div>

          <div className="admin_notes_card">
            <h4><span className="yellow_dot"></span> Internal Admin Notes</h4>
            <p>"{orderData.adminNotes}"</p>
          </div>

        </div>

        <div className="grid_right_side">
          
          <div className="lifecycle_card">
            <h3>Order Lifecycle</h3>
            <p className="lifecycle_sub">Track and update processing stage</p>
            
            <div className="timeline_list">
              {timelineSteps.map((t) => (
                <div className="timeline_item" key={t.step}>
                  <div className="timeline_left">
                    {t.step <= orderData.currentStep ? (
                      <FaCheckCircle className="step_done_icon" />
                    ) : (
                      <div className="step_pending_circle">{t.step}</div>
                    )}
                    {t.step !== 6 && <div className="timeline_line"></div>}
                  </div>
                  <div className="timeline_right">
                    <span className={`step_title ${t.step <= orderData.currentStep ? "completed_text" : ""}`}>{t.label}</span>
                    <span className="step_desc">{t.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn_advance">Advance to Next Stage</button>
            <p className="admin_update_time">LAST UPDATED BY ADMIN 2 MINS AGO</p>
          </div>

          <div className="driver_card">
            <h3><FaTruck className="heading_icon" /> Driver Information</h3>
            {orderData.driver ? (
              <div className="driver_assigned_box">
                <p><strong>Name:</strong> {orderData.driver.name}</p>
                <p><strong>Phone:</strong> {orderData.driver.phone}</p>
              </div>
            ) : (
              <div className="driver_empty_box">
                <FaTruckMoving className="empty_truck_icon" />
                <p>No driver assigned yet</p>
              </div>
            )}
            <button className="btn_assign_driver"><FaTruck /> Assign Driver</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderDetails;
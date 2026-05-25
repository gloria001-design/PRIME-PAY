import React from "react";
import "./Dashboard.css";
import {
  FiSearch,
  FiBell,
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiLogOut,
  FiClock,
  FiTruck,
  FiCheckCircle,
  FiClipboard,
  FiMoreVertical,
} from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div>
          <div className="logo">
            <img
            src="https://i.postimg.cc/BZzp3z4t/Frame-1000006450.png"
            alt="PrimePress Logo"
          />
          </div>

          <div className="menu">
            <div className="menu-item active">
              <FiGrid />
              <span>Dashboard</span>
            </div>

            <div className="menu-item">
              <FiShoppingBag />
              <span>Orders</span>
            </div>

            <div className="menu-item">
              <FiUsers />
              <span>Customers</span>
            </div>

            <div className="menu-item">
              <FiBarChart2 />
              <span>Review Analytics</span>
            </div>

            <div className="menu-item">
              <FiSettings />
              <span>Settings</span>
            </div>
          </div>
        </div>

        <div className="logout">
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>

      {/* MAIN */}
      <div className="main">
        {/* TOPBAR */}
        <div className="topbar">
          <div className="top-left">
            <h4>Overview</h4>

            <div className="search-box">
              <FiSearch />
              <input type="text" placeholder="Search orders, customers..." />
            </div>
          </div>

          <div className="top-right">
            <FiBell className="bell" />

            <div className="admin">
              <div>
                <h5>Admin User</h5>
                <p>Store Manager</p>
              </div>

              <img
                src="https://i.pravatar.cc/40"
                alt="admin"
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content">
          {/* HEADER */}
          <div className="content-header">
            <div>
              <h2>Welcome back, Admin</h2>
              <p>
                Here is what's happening with your laundry facility today.
              </p>
            </div>

            <div className="header-btns">
              <button className="export-btn">Export Report</button>
              <button className="new-btn">New Order</button>
            </div>
          </div>

          {/* CARDS */}
          <div className="cards">
            <div className="card">
              <div className="card-top">
                <FiClipboard />
                <span>Today</span>
              </div>

              <h5>New Requests</h5>
              <h2>12</h2>
              <p>+15% from last week</p>
            </div>

            <div className="card">
              <div className="card-top">
                <FiClock />
                <span>Ongoing</span>
              </div>

              <h5>Washing in Progress</h5>
              <h2>24</h2>
              <p>+4% from last week</p>
            </div>

            <div className="card">
              <div className="card-top">
                <FiTruck />
                <span>Pending</span>
              </div>

              <h5>Ready for Delivery</h5>
              <h2>08</h2>
              <p>+2% from last week</p>
            </div>

            <div className="card">
              <div className="card-top">
                <FiCheckCircle />
                <span>Done</span>
              </div>

              <h5>Completed Today</h5>
              <h2>156</h2>
              <p>+13% from last week</p>
            </div>
          </div>

          {/* TABLE */}
          <div className="table-section">
            <div className="table-header">
              <div>
                <h3>Recent Orders</h3>
                <p>
                  Latest transactions processed in the last 24 hours.
                </p>
              </div>

              <span className="view-all">View All Orders</span>
            </div>

            <table>
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
                <tr>
                  <td>ORD-8821</td>
                  <td>Sarah Jenkins</td>
                  <td>122 Oakwood Dr, Springfield</td>
                  <td>Mar 24, 2024</td>
                  <td>
                    <span className="status new">New Request</span>
                  </td>
                  <td>
                    <button>View Order</button>
                    <FiMoreVertical />
                  </td>
                </tr>

                <tr>
                  <td>ORD-8819</td>
                  <td>Michael Ross</td>
                  <td>45 Maple Ave, Heights</td>
                  <td>Mar 23, 2024</td>
                  <td>
                    <span className="status washing">Washing</span>
                  </td>
                  <td>
                    <button>View Order</button>
                    <FiMoreVertical />
                  </td>
                </tr>

                <tr>
                  <td>ORD-8815</td>
                  <td>Emily Chen</td>
                  <td>882 Broadway, Suite 4</td>
                  <td>Mar 23, 2024</td>
                  <td>
                    <span className="status ready">Ready</span>
                  </td>
                  <td>
                    <button>View Order</button>
                    <FiMoreVertical />
                  </td>
                </tr>

                <tr>
                  <td>ORD-8812</td>
                  <td>Robert Miles</td>
                  <td>101 Industrial Park</td>
                  <td>Mar 22, 2024</td>
                  <td>
                    <span className="status picked">Picked Up</span>
                  </td>
                  <td>
                    <button>View Order</button>
                    <FiMoreVertical />
                  </td>
                </tr>

                <tr>
                  <td>ORD-8808</td>
                  <td>Jessica Taylor</td>
                  <td>712 Pine Street, Apt 12</td>
                  <td>Mar 21, 2024</td>
                  <td>
                    <span className="status delivered">Delivered</span>
                  </td>
                  <td>
                    <button>View Order</button>
                    <FiMoreVertical />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* INSIGHT */}
          <div className="insight">
            <div className="insight-icon">💧</div>

            <h4>Weekly Productivity Insight</h4>

            <p>
              Your average turnaround time for "Wash & Fold" is down by 15%
              this week. Great job keeping up with the volume!
            </p>

            <span>Review Analytics</span>
          </div>

          <div className="footer">
            © 2026 PrimePress Laundry Admin Dashboard • Quality Service
            Tracking
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
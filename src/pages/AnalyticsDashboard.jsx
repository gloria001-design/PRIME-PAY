// AnalyticsDashboard.jsx
import "./AnalyticsDashboard.css";
import {
  FiGrid,
  FiClipboard,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiSearch,
  FiBell,
  FiCalendar,
  FiLogOut,
} from "react-icons/fi";

const AnalyticsDashboard = () => {
  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="logo">
          <img
            src="https://i.postimg.cc/BZzp3z4t/Frame-1000006450.png"
            alt="PrimePress Logo"
          />
         
          </div>

          <nav className="menu">
            <div className="menu-item">
              <FiGrid />
              <span>Dashboard</span>
            </div>

            <div className="menu-item">
              <FiClipboard />
              <span>Orders</span>
            </div>

            <div className="menu-item">
              <FiUsers />
              <span>Customers</span>
            </div>

            <div className="menu-item active">
              <FiBarChart2 />
              <span>Review Analytics</span>
            </div>

            <div className="menu-item">
              <FiSettings />
              <span>Settings</span>
            </div>
          </nav>
        </div>

        <div className="logout">
          <FiLogOut />
          <span>Logout</span>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        {/* HEADER */}
        <header className="topbar">
          <div className="search-box">
            <FiSearch />
            <input type="text" placeholder="Search reports..." />
          </div>

          <div className="topbar-right">
            <FiBell className="bell" />

            <div className="admin">
              <div>
                <h4>Admin User</h4>
                <p>Online Manager</p>
              </div>

              <img
                src="https://i.pravatar.cc/40"
                alt="admin"
              />
            </div>
          </div>
        </header>

        {/* PAGE TITLE */}
        <div className="title-section">
          <div>
            <h1>Analytics & Performance</h1>
          </div>

          <button>This Week</button>
        </div>

        {/* STATS */}
        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <span>Avg. Processing Time</span>
              <FiCalendar />
            </div>

            <h2>2.4 Days</h2>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Daily Capacity</span>
              <FiCalendar />
            </div>

            <h2>84%</h2>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <span>Expected Orders</span>
            </div>

            <h2>7 Active</h2>
            <p>Requires priority washing</p>
          </div>
        </section>

        {/* CONTENT GRID */}
        <section className="content-grid">
          {/* REVENUE CHART */}
          <div className="card revenue-card">
            <div className="card-header">
              <h3>Revenue Overview</h3>
              <p>Monthly current vs. Previous period</p>
            </div>

            <div className="chart">
              <div className="bars">
                {[65, 90, 80, 95, 100, 110].map((height, i) => (
                  <div className="month" key={i}>
                    <div className="bar-group">
                      <div
                        className="bar previous"
                        style={{ height: `${height - 10}px` }}
                      ></div>

                      <div
                        className="bar current"
                        style={{ height: `${height}px` }}
                      ></div>
                    </div>

                    <span>
                      {["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}
                    </span>
                  </div>
                ))}
              </div>

              <div className="legend">
                <div>
                  <span className="dot current-dot"></span>
                  Current
                </div>

                <div>
                  <span className="dot previous-dot"></span>
                  Previous
                </div>
              </div>
            </div>
          </div>

          {/* DONUT CHART */}
          <div className="card status-card">
            <div className="card-header">
              <h3>Order Status</h3>
              <p>Live distribution of active jobs</p>
            </div>

            <div className="donut-wrapper">
              <div className="donut-chart"></div>
            </div>

            <div className="status-list">
              <div>
                <span className="status-dot red"></span>
                New Requests
              </div>

              <div>15%</div>

              <div>
                <span className="status-dot blue"></span>
                Picked Up
              </div>

              <div>25%</div>

              <div>
                <span className="status-dot yellow"></span>
                Washing
              </div>

              <div>30%</div>

              <div>
                <span className="status-dot green"></span>
                Ready
              </div>

              <div>15%</div>

              <div>
                <span className="status-dot gray"></span>
                Delivered
              </div>

              <div>10%</div>
            </div>
          </div>

          {/* TOP SERVICES */}
          <div className="card services-card">
            <div className="card-header">
              <h3>Top Services</h3>
              <p>Most requested laundry types</p>
            </div>

            {[
              {
                name: "Wash & Fold",
                value: 42,
                orders: 100,
              },
              {
                name: "Dry Cleaning",
                value: 38,
                orders: 62,
              },
              {
                name: "Ironing",
                value: 9,
                orders: 50,
              },
              {
                name: "Stain Removal",
                value: 11,
                orders: 20,
              },
            ].map((item, index) => (
              <div className="service" key={index}>
                <div className="service-top">
                  <h4>{item.name}</h4>
                  <span>{item.value}%</span>
                </div>

                <p>{item.orders} orders processed</p>

                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* INSIGHTS */}
          <div className="card insights-card">
            <div className="card-header">
              <h3>Weekly Insights</h3>
              <p>Synthesized operational performance</p>
            </div>

            <div className="insight-boxes">
              <div className="insight">
                <h4>Processing Milestone</h4>
                <p>
                  Successfully reduced average wash time by 18% through
                  optimization.
                </p>
              </div>

              <div className="insight">
                <h4>Capacity Alert</h4>
                <p>
                  Dryer 3 is showing high use. Maintenance scheduled.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          © 2026 PrimePress Laundry Admin Dashboard • Quality Service Tracking
        </footer>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;
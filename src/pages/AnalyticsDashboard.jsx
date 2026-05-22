// AnalyticsDashboard.jsx
import "./AnalyticsDashboard.css";
// import "../css/AnalyticsDashboard.css"

const revenueData = [
  { month: "Jan", desktop: 45, mobile: 35 },
  { month: "Feb", desktop: 60, mobile: 40 },
  { month: "Mar", desktop: 55, mobile: 38 },
  { month: "Apr", desktop: 70, mobile: 45 },
  { month: "May", desktop: 65, mobile: 42 },
  { month: "Jun", desktop: 80, mobile: 50 },
];

const topServices = [
  {
    title: "Web & Print",
    percent: 63,
    color: "#3b82f6",
  },
  {
    title: "Dry Cleaning",
    percent: 85,
    color: "#10b981",
  },
  {
    title: "Home Improvement",
    percent: 70,
    color: "#8b5cf6",
  },
];


const AnalyticsDashboard = () => {
  return (
    <div className="dashboard">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-circle"></div>
          <div>
            <h2>PrimeAdmin</h2>
            <p>v2.0</p>
          </div>
        </div>

        <nav className="nav-links">
          <a href="/">Dashboard</a>
          <a href="/">Orders</a>
          <a href="/" className="active">
            Analytics
          </a>
          <a href="/">Settings</a>
        </nav>

        <button className="logout-btn">Logout</button>
      </aside>

      {/* MAIN */}
      <main className="main-content">
        {/* TOPBAR */}
        <div className="topbar">
          <div>
            <h1>Analytics & Performance</h1>
            <p>Track your business insights</p>
          </div>

          <button className="export-btn">This Period</button>
        </div>

        {/* STATS */}
        <section className="stats-grid">
          <div className="stat-card">
            <h4>Avg Response Time</h4>
            <h2>2.4 Days</h2>
          </div>

          <div className="stat-card">
            <h4>Lead Conversion</h4>
            <h2>84%</h2>
          </div>

          <div className="stat-card">
            <h4>Active Projects</h4>
            <h2>7 Active</h2>
          </div>
        </section>

        {/* CHARTS */}
        <section className="charts-grid">
          {/* BAR CHART */}
          <div className="card revenue-card">
            <div className="card-header">
              <h3>Revenue Overview</h3>
              <p>Monthly revenue comparison</p>
            </div>

            <div className="bar-chart">
              {revenueData.map((item, index) => (
                <div className="bar-group" key={index}>
                  <div className="bars">
                    <div
                      className="bar desktop"
                      style={{ height: `${item.desktop}%` }}
                    ></div>

                    <div
                      className="bar mobile"
                      style={{ height: `${item.mobile}%` }}
                    ></div>
                  </div>

                  <span>{item.month}</span>
                </div>
              ))}
            </div>

            <div className="chart-legend">
              <div>
                <span className="legend desktop-color"></span>
                Desktop
              </div>

              <div>
                <span className="legend mobile-color"></span>
                Mobile
              </div>
            </div>
          </div>

          {/* DONUT */}
          <div className="card donut-card">
            <div className="card-header">
              <h3>Order Status</h3>
              <p>Live distribution</p>
            </div>

            <div className="donut-wrapper">
              <div className="donut-chart"></div>
            </div>

            <div className="donut-legend">
              <div>
                <span className="dot pending"></span> Pending
              </div>

              <div>
                <span className="dot progress"></span> Processing
              </div>

              <div>
                <span className="dot shipped"></span> Shipped
              </div>

              <div>
                <span className="dot delivered"></span> Delivered
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM */}
        <section className="bottom-grid">
          {/* SERVICES */}
          <div className="card services-card">
            <div className="card-header">
              <h3>Top Services</h3>
              <p>Most requested services</p>
            </div>

            <div className="services-list">
              {topServices.map((service, index) => (
                <div className="service-item" key={index}>
                  <div className="service-top">
                    <span>{service.title}</span>
                    <span>{service.percent}%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${service.percent}%`,
                        background: service.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INSIGHTS */}
          <div className="card insights-card">
            <div className="card-header">
              <h3>Weekly Insights</h3>
              <p>Performance recommendations</p>
            </div>

            <div className="insight-box">
              <h4>Processing Volume</h4>
              <p>
                Your team handled 18% more requests compared to last week.
              </p>
            </div>

            <div className="insight-box">
              <h4>Capacity Alert</h4>
              <p>
                You may need additional resources during peak hours this week.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AnalyticsDashboard;
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from "../../redux/authSlice"

import logo_image_file from '../../assets/Logo.png';
import dashboard_icon from '../../assets/Layout dashboard.png';
import orders_icon from '../../assets/Shopping bag.png';
import customers_icon from '../../assets/Users.png';
import analytics_icon from '../../assets/analistic.png';
import settings_icon from '../../assets/Settings.png';
import logout_icon from "../../assets/Log out.png";
import search_icon from '../../assets/Search.png';
import bell_icon from '../../assets/notifacationIcon.png';
import "./AdminCssFile/AdminLayout.css";

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const is_active = (path) => location.pathname === path ? 'active' : '';

  const getPageTitle = () => {
    if (location.pathname.includes('/admin/dashboard')) return 'Overview';
    if (location.pathname.includes('/admin/orders')) return 'Orders';
    if (location.pathname.includes('/admin/customers')) return 'Customers';
    if (location.pathname.includes('/admin/analytics')) return 'Review Analytics';
    if (location.pathname.includes('/admin/settings')) return 'Settings';
    return 'Admin Workspace';
  };

  const handleLogout = () => {
  
    dispatch(logout());

    localStorage.removeItem("persist:root");
    localStorage.removeItem("token");

    navigate("/");
  };
const storedName = localStorage.getItem("Name");
  return (
    <div className="admin_layout">
      <aside className="admin_sidebar">
        <div className="sidebar_logo">
          <img 
            src={logo_image_file} 
            alt="PrimePress Logo" 
            className="logo_image" 
          />
          <div className="logo_text">
            <span>PrimePress</span>
            <span className="logo_sub">Laundry Admin</span>
          </div>
        </div>

        <nav className="sidebar_nav">
          <Link to="/admin/dashboard" className={`nav_item ${is_active('/admin/dashboard')}`}>
            <img src={dashboard_icon} alt="" className="nav_icon_img" /> Dashboard
          </Link>
          <Link to="/admin/orders" className={`nav_item ${is_active('/admin/orders')}`}>
            <img src={orders_icon} alt="" className="nav_icon_img" /> Orders
          </Link>
          <Link to="/admin/customers" className={`nav_item ${is_active('/admin/customers')}`}>
            <img src={customers_icon} alt="" className="nav_icon_img" /> Customers
          </Link>
          <Link to="/admin/analytics" className={`nav_item ${is_active('/admin/analytics')}`}>
            <img src={analytics_icon} alt="" className="nav_icon_img" /> Review Analytics
          </Link>
          <Link to="/admin/settings" className={`nav_item ${is_active('/admin/settings')}`}>
            <img src={settings_icon} alt="" className="nav_icon_img" /> Settings
          </Link>
        </nav>
        
        <div className="sidebar_footer">
          <button className="logout_btn" onClick={handleLogout} style={{ cursor: "pointer" }}>
            <img src={logout_icon} alt="" className="nav_icon_img" /> Logout
          </button>
        </div>
      </aside>

      <div className="admin_main_content">
        <header className="admin_navbar">
          <div className="navbar_left">
            <h2 className="navbar_page_title">{getPageTitle()}</h2>
            <div className="global_search_wrapper">
              <img src={search_icon} alt="" className="search_icon_img" />
              <input 
                type="text" 
                placeholder="Search orders, customers..." 
                className="global_search_input"
              />
            </div>
          </div>
          <div className="navbar_right">
            <button className="notification_btn" aria-label="Notifications">
              <img src={bell_icon} alt="Notifications" className="bell_icon_img" />
              <span className="notification_dot"></span>
            </button>
            <div className="user_profile_trigger">
              <div className="user_info">
                <span className="user_name">{storedName}</span>
                <span className="user_role">Store Manager</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" 
                alt="Admin avatar" 
                className="user_avatar" 
              />
            </div>
          </div>
        </header>

        <main className="admin_view_container">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
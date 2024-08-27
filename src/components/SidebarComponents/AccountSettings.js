import { Route, Link, Routes } from "react-router-dom";
import Create from "../ProductManagement/Create";
import View from "../ProductManagement/View";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Sidebar.css'; // Custom CSS for additional styling

export default function AccountSettings() {
  return (
    <div className="account-settings">
      <h5 className="text-primary">Account Settings</h5>
      
      <nav className="nav nav-pills flex-column flex-sm-row mb-3">
        <Link to="create" className="flex-sm-fill text-sm-center nav-link">Create</Link>
        <Link to="view" className="flex-sm-fill text-sm-center nav-link">View</Link>
      </nav>

      <div className="settings-content">
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="create" element={<Create />} />
          <Route path="view" element={<View />} />
        </Routes>
      </div>
    </div>
  );
}

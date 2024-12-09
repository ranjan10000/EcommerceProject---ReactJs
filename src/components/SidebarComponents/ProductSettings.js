import { Route, Link, Routes } from "react-router-dom";
import Create from "../ProductManagement/Create";
import View from "../ProductManagement/View";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Sidebar.css'; 

export default function ProductSettings() {

  return (
    <div className="account-settings p-4 bg-light rounded shadow-sm">

      <h5 className="text-primary mb-4">Product Settings</h5>
      
      <nav className="nav nav-pills flex-column flex-sm-row mb-3">
        <Link to="create" className="flex-sm-fill text-sm-center nav-link">Create</Link>
        <Link to="view" className="flex-sm-fill text-sm-center nav-link">View</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="create" element={<Create />} />
          <Route path="view" element={<View />} />
        </Routes>
      </div>
    
    </div>
  );
}

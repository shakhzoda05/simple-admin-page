import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg'; 

function Sidebar() {
  return (
    <div className="h-screen bg-blue-900 text-white w-64 flex flex-col">
      <div className="p-6 mx-auto mt-5">
        <img src={Logo} alt="Logo" className="h-16 w-16" />
      </div>
      <nav className="flex flex-col space-y-4 p-6">
        <Link to="/add-user" className="hover:bg-blue-700 p-2 rounded border-2 font-bold">Add User</Link>
        <Link to="/users" className="hover:bg-blue-700 p-2 rounded">Users</Link>
        <Link to="/companies" className="hover:bg-blue-700 p-2 rounded">Companies</Link>
      </nav>
    </div>
  );
}

export default Sidebar;

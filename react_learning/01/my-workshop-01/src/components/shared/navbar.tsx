import { Link } from "react-router-dom";
import '../../index.css'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-violet-600 text-white flex justify-between items-center px-6 py-3 shadow-md">
  <div className="font-bold text-lg">DewShop</div>
  <ul className="flex space-x-4">
    <li><Link className="hover:underline" to="/">Home</Link></li>
    <li><Link className="hover:underline" to="/product">Product</Link></li>
    <li><Link className="hover:underline" to="/addproduct">Add Product</Link></li>
    <li><Link className="hover:underline" to="/logout">Logout</Link></li>
  </ul>
</nav>

  );
};

export default Navbar;

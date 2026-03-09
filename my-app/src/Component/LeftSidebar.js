import { Link } from "react-router-dom";

function LeftSidebar() {
  return (
    <div>
      <h3>Menu</h3>

      

      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}

export default LeftSidebar;

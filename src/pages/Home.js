import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="section">
      <h2>title</h2>
      <Outlet />
    </section>
  );
};
export default Home;

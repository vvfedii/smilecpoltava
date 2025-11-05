import Navbar from "../Navbar/Navbar";
import "../Header/Header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <img src="logo.png" className="logo" alt="Logo" />

        <Navbar />
      </div>
    </header>
  );
}

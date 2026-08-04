
import logo from "/images/logo.png";

function Header() {
  return (
    <div className="header">
      <img
        src={logo}
        alt="Nexora AI Logo"
        className="logo-image"
      />

      <div>
        <h1 className="logo">Nexora AI</h1>

        <p className="tagline">
          Your Intelligent Browser Companion
        </p>
      </div>
    </div>
  );
}

export default Header;
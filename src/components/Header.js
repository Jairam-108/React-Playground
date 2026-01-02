import { LOGO_IMG_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="image-logo">
      <img
        className="logo"
        src={LOGO_IMG_URL}
        alt="😋"
      />
      <h1 className="logo-text">Grutam</h1>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li style={{ color: "blue" }}>Cart 🛒</li>
      </ul>
    </div>
  </div>
);

export default Header;
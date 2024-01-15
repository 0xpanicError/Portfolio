import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/panic.png"; // Path to your logo

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.content}>
        <div className={styles.title}>
          <h1> . . 0xpanicError</h1>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

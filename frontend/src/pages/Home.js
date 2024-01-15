import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Page.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <br />
      <br />
      <br />
      <h1>Welcome to My Blockchain Portfolio</h1>
      <br />
      <p>
        Paragraph 1 content goes here. This might include an introduction about
        yourself, your interest in blockchain development, and what visitors can
        expect to find on your website.
      </p>
      <br />
      <p>
        Paragraph 2 content goes here. This might delve deeper into your
        experiences or your philosophy as a blockchain developer.
      </p>
      <br />
      <p>
        Paragraph 3 content goes here. Maybe you want to talk about recent
        projects you've completed or key skills you've acquired.
      </p>
      <br />
      <p>
        Paragraph 4 content goes here. This might be a call to action, asking
        visitors to check out your projects or get in touch with you.
      </p>
    </div>
  );
}

export default Home;

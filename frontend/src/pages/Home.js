import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.aboutBody}>
        <h3>Hi! My name is Yash Saraswat</h3>
        <h2>About Me</h2>
        <p>
          I'm a third year engineering student at IIT Rookee. I'm majoring in
          Material Science but my passion is Blockchain Techonolgy and
          cryptography. I'm a self taught developer and I've been exploring
          these fields since 2022.
        </p>
        <p>
          I harbour a keen interest in the fields of Programmable Trust, ZK
          cryptography, Blockchain Security and Rollups. I'm also the Joint
          Secretary at the Blockchain Society, IIT Roorkee.
        </p>
        <p>
          Before diving into the world of Blockchain, I was engaged in the field
          of Quantum Computuing and Physics. I have also explored mechanical and
          racecar engineering in a motorsports club at my University. I had a
          deep passion for pursuing my curiosty in physics and technology.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>
            <b>Programing languages:</b> Rust, Solidity, Javascript/Typescript,
            Go, C++
          </li>
          <li>
            <b>Web Development:</b> ExpressJs, MongoDB, React, Actix
          </li>
          <li>
            <b>Blockchain Development:</b> EVM, Remix, Ethers.js, Foundry, Huff
          </li>
          <li>
            <b>Tools:</b> Git, GitHub, Postman, Docker
          </li>
          <li>
            <b>Math:</b> Linear Algebra, Abstract Algebra, Multivariable
            Calculus, Differential Calculus, Elliptic Curves cryptography,
            Polynomial Commitments,Groth16, PLonk
          </li>
        </ul>
        <h2>Contact Me</h2>
        <p>If you wanna chat, just hit me up!</p>
        <ul>
          <li>
            <b>Email:</b> theyashsaraswat@gmail.com
          </li>
          <li>
            <b>Discord:</b> 0xpanicError
          </li>
          <li>
            <b>Twitter:</b>{" "}
            <a
              href="https://twitter.com/0xpanicError"
              target="_blank"
              style={{ color: "white" }}
            >
              0xpanicError
            </a>
          </li>
          <li>
            <b>GitHub:</b>
            <a
              href="https://github.com/0xpanicError"
              target="_blank"
              style={{ color: "white" }}
            >
              0xpanicError
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

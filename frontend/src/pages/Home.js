import React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Page.module.css";

function Home() {
  return (
    <div className={styles.container}>
      {" "}
      <Navbar />
      <div className={styles.aboutBody}>
        <br />
        <br />
        <br />
        <h3>Hi! My name is Yash Saraswat but you can call me panic.</h3>
        <h2>About Me</h2>
        <p>
          I'm a third year engineering student at IIT Rookee. I'm majoring in
          Material Science but my passion is Blockchain Techonolgy and
          cryptography. I'm a self taught developer and I've been exploring
          these fields since 2022.
        </p>
        <p>
          I harbour a keen interest in the fields of Restaking and Programmable
          Trust, ZK cryptography, Blockchain Security and Rollups. I'm also the
          Joint Secretary at the Blockchain Society, IIT Roorkee.
        </p>
        <p>
          Before diving into the world of Blockchain, I was enganed in the field
          of Quantum Computuing and Physics. I have also explored mechanical and
          racecar engineering in a motorsports club at my University. I have a
          deep passion for pursuing my curiosty in physics and technology.
        </p>
        <h2>Skills</h2>
        <ul>
          <li>
            <b>Programing languages:</b> Rust, Solidity, Javascript/Typescript,
            C++
          </li>
          <li>
            <b>Web Development:</b> ExpressJs, MongoDB, Actix
          </li>
          <li>
            <b>Blockchain Development:</b> EVM, Remix, Ethers.js, Foundry, Huff
          </li>
          <li>
            <b>Tools:</b> Git, GitHub, Postman, Docker
          </li>
          <li>
            <b>Math:</b> Linear Algebra, Abstract Algebra, Multivariable
            Calculus, Differential Calculus, Elliptic Curves cryptography, PLonk
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
            <b>Telegram:</b> @yash2399
          </li>
          <li>
            <b>Twitter:</b> @0xpanicError
          </li>
          <li>
            <b>GitHub:</b> @0xpanicError
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import styles from "../styles/Projects.module.css";
import ProjectCard from "./Card";

const Projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectHeading}>Projects</div>
      <div className={styles.projectList}>
        <ProjectCard
          name={"Aptos Zero Day Futures"}
          description={
            "Developed a fast and secure Zero day to expiry futures trading platform on Aptos L1."
          }
          image={
            "https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_WHT.png"
          }
          githubLink={""}
        />
        <ProjectCard
          name={"FLockChain"}
          description={
            "Built a proof of stake and micro-rollup based federated learning protocol."
          }
          image={
            "https://devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fbecdb269b9ea4e708c7d96329563e478%2Fprojects%2Fa867b6fcdc2d4c669bb865f92f102835%2F5a817da0-90e0-4bcb-b46c-fce59c3a7dc1.jpeg&w=1440&q=75"
          }
          githubLink={"https://github.com/BlocSoc-iitr/FLockChain"}
        />
        <ProjectCard
          name={"zkMask"}
          description={
            "Built a AI and Zero Knowledge based 2 Factor Authentication system for Ethereum based protocols."
          }
          image={"https://avatars.githubusercontent.com/u/140216478?s=200&v=4"}
          githubLink={"https://github.com/zkMask"}
        />
        <ProjectCard
          name={"ConsenSys MetaMask Snaps"}
          description={
            "Some awesome MetaMask Snaps to make your life easier and more secure."
          }
          image={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
          }
          githubLink={"https://github.com/Bisht13/Inter-IIT-2k23"}
        />
      </div>
    </div>
  );
};

export default Projects;

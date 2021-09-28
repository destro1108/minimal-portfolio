import React from "react";
import heroImg from "../assets/zombieing.svg";

const Home = () => {
  return (
    <section className="home">
      <img src={heroImg} alt="display picture" />
      <div className="heroText">
        <span className="headTitle">Hi 👋</span>
        <span className="title">I'm Swanand Buva</span>
      </div>
    </section>
  );
};

export default Home;

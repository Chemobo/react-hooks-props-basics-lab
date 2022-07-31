import React from "react";
import user from "../data/user";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1> 
      <user name= {props.name} city={props.city} bio= {props.bio} color={props.color} links={props.links}></user>
    </div>
  );
}

export default Home;

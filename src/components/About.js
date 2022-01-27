import React from "react";

import user from "./App";
console.log(user);
  
function About(props) {
  let hasBio  = props.bio;
  if (hasBio == ""){
    return "";
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedIn}>{props.linkedIn}</a>
      {props.github, props.linkedIn}
    </div>
  );
}

export default About;

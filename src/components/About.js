import React from "react";
import Links from "./Links";
import user from "./App";
console.log(user);
  
function About({ bio, links}) {
  
  const hasBio = () => {
    if(!bio) {
    return null;
  } return (<p>{bio}</p>);
  }
  // const hasBio = () => {
  //   <p>{bio == "" ? null : bio }</p>
  // }

  return (
    <div id="about">
      <h2>About Me</h2>
      {hasBio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={links}/>
      {links.github, links.linkedin}
    </div>
  );
}

export default About;

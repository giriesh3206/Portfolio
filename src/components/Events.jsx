import React from "react";
import styles from "../styles/Events.module.css";
import { Grids } from "./Grids";

const events = [
  {
    title: "Interface-off",
    date: "Mar 8, 2024",
    location: "Chennai",
    tag: "Design",
    image: "/interface-off.png",
  },
  {
    title: "Host | GDSC Chennai Summit",
    date: "Mar 2, 2024",
    location: "Chennai",
    tag: "Summit",
    image: "/summit.jpg",
  },
  {
    title: "React Nexus",
    date: "Jul 7, 2023",
    location: "Bangalore",
    tag: "React",
    image: "/react-nexus.png",
  },
  {
    title: "JSConf India",
    date: "Jun 2, 2023",
    location: "Bangalore",
    tag: "JavaScript",
    image: "/jsconf.png",
  },
  {
    title: "GDSC WOW",
    date: "April 8, 2023",
    location: "Chennai",
    tag: "Career",
    image: "/GDSC.webp",
  },
  {
    title: "CodeChef Contest",
    date: "September 2023",
    location: "Online",
    tag: "DSA",
    image: "/codechef.jpeg",
  },
  {
    title: "Codeathon",
    date: "October 2023",
    location: "SRM, Chennai",
    tag: "DSA",
    image: "/codeathon.jpeg",
  },
  {
    title: "HackerRank Contest",
    date: "October 2023",
    location: "Online",
    tag: "DSA",
    image: "/hackerrank.png",
  },
];

export function Events() {
  return (
    <section className={styles.events} id="events">
      <div className={styles.title}>
        <h1>Events and Conferences</h1>
      </div>
      <p>
        I’ve actively immersed myself in the tech world through participation in
        various events. These experiences have been instrumental in staying
        current with industry developments and expanding my knowledge
      </p>
      <Grids grids={events} />
    </section>
  );
}

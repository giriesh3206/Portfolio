import styles from "../styles/About.module.css";
export function About() {
  return (
    <section className={styles.about} id="about">
      <div>
        <h1>
          <span className={styles.name}>About</span>
        </h1>
        <p>
          Currently, I'm a first-year student at SRM Ramapuram, doing Bachelor's
          degree in Computer Science. I'm a Technical team member at Google
          Developer Students Club SRM Ramapuram. My fascination with web
          development began when I crafted my very first HTML document. Since
          then, my journey has been marked by a relentless commitment to
          refining my skills. I firmly believe that the web is a powerful canvas
          for transformation, and I'm dedicated to making it a better place.
        </p>
        <p>
          Beyond the realm of coding, you'll often find me on the badminton
          court. This sport not only keeps me physically active but also hones
          my quick reflexes and strategic thinking, skills that are
          transferrable to problem-solving in web development. Music is another
          cornerstone of my life; it's both a source of relaxation and a
          wellspring of creativity.
        </p>
      </div>
      <div>
        <img
          id="profilePic"
          src="https://avatars.githubusercontent.com/u/70448711?v=4"
          alt="profile pic"
        />
      </div>
    </section>
  );
}

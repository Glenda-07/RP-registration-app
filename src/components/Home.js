import featImg from "../assets/vitaly-gariev--X4Qx4_4iMU-unsplash.jpg";

export default function Home() {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Group of RP students collaborating on a project"
      />

      <h1>Home Page</h1>
      <p>
        If you are excited by the latest technological advances and have a passion for problem-solving, 
        join us at RP School of Infocomm (SOI). We will help you discover your hidden technical skills 
        and nurture your creative digital dreams. We offer six diploma programmes across a wide range of 
        infocomm disciplines.
      </p>
    </div>
  );
}

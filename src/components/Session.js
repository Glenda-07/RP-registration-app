import {useParams} from "react-router-dom";
import { getSession } from "../api";

export default function Session() {
  // // Replace the placeholder catId and sessionId variables with a React Router Hook
  // const catId = "3d-printing-and-design";
  // const sessionId = "3d-printing-metal";

  const { moduleId, sessionId } = useParams();

  const session = getSession({ moduleId, sessionId });

  if (!session) {
    return <p>Select a session</p>;
  }

  const { name, desc, speaker } = session;

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{speaker.name}</h4>
      <span>
        {speaker.title} at {speaker.org}
      </span>
      <p>{speaker.bio}</p>
    </>
  );
}

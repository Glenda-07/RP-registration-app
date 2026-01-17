import { useParams, NavLink, Outlet } from "react-router-dom";
import { getModules } from "../api";

export default function Modules() {
  const { schoolId, moduleId } = useParams();
  const module = getModules( moduleId);
  
  if (!module) {
    return <p>Select a Diploma to see modules.</p>;
  }

  return (
    <>
      <h2>{module.name} Sessions</h2>

      <ul className="session-list">
        {module.sessions.map(session => (
          <li className="session" key={session.id}>
            <NavLink
              to={session.id}
              className={({ isActive }) =>
                isActive ? "session-active" : null
              }
            >
              <p className="session-name">{session.name}</p>
              <p>
                {session.speaker.name} | {session.speaker.org}
              </p>
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}

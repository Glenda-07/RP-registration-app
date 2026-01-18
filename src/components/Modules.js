import { useParams, NavLink, Outlet } from "react-router-dom";
import { getModules } from "../api";

export default function Modules() {
  const { moduleId } = useParams(); 
const sessions = getModules(moduleId);

if (!sessions.length) return <p>Select a diploma to see modules.</p>;

return (
  <>
    <h2>Modules</h2>
    <ul className="session">
      {sessions.map(session => (
        <li key={session.id}>
          <NavLink to={session.id}>
            <p>{session.name}</p>
          </NavLink>
        </li>
      ))}
    </ul>
    <Outlet />
  </>
);

}

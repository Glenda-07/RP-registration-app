import { NavLink, Outlet } from "react-router-dom";
import { getSchools } from "../api";

export default function Schools() {
  const schools = getSchools(); 

  return (
    <div className="container">
      <h1>Schools</h1>
      <ul>
        {schools?.map(school => (
          <li key={school.id}>
            <NavLink to={school.id}>{school.name}</NavLink>
          </li>
        ))}
      </ul>

      <Outlet /> 
    </div>
  );
}

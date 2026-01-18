import { Outlet, NavLink,useParams} from "react-router-dom"; 
import { getDiplomas} from "../api";
import { useState } from "react";

export default function Diploma() {
  const { schoolId } = useParams();
  const diplomas = getDiplomas(schoolId); 
  const [query, setQuery] = useState("");

  const filteredDiplomas = diplomas.filter(d =>
  d.name.toLowerCase().includes(query.toLowerCase())
  );


   if (!diplomas) return <p>No diplomas found.</p>;

  return (
    <div className="container">

      <h1>{schoolId} Diploma</h1>
      <br></br> 
      <input
      type="text"
      placeholder="Search for diplomas..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="diploma">
        {filteredDiplomas?.map(diploma => (   
          <li key={diploma.id}>
            <NavLink 
              to={diploma.id}          
              className={({ isActive }) => isActive ? "diploma-active" : null}
            >
              {diploma.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

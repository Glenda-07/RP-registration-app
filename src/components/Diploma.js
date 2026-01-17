import { Outlet, NavLink,useParams} from "react-router-dom"; 
import { getDiploma , getDiplomas} from "../api";

export default function Diploma() {
  const { schoolId } = useParams();
  const diplomas = getDiplomas(schoolId); 

   if (!diplomas) return <p>No diplomas found.</p>;

  return (
    <div className="container">
      <h1>{schoolId} Diploma</h1>

      <ul className="diploma">
        {diplomas?.map(diploma => (   
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

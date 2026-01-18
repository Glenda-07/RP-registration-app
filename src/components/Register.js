import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const courseRef = useRef(null);


  function handleSubmit(event) {
    event.preventDefault();
    navigate("/confirmed", {state: { name:nameRef.current.value, email: emailRef.
    current.value, course:courseRef.current.value }});
  }

  return (
    <div className="container">
      <h1 className="middle">Register your interest now!</h1>
      <p className="middle">
        Register your interest in a diploma course by filling in the form below.
        <br></br>
        <strong className="middle">
          <h3>
            Course available now: 
          </h3>
        </strong>
        <p className="middle">Information Technology</p>
        <p className="middle">Financial Technology</p>
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Course:
          <input type="text" name="course" ref={courseRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

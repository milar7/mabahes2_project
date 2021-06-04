/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Form, Button,Row } from "react-bootstrap";
import { useState ,useEffect} from "react";
import { useHistory } from "react-router-dom";

const Login = ({ auth, setAuth, activePage, setactivePage }) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    setactivePage("auth");

  }, [])

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const findFormErrors = () => {
    const { userName, password } = form;
    const newErrors = {};
    // name errors
    if (userName === undefined || userName === "")
      newErrors.userName = "cannot be blank!";

    // food errors
    if (password === undefined || password === "")
      newErrors.password = "cannot be blank!";
    else if (password.length < 5) {
      newErrors.password = "cannot be less than 5!";
      console.log(password.length);
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      setAuth("1");
      history.push("/");
    }
  };
  return (
    <Container
      className="auth-inner"
      style={{
        backgroundColor: "white",
        marginTop: "10vh",
        padding: "10px",
        borderRadius: "15px",
      }}
    >
      <Form style={{ backgroundColor: "white", margin: "50px" }}>
        <h3>Sign In</h3>

        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setField("userName", e.target.value)}
            isInvalid={!!errors.userName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.userName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => setField("password", e.target.value)}
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
        
      </Form>
      <Row className="justify-content-md-center" style={{marginLeft:"auto"}}>
          <p style={{ background:"none",border:"none",padding:"0",margin:"0"}}>create new account: </p>
          <button onClick={(e)=>{history.push("/register")}} style={{ background:"none",border:"none",padding:"0",marginLeft:"10px",color:"blue"}}>register</button>
        </Row>
    </Container>
  );
};

export default Login;

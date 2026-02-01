import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    dispatch(login(role));
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <h2>Select Role</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => handleLogin("admin")}>Admin</button>
        <button onClick={() => handleLogin("user")}>User</button>
        <button onClick={() => handleLogin("viewer")}>Viewer</button>
      </div>
    </div>
  );
}

export default Login;

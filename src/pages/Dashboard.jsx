import { useSelector, useDispatch } from "react-redux";
import {
  submitItem,
  reviewItem,
  approveItem,
} from "../redux/slices/workflowSlice";

function Dashboard() {
  const role = useSelector(state => state.auth.role);
  const items = useSelector(state => state.workflow.items);
  const dispatch = useDispatch();

  return (
  <div className="page">
    <h2>{role} Dashboard</h2>

    {items.map(item => (
      <div
        key={item.id}
        style={{
          background: "white",
          marginTop: "20px",
          padding: "16px",
          borderRadius: "6px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}
      >
        <h4>{item.title}</h4>
        <p>Status: <strong>{item.status}</strong></p>

        {role === "user" && item.status === "DRAFT" && (
          <button onClick={() => dispatch(submitItem(item.id))}>
            Submit
          </button>
        )}

        {role === "admin" && item.status === "SUBMITTED" && (
          <button onClick={() => dispatch(reviewItem(item.id))}>
            Review
          </button>
        )}

        {role === "admin" && item.status === "IN_REVIEW" && (
          <button onClick={() => dispatch(approveItem(item.id))}>
            Approve
          </button>
        )}

        {role === "viewer" && (
          <p style={{ color: "#666" }}>Read-only access</p>
        )}
      </div>
    ))}
  </div>
);

}

export default Dashboard;

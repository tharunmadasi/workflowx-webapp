import { useSelector, useDispatch } from "react-redux";
import {
  submitItem,
  reviewItem,
  approveItem,
} from "../redux/slices/workflowSlice";

function Dashboard() {
  const role = useSelector((state) => state.auth.role);
  const items = useSelector((state) => state.workflow.items);
  const dispatch = useDispatch();

  return (
    <div className="page">
      <h2>{role} Dashboard</h2>

      {items.length === 0 && <p>No items found</p>}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            background: "white",
            marginTop: "20px",
            padding: "16px",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          {/* 🔹 ITEM DETAILS */}
          <h4>{item.title}</h4>
          <p>
            Status: <strong>{item.status}</strong>
          </p>

          {/* 🔹 ACTION BUTTONS */}
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

          {/* ================================================= */}
          {/* 🔽 HISTORY SECTION — ADDED BELOW BUTTONS 🔽 */}
          {/* ================================================= */}
          <div style={{ marginTop: "15px" }}>
            <h5>History</h5>

            {item.history && item.history.length > 0 ? (
              <ul>
                {item.history.map((entry, index) => (
                  <li key={index}>
                    <strong>{entry.role}</strong>{" "}
                    {entry.action} at {entry.time}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ color: "#888" }}>No history yet</p>
            )}
          </div>
          {/* ================================================= */}

        </div>
      ))}
    </div>
  );
}

export default Dashboard;

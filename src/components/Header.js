import { useNavigate } from "react-router-dom";
import logo from "../assets/oyo.png"; // ✅ THIS LINE FIXES THE ERROR

export default function Header() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 16,
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{ width: 36, cursor: "pointer" }}
        onClick={() => navigate("/")}
      />

      <span
        style={{ cursor: "pointer", color: "#2d2df5", fontWeight: 600 }}
        onClick={() => navigate("/")}
      >
        Home
      </span>
    </div>
  );
}

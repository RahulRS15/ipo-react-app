import { useNavigate } from "react-router-dom";
import { ipoList } from "../data/ipoData";

export default function IPOList() {
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 900, margin: "20px auto", padding: 16 }}>
      <h2 style={{ marginBottom: 16 }}>Upcoming IPOs</h2>

      {ipoList.map((ipo) => (
        <div
          key={ipo.id}
          onClick={() => navigate(`/ipo/${ipo.id}`)}
          style={{
            display: "flex",
            gap: 16,
            padding: 16,
            marginBottom: 16,
            background: "#fff",
            borderRadius: 12,
            cursor: "pointer",
            boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src={ipo.logo}
            alt={ipo.name}
            style={{ width: 48, height: 48 }}
          />

          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0 }}>{ipo.name}</h3>
            <p style={{ color: "#666", margin: "4px 0" }}>
              {ipo.company}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                marginTop: 8,
                fontSize: 14,
              }}
            >
              <div><strong>Date:</strong> {ipo.date}</div>
              <div><strong>Issue Size:</strong> {ipo.issueSize}</div>
              <div><strong>Price:</strong> {ipo.priceRange}</div>
              <div><strong>Min Invest:</strong> ₹{ipo.minInvestment}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

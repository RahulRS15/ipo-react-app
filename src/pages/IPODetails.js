import { useParams } from "react-router-dom";
import { ipoList } from "../data/ipoData";
import Header from "../components/Header";
import Timeline from "../components/Timeline";

export default function IPODetails() {
  const { id } = useParams();
  const ipo = ipoList.find((item) => item.id === Number(id));

  if (!ipo) return <p>IPO not found</p>;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <Header />

      {/* Breadcrumb */}
      <p style={{ color: "#777", fontSize: 14 }}>
        Home &gt; Market Watch
      </p>

      {/* Top Card */}
      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 14,
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ margin: 0 }}>{ipo.name}</h2>
            <p style={{ color: "#666" }}>{ipo.company}</p>
          </div>

          <button
            style={{
              height: 42,
              padding: "0 20px",
              background: "#2d2df5",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Apply Now
          </button>
        </div>

        {/* Details */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 16,
            marginTop: 20,
            fontSize: 14,
          }}
        >
          <Detail label="Issue Size" value={ipo.issueSize} />
          <Detail label="Price Range" value={ipo.priceRange} />
          <Detail label="Lot Size" value={ipo.lots} />
          <Detail label="Min Investment" value={`₹${ipo.minInvestment}`} />
        </div>
      </div>

      {/* Timeline */}
      <Timeline />

      {/* About */}
      <div style={{ background: "#fff", padding: 16, marginTop: 16 }}>
  <h3>About the company</h3>
  <p style={{ lineHeight: 1.6, color: "#555" }}>
    {ipo.about}
  </p>
</div>

    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p style={{ margin: 0, color: "#777" }}>{label}</p>
      <p style={{ margin: "4px 0", fontWeight: 600 }}>{value}</p>
    </div>
  );
}

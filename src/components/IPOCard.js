import { useNavigate } from "react-router-dom";


export default function IPOCard({ ipo }) {
const navigate = useNavigate();


return (
<div
onClick={() => navigate(`/ipo/${ipo.id}`)}
style={{
background: "#fff",
padding: 16,
marginBottom: 12,
borderRadius: 8,
cursor: "pointer",
}}
>
<h3>{ipo.name}</h3>
<p>{ipo.company}</p>
<p>Date: {ipo.date}</p>
<p>Lots: {ipo.lots}</p>
</div>
);
}
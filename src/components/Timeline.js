export default function Timeline() {
const steps = [
"Bidding Starts",
"Bidding Ends",
"Allotment",
"Refund",
"Demat Transfer",
"Listing",
];


return (
<div style={{ background: "#fff", padding: 16, marginTop: 16 }}>
<h3>IPO Timeline</h3>
{steps.map((step, index) => (
<p key={index}>✔ {step}</p>
))}
</div>
);
}
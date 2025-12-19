import { Routes, Route } from "react-router-dom";
import IPOList from "./pages/IPOList";
import IPODetails from "./pages/IPODetails";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<IPOList />} />
        <Route path="/ipo/:id" element={<IPODetails />} />
      </Routes>
    </>
  );
}

export default App;

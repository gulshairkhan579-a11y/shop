"use client";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  const items = [
    { name: "Atta 10 Kilo", price: 1200 },
    { name: "Chawal 5 Kilo", price: 1500 },
    { name: "Cheeni 5 Kilo", price: 800 },
    { name: "Daal 1 Kilo", price: 350 },
    { name: "Oil 1 Litre", price: 450 },
    { name: "Chai 500 Gram", price: 700 },
  ];

  if (page === "saman") {
    return (
      <main style={{ padding: 20, fontFamily: "sans-serif" }}>
        <button onClick={() => setPage("home")}>Wapis</button>
        <h1>Saman Ki List</h1>
        {items.map((i, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: 10, margin: 10, borderRadius: 10, display: "flex", justifyContent: "space-between" }}>
            <span>{i.name}</span><b>Rs {i.price}</b>
          </div>
        ))}
      </main>
    );
  }

  if (page === "khata") {
    return (
      <main style={{ padding: 20, fontFamily: "sans-serif" }}>
        <button onClick={() => setPage("home")}>Wapis</button>
        <h1>Asan Khata</h1>
        <input placeholder="Gahak Ka Naam" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: 10, width: "100%", marginBottom: 10 }} />
        <input placeholder="Udhar Raqam" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ padding: 10, width: "100%", marginBottom: 10 }} />
        <button onClick={() => { if (name && amount) { setList([...list, { name, amount }]); setName(""); setAmount(""); } }} style={{ padding: 12, width: "100%", background: "green", color: "white", border: "none" }}>Khata Me Likhen</button>
        {list.map((l, i) => (
          <div key={i} style={{ border: "1px solid #ddd", padding: 10, marginTop: 10, display: "flex", justifyContent: "space-between" }}>
            <span>{l.name}</span><b>Rs {l.amount}</b>
          </div>
        ))}
      </main>
    );
  }

  return (
    <main style={{ padding: 20, textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>Asan Khata</h1>
      <p>Karyana Store Ka Asan Hisab Kitab</p>
      <button onClick={() => setPage("saman")} style={{ padding: 12, margin: 5, fontSize: 16 }}>Saman Dekhen</button>
      <button onClick={() => setPage("khata")} style={{ padding: 12, margin: 5, fontSize: 16 }}>Asan Khata</button>
      <p style={{ marginTop: 20 }}>Taza Saman - Munasib Qeemat - Asan Hisab</p>
    </main>
  );
}
"use client";

import LevelTable from "../components/LevelTable";

const levels = [
  { position: 1, name: "Acheron", creator: "Ryamu", verifier: "Zoink" },
  { position: 2, name: "Slaughterhouse", creator: "Icedcave", verifier: "Zoink" },
  { position: 76, name: "Artificial Ascent", creator: "ViPriN", verifier: "Riot" }
];

export default function Home() {
  return (
    <main style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "48px", textAlign: "center", marginBottom: "30px" }}>
        Extreme Demon Leaderboard
      </h1>
      <LevelTable levels={levels} />
    </main>
  );
}

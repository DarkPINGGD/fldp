"use client";

import { calculateScore } from "../lib/score";

export default function LevelTable({ levels }: any) {
  return (
    <table className="pc-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Level</th>
          <th>Creator</th>
          <th>Verifier</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {levels.map((l: any) => (
          <tr key={l.position}>
            <td>{l.position}</td>
            <td>{l.name}</td>
            <td>{l.creator}</td>
            <td>{l.verifier}</td>
            <td>{calculateScore(l.position)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

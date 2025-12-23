import "./globals.css";

export const metadata = {
  title: "Extreme Demon List",
  description: "Pointercrate-like Extreme Demon List Phase 1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: "#cce6ff",
          fontFamily: "Arial, sans-serif",
          color: "#000"
        }}
      >
        <header style={{ padding: "20px", textAlign: "center", fontSize: "32px", fontWeight: "bold" }}>
          Extreme Demon Leaderboard
        </header>
        {children}
      </body>
    </html>
  );
}

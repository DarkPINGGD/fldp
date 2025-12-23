import "../globals.css";

export const metadata = {
  title: "Pointercrate Clone",
  description: "Extreme Demon Leaderboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: "20px", textAlign: "center", fontSize: "32px", fontWeight: "bold", backgroundColor: "#b3e0ff" }}>
          Pointercrate Clone
        </header>
        {children}
      </body>
    </html>
  );
}

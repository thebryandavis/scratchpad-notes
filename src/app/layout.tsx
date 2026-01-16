import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scratchpad - Capture ideas. Stay in flow.",
  description: "A warm, minimal note-taking app for makers. Capture thoughts, prompts, and ideas in a beautiful Kanban-style board. Never lose a thought again.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

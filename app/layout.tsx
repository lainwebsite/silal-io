import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silal IO",
  description: "Silal IO website — design explorations",
};

// Shared root layout: keep it bare. Each designer styles inside their own folder.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

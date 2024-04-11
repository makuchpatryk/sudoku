import "@/app/globals.css";
import { Provider } from "@/context/Provider";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "SUDOKU",
  description: "Play sudoku!!",
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>SUDOKU</h1>
      <Provider>
        <main className={`${roboto.className} sudoku`}>
          <div className="wrapper">{children}</div>
        </main>
      </Provider>
    </div>
  );
}

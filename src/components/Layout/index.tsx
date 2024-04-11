import "@/app/globals.css";
import { Provider } from "@/context/Provider";
import { Typography } from "@mui/material";
import { Metadata } from "next";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "SUDOKU",
  description: "Play sudoku!!",
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Typography variant="h3" component="h4">
        SUDOKU
      </Typography>
      <Provider>
        <main className={`${roboto.className} sudoku`}>
          <div className="wrapper">{children}</div>
        </main>
      </Provider>
    </div>
  );
};

export default RootLayout;

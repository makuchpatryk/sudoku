import { Provider } from "@/context/Provider";
import { Typography } from "@mui/material";
import { Roboto } from "next/font/google";
import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Head>
        <title>Sudoku</title>
        <meta name="description" content="sudoku" />\
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
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

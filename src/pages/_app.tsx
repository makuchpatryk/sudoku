import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#6a4bcc",
    },
    secondary: {
      main: "#4CAF50",
    },
    background: {
      default: "#14141e",
      paper: "#1a1a2a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
  },
  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            color: "#ffffff",
            "& fieldset": {
              borderColor: "#555",
            },
            "&:hover fieldset": {
              borderColor: "#777",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6a4bcc",
            },
            "& input::placeholder": {
              color: "#999",
              opacity: 1,
            },
          },
          "& .MuiInputLabel-root": {
            color: "#ccc",
            "&.Mui-focused": {
              color: "#6a4bcc",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#ffffff",
        },
      },
    },
  },
});

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {getLayout(
        <>
          <Head>
            <title>Sudoku App</title>
            <meta name="todo app" content="todo app" />
            <link rel="shortcut icon" href="/sudoku/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </>
      )}
    </ThemeProvider>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SideNav } from "../components/side-nav";
import { Header } from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex">
      <main className="w-full ml-20">
        <SideNav />
        <Header />
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;

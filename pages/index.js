import Head from "next/head";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Login from "../components/Login";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  return isAuthenticated ? (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-black to-indigo-900 overflow-hidden">
      <Head>
        <title>Decentralized Messenger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  ) : (
    <Login />
  );
}

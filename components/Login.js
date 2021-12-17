import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-black text-white">
        <div className="z-10 text-white absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <h1 className="font-bold text-7xl italic font-['Kalam', cursive] bg-gradient-to-r from-blue-300 to-indigo-400 leading-[inherit] bg-clip-text text-transparent text-center">
            Decentralized Messenger
          </h1>
          <div className="text-center">
            <button
              onClick={authenticate}
              className="text-2xl px-10 py-2 rounded-xl font-semibold text-blue-300 bg-indigo-900 animate-pulse"
            >
              Login
            </button>
          </div>
        </div>
        <div className="w-full h-screen fixed bg-black">
          <Image src="/images/home-bg.png" layout="fill" objectFit="cover" />
        </div>
      </div>
    </>
  );
};

export default Login;

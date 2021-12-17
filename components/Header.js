import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="p-5 text-indigo-400 sticky top-0 z-50 border-b-4 border-indigo-500 bg-black">
      <div className="text-center space-y-1">
        <div className="h-24 w-24 sm:h-40 sm:w-40 relative mx-auto border-8 rounded-full border-indigo-500">
          <Avatar logoutOnPress />
        </div>
        <h1 className="text-xl sm:text-3xl font-medium">Welcome to Decentralized Messenger</h1>
        <h2 className="text-2xl sm:text-5xl font-bold truncate">{user.getUsername()}</h2>
      </div>
      <div className="absolute top-5 right-5 text-xs sm:text-sm hover:text-indigo-600">
        <ChangeUsername />
      </div>
    </div>
  );
};

export default Header;

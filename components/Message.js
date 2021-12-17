import { useMoralis } from "react-moralis";
import TimeAgo from "timeago-react";
import Avatar from "./Avatar";

const Message = ({ message }) => {
  const { user } = useMoralis();

  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

  return (
    <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
      <div className={`h-8 w-8 relative ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage ? "rounded-br-none bg-indigo-500" : "rounded-bl-none bg-violet-400"
        }`}
      >
        <p>{message.get("message")}</p>
      </div>

      <TimeAgo
        className={`text-[10px] italic text-gray-400 ${isUserMessage && "order-first pr-1"}`}
        datetime={message.createdAt}
      />

      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-indigo-400" : "text-violet-300"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
};

export default Message;

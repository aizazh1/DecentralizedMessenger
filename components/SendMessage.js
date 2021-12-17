import { useState } from "react";
import { useMoralis } from "react-moralis";
import { MESSAGES_TABLE_NAME } from "../constants";

const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend(MESSAGES_TABLE_NAME);
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(() => {
        endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
      })
      .catch((err) => console.log(err.message));

    setMessage("");
  };

  return (
    <form
      onSubmit={sendMessage}
      className="flex w-11/12 fixed bottom-10 bg-black opacity-80 pr-6 max-w-2xl z-50 shadow-2xl rounded-full border-4 border-indigo-600"
    >
      <input
        type="text"
        className="outline-none flex-grow bg-transparent text-white placeholder-gray-500 px-5 py-4"
        placeholder={`Enter a message ${user.getUsername()}...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="font-bold text-indigo-400 outline-none">
        Send
      </button>
    </form>
  );
};

export default SendMessage;

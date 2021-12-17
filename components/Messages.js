import { useEffect, useRef } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { MESSAGES_TABLE_NAME, MINS_DURATION } from "../constants";
import Message from "./Message";
import SendMessage from "./SendMessage";

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);
  const { data } = useMoralisQuery(
    MESSAGES_TABLE_NAME,
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan("createdAt", new Date(Date.now() - 1000 * 60 * MINS_DURATION)),
    [],
    {
      live: true,
    }
  );

  useEffect(() => {
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  return (
    <div className="pb-36">
      <div className="my-5 space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>

      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}!</p>
      </div>
    </div>
  );
};

export default Messages;

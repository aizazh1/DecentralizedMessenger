import { useState } from "react";
import ChangeUsernameModal from "./ChangeUsernameModal";

const ChangeUsername = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)} className="outline-none">
        Change your Username
      </button>
      <ChangeUsernameModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default ChangeUsername;

import { useState } from "react";
import Modal from "react-modal";
import { useMoralis } from "react-moralis";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    zIndex: 9999,
    border: 0,
    borderRadius: "10px",
    maxHeight: "fit-content",
    outline: 0,
  },
  overlay: {
    zIndex: 9999,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
};

const ChangeUsernameModal = ({ isModalOpen, setIsModalOpen }) => {
  const { setUserData, user } = useMoralis();
  const [username, setUsername] = useState("");

  const setUsernameHandler = (e) => {
    e.preventDefault();
    if (!username) return;
    setUserData({
      username: username,
    });
    setIsModalOpen(false);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={customStyles}
      contentLabel="Example Modal"
      className={`w-11/12 sm:w-1/2 mx-auto bg-white p-8`}
      closeTimeoutMS={1000}
    >
      <form onSubmit={setUsernameHandler}>
        <label htmlFor="username" className="text-indigo-700 font-semibold">
          Username (current: {user.getUsername()})
        </label>
        <input
          type="text"
          placeholder="Enter your new Username"
          value={username}
          id="username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border-2 border-indigo-800 outline-none rounded-lg px-4 py-2 mt-2 text-indigo-700 font-medium"
        />
        <div className="w-full text-center mt-5">
          <button
            type="submit"
            className="border-2 border-indigo-800 px-4 py-2 rounded-lg hover:bg-indigo-300 text-indigo-700 font-medium"
          >
            Change Username
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ChangeUsernameModal;

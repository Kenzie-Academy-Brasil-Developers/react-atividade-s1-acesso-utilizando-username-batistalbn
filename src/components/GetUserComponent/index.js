import { useState } from "react";
import "./style.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = () => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <div>
      <form className="form">
        <input
          className="textArea"
          placeholder="Insira seu nome"
          type="text"
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button onClick={HandleLogin}>Acessar com o nome</button>
      </form>
    </div>
  );
};
export default GetUserComponent;

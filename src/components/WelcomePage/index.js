const WelcomePage = ({ user, setIsLoggedIn }) => {
  function HandleLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <p>Bem-vindo, {user}!</p>
      <button onClick={HandleLogout}>Sair</button>
    </div>
  );
};
export default WelcomePage;

import { useHistory, Redirect } from "react-router-dom";

function Stocks() {
  const history = useHistory();
  const loggedIn = true;
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
  };
  if (!loggedIn) return <Redirect to="/not-logged-in" />;
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;

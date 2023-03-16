import "./styles.css";

export default function App() {
  let text = "";
  const customStyle = {
    color: ""
  };
  if ((new Date().getHours() >= 0) & (new Date().getHours() < 12)) {
    text = "Good morning";
    customStyle.color = "red";
  } else if ((new Date().getHours() >= 12) & (new Date().getHours() < 18)) {
    text = "Good Afternoon ";
    customStyle.color = "green";
  } else {
    text = "Good Evening ";
    customStyle.color = "blue";
  }

  return (
    <div className="App">
      <h1 className="heading" style={customStyle}>
        {text}
      </h1>
    </div>
  );
}

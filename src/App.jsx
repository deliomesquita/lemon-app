import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <Header className="header"></Header>
      <Main className="main"></Main>
      {/* <Footer className="footer"></Footer> */}
    </div>
  );
}

export default App;

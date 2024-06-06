import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header className="header"></Header>
      <Nav className="nav"></Nav>
      <Main className="main"></Main>
      <Footer className="footer"></Footer>
    </>
  );
}

export default App;

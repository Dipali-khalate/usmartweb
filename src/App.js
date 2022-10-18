import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/pages/Navbar";
import { useEffect, useState } from "react";
import Header from "./components/pages/Header";
import Container from "./components/pages/Container";
import Storiesofcust from "./components/pages/Storiesofcust";
import Story from "./components/pages/Story";
import NavCasestdy from "./components/pages/NavCasestdy";
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Datavisu from "./components/routing pages/Datavisu";
import Stargyconst from "./components/routing pages/Stargyconst";
import Dataprep from "./components/routing pages/Dataprep";
import Team from "./components/routing pages/Team";
import Contact from "./components/pages/Contact";
import Mainpage from "./components/pages/Mainpage";

// import About from "./components/pages/About";
// import Main from "./components/pages/Main";
// import Footer from "./components/pages/Footer";

function App() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar scroll={scroll} />
        <Routes>
          <Route path="/" element={<Container />}></Route>
          <Route path="/store" element={<Storiesofcust />}></Route>
          <Route path="/story" element={<Story />}></Route>
          <Route path="/casestudy" element={<NavCasestdy />}></Route>
          <Route path="/datavisu" element={<Datavisu />}></Route>
          <Route path="/stargyconst" element={<Stargyconst/>}></Route>
          <Route path="/dataprep"element={<Dataprep/>}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/contact"element={<Contact/>}></Route>

          {/* <Route path="/" element={<Header />}></Route> */}
        </Routes>
      </BrowserRouter>

      {/* <Navbar scroll={scroll} /> */}
      {/* <Header /> */}
      {/* <Container /> */}
      {/* <Storiesofcust /> */}
      {/* <About /> */}
      {/* <Story /> */}
      {/* <Mainpage/> */}

      {/* **************************routing************************ */}
      {/* <NavCasestdy /> */}
    </>
  );
}

export default App;

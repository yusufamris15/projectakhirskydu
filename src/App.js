import "./App.css";
import Home from "./home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profil/Profil";
import Navbar from "./pages/navbar/Navbar";
import Status from "./pages/status/Status";
import Feed from "./pages/feed/Feed";
import Status1 from "./pages/status1/Status1";
import InfoProfil from "./pages/info-profil/InfoProfil";
import Notifikasi from "./pages/notifikasi/Notifikasi";
import Edit from "./pages/edit-profil/Edit";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-daisy">
        {/* <Link to="/">
          <Home />
        </Link> */}
        <Switch>
          <Route exact path="/">
            <Home />{" "}
          </Route>
          <Route path="/login">
            <Login />{" "}
          </Route>
          <Route path="/signup">
            <Signup />{" "}
          </Route>
          <Route exact path="/profil">
            <Profile />{" "}
          </Route>
          <Route path="/navbar">
            <Navbar />{" "}
          </Route>
          <Route path="/status">
            <Status />{" "}
          </Route>
          <Route path="/status1">
            <Status1 />{" "}
          </Route>
          <Route path="/feed">
            <Feed />{" "}
          </Route>
          <Route path="/InfoProfil">
            <InfoProfil />{" "}
          </Route>
          <Route path="/notifikasi">
            <Notifikasi />{" "}
          </Route>
          <Route path="/edit">
            <Edit />{" "}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

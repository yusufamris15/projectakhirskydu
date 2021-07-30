import React from "react";
import User7 from "../../images/Group94.png";
import User8 from "../../images/Group95.png";
import User9 from "../../images/Group96.png";
import User10 from "../../images/Group97.png";
import Navbar from "../navbar/Navbar";
import "./Notifikasi.scss";

function Notifikasi() {
  return (
    <div className="notifikasi">
      <Navbar />
      <div className="notifikasi-container">
        <div className="notifikasi-inner">
          <div className="notif-1">
            <img src={User7} alt="" width="34px" height="34px" />
            <h3>Cierra Vega</h3>
            <span>likes your post.1d</span>
          </div>
          <div className="notif-2">
            <img src={User8} alt="" width="34px" height="34px" />
            <h3>
              Alden Cantrell <span>commented on your post. 6d</span>
            </h3>
          </div>
          <div className="notif-3">
            <img src={User9} alt="" width="34px" height="34px" />
            <h3>Kierra Gentry</h3>
            <span>follows you. 7d</span>
          </div>
          <div className="notif-4">
            <img src={User10} alt="" width="34px" height="34px" />
            <h3>Bradyn Kramer</h3>
            <span>commented on your post. 7d</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifikasi;

import Gambar2 from "../../images/gbrprofile.png";
import Follow from "../../images/following.png";
// import Edit from '../../images/edit.png';
// import Trash from '../../images/trash.png';
// import Titik from '../../images/Group50.png';
// import Komentar from '../../images/Komentar.png';
// import Like from '../../images/Like.png';
// import Share from '../../images/Share.png';
import "./InfoProfil.css";
import { Link } from "react-router-dom";

import React from "react";

function InfoProfil() {
  return (
    <div>
      <div className="badan">
        <div className="header-profile">
          <div className="container-profile">
            <div className="profile-pict">
              <img src={Gambar2} alt="" width="150px" height="156px" />
            </div>
            <div className="profile-info">
              <div className="info-1">
                <h2>Peter Parker</h2>
                <Link to="/edit">
                  <p>Edit profile </p>
                </Link>

                <Link to="/">
                  <img src={Follow} alt="" width="24px" height="24px" />
                </Link>
              </div>
              <div className="info-2">
                <p>364 posts </p>
                <p>16k followers</p>
                <p>16 following</p>
              </div>

              <p>Kadang mengganggu jika digigit. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProfil;

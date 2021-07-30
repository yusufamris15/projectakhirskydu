import React from "react";
import Gambar2 from "../../images/gbrprofile.png";
import "./Edit.scss";
import Navbar from "../navbar/Navbar";

function Edit() {
  return (
    <div className="edit">
      <Navbar />
      <div className="edit-container">
        <div className="form-edit">
          <div className="edit-title">
            <h2>Edit Profil</h2>
            <hr />
          </div>

          <div className="edit-pict">
            <img src={Gambar2} alt="" height="106px" width="102px" />
            <button>Ubah Foto Profil</button>
          </div>
          <form action="form-edit">
            <label htmlFor="name-profil">
              <input
                type="text"
                name="edit"
                placeholder="Peter Parker"
                id="edit"
              />
            </label>
            <label htmlFor="deskripsi">
              <textarea
                name="status"
                placeholder="Deskripsi"
                id="status"
                cols="55"
                rows="10"
              ></textarea>
            </label>
            <button type="submit">Ubah Profil</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;

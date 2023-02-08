import React from "react";
import img1 from "../../../../assets/img/rpm/Rencana-Pengmas-KK-DS.webp";

const rpmDS = () => {
  return (
    <div>
      <div className="p-lg-5" style={{ overflowX: "auto" }}>
        <p>Berikut adalah rencana  Pengabdian Masyarakat Kelompok Keahlian Data Science </p>
        <div className="container rencana">
        <img className="rencana"
                     src={img1}
                     alt="image description"/>
        </div>
      </div>
    </div>
  );
};

export default rpmDS;

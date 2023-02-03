import React from "react";
import "./Lokasi-Kami.css";

const LokasiKami = ({ data, handleChange }) => {
  return (
    <div>
      <div className="p-lg-5" style={{ overflowX: "auto" }}>
        <div className="container">
          <h2>Fakultas Informatika</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3390576483403!2d107.62634671465509!3d-6.9692676701759835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9bc3974981d%3A0x613eec0feec9fcf7!2sTelkom%20University%20Landmark%20Tower%20(TULT)!5e0!3m2!1sid!2sid!4v1675411977977!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LokasiKami;

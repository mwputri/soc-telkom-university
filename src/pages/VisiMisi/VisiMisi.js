import React from "react";
import "./VisiMisi.css";

const VisiMisi = ({ data, handleChange }) => {
  return (
    <div>
      <div className="p-lg-5" style={{ overflowX: "auto" }}>
        <div className="container">
          <div className="content visi-misi">
            <div className="row">
              <div className="visi">
                <h1>VISI</h1>
                <span>
                  Menjadi Fakultas berkelas dunia yang unggul dalam pendidikan,
                  penelitian, dan kewirausahaan bidang informatika dan komputer
                  yang bermanfaat untuk masyarakat dan berperan aktif dalam
                  meningkatkan daya saing bangsa pada tahun 2023.
                </span>
              </div>

              <div className="misi">
                <h1>MISI</h1>
                <div className="text">
                  <span>
                    1. Menyelenggarakan dan mengembangkan pendidikan berstandar
                    internasional.
                  </span>
                  <br></br>
                  <span>
                    2. Mengembangkan dan menyebarluaskan ilmu pengetahuan dan
                    teknologi bidang informatika dan komputer yang diakui secara
                    internasional.
                  </span>
                  <br></br>
                  <span>
                    3. Memanfaatkan ilmu pengetahuan dan teknologi untuk
                    kesejahteraan dan kemajuan bangsa melalui pengembangan
                    kompetensi entrepreneurial bidang informatika dan komputer.
                  </span>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisi;

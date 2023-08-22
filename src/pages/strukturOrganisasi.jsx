import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../css/strukturOrganisasi.css";
import { SDM } from "../database/dummyDatabase";
const StrukturOrgn = () => {
  const [kateSDM, setKateSDM] = useState(SDM);
  const [jabatan, setJabatan] = useState([false, ""]);
  const [showjabatan, setShowJabatan] = useState(false);

  const ProdilSDM = () => {
    setShowJabatan(true);
    // console.log(a);
    let a = jabatan[1];
    return SDM.filter((item) => item.Nama.includes(a)).map((item) => (
      <div key={item.Nama}>
        <h3>{item.Nama}</h3>
        <ol>
          <li>{item.profil[0]}</li>
          <li>{item.profil[1]}</li>
          <li>{item.profil[2]}</li>
        </ol>
      </div>
    ));
  };

  const FilterSDM = (kate) => {
    if (kate === "") {
      setKateSDM(SDM);
    } else if (kate === "komisaris") {
      setKateSDM(SDM.filter((item) => item.kategori.includes("Komisaris")));
    } else if (kate === "Direksi") {
      setKateSDM(SDM.filter((item) => item.kategori.includes("Direksi")));
    } else if (kate === "Kabag") {
      setKateSDM(SDM.filter((item) => item.kategori.includes("Kabag")));
    } else if (kate === "Staf") {
      setKateSDM(SDM.filter((item) => item.kategori.includes("Staf")));
    } else {
      setKateSDM(SDM);
    }
  };

  const SdmSembada = (data) => {
    return data.map((item) => {
      return (
        <div
          className="card-strukturOrganisasi"
          onClick={() => setJabatan([true, item.Nama])}
        >
          <section
            className="card-strukturOrganisasi"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={item.image} alt="" />
            <div className="overlay">
              <h3
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                {item.Nama}
              </h3>
              <p
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                {item.Jabatan}
              </p>
            </div>
          </section>
          <div className="profil_SDM">
            <ul>
              <li>{item.profil[0]}</li>
              <li>{item.profil[1]}</li>
              <li>{item.profil[2]}</li>
            </ul>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="hero-section-struktur">
        <div
          className="containers-visi"
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>Tentang Kami</h1>
        </div>
      </div>

      <div className="cont-profil-SDM">
        <h2>Profil Manajemen Bank Sembada</h2>

        <div className="kategori-Sdm">
          <button onClick={() => FilterSDM("")}>All</button>
          <button onClick={() => FilterSDM("komisaris")}>KOMISARIS</button>
          <button onClick={() => FilterSDM("Direksi")}>DIREKSI</button>
          <button onClick={() => FilterSDM("Kabag")}>KEPALA BAGIAN</button>
          {/* <button onClick={() => FilterSDM("Staf")}>STAF</button> */}
        </div>

        <div className="cont-cart-profil">{SdmSembada(kateSDM)}</div>
      </div>
    </div>
  );
};
export default StrukturOrgn;

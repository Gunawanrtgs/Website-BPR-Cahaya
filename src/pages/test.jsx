import Axios from "axios";
import { useState } from "react";

const TestAxios = () => {
  const [data, setData] = useState([]);
  const [sim, setSim] = useState([]);

  const getPinjaman = () => {
    Axios.get(`https://api-service.banksembada.com/pinjaman`).then((res) => {
      setData(res.data.payload);
      console.log(res.data.payload);
    });
  };

  const getSimpanan = () => {
    Axios.get(`https://apiservice.banksembada.com/simpanan`).then((res) => {
      setSim(res.data.payload);
      console.log(res.data.payload);
    });
  };

  const postPinjaman = () => {
    const dumPinjaman = {
      date: new Date().toLocaleString(),
      nama_lengkap: "jehan coba di web",
      jenis_pinjaman: "kredit modal kerja",
      no_telephone: 8970400617,
      email: "jehan@gmail.com",
      provinsi: "jawa timur",
      kota: "madiun",
      pekerjaan: "PNS",
      jenis_jaminan: "sertifikat tanah dan bangunan (SHM/SHGB)",
      sertifikat_atas_nama: "pribadi",
      rencana_pinjaman_dana: "diatas 1M",
    };
    Axios.post(
      `https://apiservice.banksembada.com/ajukanpinjaman`,
      dumPinjaman
    ).then((res) => {
      console.log(res);
    });
  };

  const showDataPinjaman = () => {
    let dataPinjaman = data;
    return dataPinjaman.map((item, index) => {
      return (
        <ol key={index}>
          <li>id : {item.id}</li>
          <li>date : {item.date}</li>
          <li>nama : {item.nama_lengkap}</li>
          <li> jenis pinjaman : {item.jenis_pinjaman}</li>
          <li>tlpn : {item.no_telephone}</li>
          <li>email : {item.email}</li>
          <li>provinsi : {item.provinsi}</li>
          <li>kota : {item.kota}</li>
          <li>pekerjaan : {item.pekerjaan}</li>
          <li>id : {item.jenis_jaminan}</li>
          <li>sertifikat atas nama : {item.sertifikat_atas_nama}</li>
          <li>rencana pinjaman dana : {item.rencana_pinjaman_dana}</li>
        </ol>
      );
    });
  };

  const showDataSimpanan = () => {
    let dataSimpanan = sim;
    return dataSimpanan.map((item, index) => {
      return (
        <ol key={index}>
          <ul>id : {item.id}</ul>
          <ul>date : {item.date}</ul>
          <ul>jenis simpanan : {item.jenis_simpanan}</ul>
          <ul>nama : {item.nama_lengkap}</ul>
          <ul>tlpn : {item.no_telephone}</ul>
          <ul>email : {item.email}</ul>
          <ul>provinsi : {item.provinsi}</ul>
          <ul>kota : {item.kota}</ul>
          <ul>penempatan dana : {item.penempatan_dana}</ul>
        </ol>
      );
    });
  };
  return (
    <div>
      <h1>testing</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        atque tenetur porro sequi qui adipisci dolore voluptatibus expedita
        laudantium, similique, est et assumenda fugit tempore? Harum dolores
        dolorum nulla consequatur.
      </p>
      <div className="cont_databaseSem">
        <div>
          <button onClick={getPinjaman}>Get Pinjaman</button>
          {showDataPinjaman()}
        </div>
        <div>
          <button onClick={getSimpanan}>Get Simpanan</button>
          {showDataSimpanan()}
        </div>
      </div>
      <div className="cont_databaseSem">
        <div>
          <button onClick={() => postPinjaman()}>post data pijaman</button>
        </div>
        <div>
          <button>post data simpanan</button>
        </div>
      </div>
    </div>
  );
};

export default TestAxios;

import { InputGroup, Form, Table, Button } from "react-bootstrap";
import "../component/KalkulatorSimpanan.css";
import { useState } from "react";
const KalkulatorSimpanan = () => {
  const initialValue = 0;

  // jenis penempatan dana
  const [jenisSimpanan, setJenisSimpanan] = useState();

  // pajak bunga
  const [pajakBunga, setPajakBunga] = useState([false, ""]);

  // state hasil kalkulasi
  const [hasilDepo, setHasilDepo] = useState([0, 0]);
  const [simpanan, setSimpanan] = useState([0, 0]);

  // state input penempatan
  const [nominal, setNominal] = useState(initialValue);
  const [bunga, SetBunga] = useState(initialValue);
  const [jankaWaktu, setJankaWaktu] = useState([0, ""]);

  // handle nominal
  const HanleNominal = (e) => {
    const value = e.target.value;
    setNominal(value);
  };
  // handle suku bunga
  const HandleJangkaWaktu = (e) => {
    let jangka_waktu = e.target.value;
    if (jangka_waktu === "1") {
      setJankaWaktu([30, "1 Bulan"]);
    } else if (jangka_waktu === "2") {
      setJankaWaktu([60, "2 Bulan"]);
    } else if (jangka_waktu === "3") {
      setJankaWaktu([90, "3 Bulan"]);
    } else if (jangka_waktu === "4") {
      setJankaWaktu([120, "4 Bulan"]);
    } else if (jangka_waktu === "5") {
      setJankaWaktu([150, "5 Bulan"]);
    } else if (jangka_waktu === "6") {
      setJankaWaktu([180, "6 Bulan"]);
    } else if (jangka_waktu === "7") {
      setJankaWaktu([210, "7 Bulan"]);
    } else if (jangka_waktu === "8") {
      setJankaWaktu([240, "8 Bulan"]);
    } else if (jangka_waktu === "9") {
      setJankaWaktu([270, "9 Bulan"]);
    } else if (jangka_waktu === "10") {
      setJankaWaktu([300, "10 Bulan"]);
    } else if (jangka_waktu === "11") {
      setJankaWaktu([330, "11 Bulan"]);
    } else if (jangka_waktu === "12") {
      setJankaWaktu([365, "12 Bulan"]);
    } else if (jangka_waktu === "satu") {
      setJankaWaktu([1, "1 Hari"]);
    } else if (jangka_waktu === "sepuluh") {
      setJankaWaktu([10, "10 Hari"]);
    }
  };

  //   formating input nominal
  const formattedNumber = parseFloat(nominal).toLocaleString("en-US");

  // kalkulasi Deposito
  const KalkulasiDepo = () => {
    if (+nominal >= 7500000) {
      let Bunga1 = +(nominal * bunga * jankaWaktu[0]) / 100;
      let AkumulasiBunga1 = Bunga1 / 365;
      let fixAkumulasiBunga = AkumulasiBunga1 * 0.8;
      let NominalJatuhTempo = +nominal + fixAkumulasiBunga;
      setHasilDepo([fixAkumulasiBunga, NominalJatuhTempo]);
      setPajakBunga([true, "Sudah termasuk pajak pendapatan bunga 20%"]);
    } else {
      let Bunga = +(nominal * bunga * jankaWaktu[0]) / 100;
      let AkumulasiBunga = Bunga / 365;
      let NominalJatuhTempo = +nominal + AkumulasiBunga;
      setHasilDepo([AkumulasiBunga, NominalJatuhTempo]);
      setPajakBunga([false, ""]);
    }
  };

  const ButtonSim = () => {
    return (
      <div className="button-jenis-kredit">
        <button className="onClick" onClick={() => setJenisSimpanan(false)}>
          SIMPANAN
        </button>
        <button className="nonClick" onClick={() => setJenisSimpanan(true)}>
          DEPOSITO
        </button>
      </div>
    );
  };
  const ButtonDep = () => {
    return (
      <div className="button-jenis-kredit">
        <button className="nonClick" onClick={() => setJenisSimpanan(false)}>
          SIMPANAN
        </button>
        <button className="onClick" onClick={() => setJenisSimpanan(true)}>
          DEPOSITO
        </button>
      </div>
    );
  };
  const KalkulatorDeposito = () => {
    return (
      <div className="cont-kalkulator">
        <div className="form-kalkulator">
          <Form.Label htmlFor="basic-url" className="nameKalk">
            Nominal Penempatan Dana Deposito
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Min Rp 1.000.000,00"
              type="number"
              onChange={HanleNominal}
              value={nominal}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url" className="nameKalk">
            Suku Bunga
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="5.75% / Tahun"
              type="number"
              onChange={(e) => SetBunga(e.target.value)}
              value={bunga}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url" className="nameKalk">
            Jangka Waktu
          </Form.Label>
          <Form.Select className="mb-3" onChange={(e) => HandleJangkaWaktu(e)}>
            <option value="1">1 Bulan</option>
            <option value="3">3 Bulan</option>
            <option value="6">6 Bulan</option>
            <option value="12">12 Bulan</option>
          </Form.Select>
        </div>
        <div className="hasil-kalkulator">
          <Form.Label htmlFor="basic-url" className="nameKalk">
            Hasil Simulasi Deposito
          </Form.Label>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={2}>
                  Suku bunga {bunga}% dengan janka waktu penempatan{" "}
                  {jankaWaktu[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pokok penempatan dana</td>
                <td>Rp. {formattedNumber}</td>
              </tr>
              <tr>
                <td>Total akumulasi bunga</td>
                <td>Rp. {hasilDepo[0].toLocaleString()}</td>
              </tr>

              <tr>
                <td>Nominal saat jatuh tempo</td>
                <td>Rp. {hasilDepo[1].toLocaleString()} </td>
              </tr>
              <Form.Text className="TextErr">
                {pajakBunga[0] ? pajakBunga[1] : ""}
              </Form.Text>
            </tbody>
          </Table>
          <Button variant="danger" className="me-4" onClick={KalkulasiDepo}>
            Kalkulasi
          </Button>
        </div>
      </div>
    );
  };
  const KalkulasiSimpanan = () => {
    if (+nominal >= 7500000) {
      let Bunga1 = +(nominal * bunga * jankaWaktu[0]) / 100;
      let AkumulasiBunga1 = Bunga1 / 365;
      let fixAkumulasiBunga = AkumulasiBunga1 * 0.8;
      let NominalJatuhTempo = +nominal + fixAkumulasiBunga;
      setSimpanan([fixAkumulasiBunga, NominalJatuhTempo]);
      setPajakBunga([true, "Sudah termasuk pajak pendapatan bunga 20%"]);
    } else {
      let Bunga = +(nominal * bunga * jankaWaktu[0]) / 100;
      let AkumulasiBunga = Bunga / 365;
      let NominalJatuhTempo = +nominal + AkumulasiBunga;
      setSimpanan([AkumulasiBunga, NominalJatuhTempo]);
      setPajakBunga([false, ""]);
    }
  };
  const KalkulatorSimpanan = () => {
    return (
      <div className="cont-kalkulator">
        <div className="form-kalkulator">
          <Form.Label htmlFor="basic-url" className="nameKalk">
            Nominal Penempatan Dana Tabungan
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Min Rp 50.000,00"
              type="number"
              onChange={HanleNominal}
              value={nominal}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url" className="nameKalk">
            Suku Bunga
          </Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="3% / Tahun"
              type="number"
              onChange={(e) => SetBunga(e.target.value)}
              value={bunga}
            />
          </InputGroup>
          <Form.Label htmlFor="basic-url" className="nameKalk">
            Jangka Waktu
          </Form.Label>
          <Form.Select className="mb-3" onChange={(e) => HandleJangkaWaktu(e)}>
            <option value="satu">1 Hari</option>
            <option value="sepuluh">10 Hari</option>
            <option value="1">1 Bulan</option>
            <option value="2">2 Bulan</option>
            <option value="3">3 Bulan</option>
            <option value="4">4 Bulan</option>
            <option value="5">5 Bulan</option>
            <option value="6">6 Bulan</option>
            <option value="7">7 Bulan</option>
            <option value="8">8 Bulan</option>
            <option value="9">9 Bulan</option>
            <option value="10">10 Bulan</option>
            <option value="11">11 Bulan</option>
            <option value="12">12 Bulan</option>
          </Form.Select>
        </div>
        <div className="hasil-kalkulator">
          <Form.Label htmlFor="basic-url" className="nameKalk">
            Hasil Simulasi Simpanan
          </Form.Label>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan={2}>
                  Suku bunga {bunga}% dengan janka waktu penempatan{" "}
                  {jankaWaktu[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pokok penempatan dana</td>
                <td>Rp. {formattedNumber}</td>
              </tr>
              <tr>
                <td>Total akumulasi bunga</td>
                <td>Rp. {simpanan[0].toLocaleString()}</td>
              </tr>

              <tr>
                <td>Nominal total saldo</td>
                <td>Rp. {simpanan[1].toLocaleString()}</td>
              </tr>
              <Form.Text className="TextErr">
                {pajakBunga[0] ? pajakBunga[1] : ""}
              </Form.Text>
            </tbody>
          </Table>
          <Button variant="danger" className="me-4" onClick={KalkulasiSimpanan}>
            Kalkulasi
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="main-kalkulator">
      <div className="calkulator-pinjaman-page">
        <h2>Simulasi simpanan dan deposito</h2>
        <p>
          Anda dapat melakukan simulasi Simpanan atau Deposito dengan mengisi
          form di bawah
        </p>
        {jenisSimpanan ? ButtonDep() : ButtonSim()}
      </div>
      {jenisSimpanan ? KalkulatorDeposito() : KalkulatorSimpanan()}
    </div>
  );
};
export default KalkulatorSimpanan;

import { useRef, useState } from "react";
import Axios from "axios";
import "../css/formSimpanan.css";
import { Form, InputGroup, Button, Modal } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiEmailOutline,
  mdiPhoneOutline,
} from "@mdi/js";
import { API_Simpanan, API_Simpanan_dummy, FINAL_API_Simpanan } from "../database/APIs";

const FormSimpanan = () => {
  // set default value
  const initialInputValue = "";

  // state Error
  const [namaErr, setNamaErr] = useState([false, ""]);
  const [emailErr, setemailErr] = useState([false, ""]);
  const [kotaErr, setKotaErr] = useState([false, ""]);
  const [errorMessage, setErrorMessage] = useState("");

  // ref state
  const refNama = useRef();
  const refJenisSimpanan = useRef();
  const refNoTelp = useRef();
  const refEmail = useRef();
  const refProvinsi = useRef();
  const refKota = useRef();
  const refPenempatanDana = useRef();

  // states form simpanan
  const [jenisSimpanan, setJenisSimpanan] = useState(initialInputValue);
  const [nama, setNama] = useState(initialInputValue);
  const [noTelephone, setNoTelephone] = useState(initialInputValue);
  const [email, setEmail] = useState(initialInputValue);
  const [prov, setProv] = useState(initialInputValue);
  const [kota, setKota] = useState(initialInputValue);
  const [penempatanDana, setPenempatanDana] = useState(initialInputValue);

  const namaValid = (e) => {
    let symb = /[!@#$%^&1234567890*]/;
    let valueNama = e.target.value;
    console.log(valueNama);
    if (valueNama.length === 0) {
      setNamaErr([false, ""]);
    } else if (symb.test(valueNama) || valueNama.length < 5) {
      setNamaErr([true, "Tolong isi Nama Anda dengan benar!"]);
    } else {
      setNamaErr([false, ""]);
    }
    setNama(valueNama);
  };
  const emailValid = (e) => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let valueEmail = e.target.value;
    console.log(valueEmail);
    console.log(emailErr);
    if (valueEmail.length === 0) {
      setemailErr([false, ""]);
    } else if (!regex.test(valueEmail)) {
      setemailErr([true, "Tolong periksa email Anda"]);
    } else {
      setemailErr([false, ""]);
    }
    setEmail(valueEmail);
  };
  const kotaValid = (e) => {
    let symb = /[!@#$%^&1234567890*]/;
    let valuekota = e.target.value;
    if (valuekota.length === 0) {
      setKotaErr([false, ""]);
    } else if (symb.test(valuekota) || valuekota.length < 5) {
      setKotaErr([true, "Tolong isi domisili kota dengan benar!"]);
    } else {
      setKotaErr([false, ""]);
    }
    setKota(valuekota);
  };

  // handle input simpanan
  const ajukanSimpanan = () => {
    // variable input
    let Nama = refNama.current.value;
    let JenisSimpanan = refJenisSimpanan.current.value;
    let Tlpn = refNoTelp.current.value;
    let Email = refEmail.current.value;
    let Provinsi = refProvinsi.current.value;
    let Kota = refKota;
    let PenempatanDana = refPenempatanDana;
    // console.log(Nama);
    // console.log(JenisSimpanan);
    // console.log(Tlpn);
    // console.log(Email);
    // console.log(Provinsi);
    // console.log(Kota);
    // console.log(PenempatanDana);
    // console.log(nama);
    // console.log(jenisSimpanan);
    // console.log(noTelephone);
    // console.log(email);
    // console.log(prov);
    // console.log(kota);
    // console.log(penempatanDana);
    // validasi  form input
    if (
      !Nama ||
      JenisSimpanan === "kosong" ||
      !Tlpn ||
      !Email ||
      Provinsi === "kosong" ||
      !Kota ||
      PenempatanDana === "kosong"
    ) {
      setErrorMessage([
        true,
        "Tolong isi data diri Anda dengan lengkap!.",
        "Mohon Maaf...",
      ]);
    } else if (namaErr[0] || emailErr[0] || kotaErr[0]) {
      setErrorMessage([
        true,
        "Tolong Pastikan data diri Anda Valid",
        "Mohon Maaf...",
      ]);
    } else {
      const Datas = {
        date: new Date().toLocaleString(),
        jenis_simpanan: jenisSimpanan,
        nama_lengkap: nama,
        no_telephone: noTelephone,
        email: email,
        provinsi: prov,
        kota: kota,
        penempatan_dana: penempatanDana,
      };
      Axios.post(FINAL_API_Simpanan, Datas).then((res) => {
        setJenisSimpanan(initialInputValue);
        setNama(initialInputValue);
        setNoTelephone(initialInputValue);
        setEmail(initialInputValue);
        setProv(initialInputValue);
        setKota(initialInputValue);
        setPenempatanDana(initialInputValue);
        setErrorMessage([
          true,
          "Data pengajuan Anda telah terkirim, petugas Kami akan segera menghubungi Anda",
          "Terimakasi..",
        ]);
        console.log(res);
      });
    }
  };

  return (
    <div>
      <div className="hero-section-formSimpanan">
        <div className="containers-visi">
          <h1>Form Simpanan dan Deposito Bank Sembada</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            ultricies purus. Duis pellentesque ligula a enim consequat.
          </p> */}
        </div>
      </div>
      <form className="cont-form-simpanan">
        <div className="cont-formss">
          <h3>Form pengajuan simpanan :</h3>
          <div className="form-pertama">
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">Pilih jenis simpanan</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setJenisSimpanan(e.target.value)}
                value={jenisSimpanan}
                ref={refJenisSimpanan}
              >
                <option value="kosong">Jenis simpanan</option>
                <option value="Simpanan konvensional">
                  Simpanan Konvensional
                </option>
                <option value="Deposito">Deposito</option>
              </Form.Select>
            </div>
            <div className="form-item2">
              <Form.Label htmlFor="basic-url">Tulis nama Anda</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiAccountCircleOutline} size={1} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Nama Anda"
                  onChange={(e) => namaValid(e)}
                  value={nama}
                  ref={refNama}
                />
              </InputGroup>
              <Form.Text className="TextErr">
                {namaErr[0] ? namaErr[1] : ""}
              </Form.Text>
            </div>
          </div>
          <div className="form-pertama">
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">No telephone</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiPhoneOutline} size={1} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="No telephone Anda"
                  type="number"
                  onChange={(e) => setNoTelephone(e.target.value)}
                  value={noTelephone}
                  ref={refNoTelp}
                />
              </InputGroup>
            </div>
            <div className="form-item2">
              <Form.Label htmlFor="basic-url">Email</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiEmailOutline} size={1} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="your-email@gmail.com"
                  type="email"
                  onChange={(e) => emailValid(e)}
                  value={email}
                  ref={refEmail}
                />
              </InputGroup>
              <Form.Text className="TextErr">
                {emailErr[0] ? emailErr[1] : ""}
              </Form.Text>
            </div>
          </div>
          <div className="form-terakhir">
            <div>
              <Form.Label htmlFor="basic-url">Provinsi domisili</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setProv(e.target.value)}
                value={prov}
                ref={refProvinsi}
              >
                <option value="kosong">Pilih Provinsi</option>
                <option value="DKI Jakarta">DKI Jakarta</option>
                <option value="Jambi">Jambi</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Riau">Riau</option>
              </Form.Select>
            </div>
            <div>
              <Form.Label htmlFor="basic-url">Kota domisili</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Kota Domisili"
                  onChange={(e) => kotaValid(e)}
                  value={kota}
                  ref={refKota}
                />
              </InputGroup>
              <Form.Text className="TextErr mt-0, mb-3">
                {kotaErr[0] ? kotaErr[1] : ""}
              </Form.Text>
            </div>
            <div>
              <Form.Label htmlFor="basic-url">
                Rencana Penempatan dana
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setPenempatanDana(e.target.value)}
                value={penempatanDana}
                ref={refPenempatanDana}
              >
                <option value="kosong">Pilih nominal</option>
                <option value="Dibawah 5 juta">Dibawah 5 juta</option>
                <option value="5 juta - 500 juta">5 juta - 100 juta</option>
                <option value="100 juta - 1 miliar">100 juta - 1 miliar</option>
                <option value="Diatas 1 miliar">Diatas 1 Miliar</option>
              </Form.Select>
            </div>
          </div>
          <div className="cont-btn-form">
            <Button
              variant="danger"
              className="BukaTabungan"
              onClick={ajukanSimpanan}
            >
              Ajukan sekarang
            </Button>{" "}
            <p>
              Klik "Ajukan sekarang" dan petugas bank akan segera melayani Anda
            </p>
          </div>
        </div>
      </form>
      <Modal show={errorMessage[0]}>
        <Modal.Header>
          <Modal.Title>{errorMessage[2]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorMessage[1]}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => setErrorMessage([false, "", ""])}
          >
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default FormSimpanan;

import { Form, Button, InputGroup, Modal } from "react-bootstrap";
import { useState, useRef } from "react";
import "../css/kemitraan.css";
import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiEmailOutline,
  mdiPhoneOutline,
} from "@mdi/js";
import Axios from "axios";
// API kemitraan
import { API_kemitraan_dummy, FINAL_API_Kemitraan } from "../database/APIs";

const Kemitraan = () => {
  // inital state
  const initialInputValue = "";

  //  State Error
  const [namaErr, setNamaErr] = useState([false, ""]);
  const [emailErr, setemailErr] = useState([false, ""]);
  const [ajukanErr, setAjukanErr] = useState([false, "", ""]);

  //  ref state
  const refNama = useRef();
  const refNoTelp = useRef();
  const refEmail = useRef();
  const refOrganisasi = useRef();
  const refFormMasukan = useRef();

  //  useState form input
  const [nama, setNama] = useState(initialInputValue);
  const [noTelp, setNoTelp] = useState(initialInputValue);
  const [email, setEmail] = useState(initialInputValue);
  const [organisasi, setOrganisas] = useState(initialInputValue);
  const [masukan, setMasukan] = useState(initialInputValue);

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

  const ajukanKemitraan = () => {
    let Nama = refNama.current.value;
    let noTelpn = refNoTelp.current.value;
    let Email = refEmail.current.value;
    let Organisasi = refOrganisasi.current.value;
    let Masukan = refFormMasukan.current.value;
    if (!Nama || !noTelpn || !Email || !Organisasi || !Masukan) {
      setAjukanErr([
        true,
        "Tolong isi data Anda dengan lengkap!.",
        "Mohon Maaf...",
      ]);
    } else if (namaErr[0] || emailErr[0]) {
      setAjukanErr([
        true,
        "Tolong pastikan data Anda valid!.",
        "Mohon Maaf...",
      ]);
    } else {
      const data = {
        date: new Date().toDateString(),
        nama_lengkap: nama,
        no_telephone: noTelp,
        email: email,
        organisasi: organisasi,
        form_masukan: masukan,
      };
      Axios.post(FINAL_API_Kemitraan, data).then((res) => {
        setNama(initialInputValue);
        setNoTelp(initialInputValue);
        setEmail(initialInputValue);
        setOrganisas(initialInputValue);
        setMasukan(initialInputValue);
        console.log(res);
        setAjukanErr([
          true,
          "Data pengajuan kemitraan telah terkirim, secepat mungkin petugas kami akan menguhungi Anda",
          "Terimakasih...",
        ]);
        console.log(res);
      });
    }
  };

  return (
    <div>
      <div className="hero-section-kemitraan">
        <div className="containers-visi">
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Kemitraan
          </h1>
        </div>
      </div>
      <form className="cont-form-simpanan">
        <div className="cont-formss">
          <h3>Form pengajuan kemitraan :</h3>
          <div className="form-pertama">
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">Tulis nama anda</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiAccountCircleOutline} size={1} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Nama anda"
                  onChange={(e) => namaValid(e)}
                  value={nama}
                  ref={refNama}
                />
              </InputGroup>
              <Form.Text className="TextErr">
                {namaErr[0] ? namaErr[1] : ""}
              </Form.Text>
            </div>
            <div className="form-item2">
              <Form.Label htmlFor="basic-url">Organisasi</Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiAccountCircleOutline} size={1} />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Nama Organisasi"
                  onChange={(e) => setOrganisas(e.target.value)}
                  value={organisasi}
                  ref={refOrganisasi}
                />
              </InputGroup>
              <Form.Text className="TextErr"></Form.Text>
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
                  placeholder="No telephone anda"
                  type="number"
                  onChange={(e) => setNoTelp(e.target.value)}
                  value={noTelp}
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
          <div>
            <div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Form Masukan Anda</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setMasukan(e.target.value)}
                  value={masukan}
                  ref={refFormMasukan}
                />
              </Form.Group>
            </div>
          </div>
          <div className="cont-btn-form">
            <Button
              variant="danger"
              className="BukaTabungan"
              onClick={ajukanKemitraan}
            >
              Pengajuan Kemitraan
            </Button>{" "}
            <p>
              Dengan klik 'Pengajuan Kemitraan' maka petugas bank Sembada dapat
              segera melayani Anda untuk pembukaan tabungan
            </p>
          </div>
        </div>
      </form>
      <Modal show={ajukanErr[0]}>
        <Modal.Header>
          <Modal.Title>{ajukanErr[2]}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{ajukanErr[1]}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setAjukanErr([false, ""])}>
            Tutup
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Kemitraan;

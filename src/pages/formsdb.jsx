import React, { useRef, useState } from "react";
import Axios from "axios";
import "../css/formsdb.css";
import Icon from "@mdi/react";
import { API_SDB, API_SDB_dummy, FINAL_API_Sdb } from "../database/APIs";
import {
  mdiAccountCircleOutline,
  mdiEmailOutline,
  mdiPhoneOutline,
} from "@mdi/js";
import {
  Form,
  InputGroup,
  Button,
  Modal,
  FormLabel,
  FormSelect,
  FormControl,
  FormText,
} from "react-bootstrap";

const Formsdb = () => {
  // set default value
  const initialInputValue = "";

  //error
  const [namaErr, setNamaErr] = useState([false, ""]);
  const [emailErr, setemailErr] = useState([false, ""]);
  const [kotaErr, setKotaErr] = useState([false, ""]);
  const [errorMessage, setErrorMessage] = useState("");

  //ref state
  const refUkuranSdb = useRef();
  const refNama = useRef();
  const refNoTelp = useRef();
  const refEmail = useRef();
  const refProvinsi = useRef();
  const refKota = useRef();

  //states form sdb
  const [ukuranSdb, setUkuranSdb] = useState(initialInputValue);
  const [nama, setNama] = useState(initialInputValue);
  const [noTelephone, setNoTelephone] = useState(initialInputValue);
  const [email, setEmail] = useState(initialInputValue);
  const [prov, setProv] = useState(initialInputValue);
  const [kota, setKota] = useState(initialInputValue);

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

  const ajukanSdb = () => {
    let UkuranSdb = refUkuranSdb.current.value;
    let Nama = refNama.current.value;
    let Tlpn = refNoTelp.current.value;
    let Email = refEmail.current.value;
    let Provinsi = refProvinsi.current.value;
    let Kota = refKota.current.value;

    if (
      !Nama ||
      UkuranSdb === "kosong" ||
      !Tlpn ||
      !Email ||
      Provinsi === "kosong" ||
      !Kota === "kosong"
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
        ukuran_sdb: ukuranSdb,
        nama_lengkap: nama,
        no_telephone: noTelephone,
        email: email,
        provinsi: prov,
        kota: kota,
      };
      Axios.post(FINAL_API_Sdb, Datas).then((res) => {
        setUkuranSdb(initialInputValue);
        setNama(initialInputValue);
        setNoTelephone(initialInputValue);
        setEmail(initialInputValue);
        setProv(initialInputValue);
        setKota(initialInputValue);
        console.log(res);
        setErrorMessage([
          true,
          "Data pengajuan Anda telah terkirim, petugas Kami akan segera menghubungi Anda",
          "Terimakasi..",
        ]);
      });
    }
  };

  return (
    <div>
      <div className="hero-img-formsdb">
        <h1>Formulir Pendaftaran SDB</h1>
      </div>
      <form className="cont-form-simpanan">
        <div className="cont-formss">
          <h3>Form Pengajuan SDB :</h3>
          <div className="form-pertama">
            <div className="form-item1">
              <FormLabel htmlFor="basic-url">Pilih Ukuran SDB</FormLabel>
              <FormSelect
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setUkuranSdb(e.target.value)}
                value={ukuranSdb}
                ref={refUkuranSdb}
              >
                <option value="kosong">Ukuran SDB</option>
                <option value="Besar">
                  Besar (Large) (26cm x 31cm x 60cm)
                </option>
                <option value="Sedang">
                  Sedang (Medium) (13cm x 31cm x 60cm)
                </option>
                <option value="Kecil">Kecil (Small) (7cm x 31cm x 60cm)</option>
              </FormSelect>
            </div>
            <div className="form-item2">
              <FormLabel htmlFor="basic-url">Tulis nama anda</FormLabel>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <Icon path={mdiAccountCircleOutline} size={1} />
                </InputGroup.Text>
                <FormControl
                  placeholder="Nama anda"
                  onChange={(e) => namaValid(e)}
                  value={nama}
                  ref={refNama}
                />
              </InputGroup>
              <FormText className="TextErr">
                {namaErr[0] ? namaErr[1] : ""}
              </FormText>
            </div>
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
        </div>
          <div className="cont-btn-form">
            <Button
              variant="danger"
              className="BukaTabungan"
              onClick={ajukanSdb}
            >
              Daftar SDB
            </Button>{" "}
            <p>
              Dengan klik 'Buka Tabungan' maka petugas bank Sembada dapat segera
              melayani Anda untuk pembukaan tabungan
            </p>
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

export default Formsdb;

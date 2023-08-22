import { Form, InputGroup, Button, Modal } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiAccountCircleOutline,
  mdiEmailOutline,
  mdiPhoneOutline,
} from "@mdi/js";
import Axios from "axios";
import { useRef, useState } from "react";

// APIs
import { API_Kredit, API_Kredit_dummy, FINAL_API_Pinjaman } from "../database/APIs";

const FormKredit = () => {
  const initialInputValue = "";
  //  State Error
  const [namaErr, setNamaErr] = useState([false, ""]);
  const [emailErr, setemailErr] = useState([false, ""]);
  const [kotaErr, setKotaErr] = useState([false, ""]);
  const [ajukanErr, setAjukanErr] = useState([false, "", ""]);

  // ref State
  const refNama = useRef();
  const refJenisKredit = useRef();
  const refNoTelp = useRef();
  const refEmail = useRef();
  const refProvinsi = useRef();
  const refKota = useRef();
  const refPekerjaan = useRef();
  const refJaminan = useRef();
  const refSerfikatAtasNama = useRef();
  const refRencan = useRef();

  // input state form form  pengajuan
  const [nama, setNama] = useState(initialInputValue);
  const [jenisKredit, setJenisKredit] = useState(initialInputValue);
  const [noTelp, setNoTelp] = useState(initialInputValue);
  const [email, setEmail] = useState(initialInputValue);
  const [provinsi, setProvinsi] = useState(initialInputValue);
  const [kota, setKota] = useState(initialInputValue);
  const [pekerjaan, setPekerjaan] = useState(initialInputValue);
  const [jaminan, setJaminan] = useState(initialInputValue);
  const [sertifAtasNama, setSertifAtasNama] = useState(initialInputValue);
  const [rencana, setRencana] = useState(initialInputValue);

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

  const ajukanKredit = () => {
    let Nama = refNama.current.value;
    let JenisKredit = refJenisKredit.current.value;
    let NoTelpn = refNoTelp.current.value;
    let Email = refEmail.current.value;
    let Provinsi = refProvinsi.current.value;
    let Kota = refKota.current.value;
    let Pekerjaan = refPekerjaan.current.value;
    let Jaminan = refJaminan.current.value;
    let SertifAtasNama = refSerfikatAtasNama.current.value;
    let Rencana = refRencan.current.value;

    console.log(Provinsi);
    console.log(Rencana);
    console.log(JenisKredit);
    console.log(Pekerjaan);
    console.log(SertifAtasNama);
    console.log(Jaminan);
    if (
      !Nama ||
      JenisKredit === "kosong" ||
      !NoTelpn ||
      !Email ||
      Provinsi === "kosong" ||
      !Kota ||
      Pekerjaan === "kosong" ||
      Jaminan === "kosong" ||
      SertifAtasNama === "kosong" ||
      Rencana === "kosong"
    ) {
      setAjukanErr([
        true,
        "Tolong isi data diri Anda dengan lengkap!.",
        "Mohon Maaf...",
      ]);
    } else if (namaErr[0] || emailErr[0] || kotaErr[0]) {
      setAjukanErr([
        true,
        "Tolong pastikan data diri Anda valid!.",
        "Mohon Maaf...",
      ]);
    } else {
      const data = {
        date: new Date().toLocaleString(),
        nama_lengkap: nama,
        jenis_pinjaman: jenisKredit,
        no_telephone: noTelp,
        email: email,
        provinsi: provinsi,
        kota: kota,
        pekerjaan: pekerjaan,
        jenis_jaminan: jaminan,
        sertifikat_atas_nama: sertifAtasNama,
        rencana_pinjaman_dana: rencana,
      };
      Axios.post(FINAL_API_Pinjaman, data).then((res) => {
        setNama(initialInputValue);
        setJenisKredit(initialInputValue);
        setNoTelp(initialInputValue);
        setEmail(initialInputValue);
        setProvinsi(initialInputValue);
        setKota(initialInputValue);
        setPekerjaan(initialInputValue);
        setJaminan(initialInputValue);
        setSertifAtasNama(initialInputValue);
        setRencana(initialInputValue);
        // refNama.current.value = initialInputValue;
        setAjukanErr([
          true,
          "Data pengajuan kredit telah terkirim, secepat mungkin petugas kami akan menguhungi Anda",
          "Terimakasih...",
        ]);
        console.log(res);
      });
    }
  };

  return (
    <div>
      <div className="hero-section-formSimpanan">
        <div className="containers-visi">
          <h1>Form Pinjaman Bank Sembada</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            ultricies purus. Duis pellentesque ligula a enim consequat.
          </p> */}
        </div>
      </div>
      <section className="cont-form-simpanan">
        <div className="cont-formss">
          <h3>Form pengajuan pinjaman :</h3>
          <div className="form-pertama">
            <div className="form-item2">
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
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">Pilih jenis pinjaman</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setJenisKredit(e.target.value)}
                ref={refJenisKredit}
                value={jenisKredit}
              >
                <option value="kosong">Pilih jenis pinjaman</option>
                <option value="Pinjaman modal kerja">
                  Pinjaman modal kerja
                </option>
                <option value="Pinjaman Konsumtif">Pinjaman konsumtif</option>
                <option value="Pinjaman investasi">Pinjaman investasi</option>
              </Form.Select>
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
                  type="text"
                  onChange={(e) => emailValid(e)}
                  ref={refEmail}
                  value={email}
                />
              </InputGroup>
              <Form.Text className="TextErr">
                {emailErr[0] ? emailErr[1] : ""}
              </Form.Text>
            </div>
          </div>

          <div className="form-pertama">
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">Provinsi domisili</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onInput={(e) => setProvinsi(e.target.value)}
                value={provinsi}
                ref={refProvinsi}
              >
                <option value="kosong">Pilih Provinsi</option>
                <option value="DKI Jakarta">DKI Jakarta</option>
                <option value="Jambi">Jambi</option>
                <option value="Kalimantan Barat">Kalimantan Barat</option>
                <option value="Riau">Riau</option>
              </Form.Select>
            </div>
            <div className="form-item1">
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

          <div className="form-pertama">
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">Pekerjaan</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setPekerjaan(e.target.value)}
                value={pekerjaan}
                ref={refPekerjaan}
              >
                <option value="kosong">Pilih jenis pekerjaan</option>
                <option value="Pengusaha atau Wiraswasta">
                  Pengusaha atau Wiraswasta
                </option>
                <option value="PNS">PNS</option>
                <option value="Pegawai swasta">Pegawai swasta</option>
                <option value="Pensiunan PNS">Pensiunan PNS</option>
                <option value="Pensiunan biasa">Pensiunan biasa</option>
                <option value="TNI/Polri">TNI/Polri</option>
              </Form.Select>
            </div>
            <div className="form-item2">
              <Form.Label htmlFor="basic-url">Jenis jaminan</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setJaminan(e.target.value)}
                value={jaminan}
                ref={refJaminan}
              >
                <option value="kosong">Pilih jenis jaminan</option>
                <option value="Sertifikat tanah dan bangunan (SHM/SHGB)">
                  Sertifikat tanah dan bangunan (SHM/SHGB)
                </option>
              </Form.Select>
            </div>
          </div>
          <div className="form-pertama">
            <div className="form-item1">
              <Form.Label htmlFor="basic-url">Sertifikat atas nama</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setSertifAtasNama(e.target.value)}
                value={sertifAtasNama}
                ref={refSerfikatAtasNama}
              >
                <option value="kosong">Pilih salah satu</option>
                <option value="Pemohon atau pasangan">
                  Pemohon atau pasangan
                </option>
                <option value="Keluarga">Keluarga</option>
              </Form.Select>
            </div>
            <div className="form-item2">
              <Form.Label htmlFor="basic-url">Rencana pinjaman dana</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className="mb-3"
                onChange={(e) => setRencana(e.target.value)}
                value={rencana}
                ref={refRencan}
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
              onClick={ajukanKredit}
            >
              Dapatkan Pinjaman
            </Button>{" "}
            <p>
              *Petugas Bank kami akan segera menghubungi Anda. Dengan mengisi
              form ini, saya memberi kuasa pada BPR Sembada untuk memeriksa
              informasi yang saya berikan dan menghubungi sumber informasi yang
              layak seperti SLIK, biro kredit atau sejenisnya*
            </p>
          </div>
        </div>
      </section>
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

export default FormKredit;

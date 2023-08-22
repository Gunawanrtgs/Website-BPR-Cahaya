//  default value
const initialInputValue = "";
const refName = useRef();
//  State Error
const [namaErr, setNamaErr] = useState([false, ""]);
const [emailErr, setemailErr] = useState([false, ""]);
const [kotaErr, setKotaErr] = useState([false, ""]);
const [ajukanErr, setAjukanErr] = useState([false, ""]);

// input state form form  pengajuan
const [nama, setNama] = useState("");
const [jenisKredit, setJenisKredit] = useState("");
const [noTelp, setNoTelp] = useState("");
const [email, setEmail] = useState("");
const [provinsi, setProvinsi] = useState("");
const [kota, setKota] = useState("");
const [pekerjaan, setPekerjaan] = useState("");
const [jaminan, setJaminan] = useState("");
const [sertifAtasNama, setSertifAtasNama] = useState("");
const [rencana, setRencana] = useState("");
// const [Submit, setSubmit] = useState(false);

let Nama = nama;
let JenisKredit = jenisKredit;
let NoTelp = noTelp;
let Email = email;
let Provinsi = provinsi;
let Kota = kota;
let Pekerjaan = pekerjaan;
let Jaminan = jaminan;
let SertifAtasNama = sertifAtasNama;
let Rencana = rencana;
console.log(
  nama,
  jenisKredit,
  noTelp,
  email,
  provinsi,
  kota,
  pekerjaan,
  jaminan,
  sertifAtasNama,
  rencana
);
if (
  !Nama ||
  !JenisKredit ||
  !NoTelp ||
  !Email ||
  !Provinsi ||
  !Kota ||
  !Pekerjaan ||
  !Jaminan ||
  !SertifAtasNama ||
  !Rencana
) {
  setAjukanErr([true, "Tolong lengkapi data diri Anda"]);
} else if (!namaErr || !emailErr || !kotaErr) {
  setAjukanErr([true, "Pastikan data Anda valid"]);
}

const data = {
  Date: new Date().toLocaleString(),
  Nama: nama,
  NoTelp: noTelp,
  Email: email,
  Provinsi: provinsi,
  Kota: kota,
  Pekerjaan: pekerjaan,
  Jaminan: jaminan,
  SertifAtasNama: sertifAtasNama,
  Rencana: rencana,
};
Axios.post(`${API_Kredit}`, data)
  .then((res) => {
    setNama("");
    setJenisKredit("");
    setNoTelp("");
    setEmail("");
    setProvinsi("");
    setKota("");
    setPekerjaan("");
    setJaminan("");
    setSertifAtasNama("");
    setRencana("");
  })
  .catch((error) => {
    // Penanganan error
  });
setAjukanErr([
  true,
  "Pengajuan Anda telah Kami terima, Petugas kami akan segera menghubungi Anda",
]);

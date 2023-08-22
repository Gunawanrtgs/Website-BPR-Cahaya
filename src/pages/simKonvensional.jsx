import "../css/simKonvensional.css";
import { Button, Accordion } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiClipboardTextOutline } from "@mdi/js";
import {
  mdiFinance,
  mdiHandCoinOutline,
  mdiCheckDecagramOutline,
} from "@mdi/js";
// kalkulator
import KalkulatorSimpanan from "../component/KalkulatorSimpanan";

const SimpKonvensional = () => {
  return (
    <div>
      <div className="hero-img-simkon">
        {/* <div
          className="hero-section-simkon"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Simpanan Konvensional
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Bank Sembada menghadirkan tabungan dengan mengutamakan kemudahan
            bertransaksi serta suku bunga yang menarik.
          </p> */}
        {/* </div> */}
      </div>
      <section
        className="deskripsi-simpanan-konvensional"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h2>Simpanan Konvensional Sembada</h2>
        <p>
          Bank Sembada memberi solusi simpanan dengan kemudahan transaksi dan
          suku bunga yang menguntungkan, setoran dana dapat dilakukan melalui
          Bank di seluruh Indonesia.
        </p>
      </section>
      <div className="container1">
        <div className="cont-body">
          <div className="mid-container">
            <h2 data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
              Keunggulan
            </h2>
            <section class="featuress">
              <div
                className="feature"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                <Icon path={mdiHandCoinOutline} size={4} className="icon" />
                <h3>Setoran Awal Ringan</h3>
                <p>
                  Dengan{" "}
                  <span style={{ color: "red" }}>
                    setoran dana hanya Rp 10.000,-
                  </span>{" "}
                  dapatkan kemudahan persyaratan pembukaan rekening tabungan dan
                  bertransaksi dengan buku tabungan.
                </p>
              </div>

              <div
                className="feature"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <Icon path={mdiFinance} size={4} className="icon" />
                <h3>Menguntungkan</h3>
                <p>
                  Nikmati{" "}
                  <span style={{ color: "red" }}>
                    suku bunga tinggi 3% p.a.
                  </span>{" "}
                  untuk seluruh nominal penempatan dana dan dapatkan layanan{" "}
                  <span style={{ color: "red" }}>
                    {" "}
                    <br />
                    Safe Deposit Box
                  </span>{" "}
                  (sesuai ketentuan yang berlaku).
                </p>
              </div>
              <div
                className="feature"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Icon
                  path={mdiCheckDecagramOutline}
                  size={4}
                  className="icon"
                />
                <h3>Dikelola secara Profesional</h3>
                <p>
                  Dana dikelola oleh SDM yang ahli dan handal di bidang layanan
                  keuangan.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <section className="fitur-manfaat-prasayart-simpanan">
        <div className="cont-fitur-manfaat-kiri">
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h3>BUKA REKENING SEKARANG</h3>
            <p>
              Anda dapat mengajukan simpanan melalui website dengan mengisi form
              yang tersedia
            </p>
            <div>
              <Button variant="danger" href="./formSimpanan">
                Buka Simpanan
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h3>UNDUH FORMULIR</h3>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan simpanan dan berkunjung langsung ke kantor
              Bank Sembada
            </p>
            <div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Perorangan</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-pembukaan">
                      <a
                        href="Data-Nasabah-Perorangan.pdf"
                        download="Data-Nasabah-Perorangan.pdf"
                      >
                        <button>Data Nasabah</button>
                      </a>
                    </div>
                    <br />
                    <div className="form-pembukaan">
                      <a
                        href="Formulir-pembukaan-deposito-perorangan.pdf"
                        download="Formulir-pembukaan-deposito-perorangan.pdf"
                      >
                        <button>Formulir Pembukaan</button>
                      </a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Badan Usaha</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-pembukaan">
                      <a
                        href="Data-Nasabah-Non-Perorangan.pdf"
                        download="Data-Nasabah-Non-Perorangan.pdf"
                      >
                        <button>Data Nasabah</button>
                      </a>
                    </div>
                    <br />
                    <div className="form-pembukaan">
                      <a
                        href="Formulir-pembukaan-deposito-non-perorangan.pdf"
                        download="Formulir-pembukaan-deposito-non-perorangan.pdf"
                      >
                        <button>Formulir Pembukaan</button>
                      </a>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>

        <div
          className="cont-fitur-manfaat-kanan"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="site-prasarat-simpanan">
            <h3>FITUR DAN MANFAAT</h3>
            <ol>
              <li>Suku bunga yang tinggi sebesar 3% p.a.</li>
              <li>Setoran awal ringan sebesar Rp. 10.000,-.</li>
              <li>Bebas biaya administrasi bulanan dan bebas biaya admin.</li>

              <li>Bertransaksi mudah, aman dan nyaman dengan buku tabungan.</li>
              <li>
                Setoran dana dapat dilakukan melalui Bank seluruh Indonesia.
              </li>
            </ol>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Syarat dan Ketentuan</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      Membawa bukti identitas diri yang masih berlaku, yaitu
                      <ul>
                        <li>Perorangan: KTP(WNI), KITAS/Passport(WNA), NPWP</li>
                        <li>
                          Badan Usaha: SIUP, TDP, NPWP, Akta pendirian, Akta
                          terbaru, Domisili perusahaan, AHU dari kementrian
                          Hukum dan HAM (apabila ada perubahan data perseroan)
                        </li>
                      </ul>
                    </li>
                    <li>
                      Mengisi dan menandatangani formulir pembukaan tabungan
                      Bank Sembada dengan setoran awal Rp.10.000
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="calkulator-simpanan">
        <KalkulatorSimpanan />
      </section>
    </div>
  );
};

export default SimpKonvensional;

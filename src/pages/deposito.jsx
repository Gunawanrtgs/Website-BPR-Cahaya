import "../css/deposito.css";
import { Button, Accordion } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiShieldAccountVariantOutline,
  mdiHandshakeOutline,
  mdiFinance,
} from "@mdi/js";
import KalkulatorDeposito from "../component/KalkulatorDeposito";
const Deposito = () => {
  return (
    <div>
      <div className="hero-img-tabungan">
        <div className="table-deposito">
          <table className="table table-bordered border-danger">
            <thead>
              <tr>
                <th scope="col">Jangka Waktu</th>
                <th scope="col">Suku Bunga Deposito</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1 Bulan</th>
                <td>3.50% p.a.</td>
              </tr>
              <tr>
                <th scope="row">3 Bulan</th>
                <td>4.00% p.a.</td>
              </tr>
              <tr>
                <th scope="row">6 Bulan</th>
                <td>4.25% p.a.</td>
              </tr>
              <tr>
                <th scope="row">12 Bulan</th>
                <td>4.50% p.a.</td>
              </tr>
            </tbody>
          </table>
         
        </div>
      </div>
      <section
        className="deskripsi-simpanan-konvensional"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h2>Deposito Cahaya</h2>
        <p>
        Bank Cahaya menawarkan produk deposito ini dengan beberapa pilihan sesuai jangka waktunya yaitu 1 bulan, 3 bulan, 6 bulan dan 12 bulan dengan suku bunga yang bervariasi dan bersaing serta dapat diperpanjang secara otomatis sesuai konfirmasi awal.
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
                <Icon
                  path={mdiShieldAccountVariantOutline}
                  size={4}
                  className="icon"
                />
                <h3>Aman</h3>
                <p>
                  Dijamin LPS (Lembaga Penjamin Simpanan), diawasi OJK (Otoritas
                  Jasa Keuangan) dan dikelola oleh SDM yang profesional.
                </p>
              </div>
              <div
                className="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <Icon path={mdiHandshakeOutline} size={4} className="icon" />
                <h3>Nyaman</h3>
                <p>
                  Persyaratan mudah dengan pelayanan yang ramah dan sepenuh
                  hati.
                </p>
              </div>
              <div
                className="feature"
                div
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <Icon path={mdiFinance} size={4} className="icon" />
                <h3>Menguntungkan</h3>
                <p>
                  Deposito dengan{" "}
                  <span style={{ color: "var(--tealgreen)" }}>suku bunga yang tinggi*</span>{" "}
                  dan menguntungkan s.d.
                  <span style={{ color: "var(--tealgreen)" }}>5,75 p.a.</span>
                </p>
                <br />
                <i>
                  *Suku bunga bisa berubah sewaktu waktu-waktu, untuk lebih
                  jelas, hubungi petugas kami.
                </i>
              </div>
            </section>
            <br />
          </div>
        </div>
      </div>
      <section className="fitur-manfaat-prasayart-deposito">
        <div className="cont-fitur-manfaat-kiri">
          <div
            className="site-fitur-manfaat-simpanan"
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h3>BUKA DEPOSITO SEKARANG</h3>
            <p>
              Anda dapat mengajukan deposito melalui website dengan mengisi form
              yang tersedia, dan kami akan segera menghubungi Anda.
            </p>
            <div>
              <Button variant="danger" href="./formSimpanan">
                Buka Deposito
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            <h3>UNDUH FORMULIR DEPOSITO</h3>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan deposito lalu berkunjung langsung ke kantor
              Bank Sembada.
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
          div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <div className="site-prasarat-simpanan">
            <h3>FITUR DAN MANFAAT</h3>
            <ol>
              <li>
                Jangka waktu penempatan fleksible dengan tenor 1,3,6 dan 12
                bulan.
              </li>
              <li>Dapat dijadikan jaminan fasilitas kredit back to back.</li>
              <li>
                Bunga dihitung berdasarkan jumlah hari penempatan (1 tahun
                dihitung 365 hari).
              </li>

              <li>
                Penempatan deposit dapat diperpanjang secara otomatis
                (Automatick Roll Over/ARO).
              </li>
              <li>
                Pencairan deposito, dana dapat di transfer ke rekening bank lain
                atau di tempatkan kembali di tabungan Bank Sembada Dana.
              </li>
            </ol>
            <p>
              Pembukaan Tabungan dan Penempatan Dana Deposito dapat ditransfer
              langsung ke: rekening BCA dengan nomor rekening{" "}
              <span>2243005957</span> a.n PT BPR Multi Sembada Dana.
            </p>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Syarat dan Ketentuan</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>
                      Membawa Bukti identitas diri yang masih berlaku, yaitu :
                      <ul>
                        <li>
                          Perorangan: KTP (WNI), KITAS/Passport (WNA), NPWP.
                        </li>
                        <li>
                          Badan Usaha : SIUP, TDP, NPWP,, Akta pendirian, Akta
                          terbaru, Domisili perusahaan, AHU dari kementrian
                          Hukum dan HAM (apabila ada perubahan data perseroan).
                        </li>
                      </ul>
                    </li>
                    <li>
                      Mengisi dan menandatangani formulir apikasi data
                      penempatan Deposito.
                    </li>
                    <li>
                      Penempatan Deposito awal yg ringan minimal
                      Rp. 1.000.000,-.
                    </li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </section>
      <section className="calkulator-simpanan">
        <KalkulatorDeposito />
      </section>
    </div>
  );
};
export default Deposito;

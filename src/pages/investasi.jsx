import "../css/investasi.css";
import { Button, Accordion } from "react-bootstrap";
import Icon from "@mdi/react";
import {
  mdiClockFast,
  mdiShieldCheckOutline,
  mdiClipboardEditOutline,
} from "@mdi/js";
import AccordionItem from "react-bootstrap/esm/AccordionItem";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import KalkulatorKredit from "../component/kalkulator";
const Investasi = () => {
  return (
    <div>
      <div className="hero-img-investasi">
        {/* <div
          className="hero-section-simkon"
          div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <h1
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
            data-aos-once="true"
          >
            Pinjaman Investasi
          </h1>
          <p
            div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            Hadir sebagai layanan pinjaman yang dapat membantu usaha Anda dalam
            pembiayaan investasi baik investasi baru, modernisasi dan
            peremajaan. Contohnya seperti membeli peralatan mesin untuk usaha,
            membangun pabrik atau kantor baru, renovasi atau memperluas area
            kantor, dan lain-lain
          </p>
        </div> */}
      </div>

      <div
        className="deskripsi-kedit-kerja"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <h2>Pinjaman Investasi Sembada</h2>
        <p>
          Pinjaman investasi untuk pembiayaan pengembangan bisnis usaha Anda
          dalam jangka panjang, antara lain: pembeliaan peralatan mesin,
          membangun pabrik/ kantor baru/ gudang, renovasi atau memperluas area
          kantor, dan lain-lain.
        </p>
      </div>

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
                <Icon path={mdiClockFast} size={4} className="icon-simkon" />
                <h3>Cepat</h3>
                <p>
                  Proses pengajuan aplikasi mudah dan nyaman, ajukan online dan
                  data Anda dapat kami jemput, sehingga dana Anda cepat cair.
                </p>
              </div>
              <div
                className="feature"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <Icon
                  path={mdiShieldCheckOutline}
                  size={4}
                  className="icon-simkon"
                />
                <h3>Aman</h3>
                <p>
                  Dikelola oleh tim profesional, Bank Sembada merupakan lembaga
                  jasa keuangan bank yang berizin dan diawasi oleh OJK (Otoritas
                  Jasa Keuangan).
                  <br />
                  <br />
                  {/* <i>*setelah persyaratan data dinyatakan lengkap</i> */}
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
                  path={mdiClipboardEditOutline}
                  size={4}
                  className="icon-simkon"
                />
                <h3>Mudah</h3>
                <p>
                  Persyaratan mudah dan tidak berbelit-belit untuk mendapatkan
                  persetujuan pinjaman, serta jangka waktu pinjaman s/d. 10
                  tahun.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section className="fitur-manfaat-prasayart-kredit-investasi">
        <div className="cont-fitur-manfaat-kredit">
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3>AJUKAN PINJAMAN SEKARANG</h3>
            <p>
              Anda dapat mengajukan pinjaman modal kerja melalui website dengan
              mengisi form yang tersedia, dan petugas kami akan segera
              menghubungi Anda.
            </p>
            <div>
              <Button variant="danger" href="./formKredit">
                Ajukan Pinjaman
              </Button>
            </div>
          </div>
          <div
            className="site-fitur-manfaat-simpanan"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h3>UNDUH FORMULIR PINJAMAN</h3>
            <p>
              Anda juga dapat mengajukan secara offline dengan mengunduh dan
              mengisi form pengajuan pinjaman modal kerja dan berkunjung
              langsung ke kantor Bank Sembada.
            </p>
            <div>
              <Button
                variant="warning"
                href="Form-Permohonan-Kredit.pdf"
                download="Form-Permohonan-Kredit.pdf"
              >
                Download Form Kredit
              </Button>
            </div>
          </div>
        </div>
        <section
          className="cont-fitur-manfaat-kanan"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="site-prasarat-simpanan">
            <h3>FITUR DAN MANFAAT</h3>
            <h5>
              Nikmati pinjaman dengan suku bunga flat ±7.29%/tahun (efektif
              14%/tahun)*
            </h5>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Syarat dan Ketentuan</Accordion.Header>
                <Accordion.Body>
                  <ol>
                    <li>Jenis nasabah karyawan, wiraswasta dan badan usaha</li>
                    <li>Usia peminjam min. 21 thn </li>
                    <li>Kelengkapan data.</li>
                  </ol>
                </Accordion.Body>
              </Accordion.Item>

              <AccordionItem eventKey="3">
                <AccordionHeader>
                  Dokumen Persyaratan Investasi&nbsp; Wiraswasta
                </AccordionHeader>
                <AccordionBody>
                  <ol>
                    <li>
                      Data Calon Debitur
                      <ol>
                        <li>Foto Copy KTP Pengurus</li>
                        <li>
                          Foto Copy Akte Pendirian & Perubahannya (Lengkap)
                        </li>
                        <li>Foto Copy SK MenKeh (Lengkap)</li>
                        <li>Foto Copy Lembaran Berita Negara</li>
                        <li>Foto Copy RUPS</li>
                      </ol>
                    </li>
                    <li>
                      Dokumen Perizinan
                      <ol>
                        <li>Foto Copy NPWP Badan Usaha</li>
                        <li>Foto Copy NPWP Pengurus</li>
                        <li>Foto Copy SIUP/NIB</li>
                        <li>Foto Copy TDP</li>
                        <li>Foto Copy Domisili Usaha</li>
                      </ol>
                    </li>
                    <li>
                      Data Keunangan / Usaha
                      <ol>
                        <li>
                          Foto Copy Rekening Koran/Tabungan 6 Bulan Terakhir
                        </li>
                        <li>Foto Copy Laporan Keuangan</li>
                        <li>Data Supplier & Customer</li>
                        <li>Foto Copy Invoice/Catatan Penjualan-Pembelian</li>
                        <li>Company Profile, Brosur, Pricelist</li>
                      </ol>
                    </li>
                    <li>
                      Data Jaminan / Agunan
                      <ol>
                        <li>
                          Foto Copy Sertifikat Tanah/Bangunan/Bukti
                          Kepemilikan/Surat Berharga
                        </li>
                        <li>Foto Copy Akte Jual Beli</li>
                        <li>Foto Copy IMB</li>
                        <li>Foto Copy PBB Terakhir</li>
                      </ol>
                    </li>
                  </ol>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem eventKey="4">
                <AccordionHeader>
                  Dokumen Persyaratan Investasi&nbsp; Perusahaan
                </AccordionHeader>
                <AccordionBody>
                  <ol>
                    <li>
                      Data Calon Debitur
                      <ol>
                        <li>Foto Copy KTP Pengurus</li>
                        <li>
                          Foto Copy Akte Pendirian & Perubahannya (Lengkap)
                        </li>
                        <li>Foto Copy SK MenKeh (Lengkap)</li>
                        <li>Foto Copy Lembaran Berita Negara</li>
                        <li>Foto Copy RUPS</li>
                      </ol>
                    </li>
                    <li>
                      Dokumen Perizinan
                      <ol>
                        <li>Foto Copy NPWP Badan Usaha</li>
                        <li>Foto Copy NPWP Pengurus</li>
                        <li>Foto Copy SIUP/NIB</li>
                        <li>Foto Copy TDP</li>
                        <li>Foto Copy Domisili Usaha</li>
                      </ol>
                    </li>
                    <li>
                      Data Keunangan / Usaha
                      <ol>
                        <li>
                          Foto Copy Rekening Koran/Tabungan 6 Bulan Terakhir
                        </li>
                        <li>Foto Copy Laporan Keuangan</li>
                        <li>Data Supplier & Customer</li>
                        <li>Foto Copy Invoice/Catatan Penjualan-Pembelian</li>
                        <li>Company Profile, Brosur, Pricelist</li>
                      </ol>
                    </li>
                    <li>
                      Data Jaminan / Agunan
                      <ol>
                        <li>
                          Foto Copy Sertifikat Tanah/Bangunan/Bukti
                          Kepemilikan/Surat Berharga
                        </li>
                        <li>Foto Copy Akte Jual Beli</li>
                        <li>Foto Copy IMB</li>
                        <li>Foto Copy PBB Terakhir</li>
                      </ol>
                    </li>
                  </ol>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
            <i style={{ color: "red" }}>
              *suku bunga pinjaman sesuai dengan syarat dan ketentuan yang
              berlaku
            </i>
          </div>
        </section>
      </section>
      <section className="calkulator-pinjaman">
        <KalkulatorKredit />
      </section>
    </div>
  );
};
export default Investasi;

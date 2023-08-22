import "../css/laporanKeuangan.css";
import { Accordion, Button } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiClipboardTextOutline } from "@mdi/js";
const LaporanKeuangan = () => {
  return (
    <div>
      <div className="hero-section-keuangan">
        <div
          className="containers-visi"
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>Berita & Media</h1>
          <p>Informasi terkini seputar Bank Sembada</p>
        </div>
      </div>
      <section></section>
      <section className="cont-keuangan">
        <h2>Laporan Keuangan Bank Sembada</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="1">
            <Accordion.Header>Laporan Keuangan 2022</Accordion.Header>
            <Accordion.Body>
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2022</p>
                  <h3>Laporan Informasi Lainnya</h3>
                </div>
                <a
                  href="Laporan-Informasi-Lainnya-31-Desember-2022.pdf"
                  download="Laporan-Informasi-Lainnya-31-Desember-2022.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
              <br />
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2022</p>
                  <h3>Laporan Komitmen dan Kontinjensi</h3>
                </div>
                <a
                  href="Laporan-Komitmen-dan-Kontinjensi-31-Desember-2022.pdf"
                  download="Laporan-Komitmen-dan-Kontinjensi-31-Desember-2022.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
              <br />
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2022</p>
                  <h3>Laporan Kualitas Aset Produktif</h3>
                </div>
                <a
                  href="Laporan-Kualitas-Aset-Produktif-31-Desember-2022.pdf"
                  download="Laporan-Kualitas-Aset-Produktif-31-Desember-2022.pdf"
                >
                  <button>Download</button>
                </a>
              </div>

              <br />
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2022</p>
                  <h3>Laporan Laba Rugi</h3>
                </div>
                <a
                  href="Laporan-Laba-Rugi-31-Desember-2022.pdf"
                  download="Laporan-Laba-Rugi-31-Desember-2022.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
              <br />
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2022</p>
                  <h3>Laporan Posisi Keuangan</h3>
                </div>
                <a
                  href="Laporan-Posisi-Keuangan-31-Desember-2022.pdf"
                  download="Laporan-Posisi-Keuangan-31-Desember-2022.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Laporan Keuangan 2021</Accordion.Header>
            <Accordion.Body>
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>laporan tanggal 31 Desember 2021</p>
                  <h3>Laporan Informasi Lainnya</h3>
                </div>
                <a
                  href="Laporan-Informasi-Lainnya-31-Desember-2021.pdf"
                  download="Laporan-Informasi-Lainnya-31-Desember-2021.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
              <br />
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2021</p>
                  <h3>Laporan Komitmen dan Kontinjensi</h3>
                </div>
                <a
                  href="Laporan-Komitmen-dan-Kontinjensi-31-Desember-2021.pdf"
                  download="Laporan-Komitmen-dan-Kontinjensi-31-Desember-2021.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
              <br />
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2021</p>
                  <h3>Laporan Kualitas Aset Produktif</h3>
                </div>
                <a
                  href="Laporan-Kualitas-Aset-Produktif-31-Desember-2021.pdf"
                  download="Laporan-Kualitas-Aset-Produktif-31-Desember-2021.pdf"
                >
                  <button>Download</button>
                </a>
              </div>

              <br />
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2021</p>
                  <h3>Laporan Laba Rugi</h3>
                </div>
                <a
                  href="Laporan-Laba-Rugi-31-Desember-2021.pdf"
                  download="Laporan-Laba-Rugi-31-Desember-2021.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
              <br />
              <div className="list-lap-keuangan">
                <Icon
                  path={mdiClipboardTextOutline}
                  size={2}
                  className="list-icon"
                />
                <div>
                  <p>Laporan tanggal 31 Desember 2021</p>
                  <h3>Laporan Posisi Keuangan</h3>
                </div>
                <a
                  href="Laporan-Posisi-Keuangan-31-Desember-2021.pdf"
                  download="Laporan-Posisi-Keuangan-31-Desember-2021.pdf"
                >
                  <button>Download</button>
                </a>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <section></section>
    </div>
  );
};
export default LaporanKeuangan;

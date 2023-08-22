import "../css/safeDepositBox.css";
import { Table } from "react-bootstrap";

const SaveDepositBox = () => {
  return (
    <div>
      <div className="hero-section-sdb">
        <div
          className="containers-visi"
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>Safe Deposit Box</h1>
        </div>
      </div>

      <section className="contSdb">
        <p
          div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <b>
            <span>Bank Multi Sembada Dana </span>
          </b>
          menyediakan produk layanan{" "}
          <b>
            <span>Safe Deposit Box (SDB)</span>
          </b>{" "}
          dalam jangka waktu tertentu atau sesuai dengan permintaan pelanggan
          dengan keamanan dan perlindungan yang maksimal. Sehingga Anda dapat
          lebih tenang dalam menyimpan barang berharga/dokumen Anda seperti
          perhiasan, logam mulia, saham, obligasi, surat berharga, sertifikat
          atau barang-barang Anda yang tidak ternilai harganya.
        </p>
      </section>
      <section className="keunggulanSdb">
        <div
          className="contKeunggulan"
          div
          data-aos="fade-right"
          data-aos-once="true"
        >
          <h2>Keuntungan Layanan SDB Sembada </h2>
          <p>
            Sembada berkomitmen menghadirkan produk layanan Safe Deposit Box
            (SDB), yang aman dan nyaman dengan harga layanan yang kompetitif
            untuk memenuhi kebutuhan Anda.
          </p>
        </div>
        <div className="hovKeunggulan">
          <section className="row1">
            <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-once="true"
            >
              <h3>Aman</h3>
              <p>
                Keamanan tinggi, perlindungan barang berharga yang tak
                tertandingi.
              </p>
            </div>

            <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-once="true"
            >
              <h3>Nyaman</h3>
              <p>
                Akses mudah 24/7, layanan profesional untuk kenyamanan Anda.
              </p>
            </div>

            <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <h3>Fleksibel</h3>
              <p>
                Penyimpanan beragam barang berharga, sesuai kebutuhan individu.
              </p>
            </div>

            <div
              className="sdbCardCont"
              div
              data-aos="zoom-in"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <h3>Kompetitif</h3>
              <p>
                Harga bersaing, layanan tingkat atas, solusi penyimpanan
                berkelas.
              </p>
            </div>
          </section>
        </div>
      </section>

      <section
        className="persyaratan"
        div
        data-aos="fade-out"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <div className="listSyarat">
          <h2>Persyaratan mudah pengajuan SDB</h2>
          <ol>
            <li>Memiliki rekening tabungan di Bank Sembada</li>
            <li>Menunjunkan kartu identitas asli</li>
            <li>
              Mengisi formulir permohonan sewa SDB disertai pas foto terbaru
              ukuran 4x6 (2 Lembar)
            </li>
            <li>Mengisi dokumen perjanjian sewa SDB</li>
            <li>
              Benda atau barang yang tidak boleh disimpan dalam kotak SDB:
              <ol>
                <li>Senjata api dan atau bahan peledak.</li>
                <li>Obat-obatan terlarang.</li>
                <li>
                  Barang-barang yang bersifat organik, mudah membusuk atau rusak
                  yang disimpan dalam suatu kotak tertutup.
                </li>
                <li>
                  Segala macam barang yang dapat membahayakan atau merusak kotak
                  SDB bersangkutan dan tempat sekitarnya.{" "}
                </li>
                <li>
                  Barang-barang yang sangat diperlukan saat keadaan darurat
                  seperti: surat kuasa, catatan kesehatan dan petunjuk bila
                  Penyewa sakit, petunjuk bila Penyewa meninggal dunia (wasiat),
                  barang-barang lainnya yang dilarang sesuai peraturan dan
                  undang-undang.{" "}
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div className="tabelSyarat">
          <h2>Ukuran Kotak SDB dan Harga Sewa</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Ukuran Kotak</th>
                <th>
                  Biaya Sewa* <br />
                  (belum termasuk pajak)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Kecil <i>(Small)</i>
                </td>
                <td>Rp.380.000,-</td>
              </tr>
              <tr>
                <td>
                  Sedang <i>(Medium)</i>
                </td>
                <td>Rp.580.000,-</td>
              </tr>
              <tr>
                <td>
                  Besar <i>(Large)</i>
                </td>
                <td>Rp.800.000,-</td>
              </tr>
            </tbody>
          </Table>
          <h2>Denda Keterlambatan Perpanjangan Sewa:</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Jumlah Keterlambatan</th>
                <th>Besar Nominal Denda</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15 hari kalender s.d. 3 bulan</td>
                <td>25% dari biaya sewa</td>
              </tr>
              <tr>
                <td>&gt; 3 bulan s.d. 6 bulan</td>
                <td>50% dari biaya sewa</td>
              </tr>
              <tr>
                <td>&gt; 6 bulan</td>
                <td>100% dari biaya sewa</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
      <div
        className="list-harga-SDB"
        div
        data-aos="fade-out"
        data-aos-delay="300"
        data-aos-once="true"
      >
        <div className="Judul-hargaSDB">
          <h2>List harga sewa SDB Sembada</h2>
          <p className="p-SDB">
            Berikut price list harga sewa dan ukuran SDB sembada
          </p>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th rowSpan={2}>Ukuran Box</th>
              <th colSpan={2}>Harga Sewa 12 Bulan</th>
              <th rowSpan={2}>Jaminan kunci</th>
            </tr>
            <tr>
              <th>Nasabah dengan total rata-rata saldo minimal Rp 10 Juta</th>
              <th>
                Nasabah dengan total rata-rata saldo kurang dari Rp 10 Juta
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3 x 5 x 24</td>
              <td>200.000</td>
              <td>400.000</td>
              <td rowSpan={8}>600.000</td>
            </tr>
            <tr>
              <td>5 x 5 x 24</td>
              <td>250.000</td>
              <td>500.000</td>
            </tr>
            <tr>
              <td>3 x 10 x 24</td>
              <td>300.000</td>
              <td>600.000</td>
            </tr>
            <tr>
              <td>5 x 10 x 24</td>
              <td>450.000</td>
              <td>900.000</td>
            </tr>
            <tr>
              <td>15 x 10 x 24</td>
              <td>750.000</td>
              <td>1.500.000</td>
            </tr>
            <tr>
              <td>5 x 15 x 24</td>
              <td>750.000</td>
              <td>1.500.000</td>
            </tr>
            <tr>
              <td>15 x 15 x 24</td>
              <td>900.000</td>
              <td>1.800.000</td>
            </tr>
            <tr>
              <td>15 x 30 x 24</td>
              <td>2.250.000</td>
              <td>4.500.000</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <section className="link-to-formsdb">
        <a href="./formsdb" className="btn-to-formsdb">
          {" "}
          Form SDB
        </a>
      </section>
    </div>
  );
};
export default SaveDepositBox;

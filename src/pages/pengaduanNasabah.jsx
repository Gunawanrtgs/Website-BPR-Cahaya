import "../css/pengaduanNasabah.css";
const PengaduanNasabah = () => {
  return (
    <div>
      <div className="hero-section-pengaduan">
        <div
          className="containers-visi"
          data-aos="zoom-in-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <h1>Layanan Pengaduan Nasabah</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            ultricies purus. Duis pellentesque ligula a enim consequat.
          </p> */}
        </div>
      </div>
      <section className="cont-pengaduan">
        <h4>
          Berdasarkan Peraturan Otoritas Jasa Keuangan Nomor 01/POJK.07/2013
          tanggal 6 Agustus 2013 tentang Perlindungan Konsumen Sektor Jasa
          Keuangan dan Surat Edaran Otoritas Jasa Keuangan Nomor 2/SEOJK.07/2014
          tanggal 14 Februari 2014 tentang Pelayanan Dan Penyelesaian Pengaduan
          Konsumen Pada Pelaku Usaha Jasa keuangan, dengan ini diinformasikan
          Prosedur Pelayanan dan Penyelesaian Pengaduan Nasabah PT Bank
          Perkreditan Rakyat Cahaya Wiraputra (selanjutnya disebut Bank) sebagai
          berikut :
        </h4>
        <br />
        <div className="cont-cara-pengaduan">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VydmljZSUyMGNlbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-once="true"
          />
          <div>
            <h2 data-aos="fade-left" data-aos-once="true">
              Prosedur Penyampaian Pengaduan kepada Bank
            </h2>
            <h4>
              Pengajuan pengaduan kepada Bank hanya dapat dilakukan oleh nasabah
              atau perwakilan nasabah yang bertindak untuk dan atas nama nasabah
              (ditunjukkan dengan surat kuasa bermeterai). Nasabah dapat
              menyampaikan pengaduan kepada Bank melalui beberapa cara sebagai
              berikut:
            </h4>

            <ol>
              <li>
                <a href="#lisan">Pengaduan Secara Lisan</a>
              </li>
              <li>
                <a href="#tulisan">Pengaduan secara tertulis</a>
              </li>
              <li>
                <a href="#apk-ojk">
                  {" "}
                  Pengaduan melalui Aplikasi Portal Pengaduan Konsumen Otoritas
                  Jasa Keuangan
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
      {/* Judul with bg */}
      <div className="cont-langkah-pengaduan" id="lisan">
        <h1>Langkah Pengaduan Nasabah</h1>
      </div>
      {/* abis */}
      <div id="lisan" style={{ height: "5vh" }}></div>
      <section className="container-prosedur-pengaduan">
        {/* Prosedur Lisan */}
        <section className="prosedur-pengaduan">
          <div>
            <h1>Pengaduan Secara Lisan</h1>
            <p>
              Nasabah mendatangi kantor cabang Bank terdekat dan menyampaikan
              pengaduan melalui Customer Service / Petugas pelayanan nasabah ,
              atau Nasabah menelpon dan menyampaikan pengaduannya melalui no
              telp 0561-722101, 0561-721178.Pengaduan secara lisan dari nasabah
              akan ditangani dan diselesaikan dalam 2 (dua) hari kerja setelah
              tanggal pengaduan diterima. Apabila pengaduan yang diajukan oleh
              nasabah memerlukan penanganan dan penyelesaian lebih dari 2 (dua)
              hari kerja, maka Bank akan menyampaikan kepada nasabah agar
              mengajukan pengaduannya secara tertulis.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VydmljZSUyMGNlbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-once="true"
          />
        </section>
        {/* Tulisan */}
        <div id="tulisan" style={{ height: "5vh" }}></div>
        <section className="prosedur-pengaduan">
          <div>
            <h1>Pengaduan secara tertulis</h1>
            <p>
              Pengaduan secara tertulis dapat disampaikan melalui surat,
              faksimili di no. 0561-721179 atau “email” ke alamat &nbsp;
              <a href="mailto:cahaya_wiraputra@yahoo.co.id">
                cahaya_wiraputra@yahoo.co.id
              </a>{" "}
              dengan judul “Pengaduan”
              <br />
              <br />
              Dalam hal pengaduan diajukan secara tertulis, maka nasabah wajib
              melampirkan fotokopi identitas dan dokumen pendukung lainnya.
              Seperti :
              <ol>
                <li>
                  Foto copy KTP nasabah dan atau perwakilannya (jika diwakilkan)
                </li>
                <li>
                  Surat kuasa dari nasabah yang diwakilkan (jika diwakilkan)
                </li>
                <li>
                  Foto copy rekening yang diadukan. (tabungan dan atau deposito)
                </li>
                <li>
                  Foto copy bukti transaksi keuangan yang terkait permasalahan.
                </li>
                <li>
                  Foto copy dokumen pendukung lainnya yang terkait permasalahan
                </li>
              </ol>
              Pengaduan secara tertulis akan ditangani dan diselesaikan dalam 20
              (dua puluh) hari kerja setelah tanggal penerimaan pengaduan
              diterima oleh Bank dan dapat diperpanjang sampai dengan paling
              lama 20 (dua puluh) hari kerja berikutnya apabila Bank memerlukan
              perpanjangan waktu untuk penyelesaian pengaduan nasabah yang
              disebabkan oleh kondisi tertentu dengan memperhatikan ketentuan
              hukum yang berlaku. Dalam hal ini Bank akan memberitahukan secara
              tertulis kepada nasabah sebelum jangka waktu 20 (dua puluh) hari
              kerja yang pertama berakhir.
            </p>

            <section className="rahasia-nsb">
              <div>
                <p>
                  Bank akan menjaga kerahasian data nasabah yang melakukan
                  pengaduan kepada Bank terhadap pihak manapun, <br />
                  kecuali :
                </p>
                <ol>
                  <li>kepada pihak Otoritas Jasa Keuangan;</li>
                  <li>dalam rangka penyelesaian pengaduan;</li>
                  <li>
                    diwajibkan oleh peraturan perundang-undangan dan/atau;
                  </li>
                  <li>atas persetujuan nasabah yang bersangkutan.</li>
                </ol>
              </div>
              <div>
                <p>
                  Demi kelancaran proses pengaduan dan penanganan pengaduan maka
                  nasabah perlu memperhatikan hal-hal berikut :
                </p>
                <ol>
                  <li>Tentukan inti permasalahan yang akan diadukan</li>
                  <li>
                    Siapkan dokumen pendukung yang terkait permasalahan yang
                    akan diadukan
                  </li>
                  <li>
                    Simpan dengan baik dokumen-dokumen asli yang dimiliki dan
                    sampaikan kepada bank salinan/copy dokumen tersebut saat
                    melakukan pengaduan
                  </li>
                  <li>
                    Catat no. register yang diberikan bank dan nama petugas yang
                    menerima pengaduan
                  </li>
                  <li>
                    Simpan dokumen surat-menyurat yang ada termasuk surat hasil
                    penyelesaian pengaduan
                  </li>
                </ol>
                <p>
                  Apabila nasabah tidak puas dengan hasil penyelesaian yang
                  disampaikan Bank , nasabah dapat melanjutkan upaya
                  penyelesaian melalui fasilitas penyelesaian melalui Otoritas
                  Jasa Keuangan OJK.
                </p>
                
              </div>
            </section>
            Apabila nasabah tidak puas dengan hasil penyelesaian yang disampaikan Bank , nasabah dapat melanjutkan upaya penyelesaian melalui fasilitas penyelesaian melalui Otoritas Jasa Keuangan OJK.
          </div>
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VydmljZSUyMGNlbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-once="true"
          />
        </section>
        {/* Apk Ojk */}
        <div id="apk-ojk" style={{ height: "5vh" }}></div>
        <section className="prosedut-pengaduan"></section>
      </section>
    </div>
  );
};
export default PengaduanNasabah;

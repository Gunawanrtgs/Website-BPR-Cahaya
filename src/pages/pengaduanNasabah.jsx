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
        <div className="cont-cara-pengaduan">
          <img
            src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2VydmljZSUyMGNlbnRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-once="true"
          />
          <div>
            <h2 data-aos="fade-left">Pihak yang mendapat keluhan</h2>
            <ol>
              <li
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-once="true"
              >
                Nasabah yang menempatkan Dana dan/atau memanfaatkan pelayanan
                dari Bank Sembada Dana
              </li>
              <li
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Perwakilan Nasabah yg bertindak untuk dan atas nama Nasabah
                berdasarkan surat kuasa khusus dari nasabah
              </li>
            </ol>
            <h2 data-aos="fade-left" data-aos-once="true">
              Keluhan Nasabah dapat disampaikan dengan cara :
            </h2>
            <ol>
              <li data-aos="fade-left" data-aos-once="true">
                Menghubungi Customer Care kami di nomor telepon{" "}
                <a href="tel:+628123456789" target="blank">
                  021-3840786
                </a>
                /
                <a href="tel:+628123456789" target="blank">
                  021-3840881
                </a>
              </li>
              <li
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-once="true"
              >
                Menghubungi kantor Bank Sembada pada jam operasional kantor
              </li>
              <li
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-once="true"
              >
                Mengirimkan keluhan dengan
              </li>
              <ul
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-once="true"
              >
                <li>
                  Mengirimkan E-mail ke{" "}
                  <a href="mailto:bprsembada@bprsembada.com">
                    bprsembada@bprsembada.com
                  </a>
                </li>
                <li>
                  Mengisi Formulir Pengaduan Online pada tautan yg tertera
                </li>
                <li>
                  Membuat surat resmi ke kantor pusah Bank sembada Dana dengan
                  alamat Gedung ASEAN TOWE Jl KH Samanhudi No.10 Lantai 6 RT.01
                  RW.02 Kel. Pasar Baru, Kec. Sawah Besar Jakarta Pusat 10710
                </li>
              </ul>
            </ol>
          </div>
        </div>
      </section>
      <section>
        <div className="cont-langkah-pengaduan">
          <h1>Langkah Pengaduan Nasabah</h1>
        </div>
        <section className="cont-pengaduan">
          <div className="cont-cara-pengaduan">
            <div>
              <h2 data-aos="fade-right" data-aos-once="true">
                Proses penanganan keluhan
              </h2>
              <ol>
                <li data-aos="fade-right" data-aos-once="true">
                  Nasabah Menyampaikan Keluhan Melalui Media (channel) yang di
                  sediakan oleh Bank Sembada BPR
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Petugas Bank akan Melakukan verifikasi atas kesesuaian data
                  nasabah
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Petugas bank akan menerima dan mencatat keluhan yg disampaikan
                  oleh nasabah
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Nasabah akan menerima nomor registrasi atas keluhan yg di
                  sampaikan
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Bank akan menindaklanjuti dan menyelesaikan keluhan nasabah
                  sesuai dengan jangka waktu penyelesaian berdasarkan
                  penyampaian keluhan.
                </li>
                <li data-aos="fade-right" data-aos-once="true">
                  Bank akan menghubungi nasabah untuk menyampaikan hasil
                  penyelesaian keluhan.
                </li>
              </ol>
            </div>
            <img
              src="https://images.unsplash.com/photo-1603714228681-b399854b8f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80"
              alt=""
              data-aos="fade-left"
              data-aos-once="true"
            />
          </div>
        </section>
      </section>
    </div>
  );
};
export default PengaduanNasabah;

import "../css/visiMisi.css";
const VisiMisi = () => {
  return (
    <div>
      <div className="hero-section-visi"></div>

      {/* <div className="deskripsi-simpanan-konvensional">
        <p>
          Bank Sembada berkomitmen untuk terus bertumbuh dan menjadi bank yang
          terpercaya sebagai pilihan utama solusi keuangan layanan perbankan
          dengan menjalankan layanan berpegang pada prinsip{" "}
          <strong>"TULUS"</strong>
        </p>
      </div> */}

      <div className="vision-mission">
        <div className="cont-visi">
          <div className="row-vismis">
            <div
              className="col-lg-6 vismis"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <h2>Pernyataan Visi Perusahaan</h2>
              <p>
                Menjadi Bank Perkreditan Rakyat yang terbaik di wilayah
                Kalimantan Barat.
              </p>
            </div>
            <div
              className="col-lg-6 vismis"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-duration="300"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
            >
              <h2>Pernyataan Misi Perusahaan</h2>

              <ul>
                <li>
                  Memberikan pelayanan yang tulus dan ikhlas serta bersahabat.
                </li>
                <li>
                  Membantu meningkatkan kesejahteraan masyarakat dengan layanan
                  perbankan yang cepat, tepat, dan bermanfaat namun tetap
                  memperhatikan prinsip kehati-hatian.
                </li>
                <li>
                  Menjangkau masyarakat yang belum terlayani layanan perbankan.
                </li>
                <li>
                  Mengembangkan sistem operasional yang efisien, aman, dan
                  nyaman.
                </li>
                <li>
                    Mengembangkan sumber daya manusia yang berkualitas dan
                  profesional.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VisiMisi;

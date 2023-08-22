import "../css/strategi.css";
const Strategi = () => {
  return (
    <div>
      <div className="hero-section-strategi">
        <div className="containers-visi">
          <h1
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            Tentang Kami
          </h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
            ultricies purus. Duis pellentesque ligula a enim consequat.
          </p> */}
        </div>
      </div>
      <div class="container-strategi">
        <div class="strategi">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjA2fHxkaWdpdGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Strategi Bisnis 1"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          />
          <h2 data-aos="fade-right" data-aos-once="true">
            Transformasi Bisnis
          </h2>
          <ol data-aos="fade-right" data-aos-once="true">
            <li>
              Mengembangkan digitalisasi untuk sistem informasi BPR yang lebi
              modern dan terintegrasi untuk mempermudah proses bisnis serta
              memberikan kemudahan dalam akses lebih bagi nasabah BPR seperti
              Internet banking.
            </li>
            <li>
              Memperluas jenis produk yang ditawarkan untuk meningkatkan
              kepuasan nasabah dalam bertransaksi di BPR kami.
            </li>
            <li>
              {" "}
              Meningkatkan pelayanan BPR dengan meningkatkan kualitas sarana dan
              prasarana kami serta meningkatkan kualitas dan kuantitas tenaga
              kerja di BPR Sembada untuk pelayanan yang lebih baik.
            </li>
          </ol>
        </div>
        <div class="strategi">
          <img
            src="https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80"
            alt="Strategi Bisnis 2"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
          />
          <h2 data-aos="fade-left" data-aos-once="true">
            Transformasi Budaya
          </h2>
          <ol data-aos="fade-left" data-aos-once="true">
            <li>
              Memiliki pemimpin yang mendorong dan menunjukkan dukungan yang
              jelas untuk perubahan budaya, sehingga menjadi model yang baik
              dalam perilaku yang bisa menunjukan integritas dari suatu BPR,
              juga dapat memotivasi karyawan untuk membangun budaya kerja yang
              lebih baik.
            </li>
            <li>
              Menyediakan program pelatihan dan pengembangan karyawan sesuai
              dengan perubahan budaya yang diinginkan.
            </li>
            <li>
              {" "}
              Membangun komunikasi mengenai perubahan budaya yang akan
              dilakukan, tujuan perusahaan, dan nilai-nilai yang dibangun dalam
              suatu perusahaan.
            </li>
            <li>
              Mendorong inovasi dan perubahan dalam setiap bidang kerja, baik
              dalam proses kerja, produk, dan layanan sehingga dapat membangun
              budaya kerja yang inovatif, dinamis, dan responsif terhadap
              perubahan.
            </li>
            <li>
              Memberikan apresiasi dna penghargaan atas kinerja karyawan yang
              telah menciptakan budaya kerja yang baik dan responsif.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
export default Strategi;

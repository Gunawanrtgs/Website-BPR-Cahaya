import "./Navibar.css";
import Icon from "@mdi/react";
import {
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
  mdiEmailOutline,
} from "@mdi/js";
const Footers = () => {
  return (
    <div className="cont-footer">
      <div className="container-footer">
        <div className="footer-about">
          <h3>Kontak</h3>
          <div className="footer-1">
            <div>
              <h5>PT. BPR Cahaya Wiraputra</h5>
              <p>
                Jalan Adisucipto No. 71 <br />
                Sungai Raya <br /> Kubu Raya <br /> Kalimantan Barat Indonesia
              </p>
            </div>
            <div>
              <h5>Nomor Telepon</h5>
              <p>Telepon: (0561)-722101</p>
              <p>Telepon: (0561)-721178</p>
            </div>
            <div>
              <h5>Email</h5>
              <p>Cahaya_wiraputra@yahoo.co.id</p>
              <p>cahayawiraputra.bpr@gmail.com</p>
            </div>
            
          </div>
              <p className="copyright">
                COPYRIGHT © 2023 PT BPR Cahaya Wiraputra. ALL RIGHTS RESERVED.
              </p>
        </div>
        <div className="footer-social">
          <h3>Sosial Media</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/bpr.sembada/" target="blank">
                <Icon path={mdiInstagram} size={2} />
              </a>
            </li>

            <li>
              <a href="mailto:bprsembada@bprsembada.com">
                <Icon path={mdiEmailOutline} size={2} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-address">
          <div className="logoLegal">
            <div className="itemLegal">
              <h3>Berizin dan diawasi oleh OJK</h3>
              <img src="assets/OJKLogo.png" alt="" />
            </div>
            <div className="itemLegal">
              <h3>Merupakan peserta penjamin LPS</h3>
              <img src="assets/LembagaPenjaminSimpanan.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// testing kris
export default Footers;

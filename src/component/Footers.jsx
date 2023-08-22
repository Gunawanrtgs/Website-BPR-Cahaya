import "./Navibar.css";
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram, mdiEmailOutline  } from "@mdi/js";
const Footers = () => {
  return (
    <div className="cont-footer">
      <div className="container-footer">
        <div className="footer-about">
          <h3>Hubungi kami</h3>
          <div className="footer-1">
            <div>
              <h5>Alamat Kami</h5>
              <p>
                Gedung ASEAN TOWER Jalan KH Samanhudi No.10 Lantai 6, RT.01
                RW.02 Kel. Pasar Baru, Kec. Sawah Besar, Jakarta Pusat 10710
              </p>
            </div>
            <div>
              <h5>Nomor Telepon</h5>
              <p>Telepon: 021-3840786</p>
              <p>Telepon: 021-3840881</p>
              <p className="copyright">
                COPYRIGHT © 2023 PT BPR MULTI SEMBADA DANA. ALL RIGHTS RESERVED.
              </p>
            </div>
            <div>
              <h5>Email</h5>
              <p>bprsembada@bprsembada.com</p>
            </div>
            <h6>Melayani dengan prinsip "TULUS"</h6>
          </div>
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

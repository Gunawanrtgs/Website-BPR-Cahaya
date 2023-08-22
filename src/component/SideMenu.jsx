import "./sideMenu.css";
import Icon from "@mdi/react";
import { mdiMapMarkerOutline, mdiWhatsapp, mdiFormSelect } from "@mdi/js";

const SideMenu = () => {
  return (
    <div>
      <div className="cont-menu-icon">
        <div className="btn-menu1">
          <div className="icon-menu">
            <Icon path={mdiFormSelect} className="list-icon-sidebar" />
          </div>
          <a href="./formSimpanan">Tabungan</a>
          <a href="./formSimpanan">Deposito</a>
          <a href="./formKredit">Kredit</a>
        </div>

        <div className="btn-menu2">
          <div className="icon-menu">
            <Icon path={mdiMapMarkerOutline} className="list-icon-sidebar" />
          </div>
          <a href="./KontakKami">Lokasi & Kontak</a>
        </div>

        <div className="btn-menu3">
          <div className="icon-menu">
            <Icon path={mdiWhatsapp} className="list-icon-sidebar" />
          </div>
          <a href="">Whatsapp</a>
          <a href="mailto:bprsembada@bprsembada.com">E-mail</a>
        </div>
      </div>
    </div>
  );
};
export default SideMenu;

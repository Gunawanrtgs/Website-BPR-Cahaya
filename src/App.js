import React from "react";
import Navibar from "./component/Navibar";
import Footers from "./component/Footers";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

import SideMenu from "./component/SideMenu";

// import All Page
import Home from "./pages/home";
// simpanan
import TabunganCahaya from "./pages/tabunganCahaya";

// pinjaman
import Kreditkerja from "./pages/kreditKeja";
import KreditKonsumtif from "./pages/kreditKonsumtif";
import Investasi from "./pages/investasi";
import KreditKendaraan from "./pages/kreditKendaraan";
import KreditRumah from "./pages/kreditRumah";
import KreditMultiguna from "./pages/kreditMultiguna";

// form produk
import FormSimpanan from "./pages/formSimpanan";
import FormKredit from "./pages/formKredit";

// tentang kami
import VisiMisi from "./pages/visiMisi";
import ProfilPerus from "./pages/profilPerusahaan";
import StrukturOrgn from "./pages/strukturOrganisasi";
import Strategi from "./pages/strategi";
import PengaduanNasabah from "./pages/pengaduanNasabah";
import LaporanKeuangan from "./pages/laporankeuangan";

// hubungi kami
import KontakKami from "./pages/kontakKami";
import Kemitraan from "./pages/kemitraan";
import Karir from "./pages/karir";
import Berita from "./pages/berita";

// layanan
import PaymentPointOnlineBangking from "./pages/paymentPoin";
import SaveDepositBox from "./pages/saveDepositBox";
import Deposito from "./pages/deposito";

import formsdb from "./pages/formsdb";
import Formsdb from "./pages/formsdb";


class App extends React.Component {
  componentDidMount() {
    AOS.init();
    AOS.refresh();
  }
  render() {
    return (
      <div className="App">
        <Navibar />
        <SideMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposito" element={<Deposito />} />
          <Route path="/tabunganCahaya" element={<TabunganCahaya />} />
          <Route path="/kreditKendaraan" element={<KreditKendaraan />} />
          <Route path="/kreditMultiguna" element={<KreditMultiguna />} />
          <Route path="/kreditRumah" element={<KreditRumah />} />
          
          <Route path="/kreditKerja" element={<Kreditkerja />} />
          <Route path="/kreditKonsumtif" element={<KreditKonsumtif />} />
          <Route path="/investasi" element={<Investasi />} />
          <Route path="/visiMisi" element={<VisiMisi />} />
          <Route path="/profilPerusahaan" element={<ProfilPerus />} />
          <Route path="/strukturOrganisasi" element={<StrukturOrgn />} />
          <Route path="/strategi" element={<Strategi />} />
          <Route path="/pengaduanNasabah" element={<PengaduanNasabah />} />
          <Route path="/laporankeuangan" element={<LaporanKeuangan />} />
          <Route path="/kontakKami" element={<KontakKami />} />
          <Route path="/kemitraan" element={<Kemitraan />} />
          <Route path="/karir" element={<Karir />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/formSDB" element={<Formsdb />} />

          <Route
            path="/paymentPoint"
            element={<PaymentPointOnlineBangking />}
          />
          <Route path="/saveDepositBox" element={<SaveDepositBox />} />
          <Route path="/formSimpanan" element={<FormSimpanan />} />
          <Route path="/formKredit" element={<FormKredit />} />
        </Routes>
        <Footers />
      </div>
    );
  }
}

export default App;

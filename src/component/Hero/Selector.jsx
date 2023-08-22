import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Form } from "react-bootstrap";

const SelectorHome = () => {
  const [homeValue, setHomeValue] = useState("");
  const onSelect = (e) => {
    setHomeValue(e.target.value);
    console.log(homeValue);
  };
  const handleNavigation = () => {
    if (homeValue === "pinjaman") {
      return <Navigate to="/kreditKerja" />;
    } else if (homeValue === "Simpanan") {
      return <Navigate to="/simKonvensional" />;
    } else if (homeValue === "DepositBox") {
      return <Navigate to="/saveDepositBox" />;
    } else if (homeValue === "parembayan") {
      return <Navigate to="/paymentPoint" />;
    }else if (homeValue === "komunitas") {
      return <Navigate to="/kemitraan" />;
    }else if (homeValue === "organisasi") {
      return <Navigate to="/karir" />;
    }
  };
  return (
    <div>
      {handleNavigation()}
      <Form.Select
        value={homeValue}
        onChange={onSelect}
        className="option-home"
      >
        <option>Saya ingin...</option>
        <option value="pinjaman">Pinjaman cepat, aman dan nyaman</option>
        <option value="Simpanan">Simpanan aman dan menguntungkan</option>
        <option value="DepositBox">
          Layanan Save Deposit Box aman dan bersahabat
        </option>
        <option value="parembayan">Layanan Pembayaran yg aman dan murah</option>
        <option value="komunitas">
          Mengembangkan komunitas yg bermakna bersama BPR Sembada
        </option>
        <option value="organisasi">
          Menjadi bagian dalam organisasi perusahaan yg energit dan produktif
        </option>
      </Form.Select>
    </div>
  );
};
export default SelectorHome;

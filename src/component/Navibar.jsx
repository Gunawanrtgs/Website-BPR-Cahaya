import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Navibar.css";
import Icon from "@mdi/react";
import { mdiInstagram, mdiTwitter, mdiFacebook } from "@mdi/js";
import { Link } from "react-router-dom";

const Navibar = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      className="Cont_nav mx-auto px-5 py-0"
      fixed="top"
    >
      {/* Brand Company */}
      <Navbar.Brand href="#home" as={Link} to="/" className="navbrand">
        <img
          src="./assets/logoBaru.jpg"
          alt=""
          className="nav-logo mx-0 py-0 px-0"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto"></Nav>

        {/* Navigasi */}
        <Nav className="me-auto">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Simpanan"
            menuVariant="light"
          >
            <NavDropdown.Item href="./simKonvensional">
              Simpanan Konvensional
            </NavDropdown.Item>
            <NavDropdown.Item
              href="https://user.depositobpr.id/deposan/deposito-bpr/deposito-detail/BPR-Multi-Sembada-Dana-6-bulan-5-5-pa-1349530"
              target="blank"
            >
              Simpanan Online
            </NavDropdown.Item>
            <NavDropdown.Item href="./deposito">Deposito</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Pinjaman"
            menuVariant="light"
          >
            <NavDropdown.Item href="./kreditKerja">
              Pinjaman Modal Kerja
            </NavDropdown.Item>
            <NavDropdown.Item href="./kreditKonsumtif">
              Pinjaman Konsumtif  
            </NavDropdown.Item>
            <NavDropdown.Item href="./investasi">
              Pinjaman Investasi
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown id="nav-dropdown-dark-example" title="Tentang Kami">
            <NavDropdown.Item href="./visiMisi">Visi dan Misi</NavDropdown.Item>
            <NavDropdown.Item href="./profilPerusahaan">
              Profil Perusahaan Kami
            </NavDropdown.Item>
            <NavDropdown.Item href="./strukturOrganisasi">
              Struktur Organisasi
            </NavDropdown.Item>
            <NavDropdown.Item href="./strategi">Strategi</NavDropdown.Item>
            <NavDropdown.Item href="./laporankeuangan">
              Laporan Keuangan
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Hubungi Kami"
            menuVariant="light"
          >
            <NavDropdown.Item href="./kontakKami">Kontak Kami</NavDropdown.Item>
            <NavDropdown.Item href="./pengaduanNasabah">
              Pengaduan Nasabah
            </NavDropdown.Item>
            <NavDropdown.Item href="./kemitraan">Kemitraan</NavDropdown.Item>
            <NavDropdown.Item href="./karir">Karir</NavDropdown.Item>
            <NavDropdown.Item href="./berita">Berita</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Layanan"
            menuVariant="light"
          >
            <NavDropdown.Item href="./saveDepositBox">
              Safe Deposit Box
            </NavDropdown.Item>
            <NavDropdown.Item href="./paymentPoint">
              Payment Point Online Banking
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* Sosial media */}
        <Nav className="bar-sosialmedia">
          <a href="">
            <Icon path={mdiFacebook} size={2} className="icon-navBar" />
          </a>
          <a
            href="https://instagram.com/bpr.sembada?igshid=ZDdkNTZiNTM="
            target="_blank"
          >
            <Icon path={mdiInstagram} size={2} className="icon-navBar" />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Navibar;

import "../css/karir.css";
import { Table, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Accordion } from "react-bootstrap";

const Karir = () => {
  const CardKarir = () => (
    <Card className="karirCard" style={{ width: "25rem" }}>
      <Card.Body>
        <Card.Title>IT</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Web Developer</Card.Subtitle>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          quae reiciendis animi officia harum nihil totam et magni recusandae
          aliquam.
        </Card.Text>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Persyaratan</Accordion.Header>
            <Accordion.Body>
              <ol>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );

  return (
    <div>
      <div className="hero-section-karir">
        <div className="containers-visi">
          <h1
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            Karir
          </h1>
        </div>
      </div>
      <div className="cont-form-karir">
        <h2>Posisi yang tersedia</h2>
        <p>
          Karir - Lowongan Kerja Bank Perkreditan Rakyat Indonesia. Kami Membuka
          Loker Pada Kandidat Terbaik dan Berprestasi Untuk Bergabung Bersama
          Officer Bank Sembada.
        </p>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Jabatan</th>
              <th>Lokasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
        <Button variant="danger" className="me-3">
          Hubingi HRD
        </Button>
        <Button variant="warning">Download Form</Button>
      </div>
      <div className="listKarir">{CardKarir()}</div>
    </div>
  );
};
export default Karir;

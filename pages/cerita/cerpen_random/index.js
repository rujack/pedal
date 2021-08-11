import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useState } from "react";
import { Container, Card, Modal, Button } from "react-bootstrap";

function InfoHalaman(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Perhatian!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.isi}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          Tutup
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Cerpen = (props) => {
  const [modalShow, setModalShow] = useState(true);
  const router = useRouter();
  const { data } = props;
  return (
    <>
      <Head>
        <title>Pedal - Random Cerpen </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {data.cerpen !== null || undefined ? (
          <InfoHalaman
            show={modalShow}
            isi="Isi dari halaman ini akan berubah ketika di refresh atau ketika
          halaman ini ditinggalkan."
            onHide={() => setModalShow(false)}
          />
        ) : (
          <InfoHalaman
            show={modalShow}
            isi="Mohon Maaf Cerpen Masih Belum Ada"
            onHide={() => router.back()}
          />
        )}
        <Card
          style={{
            minWidth: "100%",
            backgroundColor: "#3e1d3c",
            color: "white",
            border: "3px solid #a39da4",
          }}
          className="m-auto my-4 px-3">
          <div className="mt-3 text-center"></div>
          <Card.Body>
            <Card.Title>
              <h2>Cerpen</h2>
            </Card.Title>
            <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
              {data.cerpen}
              <hr />
              <footer className="blockquote-footer ">
                Sumber :{" "}
                <cite title="Source Title">
                  <a
                    href="https://cerpenmu.com/"
                    style={{ textDecoration: "none" }}
                    target="blank">
                    cerpenmu.com
                  </a>
                </cite>
              </footer>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(`https://api-pedalku.herokuapp.com/random_cerpen`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Cerpen;

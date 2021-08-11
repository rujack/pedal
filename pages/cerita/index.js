import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Col, Container, Row, Card } from "react-bootstrap";

import styles from "../../styles/Cerita.module.css";

const Cerita = () => {
  return (
    <>
      <Head>
        <title>Pedal - Cerita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cerita}>
        <Container className="text-center">
          <h1>Daftar Cerita</h1>
          <Row xs={1} md={2} lg={3}>
            <Col className="m-auto">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#3e1d3c",
                  border: "3px solid ",
                }}
                className="m-auto my-2">
                <Image
                  className="card-img-top"
                  style={{ height: "180px", width: "100%", display: "block" }}
                  src="/rak_buku.svg"
                  width={250}
                  height={150}
                  alt=""
                />
                <Card.Body>
                  <Card.Title>Cerita 25 Nabi</Card.Title>
                  <Link href="/cerita/nabi">
                    <a className="btn">Daftar Cerita</a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-auto">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#3e1d3c",
                  border: "3px solid ",
                }}
                className="m-auto my-2">
                <Image
                  variant="top"
                  src="/rak_buku.svg"
                  width={250}
                  height={150}
                  alt=""
                />
                <Card.Body>
                  <Card.Title>Cerita Rakyat</Card.Title>
                  <Link href="/cerita/rakyat">
                    <a className="btn">Daftar Cerita</a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col className="m-auto">
              <Card
                style={{
                  width: "18rem",
                  backgroundColor: "#3e1d3c",
                  border: "3px solid ",
                }}
                className="m-auto my-2">
                <Image
                  variant="top"
                  src="/rak_buku.svg"
                  width={250}
                  height={150}
                  alt=""
                />
                <Card.Body>
                  <Card.Title>Cerpen Random</Card.Title>
                  <Link href="/cerita/cerpen_random">
                    <a className="btn">Baca</a>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cerita;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import styles from "../../../styles/Cerita.module.css";

const Nabi = () => {
  const nama_nabi = [
    "adam",
    "idris",
    "nuh",
    "hud",
    "sholeh",
    "ibrahim",
    "luth",
    "ismail",
    "ishaq",
    "yaqub",
    "yusuf",
    "ayyub",
    "syuaib",
    "musa",
    "harun",
    "dzulkifli",
    "daud",
    "sulaiman",
    "ilyas",
    "ilyasa",
    "yunus",
    "zakariya",
    "yahya",
    "isa",
    "muhammad",
  ];
  return (
    <>
      <Head>
        <title>Pedal - Cerita Nabi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.cerita}>
        <Container>
          <h1 className="text-center">Daftar Cerita</h1>
          <Row xs={1} md={2} lg={3}>
            {nama_nabi.map((nabi, i) => {
              return (
                <Fragment key={i}>
                  <Col className="me-auto text-center">
                    <Card
                      style={{
                        width: "18rem",
                        backgroundColor: "#3e1d3c",
                        border: "3px solid ",
                      }}
                      className="m-auto my-2">
                      <Image
                        className="card-img-top"
                        style={{
                          height: "180px",
                          width: "100%",
                          display: "block",
                        }}
                        src="/buku.svg"
                        width={250}
                        height={150}
                        alt=""
                      />
                      <Card.Body>
                        <Card.Title>
                          {i + 1}. Kisah Nabi{" "}
                          {nabi.charAt(0).toUpperCase() + nabi.substring(1)}
                        </Card.Title>
                        <Link href={`/cerita/nabi/${nabi}`}>
                          <a className="btn">Membaca</a>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </Fragment>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Nabi;

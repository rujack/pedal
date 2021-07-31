import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import {  Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedal - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Container className="my-3">
          <Row className="py-3">
            <Col md={6} className>
              <div className="text-center">
              <Image src="/read.svg" width={400} height={400} alt="" />
              </div>
            </Col>
            <Col className="mx-5 py-5 mt-3">
              <h1>
                Selamat Datang Di{" "}
                <span style={{ fontWeight: "700" }}>Pedal</span>
              </h1>

              <p style={{ textAlign: "justify" }}>
                Pedal adalah singkatan dari Pendongeng Handal. Disini pedal
                telah menyediakan beberapa kisah dari 25 nabi, kedepannya kami akan mengupdate cerita rakyat yang berasal dari beberapa daerah di Indonesia.
              </p>
              <Link href="/cerita">
              <a className="btn">Mulai Membaca</a>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

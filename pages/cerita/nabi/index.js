import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import styles from "../../../styles/Cerita.module.css";

const Nabi = (props) => {
  const { data } = props;
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
            {data.map((nabi, i) => {
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
                        src={nabi.image_url}
                        width={250}
                        height={150}
                        alt=""
                      />
                      <Card.Body>
                        <Card.Title>
                          {i + 1}. Kisah Nabi {nabi.name}
                        </Card.Title>
                        <Link href={`/cerita/nabi/${i + 1}`}>
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

export const getStaticProps = async () => {
  const res = await fetch(
    `https://islamic-api-zhirrr.vercel.app/api/kisahnabi`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Nabi;

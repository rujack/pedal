import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Maintenace = () => {
  const [hari, setHari] = useState("0");
  const [jam, setjam] = useState("0");
  const [menit, setMenit] = useState("0");
  const [detik, setDetik] = useState("0");

  let interval = useRef()
  const countDown = () => {
    let year = new Date().getFullYear();
    interval = setInterval(() => {
      const difference = +new Date(`${year}-8-7`) - +new Date();
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      if (difference > 0) {
        setHari(days);
        setjam(hours);
        setMenit(minutes);
        setDetik(seconds);
      }else{
        clearInterval(interval.current)
        setHari('0');
        setjam('0');
        setMenit('0');
        setDetik('0');
      }
    },1000);
  };


  useEffect(() => {
    setTimeout(() => {
      countDown()
    });
  }),[];

  return (
    <>
      <Head>
        <title>Pedal - Maintenance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Container className="text-white">
        <h1 className="text-center mt-3" style={{fontWeight:'bolder'}}>PEDAL</h1>
        <Row xs={1} md={1} lg={2} className="my-2 text-white">
          <Col className="text-center">
            <Image
              src="/maintenance.svg"
              width={400}
              height={450}
              alt=""
              className="m-auto mt-lg-3"
            />
          </Col>
          <Col className="mt-lg-5 pt-lg-5">
            <div className="m-auto mt-lg-5">
              <h2>Maintance</h2>
              <i>Mohon maaf website sedang mengalami pemeliharaan, setelah pemeliharaan selesai akan ada menu random cerpen yang menyajikan cerpen sercara acak</i>
              <Row
                xs={4}
                sm={4}
                md={4}
                lg={4}
                className="text-center w-75 my-4 m-auto">
                <Col
                  className="rounded-3 mx-1 px-3 w-auto"
                  style={{ border: "solid" }}>
                  <p className="mt-2">{hari}</p>
                  <p className="mb-2">Hari</p>
                </Col>
                <Col
                  className="rounded-3 mx-1 px-3 w-auto"
                  style={{ border: "solid" }}>
                  <p className="mt-2">{jam}</p>
                  <p className="mb-2">Jam</p>
                </Col>
                <Col
                  className="rounded-3 mx-1 px-3 w-auto"
                  style={{ border: "solid" }}>
                  <p className="mt-2">{menit}</p>
                  <p className="mb-2">Menit</p>
                </Col>
                <Col
                  className="rounded-3 mx-1 px-3 w-auto"
                  style={{ border: "solid" }}>
                  <p className="mt-2">{detik}</p>
                  <p className="mb-2">Detik</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Maintenace;

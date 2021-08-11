import Image from "next/image";
import Head from "next/head";
import { Container, Card } from "react-bootstrap";

const CeritaRakyat = (props) => {
  const { data, rakyat } = props;
  const hasil = data[rakyat - 1];
  return (
    <>
      <Head>
        <title>Pedal - Cerita {hasil.judul}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="text-center text-white">{hasil.judul}</h1>
        <Card
          style={{
            minWidth: "100%",
            backgroundColor: "#3e1d3c",
            color: "white",
            border: "3px solid #a39da4",
          }}
          className="m-auto my-4 px-3">
          <div className="mt-3 text-center">
            <Image src={hasil.gambar} width={450} height={250} alt="" />
          </div>
          <Card.Body>
            <Card.Title>
              <h2>Kisah</h2>
            </Card.Title>
            <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
              {hasil.isi}
              <hr />
              <footer className="blockquote-footer ">
                Sumber :{" "}
                <cite title="Source Title">
                  <a
                    href="https://cerpenmu.com/"
                    style={{ textDecoration: "none" }}
                    target="blank">
                    dongengceritarakyat.com
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

export const getStaticPaths = () => {
  const datas = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];
  const paths = datas.map((data) => ({
    params: { rakyat: `${data}` },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const rakyat = context.params.rakyat;
  const res = await fetch(`https://api-pedalku.herokuapp.com/cerita_rakyat`);
  const data = await res.json();
  return {
    props: {
      data,
      rakyat,
    },
  };
};

export default CeritaRakyat;

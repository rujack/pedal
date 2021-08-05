import Image from "next/image";
import Head from "next/head";
import { Container, Card } from "react-bootstrap";

const NabiNabi = (props) => {
  const { data, nabi } = props;
  const hasil = data[nabi-1]
  return (
    <>
      <Head>
        <title>Pedal - Cerita {hasil.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="text-center text-white">{hasil.name}</h1>
        <Card
          style={{
            minWidth: "100%",
            backgroundColor: "#3e1d3c",
            color: "white",
            border: "3px solid #a39da4",
          }}
          className="m-auto my-4 px-3">
          <div className="mt-3 text-center">
            <Image src={hasil.image_url} width={450} height={250} alt="" />
          </div>
          <Card.Body>
            <Card.Title>
              <h2>Kisah</h2>
            </Card.Title>
            <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
              {hasil.description}
              <hr />
              <footer className="blockquote-footer ">
                Penulis Cerita :{" "}
                <cite title="Source Title">zhirrr</cite>
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
    22, 23, 24, 25, 26, 27, 28,
  ];
  const paths = datas.map((data) => ({
    params: { nabi: `${data}` },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const nabi = context.params.nabi;
  const res = await fetch(
    `https://islamic-api-zhirrr.vercel.app/api/kisahnabi`,
  );
  const data = await res.json();
  return {
    props: {
      data,
      nabi,
    },
  };
};

export default NabiNabi;

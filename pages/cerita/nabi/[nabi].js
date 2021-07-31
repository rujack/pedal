import Image from "next/image";
import Head from "next/head";
import { Container, Card } from "react-bootstrap";

const NabiNabi = (props) => {
  const { data } = props;
  return (
    <>
      <Head>
        <title>Pedal - Cerita {data.nabi.nama}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1 className="text-center text-white">{data.nabi.nama}</h1>
        <Card
          style={{
            minWidth: "100%",
            backgroundColor: "#3e1d3c",
            color: "white",
            border: "3px solid #a39da4",
          }}
          className="m-auto my-4 px-3">
          <div className="mt-3 text-center">
            <Image src={data.nabi.image} width={450} height={250} alt="" />
          </div>
          <Card.Body>
            <Card.Title>
              <h2>Kisah</h2>
            </Card.Title>
            <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
              {data.nabi.kisah}
              <hr />
              <footer className="blockquote-footer ">
                Penulis Cerita :{" "}
                <cite title="Source Title">{data.creator}</cite>
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
  const paths = datas.map((data) => ({
    params: { nabi: `${data}` },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const nabi = context.params.nabi;
  const res = await fetch(
    `https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=${nabi}`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default NabiNabi;

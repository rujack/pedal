import { Container } from "react-bootstrap";

const LaguDaerah = ({ data }) => {
  console.log(data);
  return (
    <Container className="text-white">
      <h1>lagu</h1>
      {data.data.map((lagu, i) => {
        return (
          <>
            <p key={i}>
              {i + 1}. {lagu.daerah}
            </p>
            <ol>
              {lagu.lagu.map((judul, i) => {
                return (
                  <>
                    <li key={i}>{judul.judul}</li>
                    <p style={{whiteSpace: "pre-line"}}>{judul.lirik}</p>
                  </>
                );
              })}
            </ol>
          </>
        );
      })}
    </Container>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://raw.githubusercontent.com/rujack/api-pedal/main/lagu.json`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default LaguDaerah;

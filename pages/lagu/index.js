import { Fragment } from "react";
import { Container } from "react-bootstrap";

const LaguDaerah = ({ data }) => {
  return (
    <Container className="text-white">
      <h1>lagu</h1>
      {data.map((lagu, i) => {
        return (
          <Fragment key={i}>
            <p>
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
          </Fragment>
        );
      })}
    </Container>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api-pedalku.herokuapp.com/lagu`,
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default LaguDaerah;

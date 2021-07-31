import Image from 'next/image'

const Kisah = (props) => {
  const { data } = props;
  console.log(data);
  return(
    <>
    <Image src={data.nabi.image} width={250} height={150} layout='responsive' alt="a" />
    <h1>Hello Kisah</h1>
    <p>{data.nabi.kisah}</p>
    </>
  )
};
export const getStaticProps = async () => {
  const res = await fetch(
    "https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=yusuf",
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

export default Kisah;

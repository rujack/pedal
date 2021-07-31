import Head from "next/head";
import { Container, Table } from "react-bootstrap";

const Tentang = () => {
  return (
    <>
      <Head>
        <title>Pedal - Tentang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className="text-white my-4 ">
        <div
          className="m-auto"
          style={{ width: "25rem", textAlign: "justify" }}>
          <p>
            Selamat datang di Pedal, website cerita untuk semua hal. Kami
            berdedikasi untuk memberikan Anda cerita terbaik, dengan fokus pada
            keandalan. Kami sedang bekerja untuk meningkatkan kualitas kami
            untuk menjadi website cerita yang sedang booming. Kami harap Anda
            menikmati konten kami sama seperti kami menikmati menawarkannya
            kepada Anda.
          </p>
          <p>Terimakasih, Pedal</p>
          <hr />
          <h4>Kontak</h4>
          <Table>
            <tbody className="text-white">
              <tr>
                <td>Email</td>
                <td>:</td>
                <td>admin@admin.com</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <h4>TerimaKasih</h4>
          <p>kepada zhirrr telah menyediakan API</p>
          <pre>
            https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=adam
          </pre>
        </div>
      </Container>
    </>
  );
};

export default Tentang;

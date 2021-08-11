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
          <p className="mb-0">kepada zhirrr telah menyediakan API :</p>
          <pre className="bg-dark py-1 px-3">https://islamic-api-zhirrr.vercel.app/api/kisahnabi</pre>
          <h4>API</h4>
          <p className="mb-0">Pedal Telah Menyediakan API :</p>
          <pre className="bg-dark py-1 px-3">
            https://api-pedalku.herokuapp.com/lagu =&gt; Lagu Daerah<br/>
            https://api-pedalku.herokuapp.com/cerita_rakyat =&gt; Cerita Rakyat<br/>
            https://api-pedalku.herokuapp.com/random_cerpen =&gt; Cerpen Acak dari cerpenmu.com(fdciabdul)
          </pre>
        </div>
      </Container>
    </>
  );
};

export default Tentang;

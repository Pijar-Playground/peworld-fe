/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";
import Link from "next/link";

export default function Home(props) {

  return (
    <>
      <Head>
        <title>Home | Peworld</title>
      </Head>

      <main id="home_page">
        {/* Header Layout */}
        <header className="container mx-auto">
          <Navbar />

          <section className="grid grid-cols-1 md:grid-cols-3 items-center mt-[150px]">
            <div className="col-span-2">
              <h1 className="mb-[20px]">{props?.request?.title}</h1>
              <p className="mb-[30px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In{" "}
                <br />
                euismod ipsum et dui rhoncus auctor.
              </p>
              <Link href="/talent-list">
                <button className="btn-primary btn-lg rounded">
                  Mulai Dari Sekarang
                </button>
              </Link>
            </div>

            <img
              src="/images/home-banner-1.png"
              width="600px"
              height="600px"
              alt="banner"
            />
          </section>
        </header>
        {/* End of Header */}

        {/* Section 1 */}
        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[150px]">
            <img
              src="/images/home-banner-2.png"
              // width="550px"
              // height="500px"
              alt="banner"
            />

            <div className="mt-[20px]">
              <h2 className="mb-[35px]">
                Kenapa harus mencari tallent <br /> di peworld
              </h2>

              {[
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet.",
              ]?.map((item, key) => (
                <div
                  className="flex align-center gap-[10px] mb-[20px]"
                  key={key}
                >
                  <img src="/images/rounded-check-primary.svg" alt="icon" />
                  <p className="text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* End of Section 1 */}

        {/* Section 2 */}
        <section className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 mt-[150px]">
            <div className="mt-[20px]">
              <h2 className="mb-[10px]">Skill Tallent</h2>
              <p className="mb-[35px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In{" "}
                <br />
                euismod ipsum et dui rhoncus auctor.
              </p>
              <div className="grid grid-cols-2 mt-[50px]">
                <div>
                  {["Java", "Kotlin", "PHP", "Javascript"]?.map((item, key) => (
                    <div
                      className="flex align-center gap-[10px] mb-[20px]"
                      key={key}
                    >
                      <img src="/images/rounded-check-primary.svg" alt="icon" />
                      <p className="text-muted">{item}</p>
                    </div>
                  ))}
                </div>
                <div>
                  {["Golang", "C++", "Ruby", "10+ Bahasa lainnya"]?.map(
                    (item, key) => (
                      <div
                        className="flex align-center gap-[10px] mb-[20px]"
                        key={key}
                      >
                        <img
                          src="/images/rounded-check-primary.svg"
                          alt="icon"
                        />
                        <p className="text-muted">{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            <img
              src="/images/home-banner-2.png"
              // width="550px"
              // height="500px"
              alt="banner"
            />
          </div>
        </section>
        {/* End of Section 2 */}

        {/* CTA */}
        <section className="container mx-auto flex justify-center my-[150px]">
          <div className="cta-rounded flex justify-between items-center bg-primary w-full md:w-[75%] h-[220px] px-[40px]">
            <h2 className="text-[#fff]">
              Lorem ipsum <br /> dolor sit amet
            </h2>
            <button className="btn-white btn-lg rounded">
              Mulai Dari Sekarang
            </button>
          </div>
        </section>
        {/* End of CTA */}

        <Footer />
      </main>
    </>
  );
}

// ini untuk mengubah halamannya menjadi static html
export async function getStaticProps() {
  const random = Math.floor(Math.random() * 11);
  const request = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${random}`
  );

  return {
    props: {
      request: request.data,
    },
    revalidate: 20, // IN SECOND
  };
}

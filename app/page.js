"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import "./home.css";
import OXSYSProduct from "../public/assets/img/product/oxsys-main-product.png";
import faqImg from "../public/assets/img/product/oxsys-main-product.png";

import oxyGen from "../public/assets/img/product/amcoxygenerator.png";
import PSA from "../public/assets/img/Conventional-PSA-Plant.png";

import CardBox from "./components/cardBox";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { certificates, clients, gallery, galleryImages, review } from "./data/home";

// import Animation on library
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from "./components/gallery";
export default function Home({ Home }) {
  const [index, setIndex] = useState(-1);
  // const slides = gallery.map(({ original, width, height }) => ({
  //   src: original,
  //   width,
  //   height,
  // }));

  // const handleClick = (index, item) => setIndex(index);

  useEffect(() => {
    AOS.init();
  }, [])

  const galleryImages = [
    {
      src: "/assets/img/gallery/gallery-1.jpg",
    }, {
      src: "/assets/img/gallery/gallery-2.jpg",
    }, {
      src: "/assets/img/gallery/gallery-3.jpg",
    }, {
      src: "/assets/img/gallery/gallery-4.jpg",
    }, {
      src: "/assets/img/gallery/gallery-5.jpg",
    },
    {
      src: "/assets/img/gallery/gallery-6.jpg",
    }, {
      src: "/assets/img/gallery/gallery-7.jpg",
    }, {
      src: "/assets/img/gallery/gallery-8.jpg",
    }, {
      src: "/assets/img/gallery/gallery-9.jpg",
    }, {
      src: "/assets/img/gallery/gallery-10.jpg",
    }, {
      src: "/assets/img/gallery/gallery-11.jpg",
    }, {
      src: "/assets/img/gallery/gallery-12.jpg",
    }, {
      src: "/assets/img/gallery/gallery-13.jpg",
    }, {
      src: "/assets/img/gallery/gallery-14.jpg",
    }, {
      src: "/assets/img/gallery/gallery-15.jpg",
    }, {
      src: "/assets/img/gallery/gallery-16.jpg",
    }, {
      src: "/assets/img/gallery/gallery-17.jpg",
    }, {
      src: "/assets/img/gallery/gallery-18.jpg",
    }, {
      src: "/assets/img/gallery/gallery-19.jpg",
    }, {
      src: "/assets/img/gallery/gallery-20.jpg",
    }, {
      src: "/assets/img/gallery/gallery-21.jpg",
    },
    {
      src: "/assets/img/gallery/gallery-23.jpg",
    }, {
      src: "/assets/img/gallery/gallery-25.jpg",
    }, {
      src: "/assets/img/gallery/gallery-26.jpg",
    }, {
      src: "/assets/img/gallery/gallery-27.jpg",
    }
    , {
      src: "/assets/img/gallery/gallery-28.jpg",
    }, {
      src: "/assets/img/gallery/gallery-29.jpg",
    }]
  return (
    <>
      <Header />
      <section id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content">
                <h1
                >Advance Modular Compact PSA Oxygen Generator</h1>
                <p>
                  Experience the Future of Oxygen Generation - Say Goodbye to
                  Costly Oxygen Cylinders and Embrace Savings with Peace of
                  Mind!
                </p>
                <div className="cta-btns mt-5">
                  <a className="btn btn-primary me-3" href="tel:+9186043874217">
                    Request For Demo
                  </a>
                </div>

                {/* <div className="row client">
                  <h6>Our Top Clients</h6>
                  <div className=" client-names">
                    <p>Santom Hospital, New Delhi</p>
                    <p>Sanskar Hospital, Bulandsahar</p>
                    <p>Medwin Hospital, Meerut</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-6 align-items-center d-flex justify-content-center">
              <div className="product-image">
                <Image
                  src={OXSYSProduct}
                  alt="Product"
                  className="img-fluid"
                  priority={true}
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section >
      <section id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Features</h2>
                <p>Uncover the Remarkable Capabilities of the OXSYS System</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container">
              <div className="col-md-12">
                <div className="boxes">
                  {/* <Box /> */}
                  <CardBox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Testimonials</h2>
                <p>
                  Discover What People are Saying About Our Oxygen Generation
                  Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              slidesPerView={1}
              navigation={true}
              spaceBetween={10}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Navigation, Pagination]}
              className="reviews"
            >
              {review.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="review-box ">
                    <p>{item.review}</p>

                    <div className="author">
                      <h3>{item.doctor}</h3>
                      <p>{item.hospital}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <section id="products">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Products</h2>
                <p>Our line of OXSYS Generators we offer</p>
              </div>
            </div>
          </div>
          <Product />
        </div>
      </section>
      <section id="compare">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Comparison with Oxygen Plant</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ">
              <div className="cpp">
                <h2 className="text-center">Conventional PSA Plant</h2>
                <div className="text-center mt-4 mb-4">
                  <Image
                    src={PSA}
                    alt="PSA Plant"
                    className="img-fluid"
                    width={700}
                    height={320}
                    style={{
                      marginTop: "50px"
                    }}
                  />
                </div>
                <div className="description-box">
                  <p>
                    {" "}
                    Functionality - Linear ( output is dependent on each part)
                  </p>
                  <p> PSA Unit - Single</p>
                  <p> Power Consumption - High</p>
                  <p> Operating Pressure - High ( 8-10 bar)</p>
                  <p> Breakdown Percentage - 100%</p>
                  <p> Output Pressure - Fix(4 to 4.5 bar)</p>
                  <p> Air Dryer- Required</p>
                  <p> Compresser - Oil Lubricated</p>
                  <p> Portability- Not Possible ( Fixed)</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="our-generator">
                <h2 className="text-center">
                  Advance Modular Compact PSA Oxygen Generator
                </h2>
                <div className="text-center">
                  <Image
                    src={oxyGen}
                    alt="Advance Modular Compact PSA Oxygen Generator"
                    // className="img-fluid"
                    width={300}
                    height={320}
                  />
                </div>
                <div className="description-box mt-1">
                  <p>
                    {" "}
                    Functionality - Parallel (Output is independent of every
                    part)
                  </p>
                  <p> PSA Unit - Multiple (5 to 14)</p>
                  <p> Power consumption - Low (50% of equivalent PSA Plant)</p>
                  <p> Operating Pressure - Very Low(2 bar)</p>
                  <p> Breakdown Percentage - Upto 30% Max</p>
                  <p> Output Pressure - Could be altered (4 to 7.5 bar)</p>
                  <p> Air Dryer- Not Required</p>
                  <p> Compresser - Oil Free</p>
                  <p> Portability- Possible ( on caster wheels)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="certifications">
        <div className="container">
          <div className="row">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10 ">
                <div className="section-heading text-center">
                  <h2>Certifications</h2>
                  <p>We are endorsed by India's top certifications.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="certificates">
                  {certificates.map((item, index) => (
                    <Image key={index}
                      src={item.src}
                      alt={item.alt}
                      width={200}
                      height={300}
                      style={{
                        objectFit: "scale-down",
                      }} data-aos="fade-right"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section id="clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: true,
                }}
                loop={true}
                modules={[Autoplay]}
                className="clients"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
              >
                {clients.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={200}
                      height={40}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}
      <section id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>FAQs</h2>
                <p>
                  Frequently Asked Questions
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-12">
              <div className="faq-wrapper">
                <div className="faq-item mb-5" data-aos="fade-right">
                  <h5>
                    <span className="h3  me-2">1.</span>How does the
                    OXSYS oxygen generator work?
                  </h5>
                  <p>
                    The OXSYS oxygen generator utilizes Pressure Swing
                    Adsorption (PSA) technology. Ambient air is drawn into the
                    system and passed through a bed of adsorbent material, which
                    selectively removes nitrogen and other impurities, leaving
                    behind a stream of high-purity oxygen. This oxygen is then
                    stored and made available for various applications.
                  </p>
                </div>
                <div className="faq-item mb-5" data-aos="fade-right">
                  <h5>
                    <span className="h3  me-2">2.</span> How much
                    saving is insured by the largest model of OXSYS?
                  </h5>
                  <p className="mb-0">
                    Annually, potential savings of at least 25 Lakh INR can be
                    achieved by considering an assumed oxygen cylinder (D-type,
                    47.6 liters) refill rate of INR 300 per cylinder.
                  </p>
                </div>
                <div className="faq-item mb-5" data-aos="fade-right">
                  <h5>
                    <span className="h3 me-2">3.</span> Does the
                    system come with a warranty?
                  </h5>
                  <p>
                    Yes, OXSYS generators are typically covered by a
                    comprehensive warranty to ensure customers' peace of mind.
                    The specific terms and conditions of the warranty may vary
                    based on the model and region.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-center">
                <Image src={faqImg} className="img-fluid" alt="Faq Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Gallery</h2>
                <p>
                  Witness the Installation Process of an OXSYS Oxygen Generator.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <Gallery
                images={gallery}
                onClick={handleClick}
                enableImageSelection={false}
              />
              <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
              /> */}

              {/* <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail]}
              > */}
              {/* {galleryImages.map((item, index) => (

                  <a href={item.src} key={index}>


                    <Image data-aos="fade-up"
                      src={item.src}
                      alt="Picture of the author"
                      width={200}// automatically provided
                      height={200} //automatically provided
                      blurDataURL="data:..." //automatically provided
                      placeholder="blur" // Optional blur-up while loading
                      style={{
                        objectFit: 'cover'
                      }}
                    />
                  </a>

                ))} */}
              {/* </div> */}


              {/* </LightGallery> */}

              <Gallery
                galleryImages={galleryImages}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

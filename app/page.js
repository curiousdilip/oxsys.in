"use client";
import { use, useState } from "react";
import Image from "next/image";
import Header from "./components/Header";
import "./home.css";
import oxsysProduct from "../public/assets/img/product/oxsys main product.png";
import faqImg from "../public/assets/img/product/oxsys main product.png";

import oxyGen from "../public/assets/img/product/amcoxygenerator.png";
import PSA from "../public/assets/img/Conventional-PSA-Plant.png";
import Box from "./components/box";
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

import { certificates, clients, gallery, review } from "./data/home";

export default function Home({ Home }) {
  return (
    <>
      <Header />
      <section id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content">
                {/* <h1>A Product of <br />SuVi Enterprises</h1> */}
                <h1>Advance Modular Compact PSA Oxygen Generator</h1>
                <p>
                  Experience the Future of Oxygen Generation - Say Goodbye to
                  Costly Oxygen Cylinders and Embrace Savings with Peace of
                  Mind!
                </p>
                <div className="cta-btns mt-5">
                  <a className="btn btn-primary me-3" href="tel:+919555256507">
                    Request For Demo
                  </a>
                  <a className="btn btn-secondary me-3" href="/">
                    Watch Demo
                  </a>
                </div>

                <div className="row client">
                  <h6>Our Top Clients</h6>
                  <div className=" client-names">
                    <p>Santom Hospital Prashant</p>
                    <p>Sanakar Hospital</p>
                    <p>Medwin Hospital</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center d-flex justify-content-center">
              <div className="product-image">
                <Image
                  src={oxsysProduct}
                  alt="Product"
                  className="img-fluid"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Features</h2>
                <p>Uncover the Remarkable Capabilities of the OxSys System</p>
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
                <h2>Hear from Satisfied Clients</h2>
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
                      <h3>{item.pname}</h3>
                      <p>{item.designation}</p>
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
                <p>Our line of Oxsys Machines we offer</p>
              </div>
            </div>
          </div>
          <Product />
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
                      width={300}
                      height={400}
                      style={{
                        objectFit: "scale-down",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="clients">
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
      </section>
      <section id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Frequently Asked Questions</h2>
                <p>
                  Credibly grow premier ideas rather than bricks-and-clicks
                  strategic theme areas distributed for stand-alone
                  web-readiness.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 col-md-12">
              <div className="faq-wrapper">
                <div className="faq-item mb-5">
                  <h5>
                    <span className="h3 text-primary me-2">1.</span>How does the
                    OxSys oxygen generator work?
                  </h5>
                  <p>
                    The OxSys oxygen generator utilizes Pressure Swing
                    Adsorption (PSA) technology. Ambient air is drawn into the
                    system and passed through a bed of adsorbent material, which
                    selectively removes nitrogen and other impurities, leaving
                    behind a stream of high-purity oxygen. This oxygen is then
                    stored and made available for various applications.
                  </p>
                </div>
                <div className="faq-item mb-5">
                  <h5>
                    <span className="h3 text-primary me-2">2.</span> How much
                    saving is insured by the largest model of oxsys?
                  </h5>
                  <p className="mb-0">
                    Annually, potential savings of at least 25 Lakh INR can be
                    achieved by considering an assumed oxygen cylinder (D-type,
                    47.6 liters) refill rate of INR 300 per cylinder.
                  </p>
                </div>
                <div className="faq-item mb-5">
                  <h5>
                    <span className="h3 text-primary me-2">3.</span> Does the
                    system come with a warranty?
                  </h5>
                  <p>
                    Yes, OxSys generators are typically covered by a
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
                  Witness the Installation Process of an OxSys Oxygen Generator.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                slidesPerView={1}
                navigation={true}
                spaceBetween={10}
                loop={true}
                modules={[Navigation, Pagination]}
                className="gallery"
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
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
              >
                {gallery.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={500}
                      height={400}
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
      </section>
      <section id="compare">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>Comparision with Oxygen Plant</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="cpp">
                <h2 className="text-center">Conventional PSA Plant</h2>
                <div className="text-center mt-4 mb-4">
                  <Image
                    src={PSA}
                    alt="PSA Plant"
                    width={700}
                    height={320}
                  />
                </div>
                <div className="description-box">
                  <p>
                    {" "}
                    Functionality - Linear ( output is dependent on each part)
                  </p>
                  <p> PSA Unit - Single</p>
                  <p> Power Consumption - High</p>
                  <p> Operating Pressure - Hight ( 8-10 bar)</p>
                  <p> brealdown Percentage - 100%</p>
                  <p> Output Pressure - fix(4 to 4.5 bar)</p>
                  <p> Air Dryer- Required</p>
                  <p> Compresser - Oil</p>
                  <p> Portability- not possible ( fixed)</p>
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
                    width={300}
                    height={320}
                  />
                </div>
                <div className="description-box mt-1">
                  <p>
                    {" "}
                    Functionality - Parallel (output is independent of every
                    part)
                  </p>
                  <p> PSA Unit - Multiple (5 to 14)</p>
                  <p> Power consumption - Low (50% of equivalent PSA Plant)</p>
                  <p> Operating Pressure - very low(2 bar)</p>
                  <p> brealdown Percentage - upto 30% Maximum</p>
                  <p> Output Pressure - could be altered (4 to 7.5 bar)</p>
                  <p> Air Dryer- not Required</p>
                  <p> Compresser - Oil free</p>
                  <p> Portability- possible ( on caster wheels)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

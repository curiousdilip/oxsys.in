"use client"
import Image from 'next/image'
import Header from './components/Header'
import './home.css'
import oxsysProduct from '../public/assets/img/product/oxsys main product.png'
import oxyGen from '../public/assets/img/product/amcoxygenerator.png'
import PSA from '../public/assets/img/Conventional-PSA-Plant.png'
import Box from './components/box'
import CardBox from './components/cardBox'
import Footer from './components/Footer'
import Product from './components/Product'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Home({ Home }) {
  const review = [
    {
      id: 1,
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta itaque atque culpa. Dignissimos eius, perferendis ex maiores quibusdam porro inventore cumque repellat numquam nostrum impedit cum? Sint, non soluta.",
      pname: "Dilip",
      designation: "Developer"
    },
    {
      id: 3,
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta itaque atque culpa. Dignissimos eius, perferendis ex maiores quibusdam porro inventore cumque repellat numquam nostrum impedit cum? Sint, non soluta. ",
      pname: "Dilip",
      designation: "Developer"
    },
    {
      id: 3,
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta itaque atque culpa. Dignissimos eius, perferendis ex maiores quibusdam porro inventore cumque repellat numquam nostrum impedit cum? Sint, non soluta.",
      pname: "Dilip",
      designation: "Developer"
    },
    {
      id: 4,
      review: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dicta itaque atque culpa. Dignissimos eius, perferendis ex maiores quibusdam porro inventore cumque repellat numquam nostrum impedit cum? Sint, non soluta.",
      pname: "Dilip",
      designation: "Developer"
    },
  ]
  return (
    <>
      <Header />
      <section id="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content">
                <h1 class="fw-bold display-5">Get Fully Control and Visibility your Company</h1>
                <p class="lead">Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services.</p>
                <div className="cta-btns mt-5">
                  <a class="btn btn-primary me-3" href="/request-demo">Request For Demo</a>
                  <a class="btn btn-secondary me-3" href="/watch-demo">Watch Demo</a>
                </div>

                <div className="row client">
                  <h6>Our Top Clients</h6>
                  <div className="d-flex">
                    <p>Mankind</p>
                    <p>AIMS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center d-flex justify-content-center">
              <div className="product-image">
                <Image
                  src={oxsysProduct}
                  alt="Product"
                  className=""
                  width="500"
                  height="500"
                />
              </div>

            </div>
          </div>
        </div>
      </section>
      <section id='features'>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10 ">
              <div className="section-heading text-center">
                <h2>With all the Features You Need</h2>
                <p>Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.</p>
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
                <h2>What’s Clients Say
                </h2>
                <p>Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.</p>
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
              {review.map((item) => (
                <SwiperSlide>
                  <div class="review-box " key={item.id}>
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
          <Product />
        </div>
      </section>
      <section id="compare">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="cpp">
                <h2 className='text-center'>
                  Conventional PSA Plant
                </h2>
                <div className="text-center mt-4 mb-4">
                  <Image
                    src={PSA}
                    alt="Project Banner"
                    className="img-fluid "
                    width="700"
                    height="320"
                  />
                </div>
                <div className="description-box">
                  <p> functionality - Linear ( output is dependent on each part)</p>
                  <p> PSA Unit - Single</p>
                  <p> Power consumption - High</p>
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
                <h2 className='text-center'>
                  Advance Modular Compact PSA Oxygen Generator
                </h2>
                <div className="text-center">
                  <Image
                    src={oxyGen}
                    alt="Project Banner"
                    className="img-fluid "
                    width="300"
                    height="320"
                  />
                </div>
                <div className="description-box mt-1">
                  <p> Functionality - Parallel (output is independent of every part)</p>
                  <p> PSA Unit - Multiple (5 to 14)</p>
                  <p> Power consumption - Low (50% of equivalent PSA Plant)</p>
                  <p> Operating Pressure - very low(2 bar)</p>
                  <p> brealdown Percentage - upto 30% Maximum</p>
                  <p> Output Pressure - could be altered (4 to 7.5 bar)</p>
                  <p> Air Dryer-  not Required</p>
                  <p> Compresser - Oil free</p>
                  <p> Portability-  possible ( on caster wheels)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

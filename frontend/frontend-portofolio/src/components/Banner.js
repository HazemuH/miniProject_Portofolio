import { Container, Col, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../variants"; // import the variants

import portoProfile from "../assets/img/winston.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate="show"
              whileInView={{ show: true }}
            >
              <img
                src={portoProfile}
                alt="Portofolio"
                width={300}
                className="pictureBanner"
              />
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <motion.div
              variants={fadeInRight} 
              initial="hidden"
              animate="show"
              whileInView={{ show: true }}
            >
              <span className="tagline">
                Welcome to my personal Portofolio and Blog
              </span>
              <h1>
                {"Hello I'm a "}
                <span className="wrap">
                  <TypeAnimation
                    sequence={[
                      "Software Engineer.",
                      2000,
                      "Backend Developer.",
                      2000,
                      "Cyber Security Enthusiast.",
                      2000,
                    ]}
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p>
                Who is passionate, self-motivated, and willing to step out of my
                comfort zone to hone my skills and gain more experience.
              </p>
              <button type="button" onClick={() => console.log("connect")}>
                Let's connect !
              </button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
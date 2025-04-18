import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/nandini.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { FaGraduationCap, FaTrophy } from "react-icons/fa";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Col md={6} className="resume-column">
            <h3 className="resume-title">
              <FaGraduationCap /> Certifications
            </h3>
            <Resumecontent
              title=""
              content={[
                <a
                  href="https://drive.google.com/file/d/1ijfQXxy1JRijfhu9e5CkeDOSL-jyCNT4/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Certification on Amazon Web Services Cloud Computing
                </a>,
              ]}
            />
            <Resumecontent
              title=""
              content={[
                <a
                  href="https://drive.google.com/file/d/1v46N8Ngc0uSHcAb_WNsykSU7BInZkTQF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  •	Swayam(NPTEL) Of Cloud Computing By IIT Kharagpur                                                                                         
                </a>,
              ]}
            />
            <Resumecontent
              title=""
              content={[
                <a
                  href="https://drive.google.com/file/d/1JuoM0sFBaI_jTnnMyOR9rA_YyUXFjTL-/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Introduction to Cyber Security
                </a>,
              ]}
            />
          </Col>

          <Col md={6} className="resume-column">
            <h3 className="resume-title">
              <FaGraduationCap /> Education
            </h3>
            <Resumecontent
              title="Bachelors of Technology"
              date="May 2026"
              content={[
                "Developed a strong foundation in computer science while specializing in the dynamic field of Artificial Intelligence and Data Science. Acquired comprehensive knowledge and practical skills in areas such as machine learning, data analysis, and statistical modeling",
                "CGPA: 7.34/10",
              ]}
            />

            <h3 className="resume-title">
              <FaTrophy /> Achievements & Publications
            </h3>
            <Resumecontent
              title="IEEE Research Paper"
              date="2024"
              content={[
                "This project aims to develop a deep learning-based model to automatically add realistic color to grayscale images. Leveraging Convolutional Neural Networks (CNNs), similar to the techniques explored in Retroflex, this work frames image colorization as a pixel-wise regression problem. The model is trained on a large-scale dataset of color images, which are converted to grayscale during preprocessing. The grayscale version is fed to the model as input, and the task is to predict the chrominance components (color information), which are then combined with the luminance channel to reconstruct a fully colorized image.",
                "Read the paper here: ",
                <a
                  href="https://drive.google.com/file/d/1sKBnDA_8e_ee9dqooCnEPg_lQwNNtwze/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ieeexplore.ieee.org/document/10498900/
                </a>,
              ]}
            />
            <Resumecontent
              title="Leadership & Recognition"
              content={[
                "Participated and ranked 3rd in the Hackathon organized by Smart India Hackathon",
                "Secured global ranks 56, 94, and 146 in Code Chef Starters among 38,464 participants",
                "Ranked in the top 23.17% on GFG among 31,063 contestants",
                "Secured Global Rank 1461th among 363k+ participants in the LeetCode Biweekly Contest 125",
                "Secured Top 57.56% and max Contest rating Solved over 350+ Problems on LeetCode ",
              ]}
            />
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginTop: "30px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            className="download-button"
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

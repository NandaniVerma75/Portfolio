import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import QASystem from "../../Assets/image.png";
import ntc from "../../Assets/aws.png";
import SIRE from "../../Assets/senti.png";
import mllm from "../../Assets/Projects/multimodalchat-ai.png";
import mcs from "../../Assets/Projects/MCS.png";
// import easyCode from "../../Assets/Projects/easy-code.png";
import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SIRE}
              isBlog={false}
              title="Sentiment analysis"
              description="Sentiment analysis is the process of understanding the meaning and interpretation of words, phrases, and sentences in context. It is a key component of natural language processing (NLP) that enables machines to comprehend human language beyond mere syntax. Semantic analysis focuses on identifying the relationships between words, understanding context, resolving ambiguities, and interpreting intent. It includes techniques like named entity recognition, word sense disambiguation, and sentiment analysis. By analyzing the semantics of text, computers can extract valuable information, improve search results, enable chatbots, and enhance language translation. Semantic analysis plays a vital role in making machines understand and process language more intelligently. "
              link="https://github.com/NandaniVerma75/Sentiment-Analysis-Using-Logistic-Regression-and-Vector-Space-Models-for-Feature-Extraction-.git"
              liveLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={easyCode}
              isBlog={false}
              title="easy-code"
              description="Easy code is my personal blog website which is build with nextjs. It has great support of the Markdown content. Easy-code is fully responsive blog website which has light and dark mode support."
              link="https://github.com/MohitSojitra/easy-code"
              liveLink="https://blog.mohitsojitra.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QASystem}
              isBlog={false}
              title="Image Colorization"
              description="Image colorization is the process of adding color to grayscale images using computational techniques. It enhances black-and-white photos, making them more realistic and visually appealing. Deep learning methods, particularly convolutional neural networks (CNNs), are commonly used to learn color patterns from large datasets. These models predict plausible colors for each pixel based on context and texture. Applications include restoring old photographs, improving medical imaging, and enriching film and video archives. Colorization can be automatic, semi-automatic, or manual, depending on user control. Recent advancements use generative models and attention mechanisms for more accurate and context-aware color predictions, pushing realism even further."
              link="https://github.com/NandaniVerma75/IMAGE-COLORIZATION-Train-a-model-to-automatically-add-color-to-grayscale-images-using-deep-learning.git"
              liveLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ntc}
              isBlog={false}
              title="AWS Serverless Deployment"
              description="AWS serverless deployment allows developers to build and deploy applications without managing servers. Using services like AWS Lambda, API Gateway, DynamoDB, and S3, serverless architecture automatically scales with demand and reduces operational overhead. Code is triggered by events, runs in stateless containers, and users only pay for actual compute time. Serverless is ideal for microservices, APIs, and real-time processing. It enhances agility, reduces costs, and simplifies deployment pipelines using tools like AWS SAM or the Serverless Framework. With serverless, developers can focus on writing code while AWS handles infrastructure, scaling, availability, and fault tolerance behind the scenes."
              link="https://github.com/NandaniVerma75/AWS-Serverless-deployement"
              liveLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

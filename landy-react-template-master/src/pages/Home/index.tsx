import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import DemoContent from "../../content/DemoContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Assigments = lazy(() => import("../../components/Assigments"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="chick-with-egg.svg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        button={AboutContent.button}
        video={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NDA0wQWQrPg?si=pZdLPUHDIhGPxaKj"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        }
        id="about"
      />
      <ContentBlock
        direction="right"
        title={DemoContent.title}
        content=""
        button={DemoContent.button}
        video={
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TODO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        }
        id="about"
      />
      <Assigments id="mission" />
      <ContentBlock
        direction="right"
        title={ProductContent.title}
        content={ProductContent.text}
        section={ProductContent.section}
        icon="multiple-chicks.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;

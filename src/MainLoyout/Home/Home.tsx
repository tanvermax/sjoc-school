// import AboutSection from "../CommonLayoput/About";
import AboutSchool from "../CommonLayoput/About2";
import { FAQSection } from "../CommonLayoput/Faqsection";
import Footer from "../CommonLayoput/Footer";
import EskoolyHero from "../CommonLayoput/Hero2";

import OnlineRegistration from "../CommonLayoput/OnlineAdmission";
import { SchoolStats } from "../CommonLayoput/SchoolStats";
import {  TeachersSlider } from "../CommonLayoput/TeacherSection";

export default function Home() {
  return (
    <div>
      <div className="  ">
        {/* <div className="absolute w-[600px] h-[600px] -top-24 -right-24 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(10,79,63,0.08),transparent_70%)]" /> */}
        {/* Bottom Left Glow */}
       <EskoolyHero/>
        {/* <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(212,146,43,0.05),transparent_70%)]" /> */}
        {/* <HeroSection /> */}
      </div>
      <div className="">
        {/* <AboutSection /> */}
        <AboutSchool/>
      </div>
      <OnlineRegistration/>
      <SchoolStats/>
      <TeachersSlider/>
      <FAQSection/>
      <Footer/>
   
    </div>
  );
}

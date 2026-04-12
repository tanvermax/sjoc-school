// import AboutSection from "../CommonLayoput/About";
import AboutSchool from "../CommonLayoput/About2";
import { FAQSection } from "../CommonLayoput/FAQSection";
import { HeroSection } from "../CommonLayoput/Hero2";
import OnlineRegistration from "../CommonLayoput/OnlineAdmission";
import { SchoolStats } from "../CommonLayoput/SchoolStats";
import { TeachersSlider } from "../CommonLayoput/TeacherSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSchool />
      <OnlineRegistration />
      <SchoolStats />
      <TeachersSlider />
      <FAQSection  />
    </div>
  );
}

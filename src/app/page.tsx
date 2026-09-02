import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { VideoExperience } from "@/components/home/VideoExperience";
import { ApproachSection } from "@/components/home/ApproachSection";
import { CarePathways } from "@/components/home/CarePathways";
import { Services } from "@/components/home/Services";
import { BirthFocusSection } from "@/components/home/BirthFocusSection";
import { DoctorLedCare } from "@/components/home/DoctorLedCare";
import { PatientJourney } from "@/components/home/PatientJourney";
import { TeamSection } from "@/components/home/TeamSection";
import { PatientExperience } from "@/components/home/PatientExperience";
import { DifferenceSection } from "@/components/home/DifferenceSection";
import { ClinicProof } from "@/components/home/ClinicProof";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { FAQ } from "@/components/home/FAQ";
import { ConversionCTA } from "@/components/home/ConversionCTA";
import { EnquirySection } from "@/components/page/EnquirySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <VideoExperience />
        <ApproachSection />
        <CarePathways />
        <Services />
        <BirthFocusSection />
        <DoctorLedCare />
        <PatientJourney />
        <TeamSection />
        <PatientExperience />
        <DifferenceSection />
        <ClinicProof />
        <GoogleReviews />
        <FAQ />
        <ConversionCTA />
        <EnquirySection />
      </main>
      <Footer />
    </>
  );
}

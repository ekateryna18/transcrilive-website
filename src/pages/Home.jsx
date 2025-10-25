import HaloBackground from "../components/HaloBackground.jsx";
import Features from "./Features.jsx";
import CardType1 from "../components/CardType1.jsx";
import { EducationIcon } from "../components/Icons.jsx";
function Home() {

  return (
    <div>
      <div
        id="landing-page"
        className="relative w-full h-screen overflow-hidden"
      >
        <HaloBackground />
        <div className="container-text absolute inset-0 w-1/2 flex flex-col items-start justify-center pl-20">
          <h1 className="text-7xl font-poppins font-bold bg-gradient-to-r from-lightblue  to-mediumblue bg-clip-text text-transparent pb-3">TranscriLive</h1>
          <p className="text-4xl max-w-xl font-semibold pb-3 bg-gradient-to-r from-lightblue  to-mediumblue bg-clip-text text-transparent ">
            Making voice accessible to everyone
          </p>
          <p className="text-xl text-white">
            Revolutionize your conferences and meetings with our advanced Live
            transcription technology.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent to-black z-5 pointer-events-none"></div>
      </div>
      {/* Vision page */}
      <div
        id="vision-page"
        className="bg-gradient-to-b from-black to-darkbg flex justify-center items-center w-full h-screen text-white"
      >
        <div className="container flex flex-row justify-center">
          <div className="content w-1/2 flex flex-col">
            <h1 className=" text-7xl font-poppins font-semi-bold pb-12 bg-gradient-to-r from-lightblue  to-mediumblue bg-clip-text text-transparent">
              Our vision
            </h1>
            {/* Left text */}
            <div className="container-text text-l flex flex-col items-start space-y-8 pr-12">
              <p>
                Imagine a world where language barriers disappear instantly.
                With TranscriLive, this vision becomes reality. Our innovative
                technology goes beyond just transcribing words; it
                revolutionizes the way we interact, learn, and collaborate.
              </p>
              <p>
                TranscriLive becomes a true bridge between cultures, allowing
                citizens to actively participate in public debates and business
                meetings, where every nuance of negotiation is captured and
                understood. In the legal field, it ensures hearings where each
                party is perfectly informed.
              </p>
              <p>
                Imagine more concerts with lyrics displayed in real-time in the
                language of your choice and multilingual guided tours.
              </p>
              <p>
                Join us to revolutionize communication. With TranscriLive, every
                word matters and every interaction becomes an opportunity.
                Together, let's build a world without barriers where every voice
                is heard.
              </p>
            </div>
          </div>

          {/* Right cards */}
          <div className="container-cards w-1/2 flex justify-end">
            <div className="grid grid-cols-2 gap-10 text-base">
              <CardType1 icon={EducationIcon} text="In classrooms, hearing-impaired students follow every word
                    on the screen, fully participating in discussions." />
              <CardType1 icon={EducationIcon} text="In classrooms, hearing-impaired students follow every word
                    on the screen, fully participating in discussions." />
              <CardType1 icon={EducationIcon} text="In classrooms, hearing-impaired students follow every word
                    on the screen, fully participating in discussions." />
              <CardType1 icon={EducationIcon} text="In classrooms, hearing-impaired students follow every word
                    on the screen, fully participating in discussions." />
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
}

export default Home;

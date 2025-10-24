import HaloBackground from "../components/HaloBackground.jsx";

function Home() {
  return (
    <div className="bg-darkbg relative w-full h-screen overflow-hidden">
      <HaloBackground />
      <div id="container-text" className="absolute inset-0 w-1/2 flex flex-col items-start justify-center text-white pl-16">
        <h1 className=" text-5xl font-poppins font-bold pb-3">TranscriLive</h1>
        <p className="text-lg max-w-xl text-center font-semibold pb-3">Making voice accessible to everyone</p>
        <p>Revolutionize your conferences and meetings with our advanced Live transcription technology.</p>
      </div>
    </div>
  );
}

export default Home;
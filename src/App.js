import { Model } from './components/Model';
import { NavBar } from './components/NavBar';


function App() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ background: `url(https://tesla-cdn.thron.com/delivery/public/image/tesla/9160c5a3-b818-42dd-bb98-b8597948c636/bvlatuR/std/1927x4096/M3-Homepage-Mobile-LHD)` }}>
      
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src="https://digitalassets.tesla.com/tesla-contents/video/upload/Model-3-Main-Hero-Video-Desktop-NA.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full z-10 flex flex-col">
        <NavBar />
        <Model />
      </div>

    </div>
  );
}

export default App;
// REACT | TAILWIND | FIREBASE



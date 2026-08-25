import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ChevronDown, CircleCheck, Compass, Facebook, Heart, Instagram, Mail, MapPin, Menu, Phone, Plane, ShieldCheck, Star, Ticket, X, Youtube } from 'lucide-react';
import './style.css';

const services = [
  ['Airline ticketing', 'From first search to final boarding, we make every route feel effortless.', Plane],
  ['Visa assistance', 'Clear guidance and careful support for your next international chapter.', Ticket],
  ['Hotel reservations', 'Exceptional stays selected for comfort, character, and convenience.', Heart],
];

const destinations = [
  { city: 'Shanghai', country: 'China', image: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?auto=format&fit=crop&w=1000&q=85' },
  { city: 'New York', country: 'United States', image: 'https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Dubai', country: 'United Arab Emirates', image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=85' },
  { city: 'London', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Toronto', country: 'Canada', image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Berlin', country: 'Germany', image: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Madrid', country: 'Spain', image: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Amsterdam', country: 'Netherlands', image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Istanbul', country: 'Turkey', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Singapore', country: 'Singapore', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Sydney', country: 'Australia', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Bangkok', country: 'Thailand', image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Cape Town', country: 'South Africa', image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Cairo', country: 'Egypt', image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=85' },
  { city: 'São Paulo', country: 'Brazil', image: 'https://images.unsplash.com/photo-1543059080-f9b1272213d5?auto=format&fit=crop&w=1000&q=85' },
  { city: 'Mexico City', country: 'Mexico', image: 'https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1000&q=85' },
];

function App() {
  const [menu, setMenu] = React.useState(false);
  const year = new Date().getFullYear();
  React.useEffect(() => {
    const copyright = document.querySelector('.footer-bottom span');
    if (copyright) copyright.textContent = `© ${year} Omachy Global Res.Co.`;
  }, [year]);
  return <main>
    <section className="hero" id="home">
      <nav className="nav wrap">
        <a className="brand" href="#home"><span className="brand-mark"><Plane size={20}/></span><span>Omachy<span className="accent">.</span></span></a>
        <div className={menu ? 'nav-links show' : 'nav-links'}>
          <a href="#home">Home</a><a href="#services">Services</a><a href="#destinations">Destinations</a><a href="#about">About us</a>
        </div>
        <a className="nav-cta" href="#contact">Plan a trip <ArrowRight size={16}/></a>
        <button className="menu" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button>
      </nav>
      <div className="hero-content wrap">
        <p className="eyebrow light"><span></span> Your world, beautifully connected</p>
        <h1>Travel beyond<br/><em>the expected.</em></h1>
        <p className="hero-copy">Thoughtful journeys for people who want to see more, feel more, and leave the details to someone they trust.</p>
        <div className="hero-buttons"><a className="button orange" href="#contact">Start planning <ArrowRight size={18}/></a><a className="play" href="#about"><span>▶</span> Discover Omachy</a></div>
      </div>
      <div className="hero-bottom wrap"><div className="scroll"><span></span> Scroll to explore</div><div className="hero-rating"><div className="avatars"><i></i><i></i><i></i></div><span><b>4.9/5</b> from 300+ happy travellers</span></div></div>
    </section>
    <section className="intro wrap" id="about"><div><p className="eyebrow"><span></span> The Omachy way</p><h2>Travel should feel<br/>as good as <em>arrival.</em></h2></div><div className="intro-side"><p>We are a global travel concierge for the curious and the considered. From the first idea to the last sunset, we design journeys that feel entirely your own.</p><a className="text-link" href="#services">More about us <ArrowRight size={17}/></a></div></section>
    <section className="services" id="services"><div className="wrap"><div className="section-head"><div><p className="eyebrow"><span></span> What we do</p><h2>Every detail,<br/><em>expertly handled.</em></h2></div><a className="outline-button" href="#contact">Explore all services <ArrowRight size={17}/></a></div><div className="service-grid">{services.map(([title, text, Icon], i) => <article className="service-card" key={title}><div className="service-num">0{i+1}</div><Icon className="service-icon" strokeWidth={1.4}/><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={title}><ArrowRight size={20}/></a></article>)}</div></div></section>
    <section className="destinations wrap" id="destinations"><div className="section-head"><div><p className="eyebrow"><span></span> Global booking network</p><h2>Go somewhere<br/><em>wonderful.</em></h2></div><p className="dest-copy">From major global cities to your dream escape, we help arrange travel and booking support across the world.</p></div><div className="destination-grid">{destinations.map(d => <article className="destination" key={d.city} style={{backgroundImage:`linear-gradient(0deg, rgba(2,23,56,.8), transparent 65%), url('${d.image}')`}}><div><p>{d.country}</p><h3>{d.city}</h3></div></article>)}</div></section>
    <section className="cta" id="contact"><div className="wrap cta-inner"><div><p className="eyebrow light"><span></span> Let’s get you moving</p><h2>Your next story<br/>starts <em>here.</em></h2></div><div><p>Tell us where you want to go. We’ll take care of the rest—with care, clarity, and a little wonder.</p><a className="button orange" href="mailto:omachyglobal81@gmail.com">Plan your journey <ArrowRight size={18}/></a></div></div></section>
    <footer><div className="wrap footer-top"><a className="brand" href="#home"><span className="brand-mark"><Plane size={20}/></span><span>Omachy<span className="accent">.</span></span></a><div className="footer-contact"><span><Mail size={17}/> omachyglobal81@gmail.com</span><span><Phone size={17}/> +234 803 356 1307</span><span><MapPin size={17}/> Lagos Island, Nigeria</span></div><div className="social"><a href="#home"><Instagram size={18}/></a><a href="#home"><Facebook size={18}/></a><a href="#home"><Youtube size={19}/></a></div></div><div className="wrap footer-bottom"><span>© 2025 Omachy Global Res.Co.</span><div><a href="#home">Privacy</a><a href="#home">Terms</a></div><span>Made for remarkable journeys</span></div></footer>
  </main>
}
createRoot(document.getElementById('root')).render(<App />);

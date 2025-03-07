import React from "react"
import PageRoute from "./PageRoute"
// import ReactGA from 'react-ga4'

// const trackingId = import.meta.env.VITE_GA_MEASUREMENT_ID;

// ReactGA.initialize(trackingId);
// ReactGA.send({ hitType: "pageview", page: "/", title: "Users Landed" });
// ReactGA.send({ hitType: "pageview", page: "/amenities", title: "Users Landed" });
// ReactGA.send({ hitType: "pageview", page: "/contact", title: "Users Landed" });
// ReactGA.send({ hitType: "pageview", page: "/locationlocation", title: "Users Landed" });
// ReactGA.send({ hitType: "pageview", page: "/locationperks", title: "Users Landed" });
// ReactGA.send({ hitType: "pageview", page: "/pricing", title: "Users Landed" });

function App() {
  return (
    <div className="font-body md:text-xl bg-white">
       <PageRoute />
    </div>
  )
}

export default App

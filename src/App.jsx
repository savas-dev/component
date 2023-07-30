import "bulma/css/bulma.css";
import { useState } from "react";
import { Course } from "./Course";
import FB from "./assets/images/fb.png";
import GS from "./assets/images/gs.png";
import BJK from "./assets/images/bjk.png";
import TS from "./assets/images/ts.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Dört Büyükler</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
        <div className="columns">
          <div className="column">
            <Course
              image={GS}
              title="Galatasaray"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum, fugiat neque tenetur exercitationem aperiam cupiditate libero non quibusdam minus assumenda sit priatur reiciendis molestiae natus consectetur tempore eum? Necessitatibus."
            />
          </div>

          <div className="column">
            <Course
              image={FB}
              title="Fenerbahçe"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum, fugiat neque tenetur exercitationem aperiam cupiditate libero non quibusdam minus assumenda sit priatur reiciendis molestiae natus consectetur tempore eum? Necessitatibus."
            />
          </div>

          <div className="column">
            <Course
              image={BJK}
              title="Beşiktaş"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum, fugiat neque tenetur exercitationem aperiam cupiditate libero non quibusdam minus assumenda sit priatur reiciendis molestiae natus consectetur tempore eum? Necessitatibus."
            />
          </div>

          <div className="column">
            <Course
              image={TS}
              title="Trabzonspor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum, fugiat neque tenetur exercitationem aperiam cupiditate libero non quibusdam minus assumenda sit priatur reiciendis molestiae natus consectetur tempore eum? Necessitatibus."
            />
          </div>
        </div>
        </section>
      </div>
    </div>
  );
}

export default App;

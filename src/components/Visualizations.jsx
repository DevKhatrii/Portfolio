import { useState } from "react";
import "./Visualizations.css";

const VIZ = [
  { src: "images/1.PNG", caption: "Mag-6 earthquakes (1900–2013): max magnitude by year", back: "Tracked the maximum recorded earthquake magnitude for every year between 1900 and 2013 to see how the ceiling on quake severity has moved over more than a century." },
  { src: "images/2.PNG", caption: "Max, min, and median magnitude", back: "Plots the maximum, minimum, and median magnitude across the full earthquake dataset side by side." },
  { src: "images/3.PNG", caption: "Cluster of maximum magnitude events", back: "Groups the highest-magnitude earthquakes into clusters to see where the most severe events concentrate geographically." },
  { src: "images/4.PNG", caption: "Top 100 places by spread from epicenter", back: "Ranks the 100 locations with the widest spread of felt impact from their epicenter." },
  { src: "images/5.PNG", caption: "Top 10 places by earthquake count", back: "The ten places that recorded the highest number of earthquakes in the dataset." },
  { src: "images/6.PNG", caption: "Total jobs, millennials vs. boomers: 2007 vs 2013", back: "Compares total job counts held by millennials versus boomers in 2007 against 2013 to see how the generational job mix shifted." },
  { src: "images/7.PNG", caption: "Map view of jobs by generation", back: "A geographic view of job distribution broken out by generation." },
  { src: "images/8.PNG", caption: "Top 5 occupations by job change", back: "The five occupations that saw the biggest swings in job numbers." },
  { src: "images/9.PNG", caption: "% job change by generation", back: "The percentage change in job numbers for each generation over the period studied." },
  { src: "images/10.png", caption: "World terrorism: top attackers by kill count", back: "Ranks the groups responsible for the highest recorded kill counts in the global terrorism dataset." },
  { src: "images/11.png", caption: "Cities attacked", back: "Which cities appear most often as attack locations in the dataset." },
  { src: "images/12.png", caption: "Top nationality targeted", back: "The nationalities most frequently targeted across recorded attacks." },
  { src: "images/13.png", caption: "Target and weapon type association", back: "Shows which weapon types are most associated with which target types." },
  { src: "images/14.png", caption: "Temporal pattern of attacks", back: "How the frequency and timing of attacks has shifted over the years covered." },
  { src: "images/15.png", caption: "Main targets", back: "A breakdown of the most common target categories overall." },
];

export default function Visualizations() {
  const [open, setOpen] = useState(null);

  return (
    <section id="visualizations" className="section">
      <div className="section-head">
        <span className="section-index">06</span>
        <h2 className="section-title">Visualizations</h2>
        <span className="section-line" />
      </div>
      <p className="viz-intro">
        A sample of Tableau and Power BI dashboards from academic and
        personal projects — global terrorism patterns, earthquake history,
        and generational job shifts.
      </p>

      <div className="viz-grid">
        {VIZ.map((v, i) => (
          <div className="viz-flip" key={v.src} tabIndex={0}>
            <div className="viz-flip-inner">
              <button className="viz-face viz-front" onClick={() => setOpen(i)}>
                <img src={v.src} alt={v.caption} loading="lazy" />
                <span className="viz-title-overlay">{v.caption}</span>
              </button>
              <button className="viz-face viz-back" onClick={() => setOpen(i)}>
                <span className="viz-back-text">{v.back}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {open !== null && (
        <div className="viz-lightbox" onClick={() => setOpen(null)}>
          <button
            className="viz-nav viz-prev"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open - 1 + VIZ.length) % VIZ.length);
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={VIZ[open].src} alt={VIZ[open].caption} />
            <figcaption className="mono">{VIZ[open].caption}</figcaption>
          </figure>
          <button
            className="viz-nav viz-next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open + 1) % VIZ.length);
            }}
            aria-label="Next"
          >
            ›
          </button>
          <button className="viz-close" onClick={() => setOpen(null)} aria-label="Close">
            ×
          </button>
        </div>
      )}
    </section>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const publications = [
  {
    year: "2025",
    journal: "PNAS",
    title: "Suturing fragmented landscapes: Mosaic hybrid zones in plants may facilitate ecosystem resiliency",
    authors: "Massatti R*, Faske TM*, Barnes IM, Leger EA, Parchman TL, Richardson BA, Knowles LL",
    href: "https://doi.org/10.1073/pnas.2410941122",
  },
  {
    year: "2025",
    journal: "Molecular Ecology",
    title: "Geography and environment shape spatial genetic variation and predict climate maladaptation across isolated populations of Pinus muricata",
    authors: "Galland LM, Faske TM, Osuna-Mascaró C, Dilts TE, Bisbing S, Parchman TL",
  },
  {
    year: "2023",
    journal: "Evolution",
    title: "Environment predicts the maintenance of reproductive isolation in a mosaic hybrid zone of rubber rabbitbrush",
    authors: "Faske TM, Agneray AC, Jahner JP, Osuna-Mascaró C, Sheta LM, Richardson BA, Leger EA, Parchman TL",
  },
  {
    year: "2021",
    journal: "Evolutionary Applications",
    title: "Genomic and common garden approaches yield complementary results for quantifying environmental drivers of local adaptation in rubber rabbitbrush",
    authors: "Faske TM, Agneray AC, Jahner JP, Sheta LM, Leger EA, Parchman TL",
  },
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Trevor Faske, home">TF</a>
        <nav aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#teaching">Teaching</a>
          <a href="/Trevor-Faske-CV.pdf">CV</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Evolutionary ecologist · Flagstaff, Arizona</p>
            <h1 id="hero-title">Trevor<br /><em>Faske</em></h1>
            <p className="intro">
              I use genomic, ecological, and climate data to understand how plant populations adapt—and to make restoration and conservation more effective.
            </p>
            <div className="hero-links">
              <a className="button" href="#research">Explore my research <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="mailto:trevor@landscollective.org">trevor@landscollective.org</a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="Current appointments">
            <div className="portrait-frame">
              <img src="/trevor-faske.jpg" alt="Trevor Faske" />
              <div className="contour contour-one" aria-hidden="true" />
              <div className="contour contour-two" aria-hidden="true" />
            </div>
            <p className="aside-label">Currently</p>
            <p>Research Scientist & Co-founder<br /><a href="https://landscollective.org">Landscape Stewardship Collective</a></p>
            <p>Postdoctoral Fellow<br />University of Montana</p>
          </aside>
        </section>

        <section className="statement" id="research">
          <p className="section-number">01 / Research</p>
          <h2>Connecting evolutionary insight to <em>landscape-scale action.</em></h2>
          <div className="research-grid">
            <article><span>01</span><h3>Landscape genomics</h3><p>Mapping how geography, climate, and evolutionary history shape genetic variation across complex western landscapes.</p></article>
            <article><span>02</span><h3>Restoration science</h3><p>Testing how seed sourcing, production, and genetic diversity influence native plant materials and resilient ecosystems.</p></article>
            <article><span>03</span><h3>Climate adaptation</h3><p>Combining genomic and environmental data to anticipate maladaptation and inform conservation under rapid change.</p></article>
          </div>
        </section>

        <section className="publications" id="publications">
          <div className="section-heading">
            <div><p className="section-number">02 / Selected publications</p><h2>Recent work</h2></div>
            <a className="text-link" href="https://scholar.google.com/scholar?q=Trevor+M.+Faske">View Google Scholar ↗</a>
          </div>
          <div className="publication-list">
            {publications.map((publication) => {
              const content = <><div className="pub-meta"><span>{publication.year}</span><span>{publication.journal}</span></div><h3>{publication.title}</h3><p>{publication.authors}</p><span className="pub-arrow" aria-hidden="true">↗</span></>;
              return publication.href ? <a className="publication" href={publication.href} key={publication.title}>{content}</a> : <article className="publication" key={publication.title}>{content}</article>;
            })}
          </div>
        </section>

        <section className="teaching" id="teaching">
          <p className="section-number">03 / Teaching & mentorship</p>
          <div className="teaching-grid">
            <h2>Building confidence with <em>data and code.</em></h2>
            <div>
              <p>I teach reproducible data science for biologists, from Unix and Python foundations to advanced modeling and high-performance computing.</p>
              <ul>
                <li><span>2021–22</span> Data Science for Biology II: Advanced Skills</li>
                <li><span>2020–22</span> Data Science for Biology I: Unix & Python</li>
                <li><span>2026</span> Population Genetics, guest lecturer</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact">
          <p className="section-number">04 / Connect</p>
          <h2>Let’s talk about plants, populations, and <em>restoration.</em></h2>
          <div className="contact-links">
            <a className="button button-light" href="mailto:trevor@landscollective.org">Send an email ↗</a>
            <a href="https://github.com/trevorfaske">GitHub ↗</a>
            <a href="https://landscollective.org">Landscape Stewardship Collective ↗</a>
            <a href="/Trevor-Faske-CV.pdf">Download CV ↓</a>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Trevor Faske</span><span>Ecology · Evolution · Conservation</span></footer>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);

import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

type PageKey = "home" | "research" | "publications" | "teaching" | "about";

const navItems: { key: PageKey | "cv"; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "research", label: "Research", href: "/research/" },
  { key: "publications", label: "Publications", href: "/publications/" },
  { key: "teaching", label: "Teaching", href: "/teaching/" },
  { key: "about", label: "About me", href: "/about/" },
  { key: "cv", label: "CV", href: "/Trevor-Faske-CV.pdf" },
];

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

const researchAreas = [
  {
    number: "01",
    title: "Landscape genomics",
    text: "I map how geography, climate, and evolutionary history shape genetic variation across complex western landscapes. This work connects population-level processes with decisions made at the scale of watersheds and ecoregions.",
  },
  {
    number: "02",
    title: "Restoration science",
    text: "I test how seed sourcing, production, and genetic diversity influence native plant materials and resilient ecosystems, with an emphasis on evidence that practitioners can use in the field.",
  },
  {
    number: "03",
    title: "Climate adaptation",
    text: "I combine genomic and environmental data to anticipate maladaptation and help conservation programs respond to rapid environmental change.",
  },
];

function PageShell({ current, children }: { current: PageKey; children: ReactNode }) {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="Trevor Faske, home">TF</a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} aria-current={current === item.key ? "page" : undefined}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <span>© {new Date().getFullYear()} Trevor Faske</span>
        <span>Ecology · Evolution · Conservation</span>
      </footer>
    </>
  );
}

function PageIntro({ number, label, title, lead }: { number: string; label: string; title: ReactNode; lead: string }) {
  return (
    <section className="page-intro">
      <p className="section-number">{number} / {label}</p>
      <div className="page-intro-grid">
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <PageShell current="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Evolutionary ecologist · Flagstaff, Arizona</p>
          <h1 id="hero-title">Trevor<br /><em>Faske</em></h1>
          <p className="intro">I use genomic, ecological, and climate data to understand how plant populations adapt—and to make restoration and conservation more effective.</p>
          <div className="hero-links">
            <a className="button" href="/research/">Explore my research <span aria-hidden="true">→</span></a>
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
      <section className="home-index" aria-label="Explore this website">
        {navItems.slice(1).map((item, index) => (
          <a href={item.href} key={item.key}>
            <span>0{index + 1}</span>
            <h2>{item.label}</h2>
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </section>
    </PageShell>
  );
}

function ResearchPage() {
  return (
    <PageShell current="research">
      <PageIntro number="01" label="Research" title={<>Connecting evolutionary insight to <em>landscape-scale action.</em></>} lead="My research asks how plant populations respond to heterogeneous landscapes—and how that knowledge can improve conservation and restoration under climate change." />
      <section className="research-cards">
        {researchAreas.map((area) => (
          <article key={area.title}>
            <span>{area.number}</span>
            <h2>{area.title}</h2>
            <p>{area.text}</p>
          </article>
        ))}
      </section>
      <section className="feature-band">
        <p className="section-number">Approach</p>
        <h2>From genomic data to <em>decisions on the ground.</em></h2>
        <p>I work across field ecology, population genomics, spatial analysis, and collaborative conservation. The goal is not simply to describe variation, but to translate it into useful guidance for native plant materials, seed transfer, and landscape stewardship.</p>
      </section>
    </PageShell>
  );
}

function PublicationsPage() {
  return (
    <PageShell current="publications">
      <PageIntro number="02" label="Publications" title={<>Research in <em>print.</em></>} lead="Selected peer-reviewed work on landscape genomics, local adaptation, hybrid zones, and the evolutionary ecology of western plant populations." />
      <section className="publication-section">
        <div className="section-heading">
          <p className="section-number">Selected publications</p>
          <a className="text-link" href="https://scholar.google.com/scholar?q=Trevor+M.+Faske">Google Scholar ↗</a>
        </div>
        <div className="publication-list">
          {publications.map((publication) => {
            const content = <><div className="pub-meta"><span>{publication.year}</span><span>{publication.journal}</span></div><h2>{publication.title}</h2><p>{publication.authors}</p><span className="pub-arrow" aria-hidden="true">↗</span></>;
            return publication.href ? <a className="publication" href={publication.href} key={publication.title}>{content}</a> : <article className="publication" key={publication.title}>{content}</article>;
          })}
        </div>
        <a className="button" href="/Trevor-Faske-CV.pdf">Download full CV <span aria-hidden="true">↓</span></a>
      </section>
    </PageShell>
  );
}

function TeachingPage() {
  return (
    <PageShell current="teaching">
      <PageIntro number="03" label="Teaching" title={<>Building confidence with <em>data and code.</em></>} lead="I teach reproducible data science for biologists, helping students move from foundational computing skills to independent analysis and scientific communication." />
      <section className="course-list">
        <article><span>2021–22</span><div><h2>Data Science for Biology II</h2><p>Advanced skills in reproducible workflows, modeling, visualization, and high-performance computing.</p></div></article>
        <article><span>2020–22</span><div><h2>Data Science for Biology I</h2><p>Unix and Python foundations for biologists beginning to work with code and large datasets.</p></div></article>
        <article><span>2026</span><div><h2>Population Genetics</h2><p>Guest lectures connecting evolutionary theory, genomic data, and empirical research.</p></div></article>
      </section>
      <section className="feature-band teaching-band">
        <p className="section-number">Mentorship</p>
        <h2>Learning by doing, with <em>care and clarity.</em></h2>
        <p>My teaching emphasizes transparent workflows, useful feedback, and the confidence to ask better questions of ecological data.</p>
      </section>
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell current="about">
      <PageIntro number="04" label="About me" title={<>Ecologist, collaborator, and <em>restoration scientist.</em></>} lead="I am an evolutionary ecologist based in Flagstaff, Arizona, working at the intersection of research, conservation, and practical landscape stewardship." />
      <section className="about-grid">
        <div className="portrait-frame about-portrait">
          <img src="/trevor-faske.jpg" alt="Trevor Faske" />
          <div className="contour contour-one" aria-hidden="true" />
          <div className="contour contour-two" aria-hidden="true" />
        </div>
        <div className="about-copy">
          <p>I study the ecological and evolutionary processes that shape plant populations across western landscapes. My work combines genomics, field ecology, climate data, and spatial analysis to support more effective conservation and restoration.</p>
          <p>I am a Research Scientist and co-founder of the Landscape Stewardship Collective and a Postdoctoral Fellow at the University of Montana. I value collaborative research that produces both new insight and practical tools.</p>
          <dl>
            <div><dt>Based in</dt><dd>Flagstaff, Arizona</dd></div>
            <div><dt>Current roles</dt><dd>Landscape Stewardship Collective<br />University of Montana</dd></div>
            <div><dt>Focus</dt><dd>Ecology · Evolution · Conservation</dd></div>
          </dl>
        </div>
      </section>
      <section className="contact">
        <p className="section-number">Connect</p>
        <h2>Let’s talk about plants, populations, and <em>restoration.</em></h2>
        <div className="contact-links">
          <a className="button button-light" href="mailto:trevor@landscollective.org">Send an email ↗</a>
          <a href="https://github.com/trevorfaske">GitHub ↗</a>
          <a href="https://landscollective.org">Landscape Stewardship Collective ↗</a>
          <a href="/Trevor-Faske-CV.pdf">Download CV ↓</a>
        </div>
      </section>
    </PageShell>
  );
}

function getCurrentPage(): PageKey {
  const section = window.location.pathname.split("/").filter(Boolean)[0];
  const pageKeys: PageKey[] = ["home", "research", "publications", "teaching", "about"];
  return pageKeys.includes(section as PageKey) ? section as PageKey : "home";
}

const pages: Record<PageKey, ReactNode> = {
  home: <HomePage />,
  research: <ResearchPage />,
  publications: <PublicationsPage />,
  teaching: <TeachingPage />,
  about: <AboutPage />,
};

createRoot(document.getElementById("root")!).render(<StrictMode>{pages[getCurrentPage()]}</StrictMode>);

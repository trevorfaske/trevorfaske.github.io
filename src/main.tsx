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

const manuscriptsInReview = [
  { number: "6", status: "In review", journal: "Molecular Ecology", title: "Polyploidy and environmental adaptation structures divergence and limited gene flow among sympatric subspecies of big sagebrush (Artemisia tridentata)", authors: "Faske TM, Agneray AC, Osuna-Mascaró C, Jahner JP, Richardson BA, Leger EA, Parchman TL" },
  { number: "5", status: "In review", journal: "Ecological Applications", title: "The genetic consequences of mixing seed collections and species-specific biology on the development of seed sources for land management", authors: "Faske TM, Lasché S, Wolf A, Faist AM, Fuentes-Soriano S, Winkler DE, Massatti R" },
  { number: "4", status: "In review", journal: "Conservation Genetics", title: "Population structure and genetic connectivity in the endangered Pectis imberbis: Addressing conservation and genetic gaps in the Arizona Sky Islands", authors: "Gilb S‡, Haubensak K, Aslan C, Holeski L, Faske T, Souther S" },
  { number: "3", status: "In revision", journal: "Restoration Ecology", title: "A matter of germination: The importance of seed-sourcing for seed-based restoration of dry grasslands", authors: "Lasché SN, Winkler DE, Schroeder RWR, Wolf AC, Massatti R, Fuentes-Soriano S, Faske TM, Faist AM" },
  { number: "2", status: "In review", journal: "Conservation Science and Practice", title: "Introduction using vegetative propagules maintains genetic diversity and increases population redundancy in a critically endangered grass, Pleuropogon oregonus", authors: "Massatti R, Bainbridge S, Copeland SM, Crouch C, Faske TM, Hamerlynck E, Palmer B, Roybal C" },
  { number: "1", status: "In preparation", journal: "", title: "From theory to practice: Uses and misuses of genotype-environment associations to inform restoration and conservation", authors: "Faske TM, LoPiccolo KR‡, Massatti R" },
];

const publishedPublications = [
  { number: "18", year: "2025", journal: "Proceedings of the National Academy of Sciences", details: "122(31), e2410941122", doi: "https://doi.org/10.1073/pnas.2410941122", title: "Suturing fragmented landscapes: Mosaic hybrid zones in plants may facilitate ecosystem resiliency", authors: "Massatti R*, Faske TM*, Barnes IM, Leger EA, Parchman TL, Richardson BA, Knowles LL" },
  { number: "17", year: "2025", journal: "Phytochemistry Letters", details: "69, 103134", doi: "https://doi.org/10.1016/j.phytol.2025.103134", title: "Leveraging phytochemical variation in Piper scintillans Trel. to discover novel flavanone meroterpenes", authors: "Philbin CS, Burroughs M, Richards LA, Faske TM, Dyer LA, Parchman TL, Jeffrey CS" },
  { number: "16", year: "2025", journal: "Molecular Ecology", details: "e17638", doi: "https://doi.org/10.1111/mec.17638", title: "Geography and environment shape spatial genetic variation and predict climate maladaptation across isolated and disjunct populations of Pinus muricata", authors: "Galland LM, Faske TM, Osuna-Mascaró C, Dilts TE, Bisbing S, Parchman TL" },
  { number: "15", year: "2025", journal: "Molecular Ecology", details: "e17640", doi: "https://doi.org/10.1111/mec.17640", title: "Genomics-driven monitoring of Fraxinus latifolia (Oregon ash) for genetic conservation and EAB-resistance breeding", authors: "Melton AE, Faske TM, Parchman TL, Hamilton JA" },
  { number: "14", year: "2024", journal: "Ecology Letters", details: "27(6), e14436", doi: "https://doi.org/10.1111/ele.14436", title: "Response to von Schmalensee et al.", authors: "Garcia-Costoya G, Williams CE, Faske TM, Moorman JD, Logan ML" },
  { number: "13", year: "2023", journal: "Evolution", details: "qpad207", doi: "https://doi.org/10.1093/evolut/qpad207", title: "Environment predicts the maintenance of reproductive isolation in a mosaic hybrid zone of rubber rabbitbrush", authors: "Faske TM, Agneray AC, Jahner JP, Osuna-Mascaró C, Sheta LM‡, Richardson BA, Leger EA, Parchman TL" },
  { number: "12", year: "2023", journal: "Ecology Letters", details: "26(4), 529–539", doi: "https://doi.org/10.1111/ele.14173", title: "Evolutionary constraints mediate extinction risk under climate change", authors: "Garcia-Costoya G, Williams CE, Faske TM, Moorman JD, Logan ML" },
  { number: "11", year: "2023", journal: "Ecology Letters", details: "26(1), 63–75", doi: "https://doi.org/10.1111/ele.14135", title: "The gut microbiome reflects ancestry despite dietary shifts across a hybrid zone", authors: "Nielsen DP, Harrison JG, Byer NW, Faske TM, Parchman TL, Simison WB, Matocq MD" },
  { number: "10", year: "2022", journal: "Tree Genetics & Genomes", details: "18(5), 35", doi: "https://doi.org/10.1007/s11295-022-01565-8", title: "Divergence amid recurring gene flow: Complex demographic histories for two North American pine species (Pinus pungens and P. rigida) fit growing expectations among forest trees", authors: "Bolte CE, Faske TM, Friedline CJ, Eckert AJ" },
  { number: "9", year: "2022", journal: "Conservation Genetics", details: "23(2), 299–311", doi: "https://doi.org/10.1007/s10592-021-01410-w", title: "Population genomics of Monadenia land snails reveals structuring but gene flow across distinct species and morphotypes", authors: "Oswald JA, Roth B, Faske TM, Allen JM, Mestre C, Rivers-Pankratz D, Van Norman K, Guralnick RP" },
  { number: "8", year: "2021", journal: "Evolutionary Applications", details: "14(12), 2881–2900", doi: "https://doi.org/10.1111/eva.13323", title: "Genomic and common garden approaches yield complementary results for quantifying environmental drivers of local adaptation in rubber rabbitbrush, a foundational Great Basin shrub", authors: "Faske TM, Agneray AC, Jahner JP, Sheta LM‡, Leger EA, Parchman TL" },
  { number: "7", year: "2019", journal: "Molecular Ecology", details: "28(9), 2206–2223", doi: "https://doi.org/10.1111/mec.15069", title: "Evolutionary genomics of gypsy moth populations sampled along a latitudinal gradient", authors: "Friedline CJ, Faske TM, Lind BM, Hobson EM, Parry D, Dyer RJ, Johnson DM, Thompson LM, Grayson KL, Eckert AJ" },
  { number: "6", year: "2019", journal: "Biological Invasions", details: "21(4), 1365–1378", doi: "https://doi.org/10.1007/s10530-018-1907-9", title: "Can gypsy moth stand the heat? A reciprocal transplant experiment with an invasive forest pest across its southern range margin", authors: "Faske TM, Thompson LM, Banahene N‡, Levorse A‡, Quiroga Herrera M‡, Sherman K‡, Timko SE‡, Yang B‡, Gray DR, Parry D, Tobin PC, Eckert AJ, Johnson DM, Grayson KL" },
  { number: "5", year: "2018", journal: "Journal of Insect Science", details: "18(4), 1–7", doi: "https://doi.org/10.1093/jisesa/iey068", title: "Geographic variation in larval metabolic rate between northern and southern populations of the invasive gypsy moth", authors: "May C‡*, Hillerbrand N‡*, Thompson LM, Faske TM, Martinez E, Parry D, Agosta SJ, Grayson KL" },
  { number: "4", year: "2018", journal: "Environmental Entomology", details: "47(6), 1623–1631", doi: "https://doi.org/10.1093/ee/nvy149", title: "Thermal sensitivity of gypsy moth during larval and pupal development", authors: "Banahene N‡*, Salem SK‡*, Faske TM, Byrne HM‡, Glackin M‡, Agosta SJ, Eckert AJ, Grayson KL, Thompson LM" },
  { number: "3", year: "2018", journal: "Tree Genetics & Genomes", details: "14(2), 29", doi: "https://doi.org/10.1007/s11295-017-1224-y", title: "The genomics of local adaptation in trees: Are we out of the woods yet?", authors: "Lind BM, Menon M, Bolte CE, Faske TM, Eckert AJ" },
  { number: "2", year: "2017", journal: "Physiological Entomology", details: "42(2), 181–190", doi: "https://doi.org/10.1111/phen.12190", award: "Royal Entomological Society: Best paper 2017/2018", title: "Variation in growth and developmental responses to supraoptimal temperatures near latitudinal range limits of gypsy moth Lymantria dispar, an expanding invasive species", authors: "Thompson LM, Faske TM, Banahene N‡, Grim D, Agosta SJ, Parry D, Tobin PC, Johnson DM, Grayson KL" },
  { number: "1", year: "2015", journal: "Environmental Entomology", details: "44(3), 864–873", doi: "https://doi.org/10.1093/ee/nvv063", title: "Performance of wild and laboratory-reared gypsy moth: A comparison between foliage and artificial diet", authors: "Grayson KL, Parry D, Faske TM, Hamilton A, Tobin PC, Agosta SJ, Johnson DM" },
];

function formatAuthors(authors: string) {
  return authors.split(/(Faske T(?:M)?\*?)/g).map((part, index) =>
    /^Faske T(?:M)?\*?$/.test(part) ? <strong key={index}>{part}</strong> : part
  );
}

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
      <main className={`page page-${current}`}>{children}</main>
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
      <PageIntro number="02" label="Publications" title={<>Publications</>} lead="* Authors contributed equally. ‡ Undergraduate or graduate mentee." />
      <section className="publication-section">
        <div className="publication-group">
          <h2 className="publication-group-title">Manuscripts in review</h2>
          <ol className="citation-list" reversed start={6}>
            {manuscriptsInReview.map((publication) => (
              <li value={Number(publication.number)} key={publication.number}>
                {formatAuthors(publication.authors)} <em>({publication.status})</em> {publication.title}.{publication.journal && <> <cite>{publication.journal}</cite></>}
              </li>
            ))}
          </ol>
        </div>
        <div className="publication-group">
          <h2 className="publication-group-title">Published</h2>
          <ol className="citation-list" reversed start={18}>
            {publishedPublications.map((publication) => (
              <li value={Number(publication.number)} key={publication.number}>
                {formatAuthors(publication.authors)} ({publication.year}) {publication.title}. <cite>{publication.journal}</cite>, {publication.details}. <a href={publication.doi}>DOI</a>{publication.award && <> <strong className="citation-award">*{publication.award}</strong></>}
              </li>
            ))}
          </ol>
        </div>
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

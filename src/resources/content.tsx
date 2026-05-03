import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";
import { SpeedInsights } from "@vercel/speed-insights/next";

const person: Person = {
  firstName: "Oluwaseun",
  lastName: "Adeleye",
  name: "Oluwaseun Adeleye",
  role: "GIS Analyst & Geospatial Data Consultant",
  avatar: "/images/Oluwaseun Adeleye Profile.jpeg",
  email: "adeleyeseun22@gmail.com",
  location: "Europe/London",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>GIS updates from {person.firstName}</>,
  description: <>Project notes on spatial analysis, QGIS workflows, and geospatial decision-support systems.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adeleyeseun22",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/oluwaseun-adeleye-b69373100/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Geospatial Analytics Portfolio`,
  description:
    "GIS portfolio showcasing QGIS workflows, spatial analysis, public health GIS, and geospatial decision-support outputs.",
  headline: <>GIS Analyst & Geospatial Data Consultant</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured GIS case study</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Healthcare accessibility mapping
        </Text>
      </Row>
    ),
    href: "/work/healthcare-accessibility-mapping-greater-london",
  },
  subline: (
    <>
      I build spatial analysis workflows, QGIS maps, interactive dashboards, and decision-support
      outputs for public health, urban planning, humanitarian response, and development programs.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} available for remote work.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I combine geospatial analysis with a strong background in monitoring, evaluation, public
        health research, and data analytics. My work focuses on turning spatial data into practical
        maps, analytical workflows, and decision-support outputs for planning, service delivery, and
        evidence-based program implementation.
      </>
    ),
  },
  work: {
    display: true,
    title: "Relevant Experience",
    experiences: [
      {
        company: "Rovco",
        timeframe: "2020 - Present",
        role: "AI Data Annotator & Search Quality Evaluator",
        achievements: [
          "Evaluated search engine results pages (SERPs) to determine relevance, usefulness, and intent match based on detailed project guidelines and quality standards.",
          "Annotated and categorized search and text-based content using detailed project guidelines, decision trees, and structured rating taxonomies.",
          "Flagged inconsistencies, low-quality outputs, misinformation, and policy violations for downstream review and model improvement.",
        ],
        images: [],
      },
      {
        company: "Independent Geospatial Portfolio Projects",
        timeframe: "2026",
        role: "GIS Analyst & Geospatial Data Consultant",
        achievements: [
            "Designed a reproducible QGIS workflow for healthcare facility distribution and facility density mapping across Greater London",
            "Applied open data extraction, CRS management, spatial joins, count points in polygon, density analysis, graduated symbology, and professional map layout design",
          ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "University of the West of England (UWE)",
        description: "B.Sc. Computer Science.",
      },
      {
        name: "Professional Training",
        description: "Certifications and training across project management, research, data analysis, and monitoring and evaluation.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "GIS & Spatial Analysis",
        description: (
          "QGIS project setup, coordinate reference systems, vector cleaning, clipping, merging, spatial joins, count points in polygon, buffers, choropleth mapping, and map layouts"
        ),
        tags: [
          { name: "QGIS", icon: "grid" },
          { name: "Spatial Analysis", icon: "globe" },
          { name: "Map Layouts", icon: "gallery" },
        ],
        images: [],
      },
      {
        title: "Geospatial Data & Open Data Workflows",
        description: (
          "OpenStreetMap extraction, QuickOSM workflows, administrative boundary processing, GeoPackage storage, CSV exports, and reproducible GIS case-study packaging."
        ),
        tags: [
          { name: "OpenStreetMap", icon: "globe" },
          { name: "GeoPackage", icon: "document" },
          { name: "CSV", icon: "document" },
        ],
        images: [],
      },
      {
        title: "Data Analysis & Decision Support",
        description: (
          "Public health analytics, M&E reporting, indicator summaries, dashboard thinking, evidence synthesis, and stakeholder-ready technical writing."
        ),
        tags: [
          { name: "Public Health GIS", icon: "rocket" },
          { name: "M&E", icon: "document" },
          { name: "Reporting", icon: "document" },
        ],
        images: [],
      },
      {
        title: "Web GIS & Portfolio Development",
        description: (
          "Next.js, Vercel, interactive map planning, GeoJSON-ready project structure, and scalable portfolio presentation for future GIS case studies."
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "Vercel", icon: "rocket" },
          { name: "Web GIS", icon: "globe" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `GIS Notes – ${person.name}`,
  description:
    "Short notes, technical reflections, and project updates on GIS, dashboards, spatial analysis, and data consulting.",
};


const work: Work = {
  path: "/work",
  label: "Projects",
  title: `GIS Projects – ${person.name}`,
  description:
    "Selected geospatial analysis projects covering QGIS workflows, healthcare accessibility mapping, public health GIS, remote sensing, and web GIS.",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `GIS Gallery – ${person.name}`,
  description:
    "A visual collection of GIS maps, dashboard screenshots, geospatial workflows, and portfolio outputs.",
  images: [
    {
      src: "/images/projects/healthcare-accessibility-london/Map_01_London_Healthcare_Facility_Distribution.png",
      alt: "Healthcare facility distribution map across Greater London",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/healthcare-accessibility-london/Map_02_London_Healthcare_Facility_Density.png",
      alt: "Healthcare facility density map across Greater London boroughs",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/healthcare-accessibility-london/mmap_03_london_underserved_boroughs.png",
      alt: "Relative healthcare access classification map across Greater London",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
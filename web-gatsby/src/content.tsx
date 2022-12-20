import React from 'react';
import { Paragraph } from './components/StyledComponents';
import LinkOut from "./components/LinkOut";


// The short intro text placed at the top of the website
export const short_intro_text = <Paragraph>
  Knowledge graph developer working with Semantic Web standards (RDF, SPARQL, OWL ontologies, SHACL, RML), life sciences data, and web technologies.
</Paragraph>


// A longer text about me, experiences and motivation
export const about_me_text = <>
  <Paragraph>
    The aim of my work is to build data ecosystems that will enable scientific researchers
    to make new discoveries. Recently I developed the <LinkOut href="https://maastrichtu-ids.github.io/dsri-documentation">Data Science Research Infrastructure</LinkOut>,
    an OpenShift cluster for academic researchers, and <LinkOut href="http://d2s.semanticscience.org">Data2Services</LinkOut>,
    a framework to generate services from structured data using a semantically meaningful data model.
    I also built a RDF knowledge graph that integrates data from biomedical and clinical data sources,
    was involved in the Knowledge Graph Standardization effort of the <LinkOut href="https://ncats.nih.gov/translator">NIH NCATS Translator project</LinkOut>,
    and contributed to advancing the <LinkOut href="https://biolink.github.io/biolink-model/docs/">BioLink model</LinkOut>.
    All these activities have been aimed at building an infrastructure for computationally-assisted exploration of knowledge and innovative research hypotheses.
  </Paragraph>

  <Paragraph>
    I first realized the data access challenges faced by researchers and medical practitioners while I worked on the <LinkOut href="http://bio2rdf.org/">Bio2RDF project</LinkOut> at Quebec University. I have since dedicated my work to building biomedical and clinical data resources and ensuring users' access to them. I am a strong advocate of Open Source and commit myself to write comprehensible documentation and build easily accessible and reusable software. In my activities, I emphasize improving existing standards to address data interoperability and reproducibility and empowering researchers to improve their scientific practice.
  </Paragraph>
</>

{/* <Paragraph>
  The aim of my work is to build data ecosystems that will enable scientific researchers
  to make new discoveries. As a data science developer at the Institute of Data Science
  at Maastricht University, I developed the <LinkOut href="https://maastrichtu-ids.github.io/dsri-documentation/">Data Science Research Infrastructure</LinkOut>,
  an OpenShift cluster for academic researchers, and <LinkOut href="http://d2s.semanticscience.org/">Data2Services</LinkOut>,
  a framework to generate services from structured data using a semantically meaningful data model.
  I also built a RDF knowledge graph that integrates data from biomedical and clinical data sources,
  was involved in the Knowledge Graph Standardization effort of the <LinkOut href="https://ncats.nih.gov/translator">NIH NCATS Translator project</LinkOut>,
  and contributed to advancing the <LinkOut href="https://biolink.github.io/biolink-model/docs/">BioLink model</LinkOut>.
  All these activities have been aimed at building an infrastructure for computationally-assisted exploration of knowledge and innovative research hypotheses.
</Paragraph>
<Paragraph>
  I first realized the data access challenges faced by researchers and medical practitioners while I worked on the <LinkOut href="http://bio2rdf.org/">Bio2RDF project</LinkOut> at Quebec University as part of a Master’s in Bioinformatics. I have since dedicated my career to building biomedical and clinical data resources and ensuring users' access to them. I am a strong advocate of Open Source and commit myself to write comprehensible documentation and build easily accessible and reusable software. In my activities, I emphasize improving existing standards to address data interoperability and reproducibility and empowering researchers to improve their scientific practice.
  Before taking my current position at the Institute of Data Science at UM, I worked as a research engineer at the LIRMM in Montpellier on projects to make the semantic web and ontologies more accessible to researchers, such as AgroPortal a portal for agronomical ontologies.
</Paragraph>
<Paragraph>
  Making new discoveries acts a great source of motivation for me. This curiosity also pushes me in other areas of my life. I practice a number of outdoor sports including mountain biking, bicycle tourism, Ultimate frisbee, hiking and trail running, and have travelled extensively across Europe and North America. It is perhaps for this reason that I have shown an ability to adapt quickly to new technologies and challenges with little outside help. Having said this, collaborative work within a team is something that I highly value and, indeed, am actively looking for.
</Paragraph>
<Paragraph>Feel free to contact me for more details.</Paragraph> */}



// The list of cool projects I want to share
export const projects = [
  {
    title: '💠 Shapes of You',
    langs: ['python', 'typescript'],
    description: `Web service indexing standard knowledge representations, such as OWL ontologies, or
  SHACL shapes, from public git repositories, alongside with generating metadata for active SPARQL endpoints.`,
    website_url: 'http://index.semanticscience.org',
    git_url: 'https://github.com/vemonet/shapes-of-you',
  },
  {
    title: '♻️ FAIR enough',
    langs: ['python', 'typescript'],
    description: `An ecosystem with a python library and a web service to define, publish, and execute extensible evaluations
    of resources online, in order to assess their compliance to the FAIR principles (Findable Accessible Interoperable Reusable).`,
    website_url: 'https://fair-enough.semanticscience.org',
    docs_url: 'https://maastrichtu-ids.github.io/fair-test',
    git_url: 'https://github.com/MaastrichtU-IDS/fair-enough',
    pip_url: 'https://pypi.org/project/fair-test',
  },
  {
    title: '✨ RDFLib endpoint',
    langs: ['python'],
    description: `A python library to deploy SPARQL endpoints from RDFLib Graphs to serve RDF files, or expose machine learning models, and any other logic implemented in Python, through SPARQL functions.`,
    git_url: 'https://github.com/vemonet/rdflib-endpoint',
    pip_url: 'https://pypi.org/project/rdflib-endpoint',
  },
  {
    title: '🔬 Knowledge Collaboratory',
    langs: ['python', 'typescript'],
    description: `An ecosystem to publish and retrieve scientific claims as Nanopublications using Translator standards, such as the BioLink model and the Translator Reasoner API.`,
    website_url: 'https://collaboratory.semanticscience.org',
    git_url: 'https://github.com/MaastrichtU-IDS/knowledge-collaboratory',
  },
  {
    title: '🔮 Translator OpenPredict',
    langs: ['python'],
    description: `An API to serve drug-disease predictions models, and expose the predictions using standards developed
    for the NIH NCATS Biomedical Data Translator project.`,
    website_url: 'https://openpredict.semanticscience.org',
    git_url: 'https://github.com/MaastrichtU-IDS/translator-openpredict',
  },
  {
    title: '🔭 Data Science Research Infrastructure',
    langs: ['docker', 'kubernetes'],
    description: `A Kubernetes/OpenShift cluster for academic researchers to deploy Data Science workspaces and services,
    such as JupyterHub, RStudio, or VisualStudio Code server.`,
    // website_url: 'https://dsri.maastrichtuniversity.nl',
    docs_url: 'https://dsri.maastrichtuniversity.nl',
    git_url: 'https://github.com/MaastrichtU-IDS/dsri-documentation',
  },
  // {
  //   title: '🪐 JupyterLab',
  //   langs: ['docker', 'python'],
  //   description: `JupyterLab workspace with VisualStudio Code integrated, and various packages and kernels pre-installed to help working with data science and knowledge graphs.`,
  //   git_url: 'https://github.com/MaastrichtU-IDS/jupyterlab',
  // },
]


// The list of skills
export const skills = [
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Data Science'],
  },
  {
    title: 'RDF',
    competency: 4,
    category: ['Semantic Web'],
  },
  {
    title: 'SPARQL',
    competency: 4,
    category: ['Semantic Web', "Databases"],
  },
  {
    title: 'Ontologies',
    competency: 4,
    category: ['Semantic Web'],
  },
  {
    title: 'SHACL',
    competency: 4,
    category: ['Semantic Web'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['System administration', 'Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['System administration', 'Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'OpenAPI',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'RDFLib',
    competency: 4,
    category: ['Semantic Web'],
  },
  {
    title: 'TypeScript',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'JavaScript',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Material UI',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'HTML/CSS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'ShEx',
    competency: 3,
    category: ['Semantic Web'],
  },
  {
    title: 'RML',
    competency: 3,
    category: ['Semantic Web'],
  },
  {
    title: 'Protégé',
    competency: 3,
    category: ['Semantic Web', 'Tools'],
  },
  {
    title: 'Pydantic',
    competency: 3,
    category: ['Data Engineering'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Talend ETL',
    competency: 3,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Node.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Express.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Next.js',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'AngularJS',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Ruby on Rails',
    competency: 2,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'RDF4J',
    competency: 2,
    category: ['Semantic Web'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['System administration', 'Tools'],
  },
  {
    title: 'OpenShift',
    competency: 2,
    category: ['System administration', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'SQL',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'ElasticSearch',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Databases'],
  },
  {
    title: 'Pandas',
    competency: 2,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Gatsby',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'MacOS',
    competency: 1,
    category: ['System administration'],
  },
  {
    title: 'Rust',
    competency: 1,
    category: ['Languages'],
  },
]



// This needs to match thee categories used in the previous skills list
export const skillsCategories = [
  {
    title: 'Languages',
    color: 'languages',
    emoji: '💬',
  },
  {
    title: 'Web Development',
    color: 'webdev',
    emoji: '🌐',
  },
  {
    title: 'Semantic Web',
    color: 'semanticweb',
    emoji: '🔗',
  },
  {
    title: 'Data Engineering',
    color: 'dataengineering',
    emoji: '🔧',
  },
  {
    title: 'Databases',
    color: 'databases',
    emoji: '🗄️',
  },
  {
    title: 'System administration',
    color: 'sysadmin',
    emoji: '🔌',
  },
  {
    title: 'Tools',
    color: 'tools',
    emoji: '🔨',
  },
  // {
  //     title: 'Data Science',
  //     color: 'datascience',
  //     emoji: '📊',
  // },
]
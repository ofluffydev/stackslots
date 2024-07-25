import {Choice} from "@/components/SlotReel";
const React = new Choice("React", "/react.png", "A JavaScript library for building user interfaces");
const BoilerplateHTML = new Choice("Boilerplate HTML", "/html.png", "A simple HTML template");
const Svelte = new Choice("Svelte", "/svelte.png", "A JavaScript framework for building user interfaces");
const Vue = new Choice("Vue", "/vue.png", "A progressive JavaScript framework");
const Angular = new Choice("Angular", "/angular.png", "A platform for building mobile and desktop web applications");
const NextJS = new Choice("Next.js", "/next.png", "A React framework for production-grade applications");
const NuxtJS = new Choice("Nuxt.js", "/nuxtjs.png", "An intuitive Vue framework");
const EmberJS = new Choice("Ember.js", "/ember.png", "A framework for ambitious web developers");
const Preact = new Choice("Preact", "/preact.png", "A fast 3kB alternative to React with the same modern API");
const AlpineJS = new Choice("Alpine.js", "/alpinejs.png", "A rugged, minimal framework for composing JavaScript behavior in your markup");
const Lit = new Choice("Lit", "/lit.png", "A simple library for building fast, lightweight web components");
const SolidJS = new Choice("Solid.js", "/solidjs.png", "A declarative, efficient, and flexible JavaScript library for building user interfaces");
const Astro = new Choice("Astro", "/astrojs.png", "A static site builder for the modern web");
const Remix = new Choice("Remix", "/remix.png", "A full stack web framework that lets you focus on the user interface");
const jQuery = new Choice("jQuery", "/jquery.png", "A fast, small, and feature-rich JavaScript library");
const BackboneJS = new Choice("Backbone.js", "/backbone.png", "A lightweight JavaScript library for structuring web applications");

const FrontEndChoices = [
    React,
    BoilerplateHTML,
    Svelte,
    Vue,
    Angular,
    NextJS,
    NuxtJS,
    EmberJS,
    Preact,
    AlpineJS,
    Lit,
    SolidJS,
    Astro,
    Remix,
    jQuery,
    BackboneJS
];

const NodeJS = new Choice("Node.js", "/nodejs.png", "A JavaScript runtime built on Chrome's V8 JavaScript engine");
const Express = new Choice("Express", "/express.png", "A minimal and flexible Node.js web application framework");
const Django = new Choice("Django", "/django.png", "A high-level Python web framework");
const BackEndChoices = [NodeJS, Express, Django];

const PostgreSQL = new Choice("PostgreSQL", "/postgresql.png", "A powerful, open source object-relational database system");
const MongoDB = new Choice("MongoDB", "/mongodb.png", "A general purpose, document-based, distributed database");
const SQLite = new Choice("SQLite", "/sqlite.png", "A C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine");
const DatabaseChoices = [PostgreSQL, MongoDB, SQLite];

const Docker = new Choice("Docker", "/docker.png", "A platform for building, sharing, and running applications");
const Kubernetes = new Choice("Kubernetes", "/kubernetes.png", "An open-source platform designed to automate deploying, scaling, and operating application containers");
const GitHubActions = new Choice("GitHub Actions", "/github.png", "Automate, customize, and execute your software development workflows right in your repository");
const DevOpsChoices = [Docker, Kubernetes, GitHubActions];

type ChoiceCategory = [string, Choice[]];

const choices: ChoiceCategory[] = [["Front-end", FrontEndChoices], ["Back-end", BackEndChoices], ["Database", DatabaseChoices], ["DevOps", DevOpsChoices]];

// Export the choices array and the Choice class
export {choices, Choice};
import SlotReel, {Choice} from "@/components/SlotReel";


const React = new Choice("React", "/react.png", "A JavaScript library for building user interfaces");
const BoilerplateHTML = new Choice("Boilerplate HTML", "/html.png", "A simple HTML template");
const Svelte = new Choice("Svelte", "/svelte.png", "A JavaScript framework for building user interfaces");
const FrontEndChoices = [React, BoilerplateHTML, Svelte];

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

const choices = [["Front-end", FrontEndChoices], ["Back-end", BackEndChoices], ["Database", DatabaseChoices], ["DevOps", DevOpsChoices]];

function SlotMachine() {
    return (<div className="flex flex-row justify-center gap-10">

    </div>);
}

export default SlotMachine;
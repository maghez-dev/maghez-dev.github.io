/**
 * projects-data.js
 * ----------------
 * Single source of truth for all portfolio projects. Add a new entry to
 * the `projectsData` array below to make a project appear on the site.
 * No other file needs to be touched: the grid, the cards and the modal
 * are all rendered dynamically from this data (see js/projects.js and
 * js/modal.js).
 *
 * FIELDS
 * ------
 *  id                 {number}  Unique numeric identifier.
 *  title               {string}  Project title.
 *  shortDescription    {string}  One-liner shown on the project card
 *                                  (plain text, no markdown).
 *  detailedDescription {string}  Rich text shown inside the project modal.
 *                                  Supports the lightweight markdown syntax
 *                                  described below (see js/markdown.js).
 *  technologies         {string[]} List of tech tags (e.g. "C#", "Unity").
 *  projectThumbnail     {string}  Path to the image used on the card.
 *  gallery               {Array}   List of `{ type: "image"|"video", url }`
 *                                  items shown in the modal gallery.
 *  links                 {Object}  Map of link-type -> url. Supported
 *                                  types (each gets its own icon/label,
 *                                  see getLinkMeta() in js/projects.js):
 *                                    - website
 *                                    - github
 *                                    - gitlab
 *                                    - demo
 *                                  Any other key is also accepted and will
 *                                  fall back to a generic 🔗 icon.
 *
 * DETAILED DESCRIPTION SYNTAX
 * ----------------------------
 * `detailedDescription` is plain text with a small, easy-to-read markdown
 * dialect, parsed by renderMarkdown() (js/markdown.js). All text is
 * HTML-escaped first, so this is safe from HTML injection.
 *
 *   ## Section title       -> rendered as a <h3> section heading
 *   - list item             -> rendered as a bullet list item
 *   1. list item            -> rendered as a numbered list item
 *   **bold text**            -> <strong>
 *   *italic text*             -> <em>
 *   `inline code`             -> <code>
 *   [label](https://url)      -> clickable link
 *   (blank line)               -> starts a new paragraph
 *
 * Example:
 *
 *   "A short intro paragraph about the project.\n" +
 *   "\n" +
 *   "## My Role\n" +
 *   "- Did **this** important thing\n" +
 *   "- Helped with `some_module.cpp`\n" +
 *   "\n" +
 *   "## Challenges\n" +
 *   "Explained in a normal paragraph, with a [reference link](https://example.com)."
 *
 * TEMPLATE FOR A NEW PROJECT
 * ---------------------------
 * Copy the block below into the `projectsData` array and fill it in:
 *
 *   {
 *       id: 99,
 *       title: "Project Title",
 *       shortDescription: "One short sentence describing the project.",
 *       detailedDescription:
 *           "Intro paragraph.\n" +
 *           "\n" +
 *           "## My Role\n" +
 *           "- Point one\n" +
 *           "- Point two\n" +
 *           "\n" +
 *           "## Notes\n" +
 *           "Any extra paragraph, with **bold**, *italic*, `code` or a [link](https://example.com).",
 *       technologies: ["Tech1", "Tech2"],
 *       projectThumbnail: "assets/images/project_folder/thumbnail.png",
 *       gallery: [
 *           { type: "image", url: "assets/images/project_folder/img1.png" },
 *           { type: "video", url: "assets/images/project_folder/clip.mp4" },
 *       ],
 *       links: {
 *           github: "https://github.com/username/repo",
 *       }
 *   },
 */
const projectsData = [
    {
        id: 1,
        title: "Rogue Cleaner",
        shortDescription: "Rogue Cleaner is a game project created for the Videogams Design and Programming course at POLIMI in 2020/2021.",
        detailedDescription:
            "The game is a metroidvania single player 2D platformer set inside an old computer with a cyberpunk and retro aesthetic.\n" +
            "There are also many references, like known antivirus programs and file extensions as enemies.\n" +
            "\n" +
            "## My Role\n" +
            "For this project, made in a small team, I took care of:\n" +
            "- Player movement, weapons, abilities and related animations\n" +
            "- Boss fight: AI, environment and related sprite animations\n" +
            "- Audio transition and programming\n" +
            "- Some environment gameplay objects (fans, elevators, and others)",
        technologies: ["C#", "Unity", "Visual Studio"],
        projectThumbnail: "assets/images/rogue_cleaner/rc-main.png",
        gallery: [
            { type: "image", url: "assets/images/rogue_cleaner/rc-main.png" },
            { type: "image", url: "assets/images/rogue_cleaner/rc1.png" },
            { type: "image", url: "assets/images/rogue_cleaner/rc0.png" },
            { type: "video", url: "assets/images/rogue_cleaner/rc-pitch.mp4" },
            { type: "video", url: "assets/images/rogue_cleaner/rc-trailer.mp4" },
            { type: "video", url: "assets/images/rogue_cleaner/rc-boss-fight.mp4" },
        ],
        links: {
            website: "https://polimi-game-collective.itch.io/rogue-cleaner",
        }
    },
    {
        id: 2,
        title: "Balloon Burst VR",
        shortDescription: "Balloon Burst VR is a simple VR game for Android made for the Virtual Reality course at UNIMI in 2021.",
        detailedDescription: "A simple VR game for Android in which the player needs to pop up as much balloons as possible to beat the best score.\nThe game is placed in a low poly park environment, and the player can swap between three shooting positions with different colors.",
        technologies: ["C#", "Unity", "Visual Studio"],
        projectThumbnail: "assets/images/balloon_burst_vr/bb-0.PNG",
        gallery: [
            { type: "image", url: "assets/images/balloon_burst_vr/bb-0.PNG" },
            { type: "image", url: "assets/images/balloon_burst_vr/bb-1.PNG" },
            { type: "image", url: "assets/images/balloon_burst_vr/bb-2.PNG" },
        ],
        links: {
            github: "https://github.com/maghez-dev/baloon-burst-vr",
        }
    },
    {
        id: 3,
        title: "BeziérSplit",
        shortDescription: "BeziérSplit is a simple web game made for the Computational Geometry course at UNIMI in 2021.",
        detailedDescription: "A simple puzzle game to showcase 3D geometrical knowledge gained though the course to be played in a browser in which a cube is splitted in two parts by a bézier surface randomly generated at runtime and guess the division percentage.",
        technologies: ["C#", "Unity", "Visual Studio"],
        projectThumbnail: "assets/images/bezier_split/bs-main.png",
        gallery: [
            { type: "image", url: "assets/images/bezier_split/bs-main.png" },
            { type: "image", url: "assets/images/bezier_split/bs-0.gif" },
            { type: "image", url: "assets/images/bezier_split/bs-1.png" },
        ],
        links: {
            website: "http://www.mat.unimi.it/users/alzati/Geometria_Computazionale_98-99/apps/beziersplit/index.html",
        }
    },
    {
        id: 4,
        title: "Distributed Monitor System",
        shortDescription: "A distrubuted monitor system simulation that keeps track of air pollution levels in a neighborhood of a smart city.",
        detailedDescription:
            "The project aims to implement a distributed monitoring system for air pollution levels in a smart city neighborhood. " +
            "The neighborhood contains multiple nodes equipped with PM10 sensors. For privacy reasons, these nodes must communicate " +
            "and coordinate with each other to send aggregated pollution data to a smart city gateway.\n" +
            "The gateway stores this aggregated data and makes it accessible to analysts. Analysts can query the gateway to obtain " +
            "statistics on pollution levels.\n" +
            "\n" +
            "## System Components\n" +
            "- **Node**: simulates a neighborhood node with an attached PM10 sensor, coordinating with peers to transmit measurements\n" +
            "- **Gateway**: server responsible for receiving and storing data from the nodes, and answering remote queries\n" +
            "- **Analyst Client**: dedicated client used by analysts to query the Gateway about the system state\n" +
            "\n" +
            "Nodes can be dynamically added or removed from the network.",
        technologies: ["Java", "Gradle", "IntelliJ IDEA"],
        projectThumbnail: "assets/images/distributed_system/dms-main.png",
        gallery: [
            { type: "image", url: "assets/images/distributed_system/dms-main.png" },
        ],
        links: {
            github: "https://github.com/maghez-dev/SDP_Project",
        }
    },
    {
        id: 5,
        title: "Animalese Keyboard",
        shortDescription: "AnimaleseKeyboard is a project born from curiosity and experimentation on creating a virtual keyboard for Android devices.",
        detailedDescription: "The goal is to give and alternative to the standard Google Keyboard, with a colorful background and pitched sound upon letters press that resembles the speech from animals in the popular game franchise Animal Crossing. ",
        technologies: ["Java", "Android Studio", "Android"],
        projectThumbnail: "assets/images/animalese_keyboard/ak-main.PNG",
        gallery: [
            { type: "image", url: "assets/images/animalese_keyboard/ak-main.PNG" },
        ],
        links: {
            github: "https://github.com/maghez-dev/AnimaleseKeyboard",
        }
    },
    {
        id: 6,
        title: "Spaghettosis",
        shortDescription: "Spaghettosis is a game project made for the SPAGHETTI INVASION GAME JAM 2025.",
        detailedDescription: "This project has been made in a couple of months as a personal challenge, with a help from a small team of passionate game developers.\nThe game consists in a short FPS adventure set in a Naples recently invaded by spaghetti-shaped aliens, in wich the player must venture to survive and find food for himself.",
        technologies: ["C++", "Blueprint", "Unreal Engine 5", "Visual Studio"],
        projectThumbnail: "assets/images/spaghettosis/main.jpg",
        gallery: [
            { type: "image", url: "assets/images/spaghettosis/spagh0.png" },
            { type: "image", url: "assets/images/spaghettosis/spagh1.png" },
            { type: "image", url: "assets/images/spaghettosis/spagh2.png" },
            { type: "image", url: "assets/images/spaghettosis/spagh3.png" },
        ],
        links: {
            website: "https://yozuki.itch.io/spaghettosis",
        }
    },
    {
        id: 7,
        title: "Lock-Free Stack",
        shortDescription: "A short experimental project to learn about Rust and low-level memory management.",
        detailedDescription: "The project consists in the implementation of a lock-free stack data structure in Rust, using atomic operations and memory management techniques to ensure thread safety and performance. The stack is designed to be used in concurrent environments, allowing multiple threads to push and pop elements without the need for locks or mutexes.\nA project born for curiosity and experimentation on Rust and low-level memory management, with the goal of learning about lock-free data structures and their implementation in Rust.",
        technologies: ["Rust", "Cargo", "Visual Studio Code"],
        projectThumbnail: "assets/images/lock_free_stack/thumbnail.jpg",
        gallery: [
            { type: "image", url: "assets/images/lock_free_stack/thumbnail.jpg" },
        ],
        links: {
            gitlab: "https://gitlab.com/maghez-dev/rust-lock-free-stack",
        }
    },
    {
        id: 8,
        title: "Space Ray",
        shortDescription: "A simple C++ project to explore low-level game programming.",
        detailedDescription: "Space Ray is a simple 2D twin-stick space shooter written in C++ with raylib.\nIt's a personal project built to explore low-level game programming: game loop, state management, rendering, audio, entity architecture and cross-platform compatibility.\nThe gamplay loop consists in moving around an endless space, shooting enemies that spawn dynamically around the camera with difficulty that scales with the number of active enemies and their speed. The run ends when the health bar is depleted, and the goal is to reach the highest possible score (recalling old arcade shooters).",
        technologies: ["C++20", "Raylib", "CMake", "Visual Studio Code"],
        projectThumbnail: "assets/images/space_ray/main.png",
        gallery: [
            { type: "image", url: "assets/images/space_ray/sr0.png" },
            { type: "image", url: "assets/images/space_ray/main.png" },
        ],
        links: {
            github: "https://github.com/maghez-dev/SpaceRay",
        }
    }
];

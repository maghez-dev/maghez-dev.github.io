const projectsData = [
    {
        id: 1,
        title: "Rogue Cleaner",
        shortDescription: "Rogue Cleaner is a game project created for the Videogams Design and Programming course at POLIMI in 2020/2021.",
        detailedDescription: "The game is a metroidvania single player 2D platformer set inside an old computer with a cyberpunk and retro aesthetic.\nThere are also many references, like known antivirus programs and file extensions as enemies.\nFor this project, made in a small team, i took care of:\n- Player movement, weapons, abilities and related animations.\n- Boss fight: AI, environment and related sprite animations.\n- Audio transition and programming\n- Some environment bameplay objects (fans, elevators, and others)",
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
        detailedDescription: "The project aims to implement a distributed monitoring system for air pollution levels in a smart city neighborhood. The neighborhood contains multiple nodes equipped with PM10 sensors. For privacy reasons, these nodes must communicate and coordinate with each other to send aggregated pollution data to a smart city gateway.\nThe gateway stores this aggregated data and makes it accessible to analysts. Analysts can query the gateway to obtain statistics on pollution levels.\nThe system consists of three main components: Node, Gateway, and Analyst Client. The node network comprises a set of processes simulating neighborhood nodes with attached PM10 sensors. These processes coordinate to transmit measurements to the Gateway. Nodes can be dynamically added or removed from the network.\nThe Gateway is a server responsible for receiving and storing data from the nodes. It also provides a remote monitoring system that allows different types of queries about the system state. Analysts perform these queries using the dedicated Analyst client.",
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


"use client"

import { motion, useMotionValue, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from "next/image";

function ContactInfo({title, logo}){
    return (
        <div className="mb-5 flex flex-row h-15 items-center rounded-xl w-full bg-[#51A493] box-item">
            <Image
                src={logo}
                width={50}
                height={50}
                alt=""
                className="ml-5"
            />
            <div className="flex items-center p-3">
                <p className="text-lg text-center text-white">{title}</p>
            </div>
        </div>
    );
}

function LangTags({langs, idx}) {
    return (
        <div className="flex w-full h-full gap-3 items-center justify-center">
            <div className="flex flex-wrap gap-3 items-center justify-center w-[90%] h-full">
                {langs[idx].map((lang, i) => (
                    <p key={i} className="bg-[#F283B6] px-5 py-2 rounded-full">{lang}</p>
                ))}
            </div>
        </div>
    );
}

function XPBox ({idx}) {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    const companies = ["University of Chicago", "Alleo.ai", "Charactour"];
    const timeframes = ["October 2023 - Present", "June 2025 - August 2025", "June 2024 - August 2024"];
    const positions = ["Technical Writer", "Software Engineering Intern", "AI & Data Science Intern"];
    const descriptions = [
        [
            "Edited HTML files for 80+ articles to match the University’s style guide and maintain a cohesive webpage",
            "Drafted documentation for knowledge based articles to help customers and colleagues independently solve issues",
            "Created email and document templates to accommodate for teams and increase worker efficiency"
        ],
        [
            "Created multiple web pages with TypeScript and Tailwind CSS to display important legal documentation",
            "Fixed the application’s back-end Python code to improve user experience and decrease user complaints by 15%",
            "Created methods to clean the SQL database of unauthenticated third-party calendars"
        ],
        [
            "Optimized methods of preprocessing text with Python to increase keyword retention and extraneous word deletion",
            "Tested an ElasticNetCV model to enhance fitting accuracy by 10% and avoid overfitting",
            "Trained chosen natural language processing models on 11 different personality traits"
        ]
    ];
    const used = [
        ["HTML5", "CSS"],
        ["Python", "JavaScript", "Tailwind", "HTML5", "CSS","React"],
        ["Python"]
    ]

    return (
        <motion.div
        className="w-full h-100 perspective cursor-pointer"
        onClick={handleClick}
        >
            <motion.div
            className="relative w-full h-full transition-transform duration-50 transform-style-preserve-3d"
            animate={{ rotateY: isClicked ? 180 : 0 }}
            >
                {/* FRONT */}
                <motion.div 
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="box-item absolute flex flex-col bg-[#51A493] w-full h-full backface-hidden rounded-xl"
                >
                    <div>
                        <p className="mt-3 text-4xl text-center text-white">{companies[idx]}</p>
                        <p className="text-center align-bottom text-white">{timeframes[idx]}</p>
                    </div>
                    <div className="flex flex-col w-full h-full items-center justify-end">
                        <p className="mt-3 text-2xl text-white">{positions[idx]}</p>
                    </div>
                    <div className="flex flex-col w-full h-full justify-end items-center px-5 mt-5">
                        <LangTags langs={used} idx={idx} />
                    </div>
                    <div className="flex flex-col bottom-0 h-1/2 w-full justify-end items-end pr-5">
                        <p className="text-white/50">Click to read more</p>
                    </div>
                    
                </motion.div>
                {/* BACK */}
                <motion.div 
                className="box-item absolute bg-[#FFF9EC] w-full h-full backface-hidden rotate-y-180 rounded-xl"
                >
                    <div className="flex flex-col justify-center w-full h-full pl-5 pr-5 items-center">
                        <ul className="list-disc list-inside">
                            <li className="mb-5">{descriptions[idx][0]}</li>
                            <li className="mb-5">{descriptions[idx][1]}</li>
                            <li className="mb-5">{descriptions[idx][2]}</li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

function SkillWheel() {
    const skills = [
        "Python",  
        "Tailwind", 
        "JavaScript", 
        "React", 
        "HTML5", 
        "C"];
    const skillsDesc = [
        ["Backend Development", "Webscraping", "Data Visualization"],
        ["Responsive Web Design", "Component Styling with Tailwind + React", "Accessibility in UI Design"],
        ["Frontend Development","DOM Manipulation and Event Handling", "Asynchronous Programming"],
        ["Component-Based UI", "Hooks", "Server-side Rendering"],
        ["Accessible Web Pages", "Cross-Browser Compatibility", "SEO-Friendly Markup"],
        ["Pointers and Memory Management", "System Calls and OS Interaction", "Multithreading with POSIX Threads"],
    ];

    const icons1 = [ "/python.svg",
        "/tailwind.svg",
        "/js.svg"];
    const icons2 = ["/react.svg",
        "/HTML5_Badge.svg",
        "/c.svg"];

    const skillBlurbs = [
        "This is the language that I am most familiar with. It was the first language I learned and served as my gateway into computer science. I have been working in Python for the past five years and I am continuously learning new skills through university courses, personal projects, and internships.",
        "This builds upon my experience with regular CSS to provide a clean and fast way to style websites. The syntax took some getting used to, but it quickly became second nature and allowed me to dynamically design this page and others.",
        "In addition to Python and Java, JavaScript was one of the original languages that I learned when I was exploring my interest in programming. Although it was briefly used in a university course, most of my experience has come from teaching myself, which has thankfully prepared me for internships.",
        "This is the tool that I have learned most recently. Researching and testing this library’s ability to maintain states and references with hooks has greatly increased possibilities for web development.",
        "As a markup language, the learning curve for HTML was extremely low. Nevertheless, properly mastering its capabilities provides for professional and presentable products. Additionally, paying attention to SEO and accessibility guidelines can ensure that people will always be able to find and use a website.",
        "This low-level language exposed many programming features that I had taken for granted. It presented an opportunity to learn in-depth about the complex relationship between code, the computer, operating systems, and the applications that are supported by them all.",
    ]

    const [currSkill, setCurrSkill] = useState(0);

    const handleClick = async (i) => {
        setCurrSkill((prev) => i);
    };

    

  return (
    <div className="flex flex-row h-full w-full items-center">
        <div className="w-1/4 flex flex-col items-center">
            <div className="w-full flex flex-row gap-15 justify-center mb-5">
                <motion.img
                src={icons1[0]}
                alt={skills[0]}
                style={{boxShadow: '0 0 5px 1px grey'}}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 10px 3px #F5A3C9'
                }}
                onClick={() => handleClick(0)}
                className="circle-item bg-white rounded-full p-2"
                />
                <motion.img
                src={icons1[1]}
                alt={skills[1]}
                style={{boxShadow: '0 0 5px 1px grey'}}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 10px 3px #F5A3C9'
                }}
                onClick={() => handleClick(1)}
                className="circle-item bg-white rounded-full p-2"
                />
                <motion.img
                src={icons1[2]}
                alt={skills[2]}
                style={{boxShadow: '0 0 5px 1px grey'}}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 10px 3px #F5A3C9'
                }}
                onClick={() => handleClick(2)}
                className="circle-item bg-white rounded-full p-2"
                />
            </div>
            <p className="text-xl text-center text-white fg-reg mb-5 border-y-2 border-white py-10 w-full">Pick a skill to learn more</p>
            <div className="w-full flex flex-row gap-15 justify-center">
                <motion.img
                src={icons2[0]}
                alt={skills[3]}
                style={{boxShadow: '0 0 5px 1px grey'}}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 10px 3px #F5A3C9'
                }}
                onClick={() => handleClick(3)}
                className="circle-item bg-white rounded-full p-2"
                />
                <motion.img
                src={icons2[1]}
                alt={skills[4]}
                style={{boxShadow: '0 0 5px 1px grey'}}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 10px 3px #F5A3C9'
                }}
                onClick={() => handleClick(4)}
                className="circle-item bg-white rounded-full p-2"
                />
                <motion.img
                src={icons2[2]}
                alt={skills[5]}
                style={{boxShadow: '0 0 5px 1px grey'}}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 10px 3px #F5A3C9'
                }}
                onClick={() => handleClick(5)}
                className="circle-item bg-white rounded-full p-2"
                />
            </div>
        </div>
        <div className="ml-30 w-1/4 h-1/2 flex flex-col justify-center items-center bg-green-600/50">
            <div className="box-item w-full bg-[#FFF9EC] rounded-xl h-full flex flex-col pl-5 justify-center text-xl">
                <h3 className="mb-5">{skills[currSkill]}</h3>
                <ul className="list-disc list-inside">
                    <li className="fg-reg mb-5">{skillsDesc[currSkill][0]}</li>
                    <li className="fg-reg mb-5">{skillsDesc[currSkill][1]}</li>
                    <li className="fg-reg mb-5">{skillsDesc[currSkill][2]}</li>
                </ul>
            </div>
        </div>
        <div className="ml-30 w-1/3 h-1/2 flex flex-col justify-center items-center">
             <div className="box-item w-full bg-[#FFF9EC] rounded-xl h-full flex flex-col justify-center text-xl">
                <p className="text-2xl mb-5 fg-reg mx-10">{skillBlurbs[currSkill]}</p>
             </div>
        </div>
    </div>
  );
}

function Project ({currIdx, itemIdx}) {
    const titles = ["Personal Website", "Blokus Game Simulation", "Stardew Valley Info Guide", "Stadium Interface Simulation"]
    const descriptions = ["A reactive personal portfolio (this website)", "A group game simulation", "A web-scraping tool for information", "A textual user interface"]
    const used = [
        ["HTML5", "CSS", "JavaScript", "Tailwind", "React"],
        ["Python"],
        ["Python"],
        ["Java"]
    ]
    const links = [
        "https://github.com/josephcrivera/personal-site",
        "https://github.com/josephcrivera/Blokus_Game_Simulation",
        "https://github.com/josephcrivera/Stardew-Valley-Info-Guide",
        "https://github.com/josephcrivera/Stadium_Interface_Simulation"
    ]

    const projDescs = [
        ["Designed and developed a reactive personal portfolio using HTML, CSS, JavaScript, and Tailwind CSS", 
            "Deployed the web application using Vercel for continuous uptime and delivery", 
            "Handled the entire website development life cycle of ideation, development, deployment, and maintenance"],
        ["Worked in a group of 4 people to program the implementation of a Blokus game", 
            "Created the textual user interface for game simulation that used keyboard inputs and command line variables", 
            "Develop a game that is scalable based on preferred board size, player count, and Blokus game style"],
        ["Implemented a web-scraping tool in Python to collect data from a website",
            "Developed a simple graphical user interface to handle user questions and output requested data"],
        ["Developed a textual user interface in Java to simulate user and administrator activities", 
            "Practiced creating and implementing classes to increase complexity and decrease repetitive code"],
    ];

    const projBlurbs = [
        "After my most recent internship, I felt it was time to apply my skills to a project that I could release to the public. Given my extensive experience with webpages, it seemed like a perfect task to tackle. The website went through many visual iterations before finally landing on the clean but lively version currently visible.",
        "This game was the final project for one of my computer science classes. It was a keen insight into the collaboration, teamwork, and Git man pages required for a multiple-week-long group project. Retrospectively, I realize that it helped prepare me for the internships I would have in the future.",
        "As an avid Stardew Valley player, I often grew weary of constantly having to check the Wikipedia page for information about the game. Therefore, I decided to solve my issue and build a local tool that would help me. I learned a lot about webscraping and the power of programming when aimed at actionable tasks.",
        "This simulation was one of the first projects that I ever built. Java was the first language that I learned, and this project birthed my love for computer science. Though it is a simplified simulacrum of what an actual system would look like, it provided me with the opportunity to take ownership of a personal project."
    ]

    const inView = itemIdx == currIdx || itemIdx - 1 == currIdx;
    return (
        <motion.div
        className={
            inView ?
            "flex flex-col box-item w-[90%] h-full bg-[#FFF9EC] rounded-xl"
            : "flex flex-col w-[90%] rounded-xl h-full bg-[#FFF9EC]"}
        >
            <div className="flex flex-row w-full h-1/4 bg-[#FFF9EC] px-10 pt-5 rounded-xl">
                <div className="w-full h-full rounded-xl">
                    <h3 className="text-2xl">{titles[itemIdx]}</h3>
                    <p className="text-lg">{descriptions[itemIdx]}</p>
                </div>
            </div>
            <div className="flex flex-col w-full h-full px-10 justify-center">
                <ul className="list-disc list-inside text-lg px-5">
                    <li className="fg-reg mb-5">{projDescs[itemIdx][0]}</li>
                    <li className="fg-reg mb-5">{projDescs[itemIdx][1]}</li>
                    <li className={projDescs[itemIdx].length == 3 ? "fg-reg mb-5" : "opacity-0"}>{projDescs[itemIdx][2]}</li>
                </ul>
                <p className="fg-reg text-lg pt-5">{projBlurbs[itemIdx]}</p>
            </div>
            <div className="w-full h-1/4 pb-2">
                <LangTags langs={used} idx={itemIdx}/>
            </div>
            <div className="flex justify-center text-gray-400 pb-2">
                <a href={links[itemIdx]} target="_blank">Github Repository Link</a>
            </div>
        </motion.div>
    );
}

export default function Home() {
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);

    const projects = ["", "", "", ""];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () =>
        setCurrentIndex((prev) => 
            prev >= projects.length - 2 ? 0 : prev + 1);
    const handlePrev = () =>
        setCurrentIndex((prev) => 
            prev == 0 ? 0 : (prev - 1 + projects.length) % projects.length);
    return (
    <main>
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth pt-16" id="sections">
        {/* Image, Name, Blurb */}
        <section className="snap-start h-screen section">
        <div className="mb-10 flex flex-col h-full">
            <div className="w-full h-full my-auto flex flex-row items-center">
                <div className="flex items-center justify-center">
                    <Image
                    src="/Current_Headshot-modified.png"
                    width={500}
                    height={500}
                    alt="headshot"
                    className="bg-[#2F6056] rounded-full p-3"
                    />
                </div>
                <div className="flex flex-col w-3/4 h-full ml-10 items-center">
                    <h1 id="about" className="pt-24 my-5 text-8xl text-center fg-reg">Joseph Rivera</h1>
                    <p className="text-xl mb-10 text-center fg-reg">Computer Science Student, University of Chicago</p>
                    <p className="text-2xl mb-10 fg-reg mx-10 indented-paragraph w-3/4">From buying programming textbooks with birthday money and taking 
                        dual enrollment courses on Saturdays to cross-country career treks and summer internships, I have always 
                        been looking for ways to learn more about computer science. Although I have taken many enlightening high 
                        school and college courses, I find that my best learning is done outside of the classroom.
                    </p>
                    <p className="text-2xl mb-20 fg-reg mx-10 indented-paragraph w-3/4">Currently, my focus is on web and desktop application development. 
                    I am looking to gain further expertise through future personal projects and internships. My ability to work independently and 
                    eagerness to learn make any task an exciting journey. 
                    </p>
                    <p className="text-2xl text-center fg-reg mb-5">Contact Info</p>
                    <div className="w-full h-1/4 flex flex-row gap-10 justify-center">
                        <a href="https://www.linkedin.com/in/joseph-rivera-951b74293" target="_blank"><ContactInfo title="Joseph Rivera" logo="/linkedin.svg"/></a>
                        <a href="https://www.github.com/josephcrivera" target="_blank"><ContactInfo title="josephcrivera" logo="/github.svg"/></a>
                        <a href="mailto:josephrivera@uchicago.edu" target="_blank"><ContactInfo title="josephrivera@uchicago.edu" logo="/email.svg"/></a>
                        <a href="/Joseph_Rivera_25.pdf" download target="_blank"><ContactInfo title="Resume" logo="/file.svg"/></a>
                    </div>
                </div>
            </div>
        </div>
        </section>

        {/* Skills Section */}
        <section className="snap-start h-screen section bg-[#51A493]">
        <div className="mb-10 h-full section">
            <h2 id="skills" className="pt-16 fg-reg">Skills</h2>
                <div className="w-full h-3/4">
                    <SkillWheel></SkillWheel>
                </div>
        </div>
        </section>

        {/* Experience Section */}
        <section className="snap-start h-screen section">
        <div className="mb-10 w-full h-full section">
            <h2 id="experience" className="pt-16 fg-reg">Technical Experience</h2>
            <div className="grid grid-cols-3 gap-5 justify-items-center h-full items-center pb-40">
                <XPBox idx="0"/>
                <XPBox idx="1"/>
                <XPBox idx="2"/>
            </div>
        </div>
        </section>

        {/* Projects Section */}
        <section className="snap-start h-screen section bg-[#51A493]">
        <div className="mb-10 h-full overflow-hidden">
            <h2 id="projects" className="pt-16 fg-reg">Projects</h2>
            <div className="relative flex overflow-hidden w-full h-3/4 pt-10 px-10 items-center justify-center">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-5">
                    <motion.div
                    onClick={handlePrev}
                    onHoverStart={() => setIsHoveredLeft(true)}
                    onHoverEnd={() => setIsHoveredLeft(false)}
                    className="cursor-pointer"
                    >
                        <i className="material-icons" style={isHoveredLeft ? {fontSize:"96px", color:"#F283B6"} : {fontSize: "96px", color: "white"}}>chevron_left</i>
                    </motion.div>
                </div>
                <motion.div
                className={`flex w-[200%] h-[90%]`}
                animate={{ x: `-${currentIndex * 50}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                {projects.map((project, i) => (
                    <div key={i} className="w-1/2 h-full flex-shrink-0 flex items-center justify-center">
                    <Project currIdx={currentIndex} itemIdx={i} />
                    </div>
                ))}
                </motion.div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-5">
                    <motion.div
                    onClick={handleNext}
                    onHoverStart={() => setIsHoveredRight(true)}
                    onHoverEnd={() => setIsHoveredRight(false)}
                    className="cursor-pointer"
                    >
                        <i className="material-icons" style={isHoveredRight ? {fontSize:"96px", color:"#F283B6"} : {fontSize: "96px", color: "white"}}>chevron_right</i>
                    </motion.div>
                </div>
            </div>
        </div>
        </section>

        {/* Contact Section */}
        <section className="snap-start h-screen section">
        <div className="h-full ">
            <h2 id="contact" className="pt-16 mb-5 fg-reg">Contact</h2>
            <div className="flex flex-col h-3/4 items-center justify-center">
                <div className="mb-10">
                    <h3 className="text-center fg-reg">Send a Message</h3>
                    <p className="text-center fg-reg"> Feel free to submit your infomration below if you have ideas, need guidance on a project, or simply wish to chat.</p>
                </div>
                <div className="w-1/2 mx-auto">
                    <form action="https://email.josephrivera.site/submit.php" method="post" id="contact-form" className="mx-auto">
                        <label className="font-semibold">Name</label><br/>
                        <input type="text" placeholder="Name" name="name" required className="border-1 rounded-md w-full h-8 p-3 mb-5 bg-white"></input><br/>
                        <label className="font-semibold">Email</label><br/>
                        <input type="email" placeholder="Email" name="email" required className="border-1 rounded-md w-full h-8 p-3 mb-5 bg-white"></input><br/>
                        <label className="font-semibold">Subject</label><br/>
                        <input type="text" placeholder="Subject" name="subject"required className="border-1 rounded-md w-full h-8 p-3 mb-5 bg-white"></input><br/>
                        <label className="font-semibold">Message</label><br/>
                        <input type="textarea" placeholder="Message" name="message" required className="border-1 rounded-md w-full h-25 pl-3 pr-3 pt-3 pb-20 mb-5 bg-white"></input><br/>
                        <button type="submit" className="block mx-auto w-20 h-10 border-1 border-black rounded-md cursor-pointer bg-[#F283B6]">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
    </div>
    </main>
  );
}

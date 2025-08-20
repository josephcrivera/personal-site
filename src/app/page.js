
"use client"

import { motion, useMotionValue, animate } from "framer-motion";
import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Image from "next/image";

function SkillCard({title, desc, logo}) {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <motion.div
        className="w-50 h-70 perspective"
        onClick={handleClick}
        >
            <motion.div
            className="relative w-full h-full transition-transform duration-50 transform-style-preserve-3d"
            animate={{ rotateY: isClicked ? 180 : 0 }}
            >
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-[#0e3b43] rounded-xl border">
                    <div className="flex flex-col items-center justify-center h-full">
                        <Image 
                            src={logo} 
                            width={100} 
                            height={100} 
                            alt="" 
                        />
                        <p className="text-lg text-center pt-4">{title}</p>
                    </div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#F4D35E] rounded-xl border">
                    <div className="flex items-center justify-center h-full px-4">
                        <p className="text-center text-white">{desc}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function ContactInfo({title, logo}){
    return (
        <div className="mb-5 flex flex-row h-15 items-center border-1 rounded-xl w-3/4">
            <Image
                src={logo}
                width={50}
                height={50}
                alt=""
                className="ml-5"
            />
            <div className="flex items-center p-3">
                <p className="text-lg text-center">{title}</p>
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
    const logos = ["/uchi.svg", "/alleo.svg", "/python.svg"];
    const descriptions = [
        [
            "Edited HTML files for 80+ articles to match the University’s style guide and maintain a cohesive webpage",
            "Drafted documentation for knowledge based articles to help customers and colleagues independently solve issues",
            "Created email and document templates to accommodate for teams and increase worker efficiency"
        ],
        [
            "1",
            "2",
            "3"
        ],
        [
            "Optimized methods of preprocessing text with Python to increase keyword retention and extraneous word deletion",
            "Tested an ElasticNetCV model to enhance fitting accuracy by 10% and avoid overfitting",
            "Trained chosen natural language processing models on 11 different personality traits"
        ]
    ];
    const used = [
        "HTML5, CSS",
        "Python, JavaScript, Tailwind, Typescript, HTML5, CSS, React",
        ""
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
                whileHover={{boxShadow: '0 0 10px 3px red'}}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="box-item absolute flex flex-col bg-[#087E8B] w-full h-full backface-hidden rounded-xl border-2 border-[#171738]"
                >
                    <div>
                        <p className="mt-3 text-4xl text-center text-white">{companies[idx]}</p>
                        <p className="text-center align-bottom text-white">{timeframes[idx]}</p>
                    </div>
                    <div className="flex flex-col w-full h-full items-center justify-end">
                        <p className="mt-3 text-2xl text-white">{positions[idx]}</p>
                        {/* <Image
                            src={logos[idx]}
                            width={100}
                            height={100}
                            alt=""
                            className=""
                        /> */}
                    </div>
                    <div className="flex flex-col bottom-0 h-full w-full justify-end items-end pr-5">
                        <p className={isHovered ? "text-white/50" : "text-white/0"}>Click to read more</p>
                    </div>
                    
                </motion.div>
                {/* BACK */}
                <motion.div 
                whileHover={{boxShadow: '0 0 10px 3px red'}}
                className="box-item absolute bg-[#F4D35E] w-full h-full backface-hidden rotate-y-180 rounded-xl border-2 border-[#171738]"
                >
                    <div className="flex flex-col justify-center w-full h-full pl-5 pr-5 items-center">
                        <ul className="list-disc list-inside">
                            <li className="mb-5">{descriptions[idx][0]}</li>
                            <li className="mb-5">{descriptions[idx][1]}</li>
                            <li className="mb-5">{descriptions[idx][2]}</li>
                        </ul>
                        {/* <p>Technologies Used: {used[idx]}</p> */}
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

// function Project ({title, description}) {
//     return (
//         <motion.div
//         className="flex flex-col box-item w-full h-3/4 bg-white items-center"
//         >
//             <div className="w-9/10 h-full bg-black mt-5">

//             </div>
//             <div className="w-full h-1/4 bg-white pl-5 pt-5">
//                 <p className="text-4xl">{title}</p>
//                 <p className="text-xl">{description}</p>
//             </div>
//         </motion.div>
//     );
// }

function SkillWheel() {
    const skills = ["Python",  "Tailwind", "TypeScript", "JavaScript", "React", "HTML5", "Java", "C"];
    const skillsDesc = [
        "0 Backend Development, Webscraping",
        "1 Webpage Styling",
        "2 Strong Typing, Interfaces",
        "3 Frontend Scripting",
        "4 Component-Based UI",
        "5 Web Design",
        "6 Object-Oriented Programming",
        "7 Low-Level Programming",
    ];

    const icons = [
        "/python.svg",
        "/tailwind.svg",
        "/ts.svg",
        "/js.svg",
        "/react.svg",
        "/HTML5_Badge.svg",
        "/java.svg",
        "/c.svg",
    ];

    const [currSkill, setCurrSkill] = useState(0);
    
    const normalizeAngle = (angle) => ((angle % 360) + 360) % 360;
    
    const totalItems = 8;
    const radius = 200; // same as translate(180px)
    const rotation = useMotionValue(0);
    // const rotateBy = 360 / totalItems;
    // let currRotation = normalizeAngle(rotation.get())
    // const animationRef = useRef(animate(rotation, currRotation + 45, {
    //         type: "spring",
    //         stiffness: 100,
    //     })
    // );
    
    // useEffect(() => {rotation.set(0);}, [rotation]);

    const handleClick = async (i) => {
        // // Stop any ongoing animation
        // console.log("Current value:", rotation.get());
        // // console.log("Animation ref:", animationRef.current);
        // // console.log("Clicked on: ", angle);

        // if (animationRef.current) {
        // animationRef.current.stop();
        // }

        // const currentValue = rotation.get();
        // const normalized = currentValue % 360;

        // // Calculate the new rotation target
        // const newValue = normalized + rotateBy;
        // console.log("New value:", newValue);

        // animationRef.current = animate(rotation, newValue, {
        //     type: "spring",
        //     stiffness: 100,
        // });

        // setCurrSkill((prev) => (prev + 1) % totalItems);
        setCurrSkill((prev) => i);
    };

    

  return (
    <div className="flex h-full w-full justify-center">
        <div className="w-full circle-container">
            <p className="pl-22 pt-55 text-xl font-bold">Pick a skill to learn more</p>
            {icons.map((src, i) => {
            const angleOffset = (360 / totalItems) * i;
            const totalAngle = normalizeAngle(rotation.get() + angleOffset);
            const angleInRadians = (totalAngle * Math.PI) / 180;
            {/* (((rotation.get() % 360) + angleOffset) * Math.PI) / 180; */}
            const x = radius * Math.cos(angleInRadians);
            const y = radius * Math.sin(angleInRadians);

            return (
                <motion.img
                key={i}
                src={src}
                alt={`Image ${i}`}
                width={100}
                height={100}
                animate={{ x, y }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ 
                    position: "absolute",
                    boxShadow: '0 0 5px 1px grey'
                }}
                whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 10px 3px red'
                }}
                onClick={() => handleClick(i)}
                className="circle-item bg-white rounded-full p-2"
                />
            );
            })}
        </div>
        {/* <div className="w-full circle-container">
            {icons.map((i) => {
            const angleOffset = (360 / totalItems) * i;
            const angleInRadians = ((rotation.get() + angleOffset) * Math.PI) / 180;
            const x = radius * Math.cos(angleInRadians);
            const y = radius * Math.sin(angleInRadians);

            return (
                <motion.div
                key={i}
                animate={{ x, y }}
                transition={{ type: "spring", stiffness: 100 }}
                style={{ position: "absolute" }}
                className="circle-item bg-white rounded-full p-2 w-10 h-10"
                >
                </motion.div>
            );
            })}
        </div> */}
        <div className="ml-30 w-1/2 h-full flex flex-col">
        <div className="box-item w-full bg-[#087E8B] rounded-xl h-1/2 flex flex-col items-center justify-center text-white text-xl border-2 border-[#171738]">
            <p>{skills[currSkill]}</p>
            <p>{skillsDesc[currSkill]}</p>
        </div>
        <div className="mt-5 flex flex-row w-full justify-center">
            {/* <motion.div
            className="w-1/4 h-15 bg-[#087E8B] rounded-xl flex items-center justify-center cursor-pointer text-white border-2 border-[#171738]"
            onClick={() => handleClick("prev")}
            whileHover={{scale: 1.1}}
            >
            <p>Previous</p>
            </motion.div> */}
            {/* <motion.div
            className="w-1/4 h-15 bg-[#087E8B] rounded-xl flex items-center justify-center cursor-pointer text-white border-2 border-[#171738]"
            onClick={() => handleClick()}
            whileHover={{scale: 1.1}}
            >
            <p>Next Skill</p>
            </motion.div> */}
        </div>
        </div>
    </div>
  );
}

function Project ({title, description, currIdx, itemIdx}) {

    const inView = itemIdx == currIdx || itemIdx - 1 == currIdx;
    return (
        <motion.div
        className={
            inView ?
            "flex flex-col box-item w-[90%] h-full bg-white items-center justify-center"
            : "flex flex-col w-[90%] h-full bg-white items-center justify-center"}
        >
            <div className="w-9/10 h-full bg-black mt-5">

            </div>
            <div className="w-full h-1/4 bg-white pl-5 pt-5">
                <p className="text-4xl">{title}</p>
                <p className="text-xl">{description}</p>
            </div>
        </motion.div>
    );
}

export default function Home() {
    const [isHoveredLeft, setIsHoveredLeft] = useState(false);
    const [isHoveredRight, setIsHoveredRight] = useState(false);

    const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () =>
        setCurrentIndex((prev) => 
            prev >= projects.length - 2 ? 0 : prev + 2);
    const handlePrev = () =>
        setCurrentIndex((prev) => 
            prev == 0 ? 0 : (prev - 2 + projects.length) % projects.length);

    return (
    <main>
    <div className="mx-auto max-w-8xl px-10" id="sections">
        {/* Image, Name, Blurb */}
        <section>
        <div className="mb-10">
            <div className="w-full my-auto">
                <h1 className="mt-5 mb-3 text-2xl text-center font-bold">Joseph Rivera</h1>
                    <p className="text-2xl mb-5 text-center">Computer Science Student, University of Chicago</p>
                    {/* <p className="ml-5 mb-5 text-lg">As an avid learner, I am looking to explore the professional world 
                    and gain as much knowledge about software engineering as possible. I&#39;ve invested time in teaching 
                    myself programming outside of my high school and college classes. I wish to continue this intellectual 
                    journey in a place that emphasizes learning and growth.</p> */}
            </div>
        </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
        <div className="mb-10 h-200">
            <h2 className="pt-16 font-bold">Skills</h2>
                <div className="w-full h-full">
                    <SkillWheel></SkillWheel>
                </div>
        </div>
        </section>

        {/* Experience Section */}
        <section>
        <div className="mb-10 w-full h-150">
            <h2 id="experience" className="pt-16 font-bold">Technical Experience</h2>
            <div className="grid grid-cols-3 gap-5 justify-items-center">
                <XPBox idx="0"/>
                <XPBox idx="1"/>
                <XPBox idx="2"/>
            </div>
        </div>
        </section>

        {/* Projects Section */}
        <section>
        <div className="mb-10 h-200 overflow-hidden">
            <h2 id="projects" className="pt-16 font-bold">Projects</h2>
            <div className="relative flex overflow-hidden w-full h-3/4 pt-10 px-10 items-center justify-center">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-5">
                    <motion.div
                    onClick={handlePrev}
                    onHoverStart={() => setIsHoveredLeft(true)}
                    onHoverEnd={() => setIsHoveredLeft(false)}
                    className="cursor-pointer"
                    >
                        <i className="material-icons" style={isHoveredLeft ? {fontSize:"96px", color:"red"} : {fontSize: "96px"}}>chevron_left</i>
                    </motion.div>
                </div>
                <motion.div
                className={`flex w-[${projects.length * 50}%] h-[90%]`}
                animate={{ x: `-${currentIndex * 50}%` }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                {projects.map((project, i) => (
                    <div key={i} className="w-1/2 h-full flex-shrink-0 flex items-center justify-center">
                    <Project title={project} description="blah" currIdx={currentIndex} itemIdx={i} />
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
                        <i className="material-icons" style={isHoveredRight ? {fontSize:"96px", color:"red"} : {fontSize: "96px"}}>chevron_right</i>
                    </motion.div>
                </div>
            </div>
        </div>
        </section>

        {/* Contact Section */}
        <section>
        <div className="h-150">
            <h2 id="contact" className="pt-16 mb-5 font-bold">Contact</h2>
            <div className="flex flex-row justify-between">
                <div className="w-1/2">
                    <h3 className="mb-3">Have Ideas?</h3>
                    <p>Fill out the form on the right or contact me at one of the options below. </p>
                    <div className="mt-5 flex flex-col w-1/2">
                        <a href="www.linkedin.com/in/joseph-rivera-951b74293" target="_blank"><ContactInfo title="Joseph Rivera" logo="/linkedin.svg"/></a>
                        <a href="www.github.com/josephcrivera" target="_blank"><ContactInfo title="josephcrivera" logo="/github.svg"/></a>
                        <a href="mailto:josephrivera@uchicago.edu" target="_blank"><ContactInfo title="josephrivera@uchicago.edu" logo="/email.svg"/></a>
                    </div>
                </div>
                <div className="w-1/3 mx-auto">
                    <form action="" method="post" id="contact-form" className="mx-auto">
                        <label className="font-semibold">Email</label><br/>
                        <input type="email" placeholder="Email" name="email" className="border-1 rounded-md w-full h-8 p-3 mb-5"></input><br/>
                        <label className="font-semibold">Subject</label><br/>
                        <input type="text" placeholder="Subject" name="subject" className="border-1 rounded-md w-full h-8 p-3 mb-5"></input><br/>
                        <label className="font-semibold">Message</label><br/>
                        <input type="textarea" placeholder="Message" name="message" className="border-1 rounded-md w-full h-25 pl-3 pr-3 pt-3 pb-20 mb-5"></input><br/>
                        <button type="submit" value="Submit" className="block mx-auto w-20 h-10 border-1 border-black rounded-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </section>
    </div>
    </main>
  );
}

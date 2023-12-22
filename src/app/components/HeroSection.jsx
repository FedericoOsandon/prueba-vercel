"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion }   from "framer-motion";
import Link         from "next/link";
import GithubIcon   from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
            <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-600">
                    Hola, soy{" "}
                </span>
                <br></br>
                <TypeAnimation
                    sequence={[
                        "FEDERICO",
                        1000,
                        "OSANDÓN",
                        1000,
                        "Web Developer",
                        1000,
                        "Fullstack",
                        1000,
                        // "UI/UX Designer",
                        // 1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                Dispuesto a seguir creciendo, aprendiendo y desarrollando 
                aplicaciones de alto impacto.
            </p>
            <div>
                <Link
                    href="/#contact"
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-blue-500 hover:bg-slate-200 text-white"
                >
                    contrátame
                </Link>
                <Link
                    href="/cv-federico-osandon.pdf"
                    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-blue-500 hover:bg-slate-800 text-white mt-3"
                    target="_blank"
                    download
                >
                    <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                        Descargar CV
                    </span>
                </Link>
                <div className="pt-6">
                    <Link href="http://github.com/federico-osandon" target="_blank" className="inline-block py-1 px-1 sm:w-fit" rel="noreferrer">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="http://linkedin.com/in/federico-osandon-programador" target="_blank" className="inline-block py-1 px-1 sm:w-fit" rel="noreferrer">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
                
            </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/profile.jpeg"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
                        width={600}
                        height={600}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default HeroSection;

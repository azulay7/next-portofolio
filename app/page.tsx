"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import deved from "../public/avatar.jpg"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { useState } from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode? "dark":""}>
      <Head>
        <title>Amit Azulay Portofolio</title>
        <meta name="description" content="General"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 md:mx-30 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="text-xl font-burtons">developedby</h1>
            <ul className="flex items-center">
              <li onClick={() => setDarkMode(!darkMode)}>
                <BsFillMoonStarsFill className="cursor-pointer" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="/public/resume.pdf" >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Amit Azulay</h2>
            <h3 className="text-2xl py-2">Web Developer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Passionate software engineer with expertise in
              Angular and Node.js. 
              Strong background in developing robust web
              applications. 
              Familiar with React and AWS, actively expanding
              knowledge in those frameworks. 
              A Node.js and UI expert worked on multiple projects from concept to completion. Love coding,
              sharing, and co-working within people in various roles.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
            <AiFillLinkedin></AiFillLinkedin>
            <AiFillGithub></AiFillGithub>
          </div>
          <div className="relative mx-auto bg-gradient-to-t from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image alt="my-avatar" src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">My journey</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
            Started 10 years ago with .NET applications, including ASP.NET, WinForms, and WPF. I have also developed native applications for both Android and Xamarin. When Angular 2 was released, I came across an opportunity to develop a new advanced product, sparking my interest in Single Page Applications (SPAs) and advanced techniques. During that time, my curiosity expanded to different platforms like React, Vue.js, and Svelte. This journey across these platforms has kept my curiosity alive and extended my range of abilities.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

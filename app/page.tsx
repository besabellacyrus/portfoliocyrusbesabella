"use client";

import { useEffect, useState } from "react";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.title = "My Portfolio";
  }, []);

  const moveTo = (section) => {
    scrollTo(section);
    setIsOpen(false);
  };

  return (
    <main className="text-gray-800">
      <header className="sticky top-0 z-10">
        <nav>
          <div className="h-[100px] max-w-4xl mx-auto text-center px-4 py-3 flex justify-between items-center">
            <h1 className="font-bold text-xl">[CB]</h1>

            {/* Burger Button */}
            <button
              className="md:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className=" hidden md:flex space-x-4">
              <button
                onClick={() => moveTo("work")}
                className="hover:text-blue-500"
              >
                Work
              </button>
              <button
                onClick={() => moveTo("experience")}
                className="hover:text-blue-500"
              >
                Experience
              </button>
              <button
                onClick={() => moveTo("education")}
                className="hover:text-blue-500"
              >
                Education
              </button>
              <button
                onClick={() => moveTo("contact")}
                className="hover:text-blue-500"
              >
                Contact
              </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
              <div className="mobile-nav bg-white md:hidden px-4 pt-3 pb-4 space-y-2">
                <div className="mobile-content">
                  <button
                    onClick={() => moveTo("work")}
                    className="hover:text-blue-500"
                  >
                    Work
                  </button>
                  <button
                    onClick={() => moveTo("experience")}
                    className="hover:text-blue-500"
                  >
                    Experience
                  </button>
                  <button
                    onClick={() => moveTo("education")}
                    className="hover:text-blue-500"
                  >
                    Education
                  </button>
                  <button
                    onClick={() => moveTo("contact")}
                    className="hover:text-blue-500"
                  >
                    Contact
                  </button>
                  <button className="download-cv-btn">
                    <a
                      href="https://docs.google.com/document/d/1zCESeI2ttEfAnGz7MaV5qHME44tuMCy5KGYg5nhpbug/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                    >
                      Download CV
                    </a>
                  </button>
                </div>
              </div>
            )}
            <button className="download-cv-btn hidden md:flex">
              <a
                href="https://docs.google.com/document/d/1zCESeI2ttEfAnGz7MaV5qHME44tuMCy5KGYg5nhpbug/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Download CV
              </a>
            </button>
          </div>
        </nav>
      </header>

      <section id="home">
        <div className="max-w-4xl mx-auto py-20 px-10">
          <p className="text-2xl font-semibold">👋🏽 there!</p>
          <h1 className="text-[36px] font-bold">
            I'm Cyrus Besabella.
            <br />I build web applications and websites.
          </h1>
          <br />
          <div className="max-w-[500px]">
            <p className="text-gray-500">
              I'm a passionate self-taught software engineer with experience in
              modern web technologies such as React, Next.js, Vue, Nuxt 3 and
              Svelte.
            </p>
            <br />
            <p className="text-gray-500">
              I Also have practical experience with technologies such as Node.js
              (REST and GraphQL), Prisma and tools like VSCode and Android
              Studio.
            </p>
            <br />
            <p className="text-gray-500">
              I'm also a proud father of four, I love Japanese music, and
              currently exploring the exciting world of Web3.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="max-w-4xl mx-auto py-20 px-10 bg-white">
        <h2 className="text-3xl font-semibold mb-6">Work</h2>
        <div className="grid lg:grid-cols-[2fr_1fr] gap-4">
          <div>
            <img src="/projects/wip-user-management-system.jpg" alt="" />
          </div>
          <div>
            <h1 className="text-2xl mb-2 font-bold">User Management System</h1>
            <p className="text-gray-500">
              This is a Work-In-Progress User Management System using Vue JS
              Nuxt 3, Prisma ORM and PostgreSQL with TailWindCSS and Ant Design
              for the UI framework. <br />
              User creation (Create, Read, Update, Delete), Can assign Role to a
              user, Role based module, can export data to CSV
            </p>
            <br />
            <div className="flex justify-end">
              <span className="inline-flex space-x-2">
                <small className="text-gray-600">
                  <a href="https://youtu.be/7Wpp7gRqL1U" target="_blank">
                    <img
                      className="w-5 h-5"
                      src="/icons/yt.svg"
                      alt="YouTube"
                    />
                  </a>
                </small>
                <small className="text-gray-600">
                  <a
                    href="https://github.com/besabellacyrus/nuxt-prisma-postgres-docker"
                    target="_blank"
                  >
                    <img
                      className="w-5 h-5"
                      src="/icons/github-mark.svg"
                      alt="GitHub"
                    />
                  </a>
                </small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="max-w-4xl mx-auto py-20 px-10 bg-white"
      >
        <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
        <br />

        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div className="font-semibold">Oct 2022 - Present</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">
              We Move People & Things PH
            </h1>
            <ul className="list-disc text-gray-500">
              <li>
                Legacy Admin Panel - maintain and create new features using
                AngularJS with TypeScript (Backend Cloud function and Firebase)
              </li>
              <li>Minor UI task for Customer App using React Native.</li>
              <li>
                Admin Panel Revamp(ongoing project.) - create new features using
                React/NextJS with TypeScript.
              </li>
              <li>
                Inventory Selling System - Manage and maintain using
                RemixJS/Prisma and SQL
              </li>
            </ul>
            <span>
              <small className="text-gray-400">
                Angular, React, React Native, Next Js, Remix Js, Prisma, GCF,
                Firebase, AntDesign, Material Design, TailWindCSS
              </small>
            </span>
          </div>

          <div className="font-semibold">Oct 2020 - Aug 2024</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">
              Parlay Games, Freelance - Remote
            </h1>
            <ul className="list-disc text-gray-500">
              <li>
                Responsible for creating web-based casino games using React and
                PhaserJS, Slice and Optimize assets
              </li>
              <li>Convert PhaserJS and HTML5 games to React</li>
            </ul>
            <span>
              <small className="text-gray-400">
                Vue, Nuxt, SocketIO, Progressive Web App (PWA)
              </small>
            </span>
          </div>

          <div className="font-semibold">Oct 2020 - Jun 2021</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">Freelance - Remote</h1>
            <ul className="list-disc text-gray-500">
              <li>
                Delivery System using VueJS Nuxt (responsible for the frontend
                APP and socket io for app and server communication).
              </li>
            </ul>
            <span>
              <small className="text-gray-400">
                Vue, Nuxt, SocketIO, Progressive Web App (PWA)
              </small>
            </span>
          </div>

          <div className="font-semibold">Oct 2018 - 2020</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">FDM, Alabang</h1>
            <ul className="list-disc text-gray-500">
              <li>
                Responsible for Vue JS architecture/development and Websocket
                API implementation for web-based game development.
              </li>
              <li>
                Responsible for the Creation of a web application demo using
                (React JS)
              </li>
            </ul>
            <span>
              <small className="text-gray-400">
                React, SocketIO, WebSocket, Bootstrap, HTML5
              </small>
            </span>
          </div>

          <div className="font-semibold">Oct 2018 - 2019</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">Vervespire, Alabang</h1>
            <ul className="list-disc text-gray-500">
              <li>
                Responsible for the Backend API of the Lifeloop Android/IOS App
              </li>
              <li>
                Responsible for the API of the Emergency CMS and Responder App
              </li>
              <li>Using Node JS(Express, Mongoose) and Vue JS Framework</li>
              <li>Created Multiple WordPress websites</li>
            </ul>
            <span>
              <small className="text-gray-400">
                Vue, Svelte, Express, Mongoose, NoSQL, Node JS, WordPress,
                Bootstrap, GraphQL
              </small>
            </span>
          </div>

          <div className="font-semibold">Oct 2017 - 2018</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">
              Skubbs, Westgate Alabang
            </h1>
            <ul className="list-disc text-gray-500">
              <li>Mobile development (React Native, Ionic)</li>
              <li>API development (WordPress Headless REST API)</li>
            </ul>
            <span>
              <small className="text-gray-400">
                React, React Native, Ionic, WordPress
              </small>
            </span>
          </div>

          <div className="font-semibold">Jan 2015 - Oct 2017</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">Mobext PH</h1>
            <ul className="list-disc text-gray-500">
              <li>Social Media Integration. Manage/Plan database schemas.</li>
              <li>Create and maintain web services from scratch.</li>
              <li>Using CodeIgniter and recently used Laravel and VueJs.</li>
            </ul>
            <span>
              <small className="text-gray-400">
                CodeIgniter, Laravel, VueJS, PHP, Javascript, JQuery, Bootstrap,
                MySQL
              </small>
            </span>
          </div>

          <div className="font-semibold">Jan 2015 - Oct 2015</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">Gifts Tech Dasma</h1>
            <ul className="list-disc text-gray-500">
              <li>
                Create a Web Application and Website from scratch using
                CodeIgniter.
              </li>
              <li>Manage database schemas and servers for deployment.</li>
            </ul>
            <span>
              <small className="text-gray-400">
                CodeIgniter PHP, Bootstrap, Javascript, JQuery, Bootstrap, MySQL
              </small>
            </span>
          </div>

          <div className="font-semibold">Oct 2013 - Present</div>
          <div>
            <h1 className="text-[20px] font-bold mb-2">Freelance Work</h1>
            <ul className="list-disc text-gray-500">
              <li>Creating WordPress websites using Elementor</li>
              <li>Manage and maintain websites</li>
            </ul>
            <span>
              <small className="text-gray-400">
                Wordpress, PHP, Bootstrap, Javascript, JQuery, MySQL, XAMPP,
                cPanel
              </small>
            </span>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center mb-20">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
            alt="React"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
            alt="Next.js"
            className="w-12 h-12 bg-white rounded"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg"
            alt="Vue"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nuxtjs/nuxtjs-original.svg"
            alt="Nuxt"
            className="w-12 h-12"
          />

          <img
            src="/icons/remix-letter-light.svg"
            alt="Remix JS"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg"
            alt="Svelte"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
            alt="Node.js"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
            alt="Express"
            className="w-12 h-12 bg-white p-1 rounded"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg"
            alt="Prisma"
            className="w-12 h-12 bg-white p-1 rounded"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
            alt="PHP"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            className="w-12 h-12"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
            alt="Git"
            className="w-12 h-12"
          />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="Tailwind CSS"
            className="w-12 h-12"
          />

          <img
            src="/icons/gcf.svg"
            alt="Google Cloud Functions"
            className="w-12 h-12"
          />

          <img
            src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
            alt="Firebase"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
            alt="HTML"
            className="w-12 h-12"
          />

          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
            alt="CSS"
            className="w-12 h-12"
          />
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Education</h2>
          <div>
            <div>2005 - 2007</div>
            <div>
              <h1 className="font-semibold">AMA CLC - Dasmariñas </h1>
              <p>Computer System Network Technician</p>
            </div>
          </div>
          <br />
          <div>
            <div>2003 - 2005</div>
            <div>
              <h1 className="font-semibold">JSAT - Bacoor </h1>
              <p>Computer System Technology</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">Contact</h2>
          <p>
            Get in touch or shoot me an email directly on &nbsp;
            <a className="font-bold" href="mailto:besabellacyrus@gmail.com">
              besabellacyrus@gmail.com
            </a>
          </p>
        </div>
      </section>

      <footer className="text-center text-sm py-6 text-gray-500 bg-white">
        © 2025 Cyrus Besabella's Portfolio. All rights reserved.
        <br />
        <small>
          "I can do all things through Christ which strengtheneth me."
          -Philippians 4:13
        </small>
      </footer>
    </main>
  );
}

/* empty css                                 */
import { c as createComponent, a as createAstro, r as renderTemplate, b as renderSlot, d as renderHead, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderScript } from '../chunks/astro/server_BcEVJy7g.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">', '</head> <body class="font-sans"> ', ` <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"><\/script> <script>
      document.addEventListener('DOMContentLoaded', function() {
        AOS.init({
          duration: 800,
          once: true,
          disable: 'mobile'
        });
      });
    <\/script> </body> </html>`])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/muthuk/Downloads/project 3/src/layouts/Layout.astro", void 0);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between h-16"> <div class="flex items-center"> <a href="/" class="text-2xl font-bold text-primary">Sparrow Tech</a> </div> <div class="hidden md:flex items-center space-x-8"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="text-gray-700 hover:text-primary transition-colors"> ${item.name} </a>`)} </div> </div> </div> </nav>`;
}, "/Users/muthuk/Downloads/project 3/src/components/Navbar.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const team = [
    {
      name: "Vigneshvar S",
      role: "Chief Executive Officer",
      image: "/Vig.jpeg"
    },
    {
      name: "Siva Sankar G",
      role: "Chief Operating Officer",
      image: "/Siva.JPG"
    },
    {
      name: "Muthu K",
      role: "Chief Technology Officer",
      image: "/muthu.JPG"
    }
  ];
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies"
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android"
    },
    {
      title: "Enterprise Solutions",
      description: "Scalable software solutions tailored for business growth"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that delivers exceptional digital experiences"
    },
    {
      title: "AI-Based Solutions",
      description: "Intelligent automation and machine learning solutions for business optimization"
    },
    {
      title: "Cloud-Based Solutions",
      description: "Secure and scalable cloud infrastructure and deployment services"
    }
  ];
  const portfolio = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with inventory management and payment integration",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
      link: "https://thestorecicada.com"
    },
    {
      title: "Car Rental Website",
      description: "Modern car rental platform with booking management and vehicle tracking system",
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800",
      link: "http://180.235.121.245/carrento/"
    },
    {
      title: "Dental Clinic Portal",
      description: "Specialized patient management system for dental practices with treatment planning and billing",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
      link: "https://sreekanthdental-clinic.vercel.app"
    },
    {
      title: "Smart Inventory Management",
      description: "Real-time inventory tracking system with analytics and automated reordering capabilities",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive hospital management solution with patient records, billing, and pharmacy management",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "E-commerce Marketplace",
      description: "Multi-vendor marketplace platform with advanced features like real-time analytics and automated marketing",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      link: "https://godstate.in"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sparrow Tech - Software Solutions Company" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})}  ${maybeRenderHead()}<section class="min-h-screen flex items-center relative"> <div class="absolute inset-0 z-0"> <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" alt="Background" class="w-full h-full object-cover"> <div class="absolute inset-0 bg-black/60"></div> </div> <div class="max-w-7xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6" data-aos="fade-up">
Transforming Ideas into <span class="text-gray-200">Digital Solutions</span> </h1> <p class="text-xl text-gray-200 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
We create innovative software solutions that empower businesses to thrive in the digital age
</p> <a href="#contact" class="inline-block bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-lg transition-colors" data-aos="fade-up" data-aos-delay="200">
Get Started
</a> </div> </section>  <section id="about" class="bg-white section-padding"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">Leadership Team</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${team.map((member, index) => renderTemplate`<div class="text-center" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} class="w-48 h-48 object-cover rounded-full mx-auto mb-4 shadow-lg"> <h3 class="text-xl font-semibold">${member.name}</h3> <p class="text-gray-600">${member.role}</p> </div>`)} </div> </div> </section>  <section id="services" class="bg-gray-50 section-padding"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">Our Services</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${services.map((service, index) => renderTemplate`<div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> <h3 class="text-xl font-semibold mb-4">${service.title}</h3> <p class="text-gray-600">${service.description}</p> </div>`)} </div> </div> </section>  <section id="portfolio" class="bg-white section-padding"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">Our Work</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${portfolio.map((project, index) => renderTemplate`<div class="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow" data-aos="fade-up"${addAttribute(index * 100, "data-aos-delay")}> ${project.link ? renderTemplate`<a${addAttribute(project.link, "href")} target="_blank" rel="noopener noreferrer" class="block"> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full h-64 object-cover transform hover:scale-105 transition-transform"> <div class="p-6"> <h3 class="text-xl font-semibold mb-2 text-primary hover:text-secondary">${project.title}</h3> <p class="text-gray-600">${project.description}</p> </div> </a>` : renderTemplate`<div> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="w-full h-64 object-cover"> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${project.title}</h3> <p class="text-gray-600">${project.description}</p> </div> </div>`} </div>`)} </div> </div> </section>  <section id="contact" class="bg-gray-50 section-padding"> <div class="max-w-3xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-16" data-aos="fade-up">Get in Touch</h2> <div class="bg-white p-8 rounded-lg shadow-md" data-aos="fade-up"> <form id="contactForm" class="space-y-6"> <div> <label for="name" class="block text-sm font-medium text-gray-700">Name</label> <input type="text" id="name" name="name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"> </div> <div> <label for="message" class="block text-sm font-medium text-gray-700">Message</label> <textarea id="message" name="message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"></textarea> </div> <div id="formStatus" class="hidden"> <p class="text-center font-medium"></p> </div> <button type="submit" class="w-full bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors">
Send Message
</button> </form> </div> </div> </section>  <footer class="bg-primary text-white py-8"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h3 class="text-xl font-semibold mb-4">Sparrow Tech</h3> <p class="text-gray-300">3/31 Raja Street, Mandaveli, Chennai - 28</p> <a href="mailto:sparrowtechsoftwaresolutions@gmail.com" class="text-gray-300 hover:text-white transition-colors">
sparrowtechsoftwaresolutions@gmail.com
</a> <div class="mt-6 text-sm text-gray-400">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Sparrow Tech. All rights reserved.
</div> </div> </div> </footer> ` })} ${renderScript($$result, "/Users/muthuk/Downloads/project 3/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/muthuk/Downloads/project 3/src/pages/index.astro", void 0);

const $$file = "/Users/muthuk/Downloads/project 3/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

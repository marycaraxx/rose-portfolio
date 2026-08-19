import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({
  live,
  repo,
  showWebsite = true,
}: {
  live: string;
  repo?: string;
  showWebsite?: boolean;
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {showWebsite && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "codingducks",
    category: "Generative ID",
    title: "Generative ID",
    src: "/assets/projects-screenshots/codingducks/ID1.png",
    screenshots: ["ID1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.reactQuery,
        PROJECT_SKILLS.firebase,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://www.codingducks.xyz/",
    github: "https://github.com/marycaraxx/id-system.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Create professional employee IDs in just a few clicks. Simply enter the employee details, 
            and the system generates a ready-to-print ID—fast, simple, and hassle-free.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} showWebsite={false} />
          <TypographyH3 className="my-4 mt-8">Problems </TypographyH3>
          <p className="font-mono mb-2">
            Manual employee ID creation is time-consuming, repetitive, and prone to 
            errors, making it difficult to efficiently manage, update, and print employee IDs.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ID3.png`,
              `${BASE_PATH}/codingducks/ID2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">BATCH</TypographyH3>
          <p className="font-mono mb-2">
            Print smarter, not harder—generate and print multiple 
            employee IDs at once with easy batch printing.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/codingducks/ID4.png`,
              `${BASE_PATH}/codingducks/ID5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "couponluxury",
    category: "DTS",
    title: "DocTrack",
    src: "/assets/projects-screenshots/couponluxury/DTS SAMPLE.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://www.couponluxury.com/",
    github: "https://github.com/marycaraxx/Document-Tracking-System.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.chakra,
        PROJECT_SKILLS.vue,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            DocTrack = Employee Records + ID Generation + Smarter Management
          </TypographyP>
          <TypographyP className="font-mono ">
            What if managing employee information could be simpler, faster, and more organized? 
            DocTrack transforms employee information into organized, accessible, and ready-to-use digital 
            records—bringing employee management and ID generation together in one seamless platform.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} showWebsite={false} />
          <p className="font-mono mb-2 mt-4">
            As soon as you land, boom! You&apos;re greeted with the freshest
            coupons and top-tier deals that&apos;ll make your wallet happy.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/DTS SAMPLE.png`]} />
          <TypographyH3 className="my-4 ">Analytics</TypographyH3>
          <p className="font-mono mb-2">
            A centralized dashboard that transforms document data into clear insights, 
            helping users monitor activity, track status, and manage records efficiently.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/DTS SAMPLE.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">RECEIVED</TypographyH3>

          <p className="font-mono mb-2">
            A smart and organized space for managing incoming documents. The Received Document 
            section keeps every file properly recorded, easy to track, and ready for 
            quick access—turning document intake into a smooth, efficient, and paperless workflow.
          </p>
          <SlideShow images={[`${BASE_PATH}/couponluxury/RECEIVED.png`]} />
          <TypographyH3 className="my-4 mt-8">Track History</TypographyH3>
          <p className="font-mono mb-2">
            A quick view of your document’s journey—showing its past actions, updates, 
            and current progress in one place.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/TRACK1.png`,
              `${BASE_PATH}/couponluxury/TRACK2.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">UPDATE</TypographyH3>
          <p className="font-mono mb-2">
            Register and organize incoming physical and digital records in one 
            central system for easy tracking and access.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/couponluxury/UPDATE.png`,
            ]}
          />
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Travel",
    title: "Snap-Travel App",
    src: "/assets/projects-screenshots/the-booking-desk/SNAP1.png",
    screenshots: ["1.png"],
    live: "https://thebookingdesk.com/",
    github: "https://github.com/marycaraxx/ojt-tracker.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Plan less, explore more. Find your next destination, snap the 
            moment, and make every trip memorable—with everything you 
            need for a smoother, smarter, and more exciting journey.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} showWebsite={false} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest travel
            tips, deals, and must-visit spots around the globe.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/SNAP1.png`]} />
          <TypographyH3 className="my-4 mt-8">TRIPS</TypographyH3>
          <p className="font-mono mb-2">
            Find your next destination, capture the moment, and make every 
            trip memorable—from planning your itinerary to discovering new 
            places along the way.
          </p>
          <TypographyH3 className="my-4 mt-8">Gallery</TypographyH3>

          <p className="font-mono mb-2">
            Capture the moments, keep the memories, and relive every adventure.
          </p>

         <TypographyH3 className="my-4 mt-8">Map View</TypographyH3>

          <p className="font-mono mb-2">
            Map your path, discover new places, and make every journey count. 
            Explore exciting destinations, find hidden gems, plan your routes, 
            and keep track of the places you’ve visited—all in one interactive map.
          </p>

        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/PR1.png",
    screenshots: ["1.png"],
    live: "http://maryrose.vercel.app",
    github:"https://github.com/marycaraxx/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/PR1.png`,
              `${BASE_PATH}/portfolio/PR3.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/PR4.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "ghostchat",
    category: "Internship",
    title: "OJTify",
    src: "/assets/projects-screenshots/ghostchat/OJT1.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://ojt-tracker-eta.vercel.app/",
    github:"https://github.com/marycaraxx/ojt-tracker",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.next, PROJECT_SKILLS.chakra],
      backend: [PROJECT_SKILLS.supabase],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            OJTify is more than just an OJT tracker—it’s your digital companion throughout 
            your internship journey. Designed to simplify attendance, daily accomplishments, 
            tasks, and progress monitoring, OJTify keeps everything organized in one place.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ghostchat/OJT1.png`,
              `${BASE_PATH}/ghostchat/OJT2.png`,
              `${BASE_PATH}/ghostchat/OJT3.png`,
              `${BASE_PATH}/ghostchat/OJT4.png`,
              `${BASE_PATH}/ghostchat/OJT5.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "jra",
    category: "Result analyzer",
    title: "JNTUA Results Analyzer",
    src: "/assets/projects-screenshots/jra/1.png",
    screenshots: ["1.png"],
    live: "https://marycaraxx.github.io/JNTUA-result-analyser-spa/#/",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.vue],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.docker,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            JNTUA Results Analyzer was a revolutionary tool designed to simplify
            and enhance the experience of accessing academic results. It served
            as a powerful proxy between the JNTUA university results website and
            its users, offering a range of features that made result analysis
            faster and more efficient. Here&apos;s what made it stand out:
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/jra/1.png`]} />
          <TypographyH3 className="my-4 mt-8">
            Effortless Results Retrieval
          </TypographyH3>
          {/* Effortless Results Retrieval: */}
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Search all your results using a single roll number, eliminating
              the tedious task of sifting through thousands of rows on the
              official site.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Class-Wise Results:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              class-wise results effortlessly by entering a roll number range.
              No more manual searches or filtering.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Faculty Features:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Faculty members could download batch results in Excel format,
              making administrative tasks a breeze.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">
            Enhanced Data Insights:
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Each result came with additional features including:
              <ul className="list-disc font-mono ml-6">
                <li>
                  <strong>CGPA Calculations: </strong>Easily track your
                  cumulative grade point average.
                </li>
                <li>
                  <strong>Charts:</strong> Visualize your academic performance
                  with comprehensive charts.
                </li>
                <li>
                  <strong>Future Projections:</strong> Get insights into
                  potential future outcomes based on current performance.
                </li>
                <li>
                  <strong> Backlog Counts: </strong>Keep track of your backlog
                  subjects at a glance.
                </li>
              </ul>
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Performance:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              The application was significantly faster and more efficient than
              the official site, providing a smoother user experience.
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Downfall:</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Unfortunately, as of May 2022, the tool stopped working due to the
              introduction of CAPTCHA on the official JNTUA results site, which
              disrupted the seamless functionality of the app. JNTUA Results
              Analyzer transformed the way students and faculty interacted with
              academic results, making it a must-have tool until its unexpected
              shutdown.
            </li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;

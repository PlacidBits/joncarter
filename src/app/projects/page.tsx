import { type Metadata } from 'next'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Belle Tire',
    description: `An eCommerce site that serves as the face of a regional tire company. I recently lead a team that owned the entire stack. We had a lot of fun working on
    quite a few initiatives with our business partners.`,
    link: { href: 'https://belletire.com', label: 'belletire.com' },
  },
  {
    name: 'Placidbits',
    description: `My company's site! Currently undergoing a rebrand as well as a restructure, but still was a lot of fun to explore platform options with CMS providers.`,
    link: { href: 'https://www.placidbits.com', label: 'placidbits.com' },
  },
  {
    name: 'Placidbits.Console',
    description: `A publicly availavle nuget package for those who have a niche need to create a .NET console application with boilerplate taken care of. 
    Comes with dependency injection, parallel task runs, opinionated logging, data provision, and a simple extension setup.`,
    link: { href: 'https://github.com/PlacidBits/PlacidBits.Console', label: 'github.com' },
  },
  {
    name: 'API Wrapper',
    description: `A sample project to demonstrate how to abstract RESTful calls for ease-of-use for your internal team. Heavy use of OOP concepts.`,
    link: { href: 'https://github.com/PlacidBits/wrapping-api', label: 'github.com' },
  },
  {
    name: 'Discord Gecko Bot',
    description: `A fun toy app a friend asked me to build for his Discord server. If you want random facts about geckos to show up in a text channel, this is for you.`,
    link: { href: 'https://github.com/plasmarocker/discord-gecko-bot', label: 'github.com' },
  },
  {
    name: '.NET Prop Crawler',
    description: `Originally an internal code generation utility to turn domain objects into POCO DTOs for comms over-the-wire. It's been genericized for public use.`,
    link: { href: 'https://github.com/plasmarocker/net-prop-crawler', label: 'github.com' },
  },
  {
    name: 'Baby Shower Guestbook 2',
    description:
      'The previous one was such a hit, some more close friends asked for one of their own!?',
    link: { href: 'https://affectionate-ramanujan-916e6f.netlify.app/', label: 'netlify.com' },
  },
  {
    name: 'Baby Shower Guestbook 1',
    description:
      'A little guestbook site for some close friends who were expecting.',
    link: { href: 'https://affectionate-ramanujan-916e6f.netlify.app/', label: 'netlify.com' },
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I&apos;ve built during my software adventures (that I can share)',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I&apos;ve built during my software adventures (that I can share)"
      intro="I&apos;ve worked on tons of enterprise-level projcts over the years but these are public-facing projects that I&apos;m most proud of. When the code is available, please do take a look and contribute!"
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

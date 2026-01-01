'use client'

import HomeSectionTitle from '@/components/ui/HomeSectionTitle'
import styles from './TechStack.module.css'
import type {IconType} from 'react-icons'

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiAngular,
  SiNgrx,
  SiSpringboot,
  SiPostgresql,
  SiRuby,
  SiRubyonrails,
  SiNginx,
  SiNetlify,
  SiAmazons3,
  SiHeroku,
  SiGit,
  SiPostman,
  SiDbeaver,
  SiDocker,
  SiFigma,
} from 'react-icons/si'
import {TbTerminal2} from 'react-icons/tb'
import {FaJava} from 'react-icons/fa'
import {VscCode} from 'react-icons/vsc'

type TechRow = {
  name: string
  desc: string
  practice: string
  icon?: IconType
}

type TechGroup = {
  title: string
  rows: TechRow[]
}

const groups: TechGroup[] = [
  {
    title: 'Frontend',
    rows: [
      {
        name: 'HTML / CSS',
        icon: SiHtml5,
        desc: 'Strong focus on HTML semantics and component-scoped CSS, kept readable, maintainable, and easy to tweak over time.',
        practice: '4 years',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        desc: 'Used for application logic, user interactions, and API calls. Solid vanilla JS foundations, now mostly used through React and Angular.',
        practice: '3 years',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        desc: 'Used daily on Angular and Next.js projects to type data and make code safer, mostly with simple types and interfaces.',
        practice: '2 years',
      },
      {
        name: 'React',
        icon: SiReact,
        desc: 'Component-based UI development for websites and frontend apps. Comfortable with state management and UI logic, with attention to rendering and user experience.',
        practice: '4 years',
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        desc: 'Used to structure React projects with SSR and a performance / SEO-oriented approach.',
        practice: '1 year',
      },
      {
        name: 'Redux',
        icon: SiRedux,
        desc: 'Good understanding of global state management principles, with past hands-on experience (less used recently).',
        practice: '1 year',
      },
      {
        name: 'Angular',
        icon: SiAngular,
        desc: 'Used in a mentored project context: components, services, routing, and HTTP interceptors.',
        practice: '1 year',
      },
      {
        name: 'NgRx',
        icon: SiNgrx,
        desc: 'Redux-inspired state management used with Angular, understood and applied in real projects.',
        practice: '1 year',
      },
    ],
  },

  {
    title: 'Backend',
    rows: [
      {
        name: 'Java',
        icon: FaJava,
        desc: 'Backend language mainly used through Spring Boot. Solid OOP foundations and collections handling, with a pragmatic production-oriented approach.',
        practice: '2 years',
      },
      {
        name: 'Spring Boot',
        icon: SiSpringboot,
        desc: 'Framework used to build stable REST APIs with JPA, Spring Security, Maven dependency management, and a service-oriented architecture.',
        practice: '2 years',
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        desc: 'Relational database used to store and query data, including migrations and table relationships.',
        practice: '4 years',
      },
      {
        name: 'Ruby',
        icon: SiRuby,
        desc: 'First backend language I learned, used to understand OOP basics and write simple scripts and logic.',
        practice: '2 years',
      },
      {
        name: 'Ruby on Rails',
        icon: SiRubyonrails,
        desc: 'Backend framework used to quickly build APIs, handle authentication, databases, and CRUD operations.',
        practice: '2 years',
      },
    ],
  },

  {
    title: 'Deployment & hosting',
    rows: [
      {
        name: 'CI / CD (VPS + Nginx)',
        icon: SiNginx,
        desc: 'Simple pipeline to auto-deploy a Spring Boot backend on a VPS on Git push, with Nginx serving the application.',
        practice: '1 year',
      },
      {
        name: 'Netlify',
        icon: SiNetlify,
        desc: 'Platform used to deploy frontend projects to production, manage domains/subdomains, and handle redirects. My go-to frontend hosting.',
        practice: '4 years',
      },
      {
        name: 'AWS S3',
        icon: SiAmazons3,
        desc: 'Used to host static files (images, media) when the volume isn’t suitable for a Git repository.',
        practice: '2 years',
      },
      {
        name: 'Heroku',
        icon: SiHeroku,
        desc: 'Used in early backend projects to deploy quickly, manage environment variables, and schedule automated tasks.',
        practice: '2–3 years',
      },
    ],
  },

  {
    title: 'Tools & workflow',
    rows: [
      {
        name: 'Git (GitHub / GitLab)',
        icon: SiGit,
        desc: 'Used daily for version control. Comfortable with team workflows, conflict resolution, rebase, and squash.',
        practice: '4 years',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        desc: 'Used to test REST APIs, handle requests, headers, and auth tokens.',
        practice: '4 years',
      },
      {
        name: 'DBeaver',
        icon: SiDbeaver,
        desc: 'Used to inspect and debug PostgreSQL databases, both locally and in production.',
        practice: '2 years',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        desc: 'Used to quickly run local services (especially databases) via Docker Desktop. Basic knowledge of the Docker ecosystem.',
        practice: '1 year',
      },
      {
        name: 'Termius',
        icon: TbTerminal2,
        desc: 'SSH client used to access a VPS, manage server configuration, and monitor deployments.',
        practice: '1 year',
      },
      {
        name: 'Figma',
        icon: SiFigma,
        desc: 'Used to create mockups, wireframes, and visual supports for web projects.',
        practice: '2–3 years',
      },
      {
        name: 'IDE (VS Code / IntelliJ)',
        icon: VscCode,
        desc: 'Daily development environments for frontend and backend work.',
        practice: '4 years',
      },
    ],
  },
]

function isDividerRow(r: TechRow) {
  return r.name === '—' && r.desc === '—' && r.practice === '—'
}

export default function TechStackEn() {
  return (
    <section className={styles.section} id="stack" aria-labelledby="stack-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="stack-title">
            <HomeSectionTitle title="Technologies" />
          </div>

          <p className={styles.lead}>
            A simple inventory: <strong>tech</strong>, <strong>what I think about it</strong>, and{' '}
            <strong>my hands-on experience</strong>.
          </p>
        </header>

        <div className={styles.groups}>
          {groups.map((g) => (
            <section className={styles.group} key={g.title} aria-label={g.title}>
              <h3 className={styles.groupTitle}>{g.title}</h3>

              <div className={styles.card}>
                <table className={styles.table}>
                  <thead className={styles.thead}>
                    <tr>
                      <th className={styles.thTech} scope="col">
                        Tech
                      </th>
                      <th className={styles.thDesc} scope="col">
                        Description
                      </th>
                      <th className={styles.thPractice} scope="col">
                        Experience
                      </th>
                    </tr>
                  </thead>

                  <tbody className={styles.tbody}>
                    {g.rows.map((r) =>
                      isDividerRow(r) ? (
                        <tr key={`${g.title}-divider`} className={styles.dividerRow}>
                          <td colSpan={3}>
                            <div className={styles.divider} aria-hidden="true" />
                          </td>
                        </tr>
                      ) : (
                        <tr key={`${g.title}-${r.name}`} className={styles.tr}>
                          <td className={styles.tdTech}>
                            <span className={styles.techCell}>
                              {r.icon ? (
                                <span className={styles.techIcon} aria-hidden="true">
                                  {(() => {
                                    const I = r.icon!
                                    return <I />
                                  })()}
                                </span>
                              ) : null}

                              <span className={styles.techName}>{r.name}</span>
                            </span>
                          </td>

                          <td className={styles.tdDesc}>
                            <p className={styles.desc}>{r.desc}</p>
                          </td>

                          <td className={styles.tdPractice}>
                            <span className={styles.practice}>{r.practice}</span>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}

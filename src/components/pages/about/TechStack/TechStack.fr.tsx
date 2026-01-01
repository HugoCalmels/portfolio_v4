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
        desc: 'Attention portée à la sémantique HTML et à un CSS par composant, pensé pour rester lisible, maintenable et facile à modifier dans le temps.',
        practice: '4 ans',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        desc: 'Utilisé pour la logique applicative, les interactions utilisateur et les appels API. Solides bases en JavaScript vanilla, aujourd’hui principalement utilisé via React et Angular.',
        practice: '3 ans',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        desc: 'Utilisé au quotidien sur des projets Angular et Next.js pour typer les données et sécuriser le code, principalement avec des types et interfaces simples.',
        practice: '2 ans',
      },
      {
        name: 'React',
        icon: SiReact,
        desc: 'Développement d’interfaces en composants pour des sites et applications frontend. À l’aise avec la gestion d’état et la logique UI, avec une attention particulière portée au rendu et à l’expérience utilisateur.',
        practice: '4 ans',
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        desc: 'Utilisé pour structurer des projets React avec un cadre clair, du SSR et une approche orientée performance et SEO.',
        practice: '1 an',
      },
      {
        name: 'Redux',
        icon: SiRedux,
        desc: 'Compréhension des principes de gestion d’état global, avec une expérience pratique passée mais peu utilisée récemment.',
        practice: '1 an',
      },
      {
        name: 'Angular',
        icon: SiAngular,
        desc: 'Utilisé dans un contexte de projet encadré, avec composants, services, routing et mise en place d’intercepteurs HTTP.',
        practice: '1 an',
      },
      {
        name: 'NgRx',
        icon: SiNgrx,
        desc: 'Gestion d’état inspirée de Redux utilisée avec Angular, comprise dans ses concepts et utilisée dans des projets concrets.',
        practice: '1 an',
      },
    ],
  },
  {
    title: 'Backend',
    rows: [
      {
        name: 'Java',
        icon: FaJava,
        desc: 'Langage backend utilisé principalement via Spring Boot. Solides bases en programmation orientée objet et en manipulation de collections, avec une approche pragmatique orientée production.',
        practice: '2 ans',
      },
      {
        name: 'Spring Boot',
        icon: SiSpringboot,
        desc: 'Framework utilisé pour développer des API REST stables, avec JPA, Spring Security, gestion des dépendances via Maven et une architecture orientée services.',
        practice: '2 ans',
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        desc: 'Base de données relationnelle utilisée pour stocker et interroger des données, avec gestion des migrations et des relations entre tables.',
        practice: '4 ans',
      },
      {
        name: 'Ruby',
        icon: SiRuby,
        desc: 'Premier langage backend appris, utilisé pour comprendre les bases de la programmation orientée objet et écrire des scripts et logiques simples.',
        practice: '2 ans',
      },
      {
        name: 'Ruby on Rails',
        icon: SiRubyonrails,
        desc: 'Framework backend utilisé pour créer rapidement des API, gérer l’authentification, les bases de données et les opérations CRUD.',
        practice: '2 ans',
      },
    ],
  },
  {
    title: 'Déploiement & hébergement',
    rows: [
      {
        name: 'CI / CD (VPS + Nginx)',
        icon: SiNginx,
        desc: 'Mise en place d’une pipeline simple permettant de déployer automatiquement une application backend Spring Boot sur un VPS lors d’un push Git, avec Nginx pour servir l’application.',
        practice: '1 an',
      },
      {
        name: 'Netlify',
        icon: SiNetlify,
        desc: 'Plateforme utilisée pour déployer des projets frontend en production, gérer les domaines, les sous-domaines et les redirections. Utilisée comme solution principale pour le frontend.',
        practice: '4 ans',
      },
      {
        name: 'AWS S3',
        icon: SiAmazons3,
        desc: 'Utilisé pour héberger des fichiers statiques (images, médias) lorsque le volume n’est pas adapté à un dépôt Git.',
        practice: '2 ans',
      },
      {
        name: 'Heroku',
        icon: SiHeroku,
        desc: 'Plateforme utilisée lors des premiers projets backend pour déployer rapidement des applications, gérer les variables d’environnement et planifier des tâches automatisées.',
        practice: '2–3 ans',
      },
    ],
  },
  {
    title: 'Outils & workflow',
    rows: [
      {
        name: 'Git (GitHub / GitLab)',
        icon: SiGit,
        desc: 'Utilisé quotidiennement pour le versionnement du code. À l’aise avec les workflows en équipe, la gestion des conflits, le rebase et le squash.',
        practice: '4 ans',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        desc: 'Utilisé pour tester des API REST, gérer les requêtes, les headers et les tokens d’authentification.',
        practice: '4 ans',
      },
      {
        name: 'DBeaver',
        icon: SiDbeaver,
        desc: 'Outil utilisé pour inspecter et déboguer des bases de données PostgreSQL, en local et en production.',
        practice: '2 ans',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        desc: 'Utilisé pour lancer rapidement des services en local, notamment des bases de données, via Docker Desktop. Connaissances de base de l’écosystème Docker.',
        practice: '1 an',
      },
      {
        name: 'Termius',
        icon: TbTerminal2,
        desc: 'Client SSH utilisé pour accéder à un VPS, gérer la configuration serveur et superviser les déploiements.',
        practice: '1 an',
      },
      {
        name: 'Figma',
        icon: SiFigma,
        desc: 'Utilisé pour créer des maquettes, wireframes et supports visuels pour des projets web.',
        practice: '2–3 ans',
      },
      {
        name: 'IDE (VS Code / IntelliJ)',
        icon: VscCode,
        desc: 'Environnements de développement utilisés au quotidien pour le frontend et le backend.',
        practice: '4 ans',
      },
    ],
  },
]

function isDividerRow(r: TechRow) {
  return r.name === '—' && r.desc === '—' && r.practice === '—'
}

export default function TechStackFr() {
  return (
    <section className={styles.section} id="stack" aria-labelledby="stack-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div id="stack-title">
            <HomeSectionTitle title="Technologies" />
          </div>

          <p className={styles.lead}>
            Un inventaire tech simple.
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
                        Pratique
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

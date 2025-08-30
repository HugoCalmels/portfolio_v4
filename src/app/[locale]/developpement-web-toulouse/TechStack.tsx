'use client';
import { FaJava } from "react-icons/fa6";
import styles from './TechStack.module.css';
import { FiCode } from 'react-icons/fi';
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiAngular, SiNextdotjs, SiVite, SiRedux, SiNgrx, SiFigma,
   SiRuby, SiSpringboot, SiRubyonrails, SiHibernate, SiPostman,
  SiPostgresql,
  SiStripe, SiGoogle,
  SiGithub, SiGitlab,
  SiNetlify, SiLinux,
} from 'react-icons/si';
import FadeIn from "@/components/common/FadeIn";


const Fallback = FiCode;

export default function TechStack() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Technologies</h2>

      <div className={styles.container}>


      {/* FRONTEND */}
      <div className={styles.group}>
        <h3 className={styles.subtitle}>Frontend</h3>
        
          <FadeIn>
        <div className={styles.subgroup}>
          <h4 className={styles.subsubtitle}>- Languages</h4>
          <div className={styles.grid}>
            <div className={styles.item}><SiHtml5 className={styles.icon} /><span>Html</span></div>
            <div className={styles.item}><SiCss3 className={styles.icon} /><span>CSS</span></div>
            <div className={styles.item}><SiJavascript className={styles.icon} /><span>JavaScript</span></div>
            <div className={styles.item}><SiTypescript className={styles.icon} /><span>TypeScript</span></div>
          </div>
        </div>
          </FadeIn>
  <FadeIn>
        <div className={styles.subgroup}>
          <h4 className={styles.subsubtitle}>- Frameworks</h4>
          <div className={styles.grid}>
            <div className={styles.item}><SiReact className={styles.icon} /><span>React</span></div>
            <div className={styles.item}><SiAngular className={styles.icon} /><span>Angular</span></div>
            <div className={styles.item}><SiNextdotjs className={styles.icon} /><span>Next.js</span></div>
            <div className={styles.item}><SiVite className={styles.icon} /><span>Vite.js</span></div>
          </div>
        </div>
          </FadeIn>
  <FadeIn>
        <div className={styles.subgroup}>
          <h4 className={styles.subsubtitle}>- Librairies</h4>
          <div className={styles.grid}>
            <div className={styles.item}><SiRedux className={styles.icon} /><span>Redux</span></div>
            <div className={styles.item}><SiNgrx className={styles.icon} /><span>NgRx</span></div>
          </div>
        </div>
          </FadeIn>
  <FadeIn>
        <div className={styles.subgroup}>
          <h4 className={styles.subsubtitle}>- Outils</h4>
          <div className={styles.grid}>
            <div className={styles.item}><SiFigma className={styles.icon} /><span>Figma</span></div>
          </div>
            </div>
                  </FadeIn>
      </div>

     
      {/* BACKEND */}
      <div className={styles.group}>
          <h3 className={styles.subtitle}>Backend</h3>
        
    <FadeIn>
        <div className={styles.subgroup}>
          <h4 className={styles.subsubtitle}>- Languages</h4>
          <div className={styles.grid}>
            <div className={styles.item}><FaJava className={styles.icon} /><span>Java</span></div>
            <div className={styles.item}><SiRuby className={styles.icon} /><span>Ruby</span></div>
          </div>
          </div>
          </FadeIn>
  <FadeIn>
        <div className={styles.subgroup}>
          <h4 className={styles.subsubtitle}>- Frameworks</h4>
          <div className={styles.grid}>
            <div className={styles.item}><SiSpringboot className={styles.icon} /><span>SpringBoot</span></div>
            <div className={styles.item}><SiRubyonrails className={styles.icon} /><span>Ruby on Rails</span></div>
          </div>
          </div>
          </FadeIn>
  <FadeIn>
        <div className={styles.subgroup}>
          <h4 className={styles.subsubtitle}>- Librairies</h4>
          <div className={styles.grid}>
            <div className={styles.item}><SiSpringboot className={styles.icon} /><span>SpringBoot Security</span></div>
            <div className={styles.item}><SiHibernate className={styles.icon} /><span>SpringBoot JPA</span></div>
            
          </div>
          </div>
          </FadeIn>
  <FadeIn>
        <div className={styles.subgroup}>
          <h4 className={styles.subsubtitle}>- Outils</h4>
          <div className={styles.grid}>
            <div className={styles.item}><Fallback className={styles.icon} /><span>Dbeaver</span></div>
            <div className={styles.item}><SiPostman className={styles.icon} /><span>Postman</span></div>
        
          </div>
          </div>
                </FadeIn>
        </div>

        <FadeIn>
      {/* AUTRES BLOCS */}
      <div className={styles.group}>
        <h3 className={styles.subtitle}>Bases de données</h3>
        <div className={styles.grid}>
          <div className={styles.item}><SiPostgresql className={styles.icon} /><span>Postgresql</span></div>
        </div>
        </div>
</FadeIn>
              <FadeIn>
      <div className={styles.group}>
        <h3 className={styles.subtitle}>Intégrations</h3>
        <div className={styles.grid}>
          <div className={styles.item}><SiStripe className={styles.icon} /><span>Stripe API</span></div>
          <div className={styles.item}><SiGoogle className={styles.icon} /><span>Google API</span></div>
        </div>
      </div>
      </FadeIn>
              <FadeIn>
      <div className={styles.group}>
        <h3 className={styles.subtitle}>Versionning (Git)</h3>
        <div className={styles.grid}>
          <div className={styles.item}><SiGithub className={styles.icon} /><span>Github</span></div>
          <div className={styles.item}><SiGitlab className={styles.icon} /><span>Gitlab</span></div>
        </div>
          </div>
  </FadeIn>
           <FadeIn>
      <div className={styles.group}>
        <h3 className={styles.subtitle}>Déploiement</h3>
        <div className={styles.grid}>
          <div className={styles.item}><Fallback className={styles.icon} /><span>CI-CD</span></div>
          <div className={styles.item}><SiLinux className={styles.icon} /><span>VPS</span></div>
          <div className={styles.item}><SiNetlify className={styles.icon} /><span>Netlify</span></div>
          </div>
    
          </div>
        </FadeIn>
      </div>
          
    </section>
  );
}

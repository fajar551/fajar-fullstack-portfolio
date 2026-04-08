import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  SiAngular,
  SiDocker,
  SiFlutter,
  SiGithub,
  SiLaravel,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiRedis,
  SiReact,
  SiSpringboot,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

function IconWrap({ children, label }: { children: ReactNode; label: string }) {
  return (
    <li className="tech-icon-cell" title={label}>
      <span className="tech-icon-slot">{children}</span>
      <span className="tech-icon-label">{label}</span>
    </li>
  );
}

function BrandIcon({ icon: Icon, color }: { icon: IconType; color: string }) {
  return <Icon className="tech-svg" style={{ color }} aria-hidden />;
}

function TechIconSet() {
  return (
    <>
      <IconWrap label="PHP">
        <BrandIcon icon={SiPhp} color="#777BB4" />
      </IconWrap>
      <IconWrap label="TypeScript">
        <BrandIcon icon={SiTypescript} color="#3178C6" />
      </IconWrap>
      <IconWrap label="React">
        <BrandIcon icon={SiReact} color="#61DAFB" />
      </IconWrap>
      <IconWrap label="React Native">
        <BrandIcon icon={SiReact} color="#61DAFB" />
      </IconWrap>
      <IconWrap label="Next.js">
        <BrandIcon icon={SiNextdotjs} color="#111111" />
      </IconWrap>
      <IconWrap label="Laravel">
        <BrandIcon icon={SiLaravel} color="#FF2D20" />
      </IconWrap>
      <IconWrap label="Angular">
        <BrandIcon icon={SiAngular} color="#DD0031" />
      </IconWrap>
      <IconWrap label="Node.js">
        <BrandIcon icon={SiNodedotjs} color="#5FA04E" />
      </IconWrap>
      <IconWrap label="NestJS">
        <BrandIcon icon={SiNestjs} color="#E0234E" />
      </IconWrap>
      <IconWrap label="Spring Boot">
        <BrandIcon icon={SiSpringboot} color="#6DB33F" />
      </IconWrap>
      <IconWrap label="Flutter">
        <BrandIcon icon={SiFlutter} color="#02569B" />
      </IconWrap>
      <IconWrap label="Docker">
        <BrandIcon icon={SiDocker} color="#2496ED" />
      </IconWrap>
      <IconWrap label="PostgreSQL">
        <BrandIcon icon={SiPostgresql} color="#4169E1" />
      </IconWrap>
      <IconWrap label="MySQL">
        <BrandIcon icon={SiMysql} color="#4479A1" />
      </IconWrap>
      <IconWrap label="Redis">
        <BrandIcon icon={SiRedis} color="#DC382D" />
      </IconWrap>
      <IconWrap label="FCM">
        <BrandIcon icon={SiFirebase} color="#FFCA28" />
      </IconWrap>
      <IconWrap label="OpenAI">
        <BrandIcon icon={SiOpenai} color="#10A37F" />
      </IconWrap>
      <IconWrap label="GitHub">
        <BrandIcon icon={SiGithub} color="#181717" />
      </IconWrap>
    </>
  );
}

export default function TechMarquee() {
  return (
    <div className="tech-marquee" role="presentation">
      <div className="tech-marquee__track">
        <ul className="tech-marquee__row">
          <TechIconSet />
        </ul>
        <ul className="tech-marquee__row" aria-hidden>
          <TechIconSet />
        </ul>
      </div>
    </div>
  );
}

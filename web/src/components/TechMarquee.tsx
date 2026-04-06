import type { ReactNode } from "react";

function IconWrap({ children, label }: { children: ReactNode; label: string }) {
  return (
    <li className="tech-icon-cell" title={label}>
      <span className="tech-icon-slot">{children}</span>
      <span className="tech-icon-label">{label}</span>
    </li>
  );
}

function TechIconSet() {
  return (
    <>
      <IconWrap label="JavaScript">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#F7DF1E" />
          <path
            fill="#0b0f1a"
            d="M14.09 18.87c.55.9 1.26 1.56 2.52 1.56 1.33 0 2.18-.67 2.18-1.6 0-1.1-.87-1.48-2.33-2.12l-.4-.17c-2.31-.98-3.84-2.2-3.84-4.78 0-2.38 1.81-4.19 4.64-4.19 2.01 0 3.46.78 4.5 2.83l-2.46 1.58c-.54-.96-.92-1.34-1.64-1.34-.75 0-1.22.47-1.22 1.1 0 .77.48 1.08 1.59 1.56l.4.17c2.72 1.17 4.25 2.36 4.25 5.04 0 2.86-2.25 4.42-5.27 4.42-2.95 0-4.59-1.41-5.47-3.25l2.55-1.5zm-8.75.13h3.12c1.85 0 2.94-1.33 2.94-3.25 0-2.2-1.1-3.23-2.94-3.23H5.34V19zM8.17 4.5H5.34v3.48H8c1.7 0 2.64-.99 2.64-2.75C10.64 5.45 9.72 4.5 8.17 4.5z"
          />
        </svg>
      </IconWrap>
      <IconWrap label="TypeScript">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#3178c6" />
          <path fill="#fff" d="M4.5 12.5h3v7h1.5v-7h3V11h-7.5v1.5zm11.2 3.2c0-2.1 1.1-3.4 2.9-3.4 1 0 1.8.45 2.2 1.2l-1.2.7c-.25-.45-.7-.7-1.2-.7-.9 0-1.5.65-1.5 1.8v3.7h-1.4v-3.3z" />
        </svg>
      </IconWrap>
      <IconWrap label="React">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <circle cx="12" cy="12" r="2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="11"
            ry="4.2"
            fill="none"
            stroke="#61DAFB"
            strokeWidth="1.2"
            transform="rotate(-60 12 12)"
          />
        </svg>
      </IconWrap>
      <IconWrap label="Next.js">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#0b0f1a" />
          <path fill="#f4f7ff" d="M6 7.5h2.2L14 14V7.5h2V16.5h-2.1L8 10v6.5H6V7.5z" />
        </svg>
      </IconWrap>
      <IconWrap label="Laravel">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#FF2D20" />
          <path
            fill="#fff"
            d="M7.2 8.1l1.5.3c0 .45-.15.75-.45 1-.35.35-.85.55-1.55.6v1.4c2.2-.15 3.45-1.1 3.45-2.85 0-1.25-.55-2-2.15-2.55l1.55-.35c1.35.55 2.5 1.55 2.5 3.7 0 2.55-1.85 4.05-4.35 4.2V8.1zm5.9 1.1c1.05-.05 2 .25 2.7.85.75.65 1.1 1.55 1.05 2.65-.05 1.85-1.35 2.95-3.55 3.05V8.2l3.45-.85v1.55l-1.8.45v6.55c2.7-.35 4.1-1.7 4.15-4.35.05-2.25-1.15-3.6-3.3-3.85l-1.45-.35c-.85-.25-1.2-.55-1.2-1.05 0-.6.45-.85 1.25-.9l1.5.35v1.55l-1.1-.25c-.25 0-.35.1-.35.25 0 .15.1.2.3.25l.15.05z"
          />
        </svg>
      </IconWrap>
      <IconWrap label="Angular">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <polygon points="12,2 21,6.5 19,18.5 12,22 5,18.5 3,6.5" fill="#DD0031" />
          <polygon points="12,5 17.5,17 15.4,17 14.3,14 9.7,14 8.6,17 6.5,17" fill="#fff" />
        </svg>
      </IconWrap>
      <IconWrap label="Node.js">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#3C873A" />
          <path
            fill="#fff"
            d="M12 4.5L6.5 7.4v6.8l1.4.8v-6l4.1-2.4 4.1 2.4v5.2c0 .2-.1.4-.3.5l-3.8 2.2c-.2.1-.4.1-.6 0L7.7 16.9c-.2-.1-.3-.3-.3-.5V14l-1.4-.8v3.7c0 .5.3 1 .8 1.2l4.9 2.8c.25.15.55.15.8 0l4.9-2.8c.5-.3.8-.7.8-1.2V7.4L12 4.5z"
          />
        </svg>
      </IconWrap>
      <IconWrap label="NestJS">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#E0234E" />
          <path
            fill="#fff"
            d="M12 6.5l5.2 3v5l-5.2 3-5.2-3v-5L12 6.5zm0 1.7L8.4 10.3v3.4L12 16l3.6-2.3v-3.4L12 8.2z"
          />
        </svg>
      </IconWrap>
      <IconWrap label="Spring">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#6DB33F" />
          <path
            fill="#fff"
            d="M8.5 7c2.2 1.2 3.8 3.4 4.5 5.8-.6-2.8-2-5.5-4.5-7.3-1.2 1.5-2 3.4-2.2 5.4.5-1.8 1.3-3.5 2.2-3.9zm7 2.5c-.3 2.3-1.4 4.4-3 6 1.9-1.2 3.4-3.2 3.8-5.5-.9.4-1.7.5-2.5-.5-.3-.5-.9-.9-1.5-1.2.6.3 1.1.7 1.2 1.2z"
          />
        </svg>
      </IconWrap>
      <IconWrap label="Flutter">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#02569B" />
          <path fill="#54C5F8" d="M7 8.5L14.5 16H11L7 11.8V8.5zm7.5 0L17 11l-2.2 2.2L12 10.5l2.5-2z" />
        </svg>
      </IconWrap>
      <IconWrap label="Docker">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#0db7ed" />
          <path
            fill="#fff"
            d="M8 10h2v2H8v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h2v2H8v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3-3h2v2h-2v-2zM6 14c0 2 1.5 3.5 4 3.5h6v-2H15c-.5 0-1-.4-1-1V8H6v6z"
          />
        </svg>
      </IconWrap>
      <IconWrap label="PostgreSQL">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#336791" />
          <path
            fill="#fff"
            d="M9 7c2 0 3.5 1.2 4 3.1.2-.1.5-.1.7-.1 1.2 0 2.2.8 2.5 2 .3-.3.8-.5 1.3-.5 1 0 1.8.8 1.8 1.8 0 .9-.6 1.5-1.4 1.7v.4c0 2.2-1.8 4-4 4H9c-2.5 0-4.5-2-4.5-4.5V11.5C4.5 9 6.5 7 9 7z"
          />
        </svg>
      </IconWrap>
      <IconWrap label="MySQL">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#00758F" />
          <path
            fill="#fff"
            d="M7 17c1-2.5 3-4 5.5-4 .8 0 1.5.2 2.2.4-.9-1.8-2.8-3-4.9-3C8 10.5 6 12.3 6 14.5c0 1 .4 1.9 1 2.5z"
          />
        </svg>
      </IconWrap>
      <IconWrap label="Redis">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#D82C20" />
          <ellipse cx="12" cy="9" rx="7" ry="3" fill="#fff" opacity=".9" />
          <path fill="#fff" opacity=".7" d="M5 9v4c0 1.5 3 2.5 7 2.5s7-1 7-2.5V9" />
        </svg>
      </IconWrap>
      <IconWrap label="Firebase">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#0f1419" />
          <path fill="#FFCA28" d="M6.5 16l4.2-11 3.2 7.2L17.5 8 12.4 20 6.5 16z" />
        </svg>
      </IconWrap>
      <IconWrap label="OpenAI">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#10a37f" />
          <path fill="#fff" d="M8 9.5c1.8-1 4-.3 5 1.4l-1.2.7c-.6-1-1.8-1.5-2.9-1-.9.5-1.4 1.4-1.4 2.4v4h-1.5v-4.5c0-1.1.5-2.2 1.5-2.8zm8 1c.9.5 1.5 1.6 1.5 2.8V16H16v-4c0-.6-.3-1.2-.9-1.5-.9-.5-2 .1-2.3 1l-1.2-.7c.5-1.2 2-1.8 3.2-1.2z" />
        </svg>
      </IconWrap>
      <IconWrap label="Git">
        <svg viewBox="0 0 24 24" aria-hidden className="tech-svg">
          <rect width="24" height="24" rx="5" fill="#F05032" />
          <path
            fill="#fff"
            d="M12 5.5L7 10.5l1.1 1.1 1.4-1.4v4.6l-1.4 1.4L12 18.5l3.9-3.9-1.4-1.4v-4.6l1.4 1.4L17 10.5l-5-5z"
          />
        </svg>
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

import { ShaderBackground } from "@/components/shader-background"
import { GrainOverlay } from "@/components/grain-overlay"
import { CustomCursor } from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white grid place-items-center p-8 relative overflow-hidden custom-cursor">
      <ShaderBackground
        colorA="#080808"
        colorB="#0a0a0a"
        baseColor="#1a1a1a"
        upColor="#0d0d0d"
        downColor="#050505"
        leftColor="#080808"
        rightColor="#060606"
        intensity={0.8}
        overlayOpacity={0.2}
      />

      <GrainOverlay />

      <CustomCursor />

      <div className="flex flex-col items-center justify-center gap-16 relative z-10">
        <div className="text-2xl md:text-3xl font-serif text-center h-16">cueva.io</div>

        {/* Main Text with Glitch Effect */}
        <h1
          className="text-5xl md:text-7xl font-serif text-center text-balance glitch-text"
          data-text="Making something people want."
        >
          Making something people want.
        </h1>

        <nav className="flex items-end gap-6 h-16">
          <a
            href="https://github.com/cuevaio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="GitHub"
          >
            <svg role="img" viewBox="0 0 97.6 96" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
              <title>GitHub Invertocat</title>
              <path
                fill="currentColor"
                d="M48.9,0C21.8,0,0,22,0,49.2C0,71,14,89.4,33.4,95.9c2.4,0.5,3.3-1.1,3.3-2.4c0-1.1-0.1-5.1-0.1-9.1  c-13.6,2.9-16.4-5.9-16.4-5.9c-2.2-5.7-5.4-7.2-5.4-7.2c-4.4-3,0.3-3,0.3-3c4.9,0.3,7.5,5.1,7.5,5.1c4.4,7.5,11.4,5.4,14.2,4.1  c0.4-3.2,1.7-5.4,3.1-6.6c-10.8-1.1-22.2-5.4-22.2-24.3c0-5.4,1.9-9.8,5-13.2c-0.5-1.2-2.2-6.3,0.5-13c0,0,4.1-1.3,13.4,5.1  c3.9-1.1,8.1-1.6,12.2-1.6s8.3,0.6,12.2,1.6c9.3-6.4,13.4-5.1,13.4-5.1c2.7,6.8,1,11.8,0.5,13c3.2,3.4,5,7.8,5,13.2  c0,18.9-11.4,23.1-22.3,24.3c1.8,1.5,3.3,4.5,3.3,9.1c0,6.6-0.1,11.9-0.1,13.5c0,1.3,0.9,2.9,3.3,2.4C83.6,89.4,97.6,71,97.6,49.2  C97.7,22,75.8,0,48.9,0z"
              ></path>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/cuevaio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 382 382" fill="currentColor" className="w-4 h-4" aria-label="LinkedIn">
              <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472L341.91,330.654L341.91,330.654z"></path>
            </svg>
          </a>
          <a
            href="https://x.com/cueva_io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 1200 1227"
              className="w-4 h-4"
            >
              <title>Twitter Logo</title>
              <path
                fill="currentColor"
                d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://instagram.com/cueva.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="Instagram"
          >
            <svg viewBox="28 28 200 200" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M160,128a32,32,0,1,1-32-32A32.03667,32.03667,0,0,1,160,128Zm68-44v88a56.06353,56.06353,0,0,1-56,56H84a56.06353,56.06353,0,0,1-56-56V84A56.06353,56.06353,0,0,1,84,28h88A56.06353,56.06353,0,0,1,228,84Zm-52,44a48,48,0,1,0-48,48A48.05436,48.05436,0,0,0,176,128Zm16-52a12,12,0,1,0-12,12A12,12,0,0,0,192,76Z"></path>
            </svg>
          </a>
          <a href="mailto:hi@cueva.io" className="text-white hover:text-gray-300 transition-colors" aria-label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            </svg>
          </a>
        </nav>
      </div>
    </main>
  )
}

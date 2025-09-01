import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

  title: 'Zenith Club',
  description:
    'This is the main page for the Zenith Club. A premier event management club.',
  themeColor: '#00ff9d',
  openGraph: {
    title: 'Zenith | Event Management Club',
    description:
      'A flagship student-run club for event management and creative production.',
  },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" class="scroll-smooth"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zenith | Event Management Club</title>
    <meta name="description" content="Zenith — a flagship student-run club for event management and creative production. Join to collaborate, learn, and create.">
    <meta name="theme-color" content="#00ff9d">
    <meta property="og:title" content="Zenith | Event Management Club">
    <meta property="og:description" content="A flagship student-run club for event management and creative production.">
    <!-- Tailwind CSS CDN -->
    <script src="./Zenith _ Event Management Club_files/saved_resource"></script><!--UIPATH_EXTENSION_ID: conkfbpnllelocpogdmbilgmnkabjfmf-->
    <script>
        // Tailwind runtime config for custom theme extensions
        tailwind.config = {
            theme: {
                extend: {
                    container: { center: true, padding: '1rem' },
                    colors: {
                        accent: '#00ff9d',
                    },
                    boxShadow: {
                        'neon': '0 0 0 1px rgba(0,255,157,0.35), 0 0 30px 2px rgba(0,255,157,0.15)'
                    },
                    keyframes: {
                        'float': { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
                    },
                    animation: {
                        float: 'float 5s ease-in-out infinite',
                    }
                }
            }
        }
    </script>
    <!-- Google Fonts: Fira Code (for the terminal look) -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link href="./Zenith _ Event Management Club_files/css2" rel="stylesheet">

    <!-- Custom Styles -->
    <style>
        :root { --accent: #00ff9d; }
        body {
            font-family: 'Fira Code', monospace;
            /* Enhanced background with radial gradients and a grid pattern */
            background: radial-gradient(1200px 800px at 10% 10%, rgba(0,255,157,0.07), transparent 60%),
                        radial-gradient(1000px 600px at 90% 10%, rgba(0,200,255,0.06), transparent 60%),
                        #0a0a0a;
            color: #f0f0f0;
            background-image:
                linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
            background-size: 24px 24px, 24px 24px;
            background-attachment: fixed;
        }
        /* Accent color helpers */
        .text-accent { color: var(--accent); }
        .border-accent { border-color: var(--accent); }
        .bg-accent { background-color: var(--accent); }
        
        /* Glass morphism surface effect */
        .glass { backdrop-filter: blur(10px); background-color: rgba(255,255,255,0.03); }

        /* Typing cursor effect */
        .type-cursor::after { content: '_'; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }

        /* Scroll reveal animation */
        .reveal { opacity: 0; transform: translateY(26px) scale(.98); transition: opacity .7s ease, transform .7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0) scale(1); }

        /* Fancy gradient border utility */
        .gradient-border { position: relative; }
        .gradient-border::before {
            content: '';
            position: absolute; inset: 0;
            padding: 1px; border-radius: 12px; /* Controls border thickness and radius */
            background: linear-gradient(135deg, rgba(0,255,157,.6), rgba(0,160,255,.35));
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor; mask-composite: exclude;
            pointer-events: none; /* Allows hover on the element itself */
        }
        
        /* Particle container styling */
        .particles-canvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        #particles-container { z-index: 1; }
        #interactive-particles-container { z-index: 2; }


        /* Reduced motion consideration for accessibility */
        @media (prefers-reduced-motion: reduce) {
            .reveal, .animate-float { animation: none !important; transition: none !important; }
        }
    </style>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }/* ! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com */*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::after,::before{--tw-content:''}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}.container{width:100%;margin-right:auto;margin-left:auto;padding-right:1rem;padding-left:1rem}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.-inset-1{inset:-0.25rem}.-bottom-6{bottom:-1.5rem}.-left-6{left:-1.5rem}.-right-6{right:-1.5rem}.-top-6{top:-1.5rem}.bottom-6{bottom:1.5rem}.left-0{left:0px}.right-0{right:0px}.right-6{right:1.5rem}.top-0{top:0px}.top-full{top:100%}.z-10{z-index:10}.z-50{z-index:50}.z-\[60\]{z-index:60}.m-auto{margin:auto}.mx-auto{margin-left:auto;margin-right:auto}.mb-12{margin-bottom:3rem}.mb-2{margin-bottom:0.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-8{margin-bottom:2rem}.mt-10{margin-top:2.5rem}.mt-14{margin-top:3.5rem}.mt-2{margin-top:0.5rem}.mt-4{margin-top:1rem}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.hidden{display:none}.h-1{height:0.25rem}.h-10{height:2.5rem}.h-2{height:0.5rem}.h-24{height:6rem}.h-full{height:100%}.min-h-screen{min-height:100vh}.w-0{width:0px}.w-10{width:2.5rem}.w-2{width:0.5rem}.w-24{width:6rem}.w-full{width:100%}.min-w-\[96px\]{min-width:96px}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-xl{max-width:36rem}.flex-shrink-0{flex-shrink:0}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}.animate-float{animation:float 5s ease-in-out infinite}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite}.grid-cols-1{grid-template-columns:repeat(1, minmax(0, 1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:0.25rem}.gap-2{gap:0.5rem}.gap-4{gap:1rem}.gap-5{gap:1.25rem}.gap-8{gap:2rem}.space-y-4 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-y-6 > :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.scroll-smooth{scroll-behavior:smooth}.rounded{border-radius:0.25rem}.rounded-2xl{border-radius:1rem}.rounded-\[11px\]{border-radius:11px}.rounded-full{border-radius:9999px}.rounded-md{border-radius:0.375rem}.rounded-xl{border-radius:0.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-dashed{border-style:dashed}.border-neutral-700{--tw-border-opacity:1;border-color:rgb(64 64 64 / var(--tw-border-opacity, 1))}.border-neutral-800{--tw-border-opacity:1;border-color:rgb(38 38 38 / var(--tw-border-opacity, 1))}.border-neutral-800\/70{border-color:rgb(38 38 38 / 0.7)}.border-white\/10{border-color:rgb(255 255 255 / 0.1)}.bg-accent{--tw-bg-opacity:1;background-color:rgb(0 255 157 / var(--tw-bg-opacity, 1))}.bg-accent\/10{background-color:rgb(0 255 157 / 0.1)}.bg-black\/90{background-color:rgb(0 0 0 / 0.9)}.bg-cyan-400\/10{background-color:rgb(34 211 238 / 0.1)}.bg-gray-400{--tw-bg-opacity:1;background-color:rgb(156 163 175 / var(--tw-bg-opacity, 1))}.bg-white\/5{background-color:rgb(255 255 255 / 0.05)}.bg-gradient-to-r{background-image:linear-gradient(to right, var(--tw-gradient-stops))}.from-accent\/10{--tw-gradient-from:rgb(0 255 157 / 0.1) var(--tw-gradient-from-position);--tw-gradient-to:rgb(0 255 157 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.from-white{--tw-gradient-from:#fff var(--tw-gradient-from-position);--tw-gradient-to:rgb(255 255 255 / 0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to)}.via-white{--tw-gradient-to:rgb(255 255 255 / 0)  var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), #fff var(--tw-gradient-via-position), var(--tw-gradient-to)}.to-transparent{--tw-gradient-to:transparent var(--tw-gradient-to-position)}.to-accent{--tw-gradient-to:#00ff9d var(--tw-gradient-to-position)}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.p-1{padding:0.25rem}.p-10{padding:2.5rem}.p-6{padding:1.5rem}.p-\[1px\]{padding:1px}.px-3{padding-left:0.75rem;padding-right:0.75rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:0.25rem;padding-bottom:0.25rem}.py-16{padding-top:4rem;padding-bottom:4rem}.py-2{padding-top:0.5rem;padding-bottom:0.5rem}.py-20{padding-top:5rem;padding-bottom:5rem}.py-3{padding-top:0.75rem;padding-bottom:0.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.py-8{padding-top:2rem;padding-bottom:2rem}.pb-16{padding-bottom:4rem}.pb-20{padding-bottom:5rem}.pt-16{padding-top:4rem}.pt-24{padding-top:6rem}.text-left{text-align:left}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-\[13px\]{font-size:13px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:0.875rem;line-height:1.25rem}.text-xs{font-size:0.75rem;line-height:1rem}.font-bold{font-weight:700}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-\[1\.1\]{line-height:1.1}.leading-relaxed{line-height:1.625}.tracking-widest{letter-spacing:0.1em}.text-accent{--tw-text-opacity:1;color:rgb(0 255 157 / var(--tw-text-opacity, 1))}.text-black{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219 / var(--tw-text-opacity, 1))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity, 1))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128 / var(--tw-text-opacity, 1))}.text-neutral-300{--tw-text-opacity:1;color:rgb(212 212 212 / var(--tw-text-opacity, 1))}.text-neutral-700{--tw-text-opacity:1;color:rgb(64 64 64 / var(--tw-text-opacity, 1))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.text-transparent{color:transparent}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.shadow-neon{--tw-shadow:0 0 0 1px rgba(0,255,157,0.35), 0 0 30px 2px rgba(0,255,157,0.15);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color), 0 0 30px 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.blur-2xl{--tw-blur:blur(40px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-sm{--tw-blur:blur(4px);filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.backdrop-blur-lg{--tw-backdrop-blur:blur(16px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-colors{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.duration-300{transition-duration:300ms}.selection\:bg-accent *::selection{--tw-bg-opacity:1;background-color:rgb(0 255 157 / var(--tw-bg-opacity, 1))}.selection\:text-black *::selection{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.selection\:bg-accent::selection{--tw-bg-opacity:1;background-color:rgb(0 255 157 / var(--tw-bg-opacity, 1))}.selection\:text-black::selection{--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity, 1))}.hover\:-translate-y-2:hover{--tw-translate-y:-0.5rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\:border-accent:hover{--tw-border-opacity:1;border-color:rgb(0 255 157 / var(--tw-border-opacity, 1))}.hover\:text-accent:hover{--tw-text-opacity:1;color:rgb(0 255 157 / var(--tw-text-opacity, 1))}.hover\:opacity-90:hover{opacity:0.9}.focus\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus-visible\:ring-2:focus-visible{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)}.focus-visible\:ring-accent\/60:focus-visible{--tw-ring-color:rgb(0 255 157 / 0.6)}.group:hover .group-hover\:scale-105{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@media (min-width: 640px){.sm\:flex-row{flex-direction:row}.sm\:text-right{text-align:right}}@media (min-width: 768px){.md\:flex{display:flex}.md\:hidden{display:none}.md\:grid-cols-2{grid-template-columns:repeat(2, minmax(0, 1fr))}.md\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\:text-6xl{font-size:3.75rem;line-height:1}.md\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\:text-sm{font-size:0.875rem;line-height:1.25rem}.md\:text-xl{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\:grid-cols-3{grid-template-columns:repeat(3, minmax(0, 1fr))}.lg\:text-7xl{font-size:4.5rem;line-height:1}}</style></head>
<body class="antialiased selection:bg-accent selection:text-black" cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  )
}



  

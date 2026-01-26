import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s infinite",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100ch",
            color: "var(--tw-prose-body)",
            '[class~="lead"]': {
              color: "var(--tw-prose-lead)",
            },
            a: {
              color: "var(--tw-prose-links)",
              textDecoration: "underline",
              fontWeight: "500",
            },
            strong: {
              color: "var(--tw-prose-bold)",
              fontWeight: "600",
            },
            "a strong": {
              color: "inherit",
            },
            "blockquote strong": {
              color: "inherit",
            },
            "thead th strong": {
              color: "inherit",
            },
            ol: {
              listStyleType: "decimal",
            },
            'ol[type="A"]': {
              listStyleType: "upper-alpha",
            },
            'ol[type="a"]': {
              listStyleType: "lower-alpha",
            },
            'ol[type="A" s]': {
              listStyleType: "upper-alpha",
            },
            'ol[type="a" s]': {
              listStyleType: "lower-alpha",
            },
            'ol[type="I"]': {
              listStyleType: "upper-roman",
            },
            'ol[type="i"]': {
              listStyleType: "lower-roman",
            },
            'ol[type="I" s]': {
              listStyleType: "upper-roman",
            },
            'ol[type="i" s]': {
              listStyleType: "lower-roman",
            },
            'ol[type="1"]': {
              listStyleType: "decimal",
            },
            ul: {
              listStyleType: "disc",
            },
            "ol > li::marker": {
              fontWeight: "400",
              color: "var(--tw-prose-counters)",
            },
            "ul > li::marker": {
              color: "var(--tw-prose-bullets)",
            },
            hr: {
              borderColor: "var(--tw-prose-hr)",
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: "var(--tw-prose-quotes)",
              borderLeftWidth: "0.25rem",
              borderLeftColor: "var(--tw-prose-quote-borders)",
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            "blockquote p:first-of-type::before": {
              content: "open-quote",
            },
            "blockquote p:last-of-type::after": {
              content: "close-quote",
            },
            h1: {
              color: "var(--tw-prose-headings)",
              fontWeight: "800",
            },
            "h1 strong": {
              fontWeight: "900",
              color: "inherit",
            },
            h2: {
              color: "var(--tw-prose-headings)",
              fontWeight: "700",
            },
            "h2 strong": {
              fontWeight: "800",
              color: "inherit",
            },
            h3: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
            },
            "h3 strong": {
              fontWeight: "700",
              color: "inherit",
            },
            h4: {
              color: "var(--tw-prose-headings)",
              fontWeight: "600",
            },
            "h4 strong": {
              fontWeight: "700",
              color: "inherit",
            },
            img: {
              maxWidth: "100%",
            },
            // Optimize for mobile
            "@media (max-width: 640px)": {
              fontSize: "0.875rem",
              lineHeight: "1.5rem",
              p: {
                marginTop: "1em",
                marginBottom: "1em",
              },
              '[class~="lead"]': {
                fontSize: "1rem",
                lineHeight: "1.5rem",
                marginTop: "1em",
                marginBottom: "1em",
              },
              blockquote: {
                marginTop: "1.25em",
                marginBottom: "1.25em",
                paddingLeft: "1em",
              },
              h1: {
                fontSize: "1.875rem",
                lineHeight: "2.25rem",
                marginTop: "0",
                marginBottom: "1rem",
              },
              h2: {
                fontSize: "1.5rem",
                lineHeight: "2rem",
                marginTop: "1.5em",
                marginBottom: "0.5em",
              },
              h3: {
                fontSize: "1.25rem",
                lineHeight: "1.75rem",
                marginTop: "1.5em",
                marginBottom: "0.5em",
              },
              h4: {
                fontSize: "1.125rem",
                lineHeight: "1.5rem",
                marginTop: "1.5em",
                marginBottom: "0.5em",
              },
              img: {
                marginTop: "1.5em",
                marginBottom: "1.5em",
              },
              video: {
                marginTop: "1.5em",
                marginBottom: "1.5em",
              },
              figure: {
                marginTop: "1.5em",
                marginBottom: "1.5em",
              },
              "figure > *": {
                marginTop: "0",
                marginBottom: "0",
              },
              "figure figcaption": {
                fontSize: "0.75rem",
                lineHeight: "1rem",
                marginTop: "0.5em",
              },
              pre: {
                fontSize: "0.75rem",
                lineHeight: "1rem",
                marginTop: "1.25em",
                marginBottom: "1.25em",
                borderRadius: "0.375rem",
                paddingTop: "0.75em",
                paddingRight: "1em",
                paddingBottom: "0.75em",
                paddingLeft: "1em",
              },
              ol: {
                marginTop: "1em",
                marginBottom: "1em",
                paddingLeft: "1.5em",
              },
              ul: {
                marginTop: "1em",
                marginBottom: "1em",
                paddingLeft: "1.5em",
              },
              li: {
                marginTop: "0.25em",
                marginBottom: "0.25em",
              },
              "ol > li": {
                paddingLeft: "0.25em",
              },
              "ul > li": {
                paddingLeft: "0.25em",
              },
              "> ul > li p": {
                marginTop: "0.5em",
                marginBottom: "0.5em",
              },
              "> ul > li > *:first-child": {
                marginTop: "1em",
              },
              "> ul > li > *:last-child": {
                marginBottom: "1em",
              },
              "> ol > li > *:first-child": {
                marginTop: "1em",
              },
              "> ol > li > *:last-child": {
                marginBottom: "1em",
              },
              "ul ul, ul ol, ol ul, ol ol": {
                marginTop: "0.5em",
                marginBottom: "0.5em",
              },
              hr: {
                marginTop: "2em",
                marginBottom: "2em",
              },
              "hr + *": {
                marginTop: "0",
              },
              "h2 + *": {
                marginTop: "0",
              },
              "h3 + *": {
                marginTop: "0",
              },
              "h4 + *": {
                marginTop: "0",
              },
            },
          },
        },
      },
      screens: {
        xs: "375px",
        "3xl": "1600px",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config


export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Beyode Technologies',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Software Development and Consulting.We are proven experts in
        web development shipping web applications and APIs using modern
        technologies."
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://beyode.co.ke/logo.png'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Beyode Technologies'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Beyode Technologies'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'twitter:site',
        property: 'twitter:site',
        content: '@Gathukumose'
      },
      {
        hid: 'twiter:card',
        property: 'og:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: 'https://beyode.co.ke/card-image.png'
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: "Software Development and Consulting.We are proven experts in
        web development shipping web applications and APIs using modern
        technologies."
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Beyode Technologies'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Beyode Technologies'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://beyode.co.ke/card-image.png'
      },

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],

    script: [
      {
        src: 'https://cdn.splitbee.io/sb.js',
        async: true
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-shades-of-purple.css'
      }
    }
  },

  generate: {
    fallback: true
  }

}

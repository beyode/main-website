<template id="">
  <div>
    <div class="flex justify-between px-12 py-12">
      <div>
        <img class="h-12 w-auto" src="../../assets/img/logo.png" alt="" />
      </div>
      <div >
        <router-link to="/">
         <button class="text-gray-500 leading-tight hover:bg-gray-200 rounded-lg p-2">

             <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-narrow-left w-6 h-6"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>

           Home
         </button>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <h2 class="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
        {{article.title}}
      </h2>
      <span class="text-gray-700">A simple mpesa package for laravel PHP framework</span>
    </div>
    <hr class="bg-gray-200 my-3">
    <div class="grid grid-col grid-cols-4 gap-6  py-8 px-6">
      <div class="hidden md:block cols-span-1  ml-6 pt-8">
        <div class="flex flex-col justify-start">
          <span v-for="toc in article.toc" class="font-bold text-gray-700">{{toc.text}}</span>
        </div>
      </div>
      <div class="col-span-4 md:col-span-3 mr-6 markdown">
        <!-- <router-view/> -->
        <nuxt-content :document="article" />

      </div>
    </div>

  </div>
</template>

<script>
export default{
  async asyncData({ $content, params }) {
      const article = await $content('mpesa/home').fetch()

     return { article }
    //this.article = article
  },
  data(){
    return {
      BASE_URL: 'https:://beyode.co.ke/images/'
    }
  },
  head() {
  return {
    title: 'Laravel mpesa',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'A simple mpesa package for laravel framework'
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
      }
    ]
  }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    // imgPath(name){
    //   return require('~/content/posts/images/' + name)
    // }
  }
}
</script>
<style>

/* Additional vertical padding used by kbd tag. */
.py-05 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}

.nuxt-content {
  @apply text-gray-900 leading-normal break-words;
}

.nuxt-content > * + * {
  @apply mt-0 mb-4;
}

.nuxt-content li + li {
  @apply mt-1;
}

.nuxt-content li > p + p {
  @apply mt-6;
}

.nuxt-content strong {
  @apply font-semibold;
}

.nuxt-content a {
  @apply text-blue-600 font-semibold;
}

.nuxt-content strong a {
  @apply font-bold;
}

.nuxt-content h1 {
  @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2;
}

.nuxt-content h2 {
  @apply leading-tight border-b text-2xl font-semibold mb-4 mt-6 pb-2;
}

.nuxt-content h3 {
  @apply leading-snug text-lg font-semibold mb-4 mt-6;
}

.nuxt-content h4 {
  @apply leading-none text-base font-semibold mb-4 mt-6;
}

.nuxt-content h5 {
  @apply leading-tight text-sm font-semibold mb-4 mt-6;
}

.nuxt-content h6 {
  @apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6;
}

.nuxt-content blockquote {
  @apply text-base border-l-4 border-green-300 bg-gray-100 pl-4 pr-4 text-gray-600 py-3;
}

.nuxt-content code {
  @apply font-mono text-sm inline bg-gray-300 rounded px-1 py-05;
}

.nuxt-content pre {
  /* @apply bg-gray-100 rounded p-4 my-3 overflow-scroll; */
}

.nuxt-content pre code {
  @apply block bg-transparent font-mono p-0 overflow-visible rounded-none;
}

.nuxt-content ul {
  @apply text-base pl-8 list-disc;
}

.nuxt-content ol {
  @apply text-base pl-8 list-decimal;
}

.nuxt-content kbd {
  @apply text-xs inline-block rounded border px-1 py-05 align-middle font-normal font-mono shadow;
}

.nuxt-content table {
  @apply text-base border-gray-600;
}

.nuxt-content th {
  @apply border py-1 px-3;
}

.nuxt-content td {
  @apply border py-1 px-3;
}

/* Override pygments style background color. */
.nuxt-content .highlight pre {
  @apply bg-gray-100 !important;
}

</style>

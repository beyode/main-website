<template id="">
  <div>
    <div class="flex justify-between px-12 py-12">
      <div>
        <!-- <img class="h-12 w-auto" src="../assets/img/logo.png" alt="" /> -->
      </div>
      <div >
        <router-link to="/blogs">
         <button class="text-gray-500 leading-tight hover:bg-gray-200 rounded-lg p-2">

             <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-narrow-left w-6 h-6"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>

           Back to Blogs
         </button>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <span class="text-gray-500 text-sm"> {{formatDate(article.createdAt)}} </span>
      <h2 class="text-4xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
        {{article.title}}
      </h2>
    </div>
    <hr class="bg-gray-200 my-3">
    <div class="grid grid-col grid-cols-3 gap-6  py-8 px-6">
      <div class="hidden md:block cols-span-1 text-center">
        <div class="flex justify-center">
          <span>
            <!-- <img class="h-8 w-auto rounded-full" src="../assets/img/authors/musah.jpeg" alt=""> -->
          </span>
          <span class="font-bold text-gray-700 ml-2">{{article.author}}</span>
        </div>
      </div>
      <div class="col-span-3 md:col-span-2 markdown">
        <!-- <router-view/> -->
        <nuxt-content :document="article" />

      </div>
    </div>

  </div>
</template>

<script>
export default{
  async asyncData({ $content, params }) {
      const article = await $content('posts', params.slug).fetch()

      return { article }
    },

    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      }

    }
}
</script>
<style>

</style>

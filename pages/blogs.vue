<template id="">
<div>
<div x-data="{ open: false }" class="relative bg-gray-900 overflow-hidden">
<div class="max-w-screen-xl mx-auto ">
  <div class="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
    <div class="pt-6 px-4 sm:px-6 lg:px-8">
      <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#">
              <img class="h-8 w-auto sm:h-10" src="../assets/img/logo.png" alt="" />
            </a>
            <div class="-mr-2 flex items-center md:hidden">
              <button @click="open = true" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="hidden md:block md:ml-3 md:pr-4">
          <router-link to="/"  class="font-medium text-gray-500 hover:text-white focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out">Home</router-link>
          <router-link to="/services"  class="ml-4 font-medium text-gray-500 hover:text-white focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out">Services</router-link>
          <router-link to="/work"  class="ml-4 font-medium text-gray-500 hover:text-white focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out">Our work</router-link>
          <router-link to="/blogs"  class="ml-4 font-medium text-gray-500 hover:text-white focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out">Blogs</router-link>
          <router-link to="/hire-us"  class="ml-4 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out bg-white rounded-lg px-3 py-3">Hire Us</router-link>
        </div>
      </nav>
    </div>

    <div v-show="open" x-transition:enter="duration-150 ease-out" x-transition:enter-start="opacity-0 scale-95" x-transition:enter-end="opacity-100 scale-100" x-transition:leave="duration-100 ease-in" x-transition:leave-start="opacity-100 scale-100" x-transition:leave-end="opacity-0 scale-95" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
      <div class="rounded-lg shadow-md">
        <div class="rounded-lg bg-white shadow-xs overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img class="h-8 w-auto" src="../assets/img/logo.png" alt="" />
            </div>
            <div class="-mr-2">
              <button @click="open = false" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <router-link to="/"  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Home</router-link>
            <!-- <router-link to="/about"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-900 focus:bg-gray-50 transition duration-150 ease-in-out">About</router-link> -->
            <router-link to="/services"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Services</router-link>
            <router-link to="/work"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Our work</router-link>
            <router-link to="/blogs"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Blogs</router-link>
          </div>
          <div>
            <router-link to="/hire-us" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out bg-white">
              Hire us
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div class="sm:text-center lg:text-left">
        <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
          Blogs
        </h2>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          We design, build and maintain web applications using modern technologies.
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <router-link to="/hire-us" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Have a project?
            </router-link>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <router-link to="/hire-us" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Hire Us
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
<div class="lg:absolute md:w-full lg:inset-y-0 lg:right-0 lg:w-1/2 items-center bg-gray-900">
  <img class="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full" src="../assets/img/016.png" alt="" />
</div>
</div>

<!-- Our blogs -->
<blog-entries :blogs="blogs"/>
<!-- end -->


<div class="bg-gray-100">
  <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br />
      <span class="text-indigo-600">Lets start your project today.</span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <div class="inline-flex rounded-md shadow">
        <router-link to="/hire-us" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Hire us
        </router-link>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <router-link to="/services" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Learn more
        </router-link>
      </div>
    </div>
  </div>
</div>

<Footer/>


</div>
</template>

<script>
  export default{
    async asyncData({ $content, params }) {
        const blogs = await $content('posts').only(['title','id','category','description','author','cover_image']).fetch()

        return { blogs }
    },
    components:{
    },
    data(){
      return {
        open: false,
      }
    }

  }
</script>

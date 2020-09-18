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
              <img class="h-8 w-auto sm:h-10" src="../assets/img/logo.png" alt=""/>
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
            <router-link to="/contact"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Services</router-link>
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
          Web Development
          <br class="xl:hidden" />
          <span class="text-indigo-600">and consulting</span>
        </h2>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          We are proven experts in web developments shipping web applications and APIs using modern technologies.
          As Engineers we don't just execute but loves what we do. Let's know what kind of problem or project you have
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <router-link to="/hire-us" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Have a project?
            </router-link>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <router-link to="/services" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Our services
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg>
  </div>
</div>
<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
  <!-- <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" /> -->
  <video  autoplay class="h-full w-full object-cover" loop playinline="">
    <source src="https://res.cloudinary.com/kennah/video/upload/c_scale,w_800/v1584707269/portfolio/anime_6_m7b4ed.mp4" type="video/mp4">
  </video>
</div>
</div>
<testimony></testimony>
<technologies></technologies>
<Footer/>
</div>
</template>

// <script>
//   import Testimony from './Testimony'
//   import Technologies from './Technologies'
//   export default{
//     components:{
//       Testimony,
//       Technologies
//     },
//     data(){
//       return {
//         open: false
//       }
//     }
//
//   }
// </script>

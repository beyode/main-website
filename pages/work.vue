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
            <router-link to="/hire-us"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-900 focus:bg-gray-50 transition duration-150 ease-in-out">Hire us</router-link>
            <router-link to="/blogs"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-900 focus:bg-gray-50 transition duration-150 ease-in-out">Blogs</router-link>
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
          Our work

        </h2>
        <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          We are proven experts in web developments shipping web applications and APIs using modern technologies
        </p>
        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div class="rounded-md shadow">
            <router-link to="/hire-us" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Have a project?
            </router-link>
          </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
            <router-link to="/hire-us" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Hire us
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="50,0 100,0 50,100 0,100" />
    </svg> -->
  </div>
</div>
<div class="lg:absolute md:w-full lg:inset-y-0 lg:right-0 lg:w-1/2 items-center bg-gray-900">
  <!-- <img class="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" /> -->

<svg class=" ml-12 w-full h-full object-cover" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" /><g class="code block" stroke-linecap="round" stroke-width="5"><g class="code line" stroke="#959da5"><path d="M47.5 50h10M62.5 50h30M102.5 50h15M127.5 50h5M142.5 50h30M182.5 50h30"/></g><g class="code line"><path stroke="currentColor" d="M47.5 60h15"/><path stroke="#d1d5da" d="M67.5 60h5"/><path stroke="#ffab70" d="M82.5 60h15M107.5 60h25M142.5 60h55"/><path stroke="#d1d5da" d="M207.5 60h5"/><path stroke="#f97583" d="M217.5 60h0M227.5 60h15"/></g><g class="code line"><path stroke="#79b8ff" d="M62.5 80h15"/><path stroke="#ffab70" d="M87.5 80h40"/><path stroke="#f97583" d="M132.5 80h0"/></g><path stroke="#f97583" d="M47.5 90h25"/><g class="code line"><path stroke="#79b8ff" d="M62.5 100h15"/><path stroke="#ffab70" d="M87.5 100h10M107.5 100h35"/><path stroke="#f97583" d="M147.5 100h0"/></g><path stroke="#f97583" d="M47.5 110h15"/><g class="code line" stroke="#959da5"><path d="M47.5 130h10M62.5 130h20M92.5 130h10M112.5 130h0M122.5 130h15M147.5 130h35M192.5 130h15"/></g><g class="code line" stroke="#959da5"><path d="M47.5 140h10M62.5 140h35M107.5 140h10M127.5 140h15"/></g><g class="code line"><path stroke="#f97583" d="M47.5 150h15"/><path stroke="#d1d5da" d="M67.5 150h5"/><path stroke="#ffab70" d="M82.5 150h15M107.5 150h25M142.5 150h50M202.5 150h50"/><path stroke="#d1d5da" d="M262.5 150h5"/><path stroke="#f97583" d="M272.5 150h0M282.5 150h15"/></g><g class="code line"><path stroke="#79b8ff" d="M62.5 170h15"/><path stroke="#ffab70" d="M87.5 170h50M147.5 170h10M167.5 170h35"/><path stroke="#f97583" d="M207.5 170h0"/></g><path stroke="#f97583" d="M47.5 180h25"/><g class="code line"><path stroke="#79b8ff" d="M62.5 190h15"/><path stroke="#ffab70" d="M87.5 190h10M107.5 190h30M147.5 190h5M162.5 190h50"/><path stroke="#f97583" d="M217.5 190h0"/></g><path stroke="#f97583" d="M47.5 200h15"/><g class="code line" stroke="#959da5"><path d="M47.5 220h10M62.5 220h30M102.5 220h15M127.5 220h5M142.5 220h30M182.5 220h30"/></g><g class="code line"><path stroke="#f97583" d="M47.5 230h15"/><path stroke="#d1d5da" d="M67.5 230h5"/><path stroke="#ffab70" d="M82.5 230h15M107.5 230h25M142.5 230h55"/><path stroke="#d1d5da" d="M207.5 230h5"/><path stroke="#f97583" d="M217.5 230h0M227.5 230h15"/></g><g class="code line"><path stroke="#79b8ff" d="M62.5 250h15"/><path stroke="#ffab70" d="M87.5 250h40"/><path stroke="#f97583" d="M132.5 250h0"/></g><path stroke="#f97583" d="M47.5 260h25"/><g class="code line"><path stroke="#79b8ff" d="M62.5 270h15"/><path stroke="#ffab70" d="M87.5 270h10M107.5 270h35"/><path stroke="#f97583" d="M147.5 270h0"/></g><path stroke="#f97583" d="M47.5 280h15"/><g class="code line" stroke="#959da5"><path d="M47.5 300h10M62.5 300h20M92.5 300h10M112.5 300h0M122.5 300h15M147.5 300h35M192.5 300h15"/></g><g class="code line" stroke="#959da5"><path d="M47.5 310h10M62.5 310h35M107.5 310h10M127.5 310h15"/></g><g class="code line"><path stroke="#f97583" d="M47.5 320h15"/><path stroke="#d1d5da" d="M67.5 320h5"/><path stroke="#ffab70" d="M82.5 320h15M107.5 320h25M142.5 320h50M202.5 320h50"/><path stroke="#d1d5da" d="M262.5 320h5"/><path stroke="#f97583" d="M272.5 320h0M282.5 320h15"/></g><g class="code line"><path stroke="#79b8ff" d="M62.5 340h15"/><path stroke="#ffab70" d="M87.5 340h50M147.5 340h10M167.5 340h35"/><path stroke="#f97583" d="M207.5 340h0"/></g><path stroke="#f97583" d="M47.5 350h25"/><g class="code line"><path stroke="#79b8ff" d="M62.5 360h15"/><path stroke="#ffab70" d="M87.5 360h10M107.5 360h30M147.5 360h5M162.5 360h50"/><path stroke="#f97583" d="M217.5 360h0"/></g><path stroke="#f97583" d="M47.5 370h15"/><g class="code line" stroke="#959da5"><path d="M47.5 380h10M62.5 380h30M102.5 380h15M127.5 380h5M142.5 380h30M182.5 380h30"/></g><g class="code line"><path stroke="#f97583" d="M47.5 390h15"/><path stroke="#d1d5da" d="M67.5 390h5"/><path stroke="#ffab70" d="M82.5 390h15M107.5 390h25M142.5 390h55"/><path stroke="#d1d5da" d="M207.5 390h5"/><path stroke="#f97583" d="M217.5 390h0M227.5 390h15"/></g><g class="code line"><path stroke="#79b8ff" d="M62.5 410h15"/><path stroke="#ffab70" d="M87.5 410h40"/><path stroke="#f97583" d="M132.5 410h0"/></g><path stroke="#f97583" d="M47.5 420h25"/><g class="code line"><path stroke="#79b8ff" d="M62.5 430h15"/><path stroke="#ffab70" d="M87.5 430h10M107.5 430h35"/><path stroke="#f97583" d="M147.5 430h0"/></g><path stroke="#f97583" d="M47.5 440h15"/><g class="code line" stroke="#959da5"><path d="M47.5 460h10M62.5 460h20M92.5 460h10M112.5 460h0M122.5 460h15M147.5 460h35M192.5 460h15"/></g><g class="code line" stroke="#959da5"><path d="M47.5 470h10M62.5 470h35M107.5 470h10M127.5 470h15"/></g><g class="code line"><path stroke="#f97583" d="M47.5 480h15"/><path stroke="#d1d5da" d="M67.5 480h5"/><path stroke="#ffab70" d="M82.5 480h15M107.5 480h25M142.5 480h50M202.5 480h50"/><path stroke="#d1d5da" d="M262.5 480h5"/><path stroke="#f97583" d="M272.5 480h0M282.5 480h15"/></g><g class="code line"><path stroke="#79b8ff" d="M62.5 500h15"/><path stroke="#ffab70" d="M87.5 500h50M147.5 500h10M167.5 500h35"/><path stroke="#f97583" d="M207.5 500h0"/></g><path stroke="#f97583" d="M47.5 510h25"/><g class="code line"><path stroke="#79b8ff" d="M62.5 520h15"/><path stroke="#ffab70" d="M87.5 520h10M107.5 520h30M147.5 520h5M162.5 520h50"/><path stroke="#f97583" d="M217.5 520h0"/></g><path stroke="#f97583" d="M47.5 530h15"/><g class="code line" stroke="#959da5"><path d="M47.5 540h10M62.5 540h30M102.5 540h15M127.5 540h5M142.5 540h30M182.5 540h30"/></g><g class="code line"><path stroke="#f97583" d="M47.5 550h15"/><path stroke="#d1d5da" d="M67.5 550h5"/><path stroke="#ffab70" d="M82.5 550h15M107.5 550h25M142.5 550h55"/><path stroke="#d1d5da" d="M207.5 550h5"/><path stroke="#f97583" d="M217.5 550h0M227.5 550h15"/></g><g class="code line"><path stroke="#79b8ff" d="M62.5 570h15"/><path stroke="#ffab70" d="M87.5 570h40"/><path stroke="#f97583" d="M132.5 570h0"/></g><path stroke="#f97583" d="M47.5 580h25"/><g class="code line"><path stroke="#79b8ff" d="M62.5 590h15"/><path stroke="#ffab70" d="M87.5 590h10M107.5 590h35"/><path stroke="#f97583" d="M147.5 590h0"/></g><path stroke="#f97583" d="M47.5 600h15"/><g class="code line" stroke="#959da5"><path d="M47.5 620h10M62.5 620h20M92.5 620h10M112.5 620h0M122.5 620h15M147.5 620h35M192.5 620h15"/></g><g class="code line" stroke="#959da5"><path d="M47.5 630h10M62.5 630h35M107.5 630h10M127.5 630h15"/></g><g class="code line"><path stroke="#f97583" d="M47.5 640h15"/><path stroke="#d1d5da" d="M67.5 640h5"/><path stroke="#ffab70" d="M82.5 640h15M107.5 640h25M142.5 640h50M202.5 640h50"/><path stroke="#d1d5da" d="M262.5 640h5"/><path stroke="#f97583" d="M272.5 640h0M282.5 640h15"/></g><g class="code line"><path stroke="#79b8ff" d="M62.5 660h15"/><path stroke="#ffab70" d="M87.5 660h50M147.5 660h10M167.5 660h35"/><path stroke="#f97583" d="M207.5 660h0"/></g><path stroke="#f97583" d="M47.5 670h25"/><g class="code line"><path stroke="#79b8ff" d="M62.5 680h15"/><path stroke="#ffab70" d="M87.5 680h10M107.5 680h30M147.5 680h5M162.5 680h50"/><path stroke="#f97583" d="M217.5 680h0"/></g><path stroke="#f97583" d="M47.5 690h15"/></g><g class="line numbers" stroke="#959da5" stroke-linecap="round" stroke-width="5"><path d="M32.5 50h0M32.5 60h0M32.5 70h0M32.5 80h0M32.5 90h0M32.5 100h0M32.5 110h0M32.5 120h0M32.5 130h0M32.5 140h-5M32.5 150h-5M32.5 160h-5M32.5 170h-5M32.5 180h-5M32.5 190h-5M32.5 200h-5M32.5 210h-5M32.5 220h-5M32.5 230h-5M32.5 240h-5M32.5 250h-5M32.5 260h-5M32.5 270h-5M32.5 280h-5M32.5 290h-5M32.5 300h-5M32.5 310h-5M32.5 320h-5M32.5 330h-5M32.5 340h-5M32.5 350h-5M32.5 360h-5M32.5 370h-5M32.5 380h-5M32.5 390h-5M32.5 400h-5M32.5 410h-5M32.5 420h-5M32.5 430h-5M32.5 440h-5M32.5 450h-5M32.5 460h-5M32.5 470h-5M32.5 480h-5M32.5 490h-5M32.5 500h-5M32.5 510h-5M32.5 520h-5M32.5 530h-5M32.5 540h-5M32.5 550h-5M32.5 560h-5M32.5 570h-5M32.5 580h-5M32.5 590h-5M32.5 600h-5M32.5 610h-5M32.5 620h-5M32.5 630h-5M32.5 640h-5M32.5 650h-5M32.5 660h-5M32.5 670h-5M32.5 680h-5M32.5 690h-5"/></g>
</svg>

</div>
</div>

<!-- how we work -->
<work-process></work-process>
<!-- end -->

<!-- projects display -->
<work-showcase></work-showcase>
<!-- end  -->

<div class="bg-gray-100">
  <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
      Ready to dive in?
      <br />
      <span class="text-indigo-600">Lets start your project today.</span>
    </h2>
    <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
      <div class="inline-flex rounded-md shadow">
        <router-link to="/services" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Services
        </router-link>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <router-link to="/hire-us" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
          Hire us
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
    components:{
    },
    data(){
      return {
        open: false
      }
    }

  }
</script>

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
                    <button @click="open = true"
                            type="button"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-3 md:pr-4">
                <router-link to="/"
                             class="font-medium text-gray-500 hover:text-white focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out">Home</router-link>
                <router-link to="/services"
                             class="ml-4 font-medium text-gray-500 hover:text-white focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out">Services</router-link>
                <router-link to="/work"
                             class="ml-4 font-medium text-gray-500 hover:text-white focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out">Our work</router-link>
                <router-link to="/blogs"
                             class="ml-4 font-medium text-gray-500 hover:text-white focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out">Blogs</router-link>
                <router-link to="/hire-us"
                             class="ml-4 font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out bg-white rounded-lg px-3 py-3">Hire Us</router-link>
              </div>
            </nav>
          </div>

          <div v-show="open"
               x-transition:enter="duration-150 ease-out"
               x-transition:enter-start="opacity-0 scale-95"
               x-transition:enter-end="opacity-100 scale-100"
               x-transition:leave="duration-100 ease-in"
               x-transition:leave-start="opacity-100 scale-100"
               x-transition:leave-end="opacity-0 scale-95"
               class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md">
              <div class="rounded-lg bg-white shadow-xs overflow-hidden">
                <div class="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img class="h-8 w-auto" src="../assets/img/logo.png" alt="" />
                  </div>
                  <div class="-mr-2">
                    <button @click="open = false"
                            type="button"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3">
                  <router-link to="/"
                               class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Home</router-link>
                  <!-- <router-link to="/about"  class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-900 focus:bg-gray-50 transition duration-150 ease-in-out">About</router-link> -->
                  <router-link to="/services"
                               class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Services</router-link>
                  <router-link to="/work"
                               class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Our work</router-link>
                  <router-link to="/hire-us"
                               class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-indigo-600 focus:bg-gray-50 transition duration-150 ease-in-out">Services</router-link>
                </div>
                <div>
                  <a href="#"
                     class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out bg-white">
                    Hire Us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
                We are ready to hear from you, let's talk.

              </h2>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We design, build and maintain web applications using modern technologies.
              </p>
              <!-- <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Have a project?
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Hire Developer
                  </a>
                </div>
              </div> -->
            </div>
          </div>
          <!-- <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> -->
        </div>
      </div>
      <div class="lg:absolute md:w-full lg:inset-y-0 lg:right-0 lg:w-1/2 items-center bg-gray-900">
        <img class="pt-2 h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full" src="../assets/img/145.png" alt="" />

      </div>
    </div>

    <div class="flex justify-center py-6 bg-gray-100">
      <form @submit.prevent="handleSubmit()" name="hireus" class="w-full max-w-lg">
        <input type="hidden" name="bot-field" value="">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label class="block  tracking-wide text-gray-900  font-bold mb-2 " for="grid-first-name">
              What is your company or project name?
            </label>
            <input v-model="form.companyName"
                   name="companyName"
                   class="appearance-none block w-full  text-gray-900 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"

                   type="text">
            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="w-full px-3">
            <label class="block  tracking-wide text-gray-900  font-bold mb-2" for="grid-last-name">
              What is your name?
            </label>
            <input v-model="form.clientName"
                   name="clientName"
                   class="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"

                   type="text">
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block  tracking-wide text-gray-900  font-bold mb-2" for="grid-password">
              What is your phone number?
            </label>
            <input v-model="form.clientPhone"
                   name="clientPhone"
                   class="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"

                   type="text">
            <!-- <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p> -->
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block  tracking-wide text-gray-900  font-bold mb-2" for="grid-password">
              What is your E-mail address
            </label>
            <input v-model="form.clientEmail"
                   name="clientEmail"
                   class="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"

                   id="email"
                   type="email">
            <!-- <p class="text-gray-600 text-xs italic">Some tips - as long as needed</p> -->
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block leading-tight tracking-wide text-gray-900  font-bold mb-2" for="grid-password">
              What beyode can do for you?
            </label>

            <label class="md:w-2/3 block text-gray-800 font-bold">
              <input v-model="form.clientTask" name="clientTask" value="Create an amazing new product" class="mr-2 leading-tight" type="radio">
              <span class="text-sm">
                Create an amazing new product
              </span>
            </label>
            <label class="md:w-2/3 block text-gray-800 font-bold">
              <input v-model="form.clientTask" name="clientTask" value="Make my existing product greater" class="mr-2 leading-tight" type="radio">
              <span class="text-sm">
                Make my existing product greater
              </span>
            </label>
            <label class="md:w-2/3 block text-gray-800 font-bold">
              <input v-model="form.clientTask" name="clientTask" value="Something else" class="mr-2 leading-tight" type="radio">
              <span class="text-sm">
                Something else
              </span>
            </label>

          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block  tracking-wide text-gray-900  font-bold mb-2" for="grid-password">
              Tell us a little more about it
            </label>

            <textarea v-model="form.explanation"
                   type="text"
                   class=" no-resize appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"

                   name="explanation"
                   id="message">
             </textarea>
            <!-- <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> -->
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block leading-tight tracking-wide text-gray-900  font-bold mb-2" for="grid-password">
              What is your budget?
            </label>
            <label class="md:w-2/3 block text-gray-800 font-bold">
              <input v-model="form.clientBudget" name="clientBudget" value="Less than KSH 100K " class="mr-2 leading-tight" type="radio">
              <span class="text-sm">
                Less than KSH 100K
              </span>
            </label>
            <label class="md:w-2/3 block text-gray-800 font-bold">
              <input v-model="form.clientBudget" name="clientBudget" value="KSH 100K - 200K" class="mr-2 leading-tight" type="radio">
              <span class="text-sm">
                KSH 100K - 200K
              </span>
            </label>
            <label class="md:w-2/3 block text-gray-800 font-bold">
              <input v-model="form.clientBudget" name="clientBudget" value="KSH 200k - 300K" class="mr-2 leading-tight" type="radio">
              <span class="text-sm">
                KSH 200k - 300K
              </span>
            </label>
            <label class="md:w-2/3 block text-gray-800 font-bold">
              <input v-model="form.clientBudget" name="clientBudget" value="KSH 300K or more" class="mr-2 leading-tight" type="radio">
              <span class="text-sm">
                KSH 300K or more
              </span>
            </label>
            <label class="md:w-2/3 block text-gray-800 font-bold">
              <input v-model="form.clientBudget" name="clientBudget" value="To be determined" class="mr-2 leading-tight" type="radio">
              <span class="text-sm">
                To be determined
              </span>
            </label>

          </div>
        </div>

        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button class="shadow bg-indigo-400 hover:bg-gray-900 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

    <Footer/>

  <success title="Submited Successfuly" message="Your details have been submited successfully we will get back to you soon" v-if="showSuccess" ></success>
  </div>

</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        open: false,
        showSuccess: false,

        form: {
          companyName: null,
          clientName: null,
          clientPhone: null,
          clientEmail: null,
          clientTask: [],
          clientBudget: [],
          explanation: null
        }
      }
    },
    methods: {
      handleSubmit() {
        fetch('/', {
          method: 'post',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: this.encode({
            'form-name': 'hireus',
            ...this.form
          })
        })
          .then(() => {
            console.log('Successfully sent')
            this.showSuccess = true

            setTimeout(()=>{
              this.showSuccess = false
            },3000)

            // clear form
            this.form.companyName = null
            this.form.clientName = null
            this.form.clientPhone = null
            this.form.clientEmail = null
            this.form.clientTask = null
            this.form.clientBudget = null
            this.form.explanation = null
          })
          .catch(err => console.error(err))
      },
      encode(data) {
        return Object.keys(data)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
          .join('&')
      }
    },

    mounted(){
      this.$on('cancelSuccessModal', ()=>{
        this.showDeleteModal = false
      })
    }
  }

</script>

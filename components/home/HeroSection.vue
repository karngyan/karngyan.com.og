<template>
  <div class="relative bg-gray-800 overflow-hidden">
    <div class="relative">
      <main class="">
        <div class="mx-auto py-8 max-w-7xl border-l border-r border-dashed border-gray-700">
          <div class="lg:grid lg:grid-cols-12">
            <div class="px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-gray-700 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
              <div>
                <nuxt-link :to="localePath('/blog')" class="group inline-flex hover:bg-black items-center text-white bg-gray-900 rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                  <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-indigo-600 rounded-full">{{ $t('hero.iBlogTech') }}</span>
                  <span class="ml-4 text-xs">{{$t('hero.haveALook')}}</span>
                  <svg class="transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </nuxt-link>
                <h1 class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">
                  <span class="md:block">{{ $t('hero.friendlyNeighborhood') }}</span>
                  <div>
                    <vue-typer :text="$t('hero.words')"></vue-typer>
                  </div>
                </h1>
                <p class="mt-3 text-base text-gray-300 sm:mt-5">
                  {{ $t('hero.description').toLowerCase() }}
                </p>
                <p class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Worked at</p>
                <div class="mt-5 w-full sm:mx-auto lg:ml-0">
                  <div class="flex flex-wrap items-start items-center justify-between">
                    <a href="https://sendpost.io" target="_blank" rel="noreferrer" class="flex items-center justify-center px-1">
                      <SendPost class="h-8 rounded-sm sm:h-9" />
                    </a>
                    <a href="https://amazon.in/" target="_blank" rel="noreferrer" class="flex items-center justify-center px-1">
                      <Amazon class="h-8 sm:h-9" />
                    </a>
                    <a href="https://interviewready.io" target="_blank" rel="noreferrer" class="flex items-center justify-center px-1">
                      <InterviewReady class="h-8 p-0.5 sm:h-9" />
                    </a>
                    <a href="https://crio.do" target="_blank" rel="noreferrer" class="flex justify-center px-1">
                      <CrioDo class="h-8 sm:h-9" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6">
              <div  class="bg-gray-900 w-full sm:mx-auto rounded-lg sm:overflow-hidden">
                <div class="px-8 py-10 sm:px-10">
                  <div class="">
                    <div class="items-center flex-col justify-center flex">
                      <div class="text-hot-pink text-2xl font-bold">{{ $t('hero.softwareShots') }}</div>
                    </div>
                    <form class="mt-8 space-y-6">
                      <input type="hidden" name="remember" value="true">
                      <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                          <label for="email-address" class="sr-only">Email address*</label>
                          <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative bg-gray-800 block w-full px-3 py-2 border border-gray-500 placeholder-gray-300 text-gray-200 rounded-t-md focus:outline-none focus:ring-indigo-600 focus:bg-gray-800 focus:border-indigo-600 focus:z-10 sm:text-xs" placeholder="email address">
                        </div>
                        <div>
                          <label for="first-name" class="sr-only">First Name</label>
                          <input v-model="firstName" id="first-name" name="email" type="text" autocomplete="name" required class="appearance-none rounded-none relative bg-gray-800 block w-full px-3 py-2 border border-gray-500 placeholder-gray-300 text-gray-200 focus:outline-none focus:ring-indigo-600 focus:bg-gray-800 focus:border-indigo-600 focus:z-10 sm:text-xs" placeholder="first name">
                        </div>
                        <div>
                          <label for="last-name" class="sr-only">Last Name</label>
                          <input v-model="lastName" id="last-name" name="email" type="text" autocomplete="name" required class="appearance-none rounded-none relative bg-gray-800 block w-full px-3 py-2 border border-gray-500 placeholder-gray-300 text-gray-200 focus:outline-none rounded-b-md focus:ring-indigo-600 focus:bg-gray-800 focus:border-indigo-600 focus:z-10 sm:text-xs" placeholder="last name">
                        </div>
                      </div>
                      <div>
                        <button v-if="!isLoading" @click="subscribeUser" type="submit" class="group cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:bg-gray-700">
                          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                          </span>
                            Subscribe
                            <svg class="pl-2 h-5 fill-current text-hot-pink" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg">
                                <path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5">
                                    <animate attributeName="fill-opacity"
                                         begin="0s" dur="1.4s"
                                         values="0.5;1;0.5"
                                         calcMode="linear"
                                         repeatCount="indefinite" />
                                </path>
                                <path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5">
                                    <animate attributeName="fill-opacity"
                                         begin="0.7s" dur="1.4s"
                                         values="0.5;1;0.5"
                                         calcMode="linear"
                                         repeatCount="indefinite" />
                                </path>
                                <path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" />
                            </svg>

                        </button>

                        <div v-else class="group disabled cursor-pointer relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
                              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                            </svg>
                          </span>
                            Subscribing...
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="px-8 py-4 bg-gray-900 rounded-b-lg border-t border-gray-800 sm:px-10">
                  <p class="text-xs leading-5 text-gray-500">By signing up, you agree to our <a href="https://www.getrevue.co/terms?locale=en" target="_blank" rel="noreferrer" class="font-medium text-gray-400 hover:text-gray-400 hover:underline">Terms of Service</a>, and <a href="https://www.getrevue.co/privacy?locale=en" target="_blank" rel="noreferrer" class="font-medium text-gray-400 hover:text-gray-400 hover:underline">Privacy Policy.</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import SendPost from "~/components/logos/SendPost";
import InterviewReady from "~/components/logos/InterviewReady";
import CrioDo from "~/components/logos/CrioDo";
export default {
  components: {CrioDo, InterviewReady, SendPost},
  data() {
    return {
      email: '',
      firstName: '',
      lastName: '',
      isLoading: false
    }
  },
  methods: {
    subscribeUser() {
      this.isLoading = true;
      const data = {
        'email': this.email.trim(),
        'first_name': this.firstName.trim(),
        'last_name': this.lastName.trim()
      }
      console.debug(data);
      if (this.email.trim() === '') {
        this.$toast.show('please enter your email address', { duration: 2000, theme: 'bubble'});
        this.isLoading = false;
        return
      }
      fetch('https://bfi6exs27j.execute-api.ap-south-1.amazonaws.com/v1/subscribers', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => res.json())
      .then(data => {
        console.debug(data);
        this.$toast.success(data.body.message, { duration: 3000 })
        this.isLoading = false;
        this.email = '';
        this.firstName = '';
        this.lastName = '';
      })
    },
  }
}
</script>

<style scoped>
>>> .vue-typer .custom.char {
  @apply text-indigo-600;
}
>>> .vue-typer .custom.char.selected {
  @apply bg-indigo-600 text-white;
}

>>> .vue-typer .custom.caret {
  width: 5px;
  @apply bg-indigo-600;
}

.hover-arrow {
  position: relative;
  stroke-width: 1px;
}
</style>

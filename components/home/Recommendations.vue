<template>
  <div class="max-w-7xl mx-auto border-l border-r border-dashed border-gray-700">
    <div class="max-w-prose text-center mx-auto py-4">
      <p class="text-xs leading-6 text-indigo-600 font-semibold tracking-wide lowercase">{{ $t('recommendations.subtext') }}</p>
      <a :href="`https://linkedin.com/in/${$store.state.social.linkedin}`" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500">{{ $t('recommendations.header') }}</a>
    </div>
    <section class="max-w-7xl mx-auto">
      <div data-aos="zoom-in" class="lg:grid lg:grid-cols-2 lg:gap-4 mb-4 space-y-4 lg:space-y-0 lg:items-start px-4">
        <div class="relative h-full bg-gray-900 rounded-lg shadow-lg text-base max-w-prose mx-auto lg:max-w-none">
          <blockquote class="relative">
            <div class="rounded-t-lg px-5 py-5 sm:px-10 sm:pt-10 sm:pb-8">
              <div class="flex flex-row">
                <a href="https://www.linkedin.com/in/varun-jain-582b0215/" target="_blank" rel="noreferrer">
                  <cite class="flex items-center rounded-b-lg not-italic">
                    <div class="flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full border border-hot-pink mr-4">
                      <img class="w-8 h-8 rounded-full bg-indigo-300" src="../../assets/arijit.jpeg" alt="Arijit">
                    </div>
                    <span class="text-gray-400 font-semibold py-2">
                    <strong class="text-gray-200 font-semibold">Arijit Mallik</strong>
                    Software Engineer, Google
                  </span>
                  </cite>
                </a>
              </div>
              <div class="relative text-sm text-gray-300 font-medium mt-4">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                  <p class="relative">I worked with Gyan when he, along with three other members joined Google Software Product Sprint. Gyan is technically pretty sound, and he showed great maturity in designing and implementation. He has very impressive webpage development/frontend skills and he can make websites look very very professional almost effortlessly! He was eager to learn new things and was never afraid to take on challenges. I want to wish Gyan all the best in all his future endeavours, and he always shows up to be a great contributor.</p>
              </div>
            </div>
          </blockquote>
        </div>
        <div class="relative bg-gray-900 h-full rounded-lg shadow-lg text-base max-w-prose mx-auto lg:max-w-none">
          <blockquote class="relative">
            <div class="rounded-t-lg px-5 py-5 sm:px-10 sm:pt-10 sm:pb-8">
              <div class="flex flex-row">
                <a href="https://www.linkedin.com/in/varun-jain-582b0215/" target="_blank" rel="noreferrer">
                  <cite class="flex items-center rounded-b-lg not-italic">
                    <div class="flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full border border-hot-pink mr-4">
                      <img class="w-8 h-8 rounded-full bg-indigo-300" src="../../assets/john.jpeg" alt="John">
                    </div>
                    <span class="text-gray-400 font-semibold py-2">
                      <strong class="text-gray-200 font-semibold">John George</strong>
                      Sr. Software Engineer, SendPost
                    </span>
                  </cite>
                </a>
              </div>
              <div class="relative text-sm text-gray-300 font-medium mt-4">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                  <p class="relative">I've worked with Gyan at his time at SendX and it was an absolute pleasure to work with him he's one of the most driven and capable developers I've met, with knowledge throughout our techstack from the front end webapp to the entire backend, he has been a really fast learner and was able to scale up extremely quickly, plus he's a good sport who pretty much gave me an eye for design through his brief intro on figma which will probably remain with me forever.</p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
      <div data-aos="zoom-in" class="lg:grid lg:grid-cols-1 lg:gap-8 mb-4 lg:items-start px-4">
        <div class="relative text-base max-w-prose mx-auto lg:max-w-none">
          <blockquote class="relative bg-gray-900 rounded-lg shadow-lg">
            <div class="rounded-t-lg px-5 py-5 sm:px-10 sm:pt-10 sm:pb-8">
              <div class="flex flex-row">
                <a href="https://www.linkedin.com/in/varun-jain-582b0215/" target="_blank" rel="noreferrer">
                  <cite class="flex items-center rounded-b-lg not-italic">
                    <div class="flex-shrink-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 rounded-full border border-hot-pink mr-4">
                      <img class="w-8 h-8 rounded-full bg-indigo-300" src="../../assets/varun.jpeg" alt="Varun">
                    </div>
                    <span class="text-gray-400 font-semibold py-2">
                    <strong class="text-gray-200 font-semibold">Varun Jain</strong>
                    Founder, SendX & SendPost
                  </span>
                  </cite>
                </a>
              </div>
              <div class="relative text-sm text-gray-300 font-medium mt-4">
                <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-800" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p class="relative">
                  <p class="relative">Gyan interned with SendX and SendPost for around 6 months. He is a very strong full-stack engineer who can create pixel perfect frontend while being able to work on backend pieces sending millions of emails per day. He is a quick learner, a great team player and, has a very strong work ethic. You can rely on him that things will be done with utmost quality. He also has pretty good product instincts and can think from the user's perspective.
</p>
<br/>
<p class="relative">
During the internship, he grew tremendously and his impact was visible to everyone in the company. It was a great experience working and learning from him. I hope to work with him again in the future. If not, I will be sitting on the sidelines, cheering him and watching products he builds in the future.
                </p></p>
              </div>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Recommendations",
  data() {
    return {
      recommendations: {

      }
    }
  }
}
</script>

<style scoped>

</style>

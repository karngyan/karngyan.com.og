<template>
<div class="max-w-7xl mx-auto border-gray-700 border-dashed border-l border-r">
  <div class="dark antialiased text-gray-200">
    <div class="px-4 py-4 max-w-5xl mx-auto sm:px-6 lg:px-8">
      <article data-aos="fade-up">
        <div class="space-y-9">
          <div class="px-4 sm:px-0 lg:px-4 pb-4 bg-gray-900 rounded-lg">
            <header class="py-4">
              <div class="space-y-1 text-center">
                <div >
                  <h1 class="text-2xl font-extrabold text-gray-100 tracking-tight">{{ article.title }}</h1>
                </div>

                <dl class="">
                  <div><dt class="sr-only">Published on</dt>
                    <dd class="text-xs font-medium text-gray-500">
                      <time :datetime="article.createdAt">{{' on ' + new Date(article.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}) }}</time>
                      <span class="mx-1">
                        &middot;
                      </span>
                      {{ article.readingTime }}
                    </dd>
                  </div>
                </dl>

                <div class="overflow-hidden flex flex-wrap items-center flex-row justify-center">
                    <div class="px-3 text-xs flex flex-shrink-0 py-1 mt-1 mr-2 bg-indigo-600 rounded-md hover:bg-indigo-700" v-for="(tag, index) in article.tags" :key="`tag-${index}`">{{ tag }}</div>
                </div>
              </div>
            </header>

            <div class="prose dark:prose-dark break-words my-4 prose-sm max-w-4xl mx-auto">
              <nuxt-content :document="article" />
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>

  <div @click="scrollToTop" class="cursor-pointer fixed z-50 bottom-4 right-4 w-8 w-8 rounded-full bg-gray-900 text-white block text-indigo-600 hover:text-hot-pink">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
    </svg>
  </div>
</div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const article = await $content('legal', 'privacy').fetch()

    return {
      article,
    }
  },
  head() {
    return {
      title: this.article.title + ' | Blog -- Karn | Friendly Neighborhood Developer',
      meta: [
        { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        { hid: 'twitter:title', name: 'twitter:title', content: this.article.title },
        { hid: 'twitter:description', name: 'twitter:description', content: this.article.description }
      ]
    }
  },
  methods: {
    scrollToTop() {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    cmp(a, b) {
      if (a.created < b.created) return 1
      if (a.created > b.created) return -1
      return 0
    }
  }
}
</script>

<style scoped>
>>> .icon {
  @apply text-indigo-600 hover:text-hot-pink hidden;
}

>>> .breaker {
    @apply text-center py-2;
}

>>> .breaker::after {
  content: "• • •";
}

>>> .nuxt-content .caption {
  @apply text-center;
}

>>> .nuxt-content img {
  @apply mx-auto rounded-md;
}

</style>

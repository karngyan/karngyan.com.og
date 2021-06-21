<template>
  <nuxt-link :to="localePath(`/blog/${article.slug}`)" class="flex transition duration-700 ease-in-out transform hover:translate-y-0.5 hover:scale-105 flex-col rounded-xl shadow-lg overflow-hidden" >
      <div class="flex-1 bg-gray-900 p-5 flex flex-col justify-between">
        <div class="flex-1">
          <p class="text-xs font-medium text-hot-pink hover:text-hot-pink">
            <a href="#" class="hover:underline hover:text-hot-pink">
              {{ article.category }}
            </a>
          </p>
          <div>
            <h3 class="mt-0.5 text-md leading-7 font-semibold text-gray-200">
              {{ article.title }}
            </h3>
            <p class="mt-2 text-xs text-gray-400">
              {{ article.description }}
            </p>
          </div>
        </div>
        <div class="mt-2 flex items-center">
          <div class="flex-shrink-0">
            <a target="_blank" rel="noreferrer" :href="`https://twitter.com/${article.author.twitter}`">
              <img class="h-9 w-9 rounded-full" :src="`${article.author.image}`" alt="Author Photo">
            </a>
          </div>
          <div class="ml-3">
            <p class="text-xs font-medium text-gray-200">
              <a target="_blank" rel="noreferrer" :href="`https://twitter.com/${article.author.twitter}`" class="hover:text-indigo-600">
                {{ article.author.name }}
              </a>
            </p>
            <div class="flex text-xs text-gray-300">
              <time :datetime="article.createdAt">
                {{ new Date(article.createdAt).toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: 'numeric'}) }}
              </time>
              <span class="mx-1">
                &middot;
              </span>
              <span>
                {{ article.readingTime }}
              </span>
            </div>
          </div>
        </div>
      </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    article: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>

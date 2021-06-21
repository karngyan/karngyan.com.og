<template>
  <div>
    <HeroSection/>
    <GithubCalendar />
    <Recommendations />
    <LazyRecentBlog v-if="articles" :articles="articles"/>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home - Karn | Friendly Neighborhood Developer',
      meta: [
      ],
    }
  },
  data() {
    return {
      articles: null
    }
  },
  async created() {
    const fetchDocsLabel = 'fetchAllArticles'
    console.time(fetchDocsLabel)
    try {
      const articles = await this.$content('articles')
        .without(['body', 'toc', 'dir', 'extension', 'path', 'tags'])
        .limit(3)
        .skip(0)
        .sortBy('createdAt', 'desc')
        .fetch()
      this.articles = articles
    } catch (e) {
      console.error(e)
    } finally {
      console.timeEnd(fetchDocsLabel)
    }
  },
}
</script>

<style>
</style>

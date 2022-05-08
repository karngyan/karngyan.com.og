<template>
  <div class="max-w-7xl px-4 mx-auto py-12 border-l border-r border-dashed border-gray-700">
    <div class="h-24">

    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'resume -- Karn | Friendly Neighborhood Developer'
    }
  },
  computed: {
    pdfUrl() {
      return this.$store.state.resume.pdfUrl
    },
    pdfUrlDark() {
      return this.$store.state.resume.pdfUrlDark
    }
  }
}
</script>

<style scoped>

</style>

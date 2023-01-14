<template>
  <div class="max-w-7xl mx-auto border-gray-700 border-dashed border-l py-6 border-r">
    <div data-aos="fade-up" class="text-center">
      <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
        {{ $t('meet.header') }}
      </h2>
      <p class="my-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400">
        {{ $t('meet.subtext') }}
      </p>
    </div>

    <div class="border-x-0 border-gray-700 border-y border-dashed p-4">
      <SavvyCal />
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'meet -- Karn | Friendly Neighborhood Developer'
    }
  },
}
</script>

<style scoped>

</style>

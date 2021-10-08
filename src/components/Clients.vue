<template>
    <div class="clients">
        <TechList />
        <Reviews />
    </div>
</template>

<script>
import TechList from '@/components/TechList.vue'
import Reviews from '@/components/Reviews.vue'
export default {
  name: 'Clients',
  components: {
    TechList, Reviews
  },
}
</script>

<style scoped>
.clients{
    background: var(--bg-lighter);
    position: relative;
}
</style>
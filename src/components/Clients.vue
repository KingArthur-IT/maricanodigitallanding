<template>
    <div class="clients">
        <TechList />
        <Reviews />
        <img src="@/assets/clients.png" alt="" class="clients__bg">
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
.clients__bg{
  position: absolute;
  bottom: 100px;
  left: 0;
  z-index: 0;
}
</style>
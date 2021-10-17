<template>
    <svg 
        :width="size" :height="size" :viewBox="`0 0 ${size} ${size}`" fill="none" xmlns="http://www.w3.org/2000/svg" class="dot"
        @mouseover="isHover = false"
        @mouseleave="isHover = true"   
        @click="$emit('clickEvent')" 
    >
        <circle v-if="!isChecked"
            :cx="size/2" :cy="size/2" :r="(size-1)/2" 
            :stroke="isHover ? color : colorHover"
        />
        <circle v-if="isChecked"
            :cx="size/2" :cy="size/2" :r="(size-1)/2" 
            :stroke="colorHover"
        />
        <circle v-if="isChecked"
            :cx="size/2" :cy="size/2" r="2.5" 
            :fill="colorHover"
        />
    </svg>
</template>

<script>
export default {
  name: 'SliderDot',
  props: {
    size: Number,
    color: String,
    colorHover: String,
    isChecked: Boolean
  },
  data () {
      return {
        isHover: true 
      }
  },
}
</script>


<style scoped>
.dot{
  margin-right: 15px;
  cursor: pointer;
}
</style>
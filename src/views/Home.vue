<template>
  <div>
    <hero-section backgroundImage="homepage-hero.jpg" title="Bienvenido a InstaFlickr" subtitle="Una fake foto app" />
    <div class="wrapper">
      <recent-photos />
    </div>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import RecentPhotos from '@/components/RecentPhotos.vue';

export default {
    name: 'home',
    components: {
      HeroSection,
      RecentPhotos,
    },
};
</script>

<style>

</style>

<template>
  <div>
    <hero-section backgroundImage="homepage-hero.jpg" title="Bienvenido a InstaFlickr" subtitle="Una fake foto app" />
    <div class="wrapper">
      <recent-photos />
      <place-photos />
    </div>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import RecentPhotos from '@/components/RecentPhotos.vue';
import PlacePhotos from '@/components/PlacePhotos.vue';

export default {
    name: 'home',
    components: {
      HeroSection,
      RecentPhotos,
      PlacePhotos,
    },
};
</script>

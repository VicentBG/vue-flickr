<template>
  <section class="hero" :style="{backgroundImage: heroImagePath()}">
      <h1 class="hero-title">{{ title }}</h1>
      <p class="hero-subtitle">{{ subtitle }}</p>
  </section>
</template>

<script>
export default {
    name: 'heroSection',
    props: {
        backgroundImage: String,
        title: String,
        subtitle: String,
    },
    methods: {
        heroImagePath() {
            return 'url(' + require(`../assets/${this.backgroundImage}`) + ')';
        },
    },
}
</script>

<style lang="scss">
    .hero {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 600px;
        @media only screen and (min-width: 600px) and (max-width: 900px) {
            min-height: 400px;
        }
        @media only screen and (max-width: 599px) {
            min-height: 250px;
        }
    }
    .hero-title {
        font-size: 3rem;
        margin: 0;
    }
    .hero-subtitle {
        font-size: 1.3rem;
    }
</style>

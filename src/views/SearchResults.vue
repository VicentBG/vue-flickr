<template>
    <div class="wrapper">
      <p v-if="loading" class="text-centered">Cargando fotos...</p>
      <div v-else>
        <h1>Resultados para: "{{tag}}"</h1>
        <ul class="image-card-grid">
          <image-card v-for="image in cleanImages" :key="image.id" :image="image" />
        </ul>
      </div>
    </div>
</template>

<script>
import flickr from '../flickr';

// @ is an alias to /src
import ImageCard from '@/components/ImageCard.vue';

export default {
  name: 'home',
  components: {
    ImageCard,
  },
  props: {
    tag: String,
  },
  created() {
    this.search();
  },
  watch: {
    tag(value) {
      this.search();
    },
  },
  data() {
    return {
      loading: false,
      tag: '',
      images: [],
    };
  },
  methods: {
    search() {
      this.loading = true;
      this.fetchImages();
      this.loading = false;
    },
    fetchImages() {
      return flickr('photos.search', {
        tags: this.tag,
        extras: 'url_n, owner_name, description, date_taken, views',
        page: 1,
        per_page: 30,
        })
        .then((response) => {
          this.images = response.data.photos.photo;
        });
    },
  },
  computed: {
    cleanImages() {
      return this.images.filter(image => image.url_n);
    },
  },
};
</script>

<style lang="scss">
  .screen-reader-only {
    height: 1px;
    width: 1px;
    position: absolute;
    left: -100000px;
  }
  .text-centered {
    text-align: center;
  }
  .wrapper {
    margin: 0 auto;
    max-width: 800px;
    @media only screen and (max-width: 799px) {
      max-width: 100%;
      margin: 0 1.5rem;
    }
  }
  .image-card-grid {
    list-style: none;
    margin: .5rem 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .navbar {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: #f0f0f0;
  }
  .searchbar {
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 549px) {
      max-width: 100%;
      label {
        width: 80%;
      }
    }
  }
  .searchbar-input {
    padding: .5rem 1rem;
    border-radius: 20px;
    font-size: 1rem;
    border: 1px solid gray;
    outline: none;
    min-width: 300px;
    @media only screen and (max-width: 549px) {
      min-width: 0;
      width: 100%;
    }
  }
  .btn {
    padding: .5rem 1rem;
    border-radius: 20px;
    outline: none;
    font-size: 1rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .btn--green {
    background: #42b983;
    color: white;
    font-weight: bold;
  }
  .btn--go {
    padding: .5rem 2rem;
    margin-left: 1rem;
  }
</style>

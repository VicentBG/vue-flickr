<template>
    <nav class="navbar">
        <span class="logo">
            <router-link class="logo__link" :to="{name: 'home'}">InstaFlickr</router-link>
        </span>
        <form class="searchbar">
            <label>
                <span class="screen-reader-only">Buscador de fotos: </span>
                <input v-model="tag" placeholder="Busca fotos mediante tags..." type="text" class="searchbar-input">
            </label>
            <button type="submit" @click.prevent="search" class="btn btn--green btn--go">Busca</button>
        </form>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            tag: '',
        };
    },
    methods: {
        search() {
            this.$router.push({name: 'searchResults', params: {tag: this.tag}});
            this.tag = '';
        },
    },
};
</script>

<style lang="scss">
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
        @media only screen and (max-width: 715px) {
        margin-top: 2.5rem;
        }
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
  .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #42b983;
      position: absolute;
      top: 1rem;
      left: 1rem;
      .logo__link {
          text-decoration: none;
          color: inherit;
      }
      @media only screen and (max-width: 715px) {
          top: .5rem;
          left: 0;
          right: 0;
          text-align: center;
      }
  }
</style>

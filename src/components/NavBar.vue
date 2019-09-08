<template>
    <nav class="navbar">
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
}
</script>

<style>

</style>
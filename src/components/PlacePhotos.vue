<template>
  <section class="content-section margin-y--6">
    <h2 class="centered">Lugares de Ensueño</h2>
    <ul class="place-list">
        <li 
        v-for="(place, index) in popularPlaces" 
        :key="index" 
        class="place-list__item">
            <button 
            @click="updateSelectedPlaceIndex(index)"
            class="place-list__item__button"
            :class="{'selected': index === selectedPlaceIndex}">
            {{ place.name }}
            </button>
        </li>
    </ul>
    <ul v-if="!loading" class="image-card-grid">
        <image-card 
        v-for="image in popularPlacePhotos"
        :key="image.id"
        :image="image" />
    </ul>
    <ul v-else class="image-card-grid">
        <image-card 
        v-for="n in 3"
        :key="n"
        :loading="true" />
    </ul>
    <p class="centered">
        <router-link 
        :to="{name:'searchResults', params: {tag: selectedPlace.tags}}"
        class="btn btn--dark-grey more-photos">
        Más fotos de {{ selectedPlace.name }}
        </router-link>
    </p>
  </section>
</template>

<script>
import flickr from '../flickr';

import ImageCard from './ImageCard.vue';

export default {
    name: 'daydreamByPlace',
    components: { ImageCard },
    created() {
        this.fetchPlacePhotos();
    },
    watch: {
        selectedPlace() {
            this.fetchPlacePhotos();
        },
    },
    data() {
        return {
            loading: true,
            placePhotos: [],
            selectedPlaceIndex: 0,
            popularPlaces: [
                {
                    name: 'Penyó de Ifach',
                    tags: 'ifach'
                },
                {
                    name: 'París',
                    tags: 'paris'
                },
                {
                    name: 'Cuba',
                    tags: 'cuba'
                },
                {
                    name: 'Antártida',
                    tags: 'antartida'
                },
                {
                    name: 'Desierto del Sahara',
                    tags: 'sahara'
                },
                {
                    name: 'La Luna',
                    tags: 'moon'
                }
            ],
        };
    },
    computed: {
        selectedPlace() {
            return this.popularPlaces[this.selectedPlaceIndex];
        },
        popularPlacePhotos() {
            return this.placePhotos.slice(0, 3);
        },
    },
    methods: {
        fetchPlacePhotos() {
            this.loading = true;
            flickr('photos.search', {
                tags: this.selectedPlace.tags,
                extras: 'url_n, owner_name, description, date_taken, views',
                page: 1,
                per_page: 3,
            })
            .then((response) => {
                this.placePhotos = response.data.photos.photo;
                this.loading = false;
            })
            .catch((error) => {
                console.log('Ha ocurrido un error ' + error);
            })
        },
        updateSelectedPlaceIndex(index) {
            this.selectedPlaceIndex = index;
        },
    },
};
</script>

<style lang="scss">
    .btn--dark-grey {
        background: #2c3e50;
        color: white;
        text-decoration: none;
    }
    .place-list {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .place-list__item {
        margin: 0 .5rem;
    }
    .place-list__item__button {
        background: transparent;
        font-size: 1rem;
        border: 0;
        outline: 0;
        cursor: pointer;
        border-radius: 3px;
        padding: .5rem .75rem;
        &.selected {
            background: #f0f0f0;
        }
        transition: all 3s ease;
        &:hover{
            color: #42b983;
        }
    }
</style>

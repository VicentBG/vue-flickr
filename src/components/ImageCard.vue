<template>
  <li class="image-card">
    <img :src="imageUrl" :class="{skeleton: loading}" :alt="title" class="image-card__image">
    <div class="image-card__body">
      <p :class="{skeleton: loading}" class="image-title">{{title}}</p>
      <p :class="{skeleton: loading}" class="image-owner">{{byline}}</p>
      <section class="image-date-view-wrapper">
        <p class="image-date" :class="{skeleton: loading}">{{timestamp}}</p>
        <p class="image-views" :class="{skeleton: loading}">Vistas: {{viewCount}}</p>
      </section>
    </div>
  </li>
</template>

<script>
import moment from 'moment';

const TRANSPARENT_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

export default {
  name: 'ImageCard',
  props: {
    image: {
      type: Object,
      default() {
        return {};
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  filters: {
    moment(date) {
      return moment(date).format('MMMM Do YYYY');
    },
  },
  computed: {
    imageUrl() {
      if (this.loading) return TRANSPARENT_GIF;

      return this.image.url_n;
    },
    title() {
      return this.image.title || 'Imagen sin título';
    },
    byline() {
      return `Por ${this.image.ownername}.`;
    },
    timestamp() {
      return moment(this.image.datataken).format('MMMM Do, YYYY');
    },
    viewCount() {
      const viewOrViews = this.image.views === 1 ? 'view' : 'views';
      return `${this.image.views} ${viewOrViews}`
    },
  },
};
</script>

<style lang="scss">
  .image-card {
    width: calc(33% - 1rem);
    margin: .5rem;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .15);
    background: white;
    @media only screen and (max-width: 799px) {
      width: calc(50% - 1rem);
    }
    @media only screen and (max-width: 549px) {
      width: 100%;
      margin: .5rem 0;
    }
  }
  .image-card__image {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .image-card__body {
    padding: .5rem 1rem 1rem;
  }
  .image-title {
    font-weight: bold;
    margin: 0;
  }
  .image-owner {
    margin-top: 0;
    font-size: .8rem;
  }
  .image-title,
  .image-owner {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .image-date-view-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .image-date,
  .image-views {
    margin-bottom: 0;
    font-size: .8rem;
  }
  @keyframes skeleton-glow {
    from {
      background-color: rgba(206,217,224,.2);
      background: rgba(206,217,224,.2);
    }
    to {
      background-color: rgba(92,112,128,.2);
      background: rgba(92,112,128,.2);
    }
  }
  .skeleton {
    animation: skeleton-glow 1s linear infinite alternate;
    background-clip: border-box;
    background-clip: padding-box !important;
    background-color: rgba(206,217,224,.2) !important;
    background: rgba(206,217,224,.2) !important;
    border-radius: 2px;
    box-shadow: none !important;
    color: transparent !important;
    cursor: default;
    pointer-events: none;
    user-select: none;
  }
</style>

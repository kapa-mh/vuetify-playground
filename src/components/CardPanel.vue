<template>
  <v-card>
      <v-card-title class="grey lighten-4">
          <span class="title">{{ panel.title }}</span>
      </v-card-title>
  
      <v-card-text>{{ panel.label }}</v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({

    }),
    props: {
      panel: {
        type: Object,
        default: function() {
          return { title: '', label: ''}
        }
      },
    },
  }
</script>

<style>
    .panel-padding {
        padding: 8px;
    }

    .title {
        font-size: 20px !important;
        font-weight: 700 !important;
    }

    .row {
        margin-left: 8px;
        margin-right: 8px;
    }
</style>
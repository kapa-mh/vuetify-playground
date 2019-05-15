<template>
  <div>
    <v-container fluid class="pb-0 mb-0 mt-2 actions">
      <DropdownMenu />
    </v-container>
    <v-content class="pa-3">
      <v-layout row wrap>
        <v-flex 
            v-for="panel in allPanels" 
            :key="panel.id"
            class="xs12 sm6 panel-padding"
        >
          <CardPanel :panel='panel' />
        </v-flex>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import CardPanel from './CardPanel.vue'
  import DropdownMenu from './DropdownMenu.vue'

  const FeedQuery = gql `
    query allPanels {
      allPanels(orderBy: createdAt_DESC) {
        id
        title
        label
      }
    }
  `

  export default {
    data: () => ({
      allPanels: {},
      loading: 0,
    }),
    apollo: {
      allPanels: {
        query: FeedQuery,
        loadingKey: 'loading',
      },
    },
    components: {
      CardPanel,
      DropdownMenu
    }
  }

</script>

<style>
  .actions {
    margin-bottom: -15px !important;
  }
</style>

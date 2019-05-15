<template>
  <v-app>
    <v-toolbar app class="blue-bg">
      <v-toolbar-title class="headline">
        MaestroHealth
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="icon-btn"
        flat
        href=""
      >
        <i class="fa fa-search"></i>
      </v-btn>
      <v-btn
        class="icon-btn"
        flat
        href=""
      >
        <i class='fa fa-ellipsis-v'></i>
      </v-btn>
    </v-toolbar>

    <ViewMember />

    <!-- <v-content class="pa-3 mt-5">
      <CardPanel />
    </v-content> -->

    <Footer />
  </v-app>
</template>

<script>
import ViewMember from './components/ViewMember'
import Footer from './components/Footer'
//import CardPanel from './components/CardPanel'

export default {
  name: 'App',
  components: {
    ViewMember,
    Footer,
    //CardPanel
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
  .blue-bg {
    background-color: #0d47a1 !important;
    color: #fff !important;
  }

  .headline {
    font-size: 20px !important;
    font-weight: 500 !important;
  }

  .v-toolbar__content {
    height: 48px !important;
    width: 100% !important;
    align-items: center !important;
    padding: 0 24px;
    display: flex;
  }

  a {
    color: #fff !important;
  }

  i {
    font-size: 19px !important;
    font-weight: 400 !important;
  }

  .icon-btn {
    color: #fff !important;
    border-radius: 50%;
    padding: 0;
    min-width: 36px !important;
    width: 36px !important;
  }
</style>
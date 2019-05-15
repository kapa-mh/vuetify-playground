import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cjvpfjpne0ljx0130l2zwkyzo'});

const apolloClient = new ApolloClient({
  networkInterface,
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  render: h => h(App),
  apolloProvider
}).$mount('#app')


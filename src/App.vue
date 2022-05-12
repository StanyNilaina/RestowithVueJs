<template>
  <v-container fluid>
    <v-toolbar elevation="3" border="4">
      <v-container >
        <v-tabs>
          <v-tab>
           Resto
          </v-tab>
        </v-tabs>
      </v-container>
         <v-container>
            <v-tabs right>
            <v-tab>
              <router-link to="/home">Bienvenu</router-link>
            </v-tab>
            <v-tab>
              <router-link to="/spec">Menu</router-link>
            </v-tab>
            <v-tab>
              <router-link to="/special">Spécialités</router-link>
            </v-tab>
            <v-tab>
              <router-link to="/res">Réservation</router-link>
            </v-tab>
            <v-tab>
              <router-link to="/event">évenement</router-link>
            </v-tab>
            <v-tab>
              <router-link to="/cont">contact</router-link>
            </v-tab>
          </v-tabs>
         </v-container>
        
      
        
    </v-toolbar>
    <v-content>
       <router-view></router-view>
    </v-content>
  </v-container>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'LayoutDefault',
setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
<style>
a{
  text-decoration: none;
  color: orangered
}
</style>

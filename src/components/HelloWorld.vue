<template>
<v-container fluid>
  <v-container fluid id="bienvenu"> 
    <v-carousel hide-controls>
      <v-carousel-item
        src="src"
        transition="transition"
        reverse-transition="reverseTransition"
      >
        <CarouSel h1="Bienvenu" h3="The Resto" p="Restaurant stany, de madagascar StanyNilaina"/>
      </v-carousel-item>
      <v-carousel-item
        src="src"
        transition="transition"
        reverse-transition="reverseTransition"
      >
      <CarouSel h1="S'amusez" h3="avec nous" p="Modele de gestion de Restaurant."/>
      </v-carousel-item>
      <v-carousel-item
        src="src"
        transition="transition"
        reverse-transition="reverseTransition"
      >
      <CarouSel h1="Mangez" h3="Avec nous" p="Retouche avy antanana lesy zany dada a!"/>
      </v-carousel-item>
    </v-carousel>
  </v-container>
  <v-container>
    <v-row>
      <v-col>
        <v-container class="carousel">
          <h1 class="primary-heading">Decouvrez</h1>
          <h3 class="secondary-heading" style="color: #444">nos stores</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Suscipit id asperiores dolorum animi at ipsa ipsum quo ab a 
            consequuntur cupiditate ducimus temporibus neque corporis 
            iusto debitis, repellat fuga maiores.</p>
            <div>
              <a href="#">A propos</a>
            </div>
        </v-container>
      </v-col>
      <v-col>
        <v-container class="store"></v-container>
      </v-col>
    </v-row>
  </v-container>
</v-container>
  

</template>

<script>
import '../styles/index.css';
import CarouSel from './carousel.vue'
export default {
  name: 'HelloWorld',
  components: {
        CarouSel
    }
}
</script>

<style>

</style>
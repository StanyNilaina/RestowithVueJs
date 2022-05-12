<template>
          <v-card class="carousel" elevation="5">
            <v-container fluid class="card">
                <h1 class="primary-heading" v-if="h1 !== ''">{{ h1 }}</h1>
                 <h3 class="secondary-heading" v-if="h3 !== ''">{{ h3 }}</h3>
                 <p v-if="p !== ''">{{ p }}</p>
            </v-container>
        </v-card>
</template>
<script>
import '../styles/index.css'; 
export default {
    name: 'CarouSel',
    props:{
        h1 : String,
        h3: String,
        p: String
    }
}
</script>
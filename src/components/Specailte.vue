<template>
    <v-container fluid>
        <CarouSel h1="Decouvrez" h3="Nos Menus"/>
        <v-container fluid>
            <v-row>
                <v-col cols="6" style="height:540px; overflow:auto;">
                    <v-card v-for="(item, index) in plat" :key="index">
                        <v-container style="padding-top='10%'" @click="voirPlat(item)">
                            <v-divider ></v-divider>
                            <v-container>
                                <v-avatar size="70"> 
                                <img :src="item.avatar" alt="alt">
                                </v-avatar>
                                <v-subheader >{{ item.nom }}</v-subheader>
                            </v-container>
                            <v-divider></v-divider>
                        </v-container>
                        
                    </v-card>
                </v-col>
                <v-col cols="6">
                    <v-container>
                        <v-card elevation="5">
                            <div class="card carousel">
                                <v-avatar size="200"> 
                                    <img :src="expoPlat.avatar" alt="alt">
                                </v-avatar>
                                <h1> {{ expoPlat.nom }} </h1>
                                <v-divider color="warning"></v-divider>
                                <p>{{ expoPlat.desc }}</p>
                                     
                                <p>{{ expoPlat.prix }}</p>

                            </div>
                            
                        </v-card>
                    </v-container>
                    
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>
<script>
import '../styles/index.css';
import CarouSel from './carousel.vue'
export default {
    name: 'SpeciaLite',
     components: {
        CarouSel
    },
    data(){
        return{
            plat : [
                {nom: 'Baked Potato Pizza', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.', 
                avatar : require('@/assets/img/img_square_1.jpg'),
                prix:'$20.99'},
                {nom: 'Salted Fried Chicken', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.', 
                avatar : require('@/assets/img/img_square_2.jpg'),
                prix:'$19.99'},
                {nom: 'Imported Salmon Steak', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.', 
                avatar : require('@/assets/img/img_square_3.jpg'),
                prix:'$32.99'},
                {nom: 'Roast Beef (4 sticks)', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.', 
                avatar : require('@/assets/img/img_square_4.jpg'),
                prix:'$20.99'},
                {nom: 'Baked Potato Pizza', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.',
                avatar : require('@/assets/img/img_square_5.jpg'), 
                prix:'$20.99'},
                {nom: 'Salted Fried Chicken', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.', 
                avatar : require('@/assets/img/img_square_3.jpg'),
                prix:'$19.99'},
                {nom: 'Imported Salmon Steak', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.', 
                avatar : require('@/assets/img/img_square_1.jpg'),
                prix:'$32.99'},
                {nom: 'Roast Beef (4 sticks)', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.',
                avatar : require('@/assets/img/img_square_2.jpg'), 
                prix:'$20.99'},
                ],
            expoPlat : {
                nom: 'Baked Potato Pizza', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.', 
                avatar : require('@/assets/img/img_square_1.jpg'),
                prix:'$20.99'
            }
        }
    },
    methods : {
        voirPlat(plat){
              this.expoPlat = plat;
        }
    }
}
</script>
<style>

</style>
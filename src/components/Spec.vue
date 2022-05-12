<template>
    <v-container fluid>
        <CarouSel  h1="Decouvrez" h3="nos spécialités"/>
        <v-container>
            <v-layout style="width:auto; overflow-x: auto;">
                    <v-card color="orange" class="red--text" style="margin:2%" v-for="(item,index) in plat" :key=index>
                        <v-container fluid >
                            <v-layout row>
                                <v-flex >
                                    <v-container>
                                        <div class="preset">
                                            <h3 class="headline">{{item.nom}}</h3>
                                            <h5>{{item.prix}}</h5>
                                        </div>
                                    </v-container>
                                </v-flex>
                                <v-flex>
                                    <img :src="item.avatar" width="200">
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
            </v-layout>
        </v-container>
    </v-container>
</template>
<script>
import '../styles/index.css';
import CarouSel from './carousel.vue'
export default {
    name : 'SpeciAl',
    components : {
        CarouSel
    },
    data (){
        return{
            plat : [
                {nom: 'Baked Potato Pizza', 
                desc:'Laboriosam pariatur modi praesentium deleniti molestiae officiis atque numquam.', 
                avatar : require('@/assets/img/img_square_1.jpg'),
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
        }
    }
}
</script>
<style>
.preset{
    text-align: center;
    justify-content: center;
}
</style>
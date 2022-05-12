<template>
    <v-container fluid>
        <CarouSel h1="Voilà" h3="NOS EVENEMENTS"/>
        <v-container>
            <v-row>
                <v-col v-for="(item,index) in event" :key="index">
                    <v-card border="2" elevation="5">
                        <img :src="item.avatar" width='350'>
                    <v-card-title primary-title>
                        <div>
                            <h6 class="headline mb-0">{{item.date}}</h6>
                            <h4><u>{{item.nom}}</u></h4>
                            <div>{{item.desc}}</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="primary"> Voir l'évenement</v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
             
        </v-container>
    </v-container>
</template>
<script>
import '../styles/index.css';
import CarouSel from './carousel.vue'
export default {
    name : 'EveNement',
    components:{
        CarouSel,
    },
    data() {
        return{
            event: [
                {date : 'JUNE 29, 2017',
                 nom : 'Laboriosam Quod Dignissimos',
                 desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.',
                 avatar : require('@/assets/img/img_square_1.jpg')
                },
                {date : 'JUNE 29, 2017',
                 nom : 'Laboriosam Quod Dignissimos',
                 desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.',
                 avatar : require('@/assets/img/img_square_2.jpg')
                },
                {date : 'JUNE 29, 2017',
                 nom : 'Laboriosam Quod Dignissimos',
                 desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.',
                 avatar : require('@/assets/img/img_square_3.jpg')
                }
            ],
            expoEvent : {date : 'JUNE 29, 2017',
                 nom : 'Laboriosam Quod Dignissimos',
                 desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.',
                 avatar : require('@/assets/img/img_square_3.jpg')
                },
            vue : false,           
            
        }
    },
    methods : {
    }
}
</script>
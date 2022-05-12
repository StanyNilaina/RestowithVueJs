<template>
    <v-container fluid>
          <CarouSel h1="Boking" h3="reserver une table"/>
        <v-container fluid>
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field label="Combien de personne" type="number" v-model="reservation.pers"></v-text-field>
                        <v-text-field label="Nom" type="text" v-model="reservation.nom" required></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="date" type="date" v-model="reservation.date"></v-text-field>
                        <v-text-field label="time" type="time" v-model="reservation.time"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="Email" type="email" v-model="reservation.email" required></v-text-field>
                        <v-text-field label="Téléphone" type="text" v-model="reservation.tel" required></v-text-field>
                    </v-col>
                    
                </v-row>
                <div>
                <v-btn color="orange" dark border="5" elevation="4" rounded @click="reserver(reservation)">Faire une réservation</v-btn>
                </div>
                <v-alert type="error" v-if="errorRes == true" closable="true">
                        <h3>Veuillez vérifier votre reservation</h3>
                    </v-alert>
                
               
            </v-form>
        </v-container>
        
    </v-container>
</template>
<script>
import '../styles/index.css';
import CarouSel from './carousel.vue'
export default {
    name : 'ReservaTion',
    components: {
        CarouSel
    },
    data(){
        return{
            reservation : {
                pers:'1',
                nom: '',
                date : '',
                time : '',
                email : '',
                tel : ''
            },
            errorRes : false
        }
    },
    methods:{
        reserver (data){
            if( data.nom !== "" && data.email !=="" && data.tel!== "" && data.date!== "" && data.time!== ""){
                this.$router.push({name: 'EvReussi'})
            }else{
                this.errorRes = true
            }
        }
    }
}
</script>
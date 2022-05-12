<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-container class="carousel">
                <h1 class="primary-heading">Contactez</h1>
                <h3 class="secondary-heading" style="color: #444">nous</h3>
                <p>Voluptatibus quaerat laboriosam fugit non Ut 
                    consequatur animi est molestiae enim a voluptate totam 
                    natus modi debitis dicta impedit voluptatum quod 
                    sapiente illo saepe explicabo quisquam perferendis labore et illum suscipit.</p>
                </v-container>
            </v-col>
            <v-col>
                <v-container>
                    <v-form>
                        <v-text-field box label="Nom" v-model="nom" type="texxt"></v-text-field>
                        <v-text-field box label="Email" v-model="email" type="email"></v-text-field>
                        <v-text-field label="Message.." textarea></v-text-field>
                        <v-btn color="orange" dark border="5" elevation="4" rounded>Envoyer</v-btn>
                    </v-form>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'ConTact',
}
</script>
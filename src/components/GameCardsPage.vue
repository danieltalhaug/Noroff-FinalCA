<template>
    
</template>

<script>
import GameCardsComponent from 'GameCardsComponent.vue'

export default {
    name: 'GameCardsPage',
    components: {
        GameCardsComponent
    },
    data() {
        return {
            cards: []
        }
    },
    beforeMount: function() {
        const app = this;
        const corsUrl = 'https://cors-anywhere.herokuapp.com/';
        const gameUrl = 'https://api.magicthegathering.io/v1/cards';

        fetch(corsUrl + gameUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            app.cards = result;
        })
    }
}
</script>
<style lang="scss">
// Variables
$grey: #ced4da;
$border-radius: 5px;
$error-red: #ff5b5b;
// SCSS


</style>

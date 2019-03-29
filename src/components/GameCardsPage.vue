<template>
    <div>
        <HeaderComponent />
        <div class="container">
            <div class="row">
                <div v-for="card in cards" v-bind:key="card">
                    <GameCardsComponent v-bind:name="card.name"
                                        v-bind:colors="card.colors"
                                        v-bind:type="card.type"
                                        v-bind:rarity="card.rarity"
                                        v-bind:text="card.text"
                                        v-bind:img="card.imageUrl"
                                        v-bind:id="card.id"
                    ></GameCardsComponent>
                </div>
            </div>
        </div>
        <FooterComponent />
</div>
</template>

<script>
import GameCardsComponent from './GameCardsComponent.vue'
import HeaderComponent from './HeaderComponent.vue'
import FooterComponent from './FooterComponent.vue'

export default {
    name: 'GameCardsPage',
    components: {
        GameCardsComponent,
        HeaderComponent,
        FooterComponent
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
            app.cards = result.cards;
        })
        .catch(err => console.log(err))
    }
}
</script>
<style lang="scss" scoped>
// Variables

// SCSS


</style>

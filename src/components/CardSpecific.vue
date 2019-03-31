<template>
    <div>
        <HeaderComponent />
            <div class="row">
                <div class="col-sm-3"></div><!-- Empty -->
                    <div class="col-sm-6">
                        <CardSpecificComponent  v-bind:name="character.name"
                                                v-bind:colors="character.colors"
                                                v-bind:type="character.type"
                                                v-bind:rarity="character.rarity"
                                                v-bind:text="character.text"
                                                v-bind:img="character.imageUrl"
                                                v-bind:id="character.id"
                        />
                    </div>
                <div class="col-sm-3"></div><!-- Empty -->
            </div>
        <FooterComponent />
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue'
import CardSpecificComponent from './CardSpecificComponent.vue'
import FooterComponent from './FooterComponent.vue'
import GameCardsPage from './GameCardsPage.vue'

export default {
    name: 'CardSpecific',
    components: {
        HeaderComponent,
        CardSpecificComponent,
        FooterComponent
    },
    props: [
        'id'
    ],
    data() {
        return {
            characters: []
        }
    },
    beforeMount: function() {
        const app = this;
        const corsUrl = 'https://cors-anywhere.herokuapp.com/';
        const gameUrl = 'https://api.magicthegathering.io/v1/cards';

        fetch(corsUrl + gameUrl + id)
        .then(function(response) {
            return response.json();
        })
        .then(function(result) {
            app.characters = result.cards;
        })
        .catch(err => console.log(err))
    }
}
</script>
<style lang="scss" scoped>

</style>

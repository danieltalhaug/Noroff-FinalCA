<template>
    <div>
        <HeaderComponent />
            <div class="container">
                <div class="row row-height">
                    <div class="col-md-4"></div><!-- Empty -->
                        <div class="col-md-4">
                            <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search"/>
                                <div class="input-group-btn">
                                    <button class="btn btn-blue" type="submit" v-on:click.prevent="filterSearch">
                                        <span class="glyphicon glyphicon-search"></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    <div class="col-md-4"></div><!-- Empty -->
                </div><!-- Searchbar end -->
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
            searchterm: '',
            cards: []
        }
    },
    methods: {
        getApi: function() {
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
            // .catch(err => console.log(err))
            // removed for now because it gives an eslint error 
        },
        filterSearch: function() {
            const app = this;
            return app.cards.indexOf(app.searchterm);
        }
    },
    beforeMount: function() {
        const app = this;
        app.getApi();
    }
}
</script>
<style lang="scss" scoped>
// Variables

// SCSS
.row-height {
    padding: 20px 0 10px 0;
}
.btn-blue {
    background-color: #0c8ed7;
    color: white;
    &:hover {
        background-color: darken( #0c8ed7, 5% );
    }
}
</style>

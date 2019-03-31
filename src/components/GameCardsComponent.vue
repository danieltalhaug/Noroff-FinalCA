<template>
    <div class="col-sm-4">
        <div class="card">
            <h3 class="card__title">{{name}}</h3>
            <div v-if="img === undefined">
                <img class="card__image" src="https://via.placeholder.com/223x310">
            </div>
            <div v-else>
                <img class="card__image" :src="img">
            </div>
            <router-link class="card__link card__link--blue" to="/character">View More</router-link>
        </div>
    </div>
</template>

<script>

export default {
    name: 'GameCardsComponent',
    props: [
        'name',
        'colors',
        'type',
        'rarity',
        'text',
        'img',
        'id'
        ]
}
</script>

<style lang="scss" scoped>
    .card {
        display: flex;
        flex-direction: column;
        height: 500px;
        border: 1px solid #3e3f43;
        background-color: white;
        margin: 10px 0 15px 0;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
        &__title{
            color: #0c8ed7;
            font-size: 2em;
            padding: 0 0 10px 0;
        }
        &__image{
            border-radius: 10px;
            height: 310px;
            width: 223px;
            margin: 0 auto;
        }
        &__link {
            margin-top: 20px;
            padding: 15px 0 15px 0;
            &--blue{
                background-color: #0c8ed7;
                color: white;
                font-size: 1.2em;
            }&:hover {
                background-color: darken( #0c8ed7, 5% );
                text-decoration: none;
            }
        }
    }
</style>

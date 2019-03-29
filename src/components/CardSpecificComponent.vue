<template>
    <div>
        <h3>{{name}}</h3>
        <img class="card__image" :src="img">
        <ul>
            <li>{{colors}}</li>
            <li>{{type}}</li>
            <li>{{rarity}}</li>
        </ul>
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    name: 'CardSpecificComponent',
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

</style>



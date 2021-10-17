<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs" :key="job.id">
        <h2>{{job.title}}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {title: 'Web designer', id: 1, details: 'lorem'},
                {title: 'Web developer', id: 2, details: 'lorem2'},
                {title: 'Painter', id: 3, details: 'lorem3'},
            ]
        }
    }
}
</script>

<style>

</style>
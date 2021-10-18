<template>
  <h1>{{job.title}}</h1>
  <p>{{job.details}}</p>
</template>

<script>
export default {
    props: ['job_id'], //route parameters can be accepted as props
    data() {
        return {
            job: {}
        }
    },
    mounted() {
        fetch(`http://localhost:3000/jobs/${this.job_id}`)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>
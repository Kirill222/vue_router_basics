<template>
  <h1>Job details page</h1>
  <p>The job id is {{job_id}}</p>
</template>

<script>
export default {
    props: ['job_id'], //route parameters can be accepted as props
    data() {
        return {
            //job_id: this.$route.params.job_id,  //this is another way to extract ID parameter from URL, but here props are used to do so
        }
    }
}
</script>

<style>

</style>
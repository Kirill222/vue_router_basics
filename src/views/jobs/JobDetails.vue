<template>
  <h1>Job details page</h1>
  <p>The job id is {{job_id}}</p>
</template>

<script>
export default {
    data() {
        return {
            job_id: this.$route.params.job_id,
        }
    }
}
</script>

<style>

</style>
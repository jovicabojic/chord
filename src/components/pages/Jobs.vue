<template>
  <section>
    <template v-if="jobs">
      <div class="row">
        <div class="col-12">
          <table class="b-table">
            <thead>
            <tr>
              <th>User name</th>
              <th>Job name</th>
              <th>Client name</th>
              <th>Start time</th>
              <th>End time</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(job, index) in jobs" :key="index">
              <td>{{job.id}}</td>
              <td>{{job.id}}</td>
              <td>{{job.client.name}}</td>
              <td>{{job.start_time}}</td>
              <td>{{job.end_time}}</td>
            </tr>
            </tbody>
          </table>
        </div>
<!--        <pagination class="col-sm-6 mb-1" :changePage="changePage"></pagination>-->
      </div>
    </template>
  </section>
</template>

<script>
  // import Pagination from '../common/Pagination'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'JobsList',
    data() {
      return {
        page: 1,
      }
    },
    computed: {
      ...mapGetters({
        jobs: 'jobs'
      })
    },
    methods: {
      ...mapActions(
        ['getJobs']
      ),
      changePage(pageNum) {
        this.page = pageNum
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.getJobs()
      })
    },
    // components: {
    //   Pagination
    // }
  }
</script>

<style lang="scss" scoped>
  table {
    width: 100%;
  }
</style>


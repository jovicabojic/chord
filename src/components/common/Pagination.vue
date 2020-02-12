<template>
  <div>
    <nav aria-label="navigation">
      <ul class="pagination">
        <li class="page-item">
          <span class="page-link" aria-label="Previous" @click="changePage()">
            <span aria-hidden="true"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
            <span class="sr-only">Previous</span>
          </span>
        </li>
        <li class="page-item">
          <span class="page-link" aria-label="Previous" @click="prevPage">
            <span aria-hidden="true"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
            <span class="sr-only">Previous</span>
          </span>
        </li>
        <li class="page-item" v-if="meta.current_page > 1">
          <span class="page-link" @click="changePage(meta.current_page - 1)">{{meta.current_page - 1}}</span>
        </li>
        <li class="page-item active">
          <span class="page-link" @click="changePage(meta.current_page, day)">{{meta.current_page}}</span>
        </li>
        <li class="page-item" v-if="meta.current_page < meta.last_page">
          <span class="page-link" @click="changePage(meta.current_page + 1, day)">{{meta.current_page + 1}}</span>
        </li>
        <li class="page-item">
          <span class="page-link" aria-label="Next" @click="nextPage">
            <span aria-hidden="true"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
            <span class="sr-only">Next</span>
          </span>
        </li>
        <li class="page-item">
          <span class="page-link" aria-label="Next" @click="changePage(meta.last_page)">
            <span aria-hidden="true"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
            <span class="sr-only">Next</span>
          </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    props: ['changePage', 'meta'],
    methods: {
      prevPage () {
        this.meta.current_page > 1 && this.changePage(this.meta.current_page - 1)
      },
      nextPage () {
        this.meta.current_page < this.meta.current_page && this.changePage(this.meta.current_page + 1)
      }
    }
  }
</script>
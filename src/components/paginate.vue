
<template>
<div class="dataTables_paginate paging_simple_numbers" :id="paginate.id + '_paginate'">
  <ul class="pagination">
    <li :class="paginate.page==1?'paginate_button previous disabled':'paginate_button previous'" :id="paginate.id + '_previous'">
      <a @click="clickPageBtn" href="javascript:void(0)" data="previous">上一页</a>
    </li>
    <template v-if="lastPage>(2*linkedPageCount)">
      <li :class="paginate.page==1?'paginate_button active':'paginate_button'" :id="paginate.id + '_1'" >
        <a @click="clickPageBtn" href="javascript:void(0)" :data="1">1</a>
      </li>
      <li v-for="elem in linkedPageCount" :key="paginate.id + '_a_' + (elem+1)"
        :id="paginate.id + '_' + (elem+1)"
        :class="paginate.page==(elem+1)?'paginate_button active':'paginate_button'"
        v-show="paginate.page<(1+linkedPageCount)">
        <a @click="clickPageBtn" href="javascript:void(0)" v-text="(elem+1)" :data="(elem+1)"></a>
      </li>
      <li class="paginate_button disabled" :id="paginate.id + '_first_ellipsis'" v-show="paginate.page>=(1+linkedPageCount)">
        <a @click="clickPageBtn" href="javascript:void(0)">…</a>
      </li>
      <li v-for="elem in [-1,0,1]" :key="paginate.id + '_b_' + (paginate.page+elem)"
        :id="paginate.id + '_' + (paginate.page+elem)"
        :class="paginate.page==(paginate.page+elem)?'paginate_button active':'paginate_button'"
        v-show="paginate.page>=(1+linkedPageCount) && paginate.page<=(lastPage-linkedPageCount)">
        <a @click="clickPageBtn" href="javascript:void(0)" v-text="paginate.page+elem" :data="paginate.page+elem"></a>
      </li>
      <li class="paginate_button disabled" :id="paginate.id + '_last_ellipsis'" v-show="paginate.page<=(lastPage-linkedPageCount)">
        <a @click="clickPageBtn" href="javascript:void(0)">…</a>
      </li>
      <li v-for="elem in linkedPageCount" :key="paginate.id + '_c_'+ (lastPage-(linkedPageCount + 1 - elem))"
        :id="paginate.id + '_'+ (lastPage-(linkedPageCount + 1 - elem))"
        :class="paginate.page==(lastPage-(linkedPageCount + 1 - elem))?'paginate_button active':'paginate_button'"
        v-show="paginate.page>(lastPage-linkedPageCount)">
        <a @click="clickPageBtn" href="javascript:void(0)" v-text="lastPage-(linkedPageCount + 1 - elem)" :data="lastPage-(linkedPageCount + 1 - elem)"></a>
      </li>
      <li :class="paginate.page==lastPage?'paginate_button active':'paginate_button'" :id="paginate.id + '_'+ lastPage">
        <a @click="clickPageBtn" href="javascript:void(0)" v-text="lastPage" :data="lastPage"></a>
      </li>
    </template>
    <template v-else>
      <li v-for="elem in lastPage" :key="paginate.id + '_d_'+elem"
      :id="paginate.id + '_'+elem"
      :class="paginate.page==elem?'paginate_button active':'paginate_button'">
        <a @click="clickPageBtn" href="javascript:void(0)" v-text="elem" :data="elem"></a>
      </li>
    </template>
    <li :class="paginate.page==lastPage?'paginate_button next disabled':'paginate_button next'" :id="paginate.id + '_next'">
      <a @click="clickPageBtn" href="javascript:void(0)" data="next" style="border-top-right-radius:4px;border-bottom-right-radius:4px;">下一页</a>
    </li>
    <li class="paginate_jump_box">
      <div class="btn-group">
        <span class="btn btn-default disabled">到第</span>
        <input class="form-control input-sm" type="text" :value="paginate.page" ref="jump-page">
        <span class="btn btn-default disabled">页</span>
        <button type="button" class="btn btn-default" @click="clickJumpBtn">跳转</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'Paginate',
  props: {
    paginate: {
      required: true,
    },
    linkedPageCount: {
      default: 4,
    },
  },
  computed: {
    lastPage() {
      return Math.ceil(this.paginate.total / this.paginate.size);
    },
  },
  methods: {
    doJumpPage(_page) {
      let page = _page;
      if (page === 'previous' && this.paginate.page > 1) {
        page = this.paginate.page - 1;
      }
      if (page === 'next' && this.paginate.page < this.lastPage) {
        page = this.paginate.page + 1;
      }
      page = parseInt(page, 10);
      if (isNaN(page) || page === this.paginate.page) {
        return;
      }
      this.$emit('gotoPage', page);
    },
    clickPageBtn(event) {
      const page = event.target.getAttribute('data');
      this.doJumpPage(page);
    },
    clickJumpBtn() {
      let page = this.$refs['jump-page'].value;
      page = parseInt(page, 10);
      if (isNaN(page)) {
        return;
      }
      if (page < 1) {
        page = 1;
      }
      if (page > this.lastPage) {
        page = this.lastPage;
      }
      this.$refs['jump-page'].value = page;
      if (page === this.paginate.page) {
        return;
      }
      this.doJumpPage(page);
    },
  },
};
</script>

<style scoped>
.pagination{
  margin:0px;
}
.paginate_jump_box .btn-group{
  margin-left: 10px;
}
.paginate_jump_box *{
  position: relative;
  display: inline;
  font-weight:normal;
  float: left;
}
.paginate_jump_box input{
  text-align: center;
  width: 40px;
  padding:2px 5px;
  height:34px;
  font-size:12px;
  margin: 0px -1px;
  z-index: 1;
}
.paginate_jump_box span,
.paginate_jump_box span:hover,
.paginate_jump_box span:focus,
.paginate_jump_box span:active{
  background-color: #f4f4f4;
  border-color: #ddd;
  cursor: auto !important;
  box-shadow:none;
}
</style>

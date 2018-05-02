<template>
    <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">{{tasks.length}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">你有{{tasks.length}}条任务!</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <!-- end task item -->
                  <li v-for="(task, index) in tasks" :key="index">
                    <a href="javascript:;">
                      <h3>
                        {{task.name}}
                        <small class="pull-right">{{task.complete}}</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-yellow" 
                            :class="['progress-bar', 'progress-bar-'+taskColor(task)]"
                            :style="{width: task.complete}" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">{{task.complete}} Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer" v-show="false">
                <a href="#">查看所有任务</a>
              </li>
            </ul>
          </li>
</template>
<script>
    export default {
        data() {
          return {
              tasks: [
                {
                    name: '客户订单下载中',
                    complete: '81%'
                }
            ]
          }
        },
        methods: {
            taskColor(task) {
                const n = parseInt(task.complete);
                if(n <= 20) {
                    return 'aqua';
                } else if(n > 20 && n <= 40) {
                    return 'green';
                } else if(n > 40 && n <= 60) {
                    return 'red';
                } else if(n > 60 && n <= 80) {
                    return 'yellow';
                } else {
                    return 'yellow';
                }
            }
        }
    }
</script>


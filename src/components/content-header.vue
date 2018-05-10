<template>
    <section class="content-header">
        <h1>
            {{title}}
            <small></small>
        </h1>
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Examples</a></li>
            <li class="active">Pace page</li>
        </ol>
    </section>
</template>
<script>
    export default {
        props: {
            title: {default: '页面标题'},
            breadCrumbs: {type: Array}
        }
    }
</script>

<template>
    <li class="dropdown user user-menu">
		<a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" @click="logout">
			<i class="fa fa-fw fa-sign-out"></i><span class="hidden-xs">退出系统</span>
		</a>
		<ul class="dropdown-menu" v-show="false">
			<!-- User image -->
			<li class="user-header">
			<img src="../../assets/images/user.jpg" class="img-circle" alt="User Image">

			<p>
				Alexander Pierce - Web Developer
				<small>Member since Nov. 2012</small>
			</p>
			</li>
			<!-- Menu Body -->
			<li class="user-body">
			<div class="row">
				<div class="col-xs-4 text-center">
				<a href="#">Followers</a>
				</div>
				<div class="col-xs-4 text-center">
				<a href="#">Sales</a>
				</div>
				<div class="col-xs-4 text-center">
				<a href="#">Friends</a>
				</div>
			</div>
			<!-- /.row -->
			</li>
			<!-- Menu Footer-->
			<li class="user-footer">
			<div class="pull-left">
				<a href="#" class="btn btn-default btn-flat">Profile</a>
			</div>
			<div class="pull-right">
				<a href="#" class="btn btn-default btn-flat">Sign out</a>
			</div>
			</li>
		</ul>
	</li>
</template>
<script>
	import { User } from '@/module';
    export default {
		methods: {
			logout() {
				User.logout()
				.then(res => {
					this.$router.push('/');
					sessionStorage.clear();
				})
			}
		}
    }
</script>



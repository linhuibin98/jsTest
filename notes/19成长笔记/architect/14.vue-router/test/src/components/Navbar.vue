<template>
  <div class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="javascript:void(0)">
          后台
        </a>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><router-link to='/'>首页</router-link></li>
          <li><router-link to='/user'>用户管理</router-link></li>
          <li><router-link to='/login'>登录</router-link></li>
          <li><router-link to='/about'>关于</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>
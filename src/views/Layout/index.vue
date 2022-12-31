<template>
  <div>
    布局容器
    <RouterView></RouterView>
  </div>
  <van-tabbar>
    <van-tabbar-item>
      首页
      <template #icon>
        <CpIcon name="user-home-active"></CpIcon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      健康百科
      <template #icon>
        <CpIcon name="user-article-active"></CpIcon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      消息中心
      <template #icon>
        <CpIcon name="user-notify-active"></CpIcon>
      </template>
    </van-tabbar-item>
    <van-tabbar-item>
      我的
      <template #icon>
        <CpIcon name="user-user-active"></CpIcon>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts"></script>

<style scoped>
/* .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 36px;
    justify-content: space-between;
    align-items: center;
} */
</style>

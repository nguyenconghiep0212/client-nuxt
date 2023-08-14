<template>
  <div>
    <el-menu
      :default-active="'1'"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="index.toString()">
        <NuxtLink :to="item.path">
          {{ item.title }}
        </NuxtLink>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
const menu = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Menu",
    path: "/menu",
  },
];
</script>

<template>
  <div class="h-[100vh] flex flex-col">
    <Header class="flex-[0 0 auto]" />
    <div class="flex-auto">
      <slot />
    </div>
    <Navigation />
    <Footer class="flex-[0 0 auto]" />
  </div>
</template>
<script lang="ts" setup></script>

<template>
  <div class="fixed z-50 bottom-16 right-5">
    <ChatMessageRoom v-show="chatVisible" class="mb-2" />
    <div class="text-right">
      <el-button type="primary" circle @click="onOpenChatNav">
        <Icon name="carbon:send-alt-filled" color="white" />
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const chatVisible = ref(false);
function onOpenChatNav() {
  chatVisible.value = !chatVisible.value;
}
</script>

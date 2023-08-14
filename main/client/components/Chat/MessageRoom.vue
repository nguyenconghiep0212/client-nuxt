<template>
  <div class="bg-gray-200 rounded">
    <ChatMessageBox :socket="socket" />
    <ChatInputBox :socket="socket"/>
  </div>
</template>
<script lang="ts" setup> 
const ctx = useNuxtApp();
const socket = ref();
onBeforeMount(() => {
  socket.value = ctx.$nuxtSocket({
    channel: "/index",
    reconnection: false,
    teardown: false,
  });
  console.log(socket.value);

});

</script>
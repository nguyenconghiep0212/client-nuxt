<template>
  <div id="conversation-box" class="h-[40vh] min-h-[200px] pt-1">
    <div v-for="item in conversation" :key="renderFlag" class="mt-2">
      <!-- USER -->
      <div v-if="item.type == TYPE.USER" class="mt-1 text-right">
        <span class="px-2 py-1 mr-2 text-white bg-blue-400 rounded-lg">
          {{ item.text }}
        </span>
      </div>
      <!-- TARGET -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore, Conversation, TYPE } from "@store/MessageStore";
const props = defineProps({
  socket: { type: Object },
});
const store = useStore();
const dayjs = useDayjs();
const conversation = ref<Conversation[]>([]);
const renderFlag = ref(false);
props.socket?.on("getMessage", (msg, cb) => {
  console.log("msg", msg);
  console.log("cb", cb);
});
watch(
  () => store.conversation,
  () => {
    conversation.value = store.getConversation;
    renderFlag.value = !renderFlag.value;
    console.log("watch state", conversation.value);
  },
  { deep: true }
);
</script>

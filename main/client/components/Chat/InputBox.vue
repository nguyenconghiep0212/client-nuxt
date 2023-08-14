<template>
  <div>
    <form>
      <label for="chat" class="sr-only">Your message</label>
      <div class="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700">
        <el-button type="text">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              fill="currentColor"
              d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z"
            />
          </svg>
          <span class="sr-only">Upload image</span>
        </el-button>
        <el-button type="text">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"
            />
          </svg>
          <span class="sr-only">Add emoji</span>
        </el-button>
        <el-input
          v-model="message"
          class="mx-2"
          type="textarea"
          rows="1"
          placeholder="Your message..."
          @keyup.enter.native="handleEnter"
        />
        <el-button type="text" @click="sendMessage">
          <svg
            class="w-5 h-5 rotate-90"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 20"
          >
            <path
              d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"
            />
          </svg>
        </el-button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { useStore, Conversation, TYPE } from "@store/MessageStore";
const props = defineProps({
  socket: { type: Object },
});
const store = useStore();
const message = ref("");
const conversation: Conversation[] = [];

function handleEnter(e: any) {
  if (!e.shiftKey) {
    e.stopPropagation();
    e.preventDefault();
    sendMessage();
  }
}
function sendMessage() {
  store.setConversation([]);
  conversation.push({
    id: Math.random(),
    text: message.value,
    type: TYPE.USER,
    time: new Date().getTime(),
  });
  store.setConversation(conversation);
  socketEmit();
  message.value = "";
}

function socketEmit() {
  return new Promise<void>((resolve) => {
    props.socket?.emit("getMessage", message.value, (resp: any) => {
      console.log(resp);
      resolve();
    });
  });
}
</script>

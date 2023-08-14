export interface Conversation {
  id: number;
  text: string;
  time: string;
  type: string;
}
export enum TYPE {
  USER = "user",
  TARGET = "target",
}
export const socketStore = () => ({})

export const useStore = defineStore("excuteStore", () => {
  const conversation = ref<Conversation[]>([]);
  const getConversation = computed(() => conversation.value);
  const setConversation = (value: Conversation[]) => {
    conversation.value = value;
  };

  return { conversation, getConversation, setConversation };
});

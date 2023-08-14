export default {
  sockets: [
    {
      name: "chat",
      url: "http://localhost:3001",
      default: true,
      namespaces: {
        "/index": {
          emitters: ["getMessage --> messageRxd"],
          listeners: ["chatMessage"],
        },
      },
    },
  ],
};

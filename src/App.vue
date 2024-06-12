<script setup>
import Card from "primevue/card";
import Avatar from "primevue/avatar";
import ScrollPanel from "primevue/scrollpanel";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import {computed, onMounted, ref} from "vue";

const message = ref("");

const messages = ref([
  {
    id: 1,
    text: "Приветствую вас на сайте колледжа «Знание»! Если у вас возникли какие-то вопросы, задавайте.",
    sender: "amy"
  },
  {
    id: 2,
    text: "Приветствую вас на сайте колледжа «Знание»! Если у вас возникли какие-то вопросы, задавайте.",
    sender: "amy"
  },
  {
    id: 3,
    text: "Приветствую вас на сайте колледжа «Знание»! Если у вас возникли какие-то вопросы, задавайте.",
    sender: "amy"
  },
  {
    id: 4,
    text: "Приветствую вас на сайте колледжа «Знание»! Если у вас возникли какие-то вопросы, задавайте.",
    sender: "amy"
  },
  {
    id: 5,
    text: "Приветствую вас на сайте колледжа «Знание»! Если у вас возникли какие-то вопросы, задавайте.",
    sender: "amy"
  }
]);

const sendMessage = () => {
  messages.value.push({
    id: messages.value.length + 1,
    text: message.value,
    sender: "me"
  });
  message.value = "";

  setTimeout(() => {
    const element = document.querySelector(".p-scrollpanel-content");
    element.scrollTop = element.scrollHeight;
  }, 100)

}

onMounted(() => {
  setTimeout(() => {
    const element = document.querySelector(".p-scrollpanel-content");
    element.scrollTop = element.scrollHeight;
  }, 100)
})

const style = computed(() => {
  return "background-color: var(--primary-color); color: var(--primary-color-text); border-radius: var(--border-radius)"
})
</script>

<template>
  <div class="chat-widget">
    <Card style="width: 25rem;  overflow: hidden; padding: .5rem">
      <template #header>
        <div :style="style" class="header">
          <Avatar label="O" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261" shape="circle"/>
          <span class="font-bold">Оператор</span>
        </div>
      </template>
      <template style="padding: 0 !important;" #content>
        <ScrollPanel style="width: 100%; height: 25rem;" class="massage-content">
          <div
              v-for="message in messages"
              class="message-panel"
              :key="message.id">
            <template v-if="message.sender !== 'me'">
              <Avatar label="O" class="mr-2" size="large" style="background-color: #ece9fc; color: #2a1261"
                      shape="circle"/>
              <p class="message">{{ message.text }}</p>
              <p class="date">{{ new Date().toLocaleTimeString() }}</p>

            </template>
            <template v-else>
              <div class="message-left">
                <p class="message">{{ message.text }}</p>
                <p class="date">{{ new Date().toLocaleTimeString() }}</p>
              </div>
            </template>
          </div>
        </ScrollPanel>
      </template>
      <template #footer>
        <InputGroup style="display:flex; gap: .5rem; width: 100%;">
          <InputText @keydown.enter="sendMessage" style="width: 100%;" type="text" v-model="message" placeholder="Введите сообщение"/>
          <Button @click="sendMessage" icon="pi pi-send" severity="success"/>
        </InputGroup>
      </template>
    </Card>
  </div>
</template>

<style lang="scss">

.p-card-body {
  padding: 0 !important;
}

.p-scrollpanel-content {
  display: flex !important;
  flex-direction: column;
}

.message-left {
  display: flex !important;
  justify-content: end !important;
  width: 100%;
  margin-top: 1rem;
  gap: 0.5rem;
  padding-right: 15px;
  align-items: flex-end;

  .message {
    background-color: var(--primary-color);
    color: var(--primary-color-text);
  }
}

.message-panel {
  display: flex;
  align-items: start;
  gap: 0.5rem;
  margin-top: 1rem;
}

.message {
  width: 50%;
  word-wrap: anywhere;
  padding: .5rem;
  border: 2px solid var(--primary-color);
  border-radius: var(--border-radius);
  margin: 0;
}

.header {
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.date {
  font-size: 0.5rem;
  margin: 0;
  padding: 0;
}

</style>

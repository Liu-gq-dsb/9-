<template>
  <div id="app">
    <div class="sidebar">
      <ul>
        <li @click="selectItem('dashboard')">工作台</li>
        <li @click="selectItem('projects')">项目</li>
        <li @click="selectItem('ai')">AI</li>
        <li @click="selectItem('tasks')">事项</li>
        <li @click="selectItem('code')">代码</li>
        <li @click="selectItem('artifacts')">制品</li>
        <li @click="selectItem('insights')">洞察</li>
        <li @click="selectItem('knowledge')">知识</li>
        <li @click="selectItem('automation')">自动化</li>
      </ul>
    </div>
    <div class="content">
      <div v-if="selectedItem === 'tasks'">事项的内容...</div>
      <div v-else-if="selectedItem === 'code'">
        <HorizontalNav></HorizontalNav>
      </div>
      <div v-else>请选择一个选项</div>
    </div>
  </div>
</template>

<script>
import HorizontalNav from "./HorizontalNav.vue";
export default {
  components: {
    HorizontalNav,
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
}

.sidebar {
  width: 120px;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  top: -100px;
  left: -870px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

.sidebar li:hover {
  background-color: #e1e1e1;
}

.content {
  width: 500px;
  height: 500px;
  flex-grow: 1;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  top: -100px;
  left: -870px;
}
</style>

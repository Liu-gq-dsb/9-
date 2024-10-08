<template>
  <div>
    <p>代码仓库</p>
    <hr />
  </div>
  <div class="navbar">
    <ul>
      <li @click="selectItem('recent')">最近访问</li>
      <li @click="selectItem('all')">全部仓库</li>
      <li @click="selectItem('open-source')">开元仓库</li>
    </ul>
    <div class="content">
      <div v-if="selectedItem === 'recent'">暂无数据</div>
      <div v-else-if="selectedItem === 'all'"><QuanBu></QuanBu></div>
      <div v-else-if="selectedItem === 'open-source'">开元仓库的内容...</div>
    </div>
  </div>
</template>

<script>
import QuanBu from "./ThreeView/QuanBu.vue";
export default {
  components: {
    QuanBu,
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
.navbar {
  padding: 10px;
  box-sizing: border-box;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.navbar li {
  padding: 10px;
  cursor: pointer;
  margin-right: 5px;
}

.navbar li:hover {
  background-color: #e9e9e9;
}

.content {
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
}
</style>

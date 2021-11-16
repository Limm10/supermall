<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image">
        <!-- title放入文字  -->
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;

    padding: 10px 0 15px;
    border-bottom: 6px solid #eee;
  }
  .recommends-item {
    flex: 1;
  }
  .recommends-item img {
    width: 90%;
    margin-bottom: 6px;
  }
</style>

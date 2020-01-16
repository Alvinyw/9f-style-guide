<template>
  <div class="sec colorGuide">
    <h2>色彩规范</h2>
    <p class="type">品牌色</p>
    <div v-for="item in colorAry.brandColor" :key="item.color+item.text" class="item">
      <div class="color" :style="`background-color:${ item.color }`">{{ item.color }}</div>
      <p class="text">{{ item.text }}</p>
    </div>
    <p class="type">基础文字</p>
    <div v-for="item in colorAry.basicColor" :key="item.color+item.text" class="item">
      <div class="color" :style="`background-color:${ item.color }`">{{ item.color }}</div>
      <p class="text">{{ item.text }}</p>
    </div>
    <p class="type">中性色</p>
    <div v-for="item in colorAry.neutralColor" :key="item.color+item.text" class="item">
      <div class="color" :style="`background-color:${ item.color }`">{{ item.color }}</div>
      <p class="text">{{ item.text }}</p>
    </div>
    <p class="type">辅助色</p>
    <div v-for="item in colorAry.assistColor" :key="item.color+item.text" class="item">
      <div class="color" :style="`background-color:${ item.color }`">{{ item.color }}</div>
      <p class="text">{{ item.text }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ColorGuide",
  data() {
    return {
      // 色彩规范
      colorAry: {
        // 主题色
        brandColor: [
          { color: "#F53A31", text: "品牌色，用于按钮、关键文字等" }
        ],
        // 基础文字
        basicColor: [
          { color: "#222222", text: "一级标题，重要" },
          { color: "#333333", text: "二级标题，正文文字" },
          { color: "#666666", text: "暗文字，次要" },
          { color: "#999999", text: "较弱，用于提示" },
          { color: "#CCCCCC", text: "较弱，用于提示" },
          { color: "#0091FF", text: "链接色" },
          { color: "#F53A31", text: "错误提示色" },
          { color: "#ED9709", text: "强调、警告色" },
          { color: "#0CC154", text: "正确色" }
        ],
        // 中性色
        neutralColor: [
          { color: "#D9D9D9", text: "输入框边框" },
          { color: "#EFEFEF", text: "分割线" },
          { color: "#F4F5F6", text: "背景底色" }
        ],
        // 辅助色
        assistColor: [
          { color: "#0091FF", text: "提示，中性" },
          { color: "#F53A31", text: "错误，负面" },
          { color: "#ED9709", text: "警告，偏负面" },
          { color: "#0CC154", text: "安全，正面" }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.colorGuide {
  .type {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
  }
  .item {
    display: inline-block;
    width: 100%;
    max-width: 260px;
    margin: 0 20px 40px 0;
    .color {
      width: 100%;
      height: 56px;
      padding-right: 10px;
      font-size: 18px;
      color: #fff;
      text-align: right;
      line-height: 80px;
    }
    .text {
      margin-top: 10px;
      font-size: 16px;
      color: #999;
    }
  }
}
</style>
<template>
  <div id="styleGuide">
    <div class="container">
      <div class="sec_top">
        <img src="@/assets/images/logo-9f_operation-34x26.png" alt="9f LOGO" />
        <h1>TE运营平台设计规范</h1>
        <p class="ver">v1.1 2019.08.23</p>
      </div>
      <div class="mainContent">
        <ColorGuide />
        <TextGuide />
        <ComponentGuide />
      </div>
    </div>
  </div>
</template>
<script>
import ColorGuide from "./components/ColorGuide";
import TextGuide from "./components/TextGuide";
import ComponentGuide from "./components/ComponentGuide";

export default {
  name: "StyleGuide",
  components: {
    ColorGuide,
    TextGuide,
    ComponentGuide
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
#styleGuide {
  h2 {
    margin: 60px 0 30px;
    font-size: 40px;
    color: #222;
  }
  .mainContent {
    .sec {
    }
  }
}
</style>
<style lang="scss" scoped>
#styleGuide {
  background-color: #f5f5f5;
  min-height: 100%;
  .container {
    background-color: #fff;
  }
  .sec_top {
    height: 400px;
    padding-top: 80px;
    background-color: #f53a31;
    img {
      display: block;
      margin: 0 auto;
    }
    h1 {
      font-size: 72px;
      color: #fff;
      text-align: center;
    }
    p.ver {
      font-size: 30px;
      color: #fff;
      text-align: center;
    }
  }
  .mainContent {
    padding: 0 60px;
    padding-bottom: 60px;
  }
}
</style>
<template>
  <div class="sec textGuide">
    <h2>文字样式</h2>
    <table>
      <tr>
        <td style="font-size:18px;font-weight:bold;color:#222;">标准字</td>
        <td>18px Bold</td>
        <td>#222222</td>
        <td>一级标题</td>
      </tr>
      <tr>
        <td style="font-size:16px;font-weight:bold;color:#333;">标准字</td>
        <td>16px bold</td>
        <td>#333333</td>
        <td>二级标题</td>
      </tr>
      <tr>
        <td style="font-size:14px;font-weight:normal;color:#333;">标准字</td>
        <td>14px Normal</td>
        <td>#333333</td>
        <td>正文</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "TextGuide"
};
</script>
<style lang="scss" scoped>
.textGuide {
  table {
    width: 100%;
    tr {
      td {
        padding: 30px 40px;
        border-bottom: 1px solid #efefef;
        &:first-child {
          padding-left: 0;
        }
      }
      &:last-child {
        td {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
<template>
  <div class="sec componentGuide">
    <h2>组件规范</h2>
    <div class="item button">
      <h3>01 按钮 Button</h3>
      <table>
        <tr>
          <td></td>
          <td>主按钮</td>
          <td>次按钮/Red</td>
          <td>次按钮/Gray</td>
          <td>链接按钮</td>
        </tr>
        <tr>
          <td>Normal</td>
          <td>
            <button class="btn primary">提交</button>
          </td>
          <td>
            <button class="btn primary plain">审核退回</button>
          </td>
          <td>
            <button class="btn plain">审核退回</button>
          </td>
          <td>
            <button class="btn text">编辑</button>
          </td>
        </tr>
        <tr>
          <td>Hover</td>
          <td>
            <button class="btn primary h">提交</button>
          </td>
          <td>
            <button class="btn primary plain h">审核退回</button>
          </td>
          <td>
            <button class="btn plain h">审核退回</button>
          </td>
          <td>
            <button class="btn text h">编辑</button>
          </td>
        </tr>
        <tr>
          <td>Click</td>
          <td>
            <button class="btn primary a">提交</button>
          </td>
          <td>
            <button class="btn primary plain a">审核退回</button>
          </td>
          <td>
            <button class="btn plain a">审核退回</button>
          </td>
          <td>
            <button class="btn text a">编辑</button>
          </td>
        </tr>
        <tr>
          <td>Disabled</td>
          <td>
            <button class="btn primary" disabled>提交</button>
          </td>
          <td>
            <button class="btn primary plain" disabled>审核退回</button>
          </td>
          <td>
            <button class="btn plain" disabled>审核退回</button>
          </td>
          <td>
            <button class="btn text" disabled>编辑</button>
          </td>
        </tr>
      </table>
    </div>
    <div class="item radio">
      <h3>02 单选 Radio</h3>
      <div class="lt">
        <p class="lbl">按钮单选</p>
        <ul id="componentGuide_radio_one" class="one">
          <li class="notClick">是否使用自营品牌：</li>
          <li class="on">是</li>
          <li>否</li>
          <li class="disabled notClick">禁用状态</li>
        </ul>
      </div>
      <div class="rt">
        <p class="lbl">常规单选</p>
        <ul id="componentGuide_radio_two" class="two">
          <li>
            <label for="a">
              <input type="radio" name="radio1" id="a" /> 选型A
            </label>
          </li>
          <li>
            <label for="b">
              <input type="radio" name="radio1" id="b" /> 选型B
            </label>
          </li>
          <li>
            <label for="c">
              <input type="radio" name="radio1" id="c" disabled /> 禁用未选
            </label>
          </li>
          <li>
            <label for="d">
              <input type="radio" name="radio1" id="d" disabled checked /> 禁用已选
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="item checkbox">
      <h3>03 多选 Checkbox</h3>
      <div class="lt">
        <p class="lbl">按钮多选</p>
        <ul id="componentGuide_checkbox_one" class="one">
          <li class="notClick">选择产品类型：</li>
          <li class="on">服务产品</li>
          <li>应用产品</li>
          <li class="disabled notClick">禁用状态</li>
        </ul>
      </div>
      <div class="rt">
        <p class="lbl">常规单选</p>
        <ul class="two">
          <li>
            <label for="c_a">
              <input type="checkbox" id="c_a" /> 北京
            </label>
          </li>
          <li>
            <label for="c_b">
              <input type="checkbox" id="c_b" /> 上海
            </label>
          </li>
          <li>
            <label for="c_c">
              <input type="checkbox" id="c_c" disabled /> 深圳
            </label>
          </li>
          <li>
            <label for="c_d">
              <input type="checkbox" id="c_d" disabled checked /> 广州
            </label>
          </li>
        </ul>
      </div>
    </div>
    <div class="item input">
      <h3>04 输入框 Input</h3>
      <table>
        <tr>
          <td></td>
          <td>默认</td>
          <td>含清除按钮</td>
        </tr>
        <tr>
          <td>Normal</td>
          <td>
            <input type="text" placeholder="请输入" />
          </td>
          <td>
            <div class="clear">
              <input type="text" placeholder="请输入" />
              <i class="iconfont icon-closefilled"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>Hover</td>
          <td>
            <input type="text" placeholder="请输入" class="h" />
          </td>
          <td>
            <div class="clear h">
              <input type="text" placeholder="请输入" class="h" />
              <i class="iconfont icon-closefilled"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>Focus</td>
          <td>
            <input type="text" placeholder="请输入" class="f" />
          </td>
          <td>
            <div class="clear f">
              <input type="text" placeholder="请输入" class="f" />
              <i class="iconfont icon-closefilled"></i>
            </div>
          </td>
        </tr>
        <tr>
          <td>Disabled</td>
          <td>
            <input type="text" placeholder="请输入" disabled />
          </td>
          <td>
            <div class="clear">
              <input type="text" placeholder="请输入" disabled />
              <i class="iconfont icon-closefilled"></i>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "ComponentGuide",
  mounted() {
    // 单选按钮
    $("#componentGuide_radio_one li:not('.notClick')").each(function(
      index,
      element
    ) {
      $(element).click(function() {
        $("#componentGuide_radio_one li:not('.notClick')").removeClass("on");
        $("#componentGuide_radio_one li:not('.notClick')")
          .eq(index)
          .addClass("on");
      });
    });

    // 多选按钮
    $("#componentGuide_checkbox_one li:not('.notClick')").each(function(
      index,
      element
    ) {
      $(element).click(function() {
        $("#componentGuide_checkbox_one li:not('.notClick')")
          .eq(index)
          .toggleClass("on");
      });
    });

    // 含清除按钮的 Input 输入框
    $(".clear input[type='text']").each(function(index, element) {
      $(element).focus(function() {
        $(this).addClass("f");
        $(this)
          .parent(".clear")
          .addClass("f");
      });
      $(element).blur(function() {
        $(this).removeClass("f");
        $(this)
          .parent(".clear")
          .removeClass("f");
      });
    });
    $(".clear .icon-closefilled").each(function(index, element) {
      $(element).click(function() {
        $(this)
          .siblings("input[type='text']")
          .val("");
      });
    });
  }
};
</script>
<style lang="scss" scoped>
.componentGuide {
  .item {
    margin-bottom: 80px;
    h3 { 
      font-size: 30px;
      color: #333;
      margin-top: 50px;
    }
    &.button {
      table {
        tr {
          td {
            padding: 24px 30px;
            &:first-child {
              padding-left: 0;
            }
            button.btn {
              padding: 0 15px;
              min-width: 96px;
              height: 32px;
              line-height: 30px;
              border: 1px solid #d9d9d9;
              background-color: #fff;
              font-size: 14px;
              color: #333;
              border-radius: 2px;
              cursor: pointer;
              outline: none;
              &[disabled] {
                border-color: #d9d9d9 !important;
                background-color: #f9f9f9 !important;
                color: #b7b7b7 !important;
                cursor: not-allowed;
              }
              &.plain {
                &:hover,
                &.h {
                  border-color: #f7615a;
                  color: #f7615a;
                }
                &:active,
                &.a {
                  border-color: #e02020;
                  color: #e02020;
                }
              }
              &.text {
                background-color: unset !important;
                border: none;
                color: #1c50bb;
                &:hover,
                &.h {
                  color: #4a73c9;
                }
                &:active,
                &.a {
                  color: #0f40a8;
                }
              }
              &.primary {
                border-color: #f53a31;
                background-color: #f53a31;
                color: #fff;
                &:hover,
                &.h {
                  border-color: #f7615a;
                  background-color: #f7615a;
                }
                &:active,
                &.a {
                  border-color: #e02020;
                  background-color: #e02020;
                }
                &.plain {
                  border-color: #f53a31;
                  background-color: #ffff;
                  color: #f53a31;
                  &:hover,
                  &.h {
                    border-color: #f7615a;
                    color: #f7615a;
                  }
                  &:active,
                  &.a {
                    border-color: #e02020;
                    color: #e02020;
                  }
                }
              }
            }
          }
        }
      }
    }
    &.radio {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .lt {
        width: 55%;
        float: left;
      }
      .rt {
        width: 45%;
        float: right;
      }
      .lbl {
        font-size: 18px;
        color: #333;
        text-align: center;
        margin: 40px 0 20px;
      }
      .one {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        li {
          float: left;
          position: relative;
          cursor: pointer;
          &.notClick {
            cursor: auto;
          }
          &:first-child {
            font-size: 14px;
            line-height: 40px;
            color: #333;
            position: relative;
            padding-left: 10px;
            &::after {
              content: "*";
              display: block;
              color: #f53a31;
              font-size: 16px;
              position: absolute;
              left: 0;
              top: 2px;
            }
          }
          &:not(:first-child) {
            padding: 0 15px;
            min-width: 120px;
            height: 40px;
            line-height: 38px;
            font-size: 16px;
            color: #666;
            border: 1px solid #d9d9d9;
            text-align: center;
            margin-right: -1px;
            user-select: none;
          }
          &.on {
            border-color: #f53a31;
            color: #f53a31;
            z-index: 5;
          }
          &.disabled {
            background-color: #f9f9f9;
            color: #b7b7b7;
            cursor: not-allowed;
          }
        }
      }
      .two {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        li {
          float: left;
          margin-right: 70px;
          line-height: 40px;
          input[type="radio"] {
            vertical-align: middle;
            position: relative;
            top: -2px;
            &[disabled] {
              cursor: not-allowed;
            }
          }
          label {
            font-size: 14px;
            color: #333;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    &.checkbox {
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .lt {
        width: 67%;
        float: left;
      }
      .rt {
        width: 33%;
        float: right;
      }
      .lbl {
        font-size: 18px;
        color: #333;
        text-align: center;
        margin: 40px 0 20px;
      }
      .one {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        li {
          float: left;
          position: relative;
          cursor: pointer;
          &.notClick {
            cursor: auto;
          }
          &:first-child {
            font-size: 14px;
            line-height: 56px;
            color: #333;
          }
          &:not(:first-child) {
            padding: 0 15px;
            min-width: 180px;
            height: 56px;
            line-height: 54px;
            font-size: 14px;
            color: #666;
            border: 1px solid #d9d9d9;
            text-align: center;
            margin-right: 20px;
            user-select: none;
          }
          &.on {
            border-color: #f53a31;
            color: #f53a31;
            background-color: #f9eded;
            z-index: 5;
            position: relative;
            &::before {
              content: "";
              display: inline-block;
              width: 0;
              height: 0;
              border-top: 22px solid #dc2b22;
              border-left: 22px solid transparent;
              position: absolute;
              right: 0;
              top: 0;
            }
            &:after {
              content: "";
              display: inline-block;
              position: absolute;
              right: 3px;
              top: 0;
              width: 5px;
              height: 10px;
              border-color: #fff;
              border-style: solid;
              border-width: 0 2px 2px 0;
              -webkit-transform: rotate(45deg);
              transform: rotate(45deg);
            }
          }
          &.disabled {
            background-color: #f9f9f9;
            color: #b7b7b7;
            cursor: not-allowed;
          }
        }
      }
      .two {
        &::after {
          content: "";
          display: block;
          clear: both;
        }
        li {
          float: left;
          margin-right: 60px;
          line-height: 56px;
          input[type="checkbox"] {
            vertical-align: middle;
            position: relative;
            top: -2px;
            &[disabled] {
              cursor: not-allowed;
            }
          }
          label {
            font-size: 14px;
            color: #333;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    &.input {
      table {
        tr {
          td {
            padding: 24px 100px 24px 0;
            font-size: 18px;
            color: #333;
            &:first-child {
              padding-right: 35px;
            }
          }
          &:first-child {
            td {
              text-align: center;
              padding: 40px 100px 0 0;
            }
          }
        }
      }
      input[type="text"] {
        width: 340px;
        height: 32px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
        padding-left: 10px;
        &:hover,
        &.h {
          border-color: #999;
        }
        &:focus,
        &.f {
          border-color: #0091ff;
          box-shadow: 0px 0px 4px 0px rgba(0, 145, 255, 0.3);
        }
        &[disabled] {
          background-color: #f9f9f9;
          border: 1px solid #d9d9d9 !important;
          color: #b7b7b7;
          cursor: not-allowed;
        }
      }
      .clear {
        position: relative;
        .icon-closefilled {
          display: none;
          position: absolute;
          top: 4px;
          right: 5px;
          font-size: 16px;
          color: #ccc;
        }
        &:hover,
        &:focus,
        &.h,
        &.f {
          input[type="text"] {
            padding-right: 22px;
          }
          .icon-closefilled {
            display: block;
          }
        }
        &:focus,
        &.f {
          .icon-closefilled {
            color: #a5a5a5;
          }
        }
      }
    }
  }
}
</style>
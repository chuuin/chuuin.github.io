// Vue.js 2.x
/* 
var app = new app({

// el 即 Element，Vue 以 css 的選擇器指定要 render 的位置
   el : '#app',

// Vue Render 時使用的資料
   data: {
   message: "Hello World",
  }
})
*/

// Vue.js 3.x

var app = Vue.createApp({
  // 資料模型 (Model)
  data: function () {
    return {
      message: "Hello Ian!", // 輸出 - 文字的綁定
      list: ["Dog", "Cat", "Bird"], // 迴圈
      Ian: "I'm Ian", //輸入-表單變數資料雙向綁定
      isIan: true, // 條件式
      messageOne: "Hi!!",
      messageTwo: "This is message.",
      counter: 20,
      foods: ["rice", "apple", "orange", "cake", "kiwi"],
      TextOne: "使用 v-bind 綁定至 value", //使用 v-bind 綁定至 value
      TextTwo: "使用 v-bind 縮寫綁定至 value", //使用 v-bind 縮寫綁定至 value
      className: "test-style-class", //class 樣式 class 名稱綁定
      customStyle: {
        width: "200px",
        margin: "5px",
        padding: "5px 10px",
        color: "#FEFEFE",
        background: "#666",
        "text-align": "center",
      },

      //顏色列表陣列
      imagePath: "./img/indexPic.jpg",
      colors: ["green", "yellow", "red"],
      school: {
        fifth_grade: 185,
        sixth_grade: 132,
      },

      // v-for 輪播圖片相對位置清單
      slideList: [
        "./img/slide-01.jpg",
        "./img/slide-02.jpg",
        "./img/slide-03.jpg",
        "./img/slide-04.jpg",
      ],

      //v-show
      imageListOne: [
        {
          name: "狗狗嚕",
          path: "./img/cutedog.jpg",
          is_cat: false,
        },
        {
          name: "游泳小貓",
          path: "./img/cat-01.jpg",
          is_cat: true,
        },
        {
          name: "海邊小貓",
          path: "./img/cat-02.jpg",
          is_cat: true,
        },
      ],

      //v-if
      imageListTwo: [
        {
          name: "狗狗嚕",
          path: "./img/cutedog.jpg",
          is_cat: false,
          is_swimming_cat: false,
        },
        {
          name: "游泳小貓",
          path: "./img/cat-01.jpg",
          is_cat: true,
          is_swimming_cat: true,
        },
        {
          name: "海邊小貓",
          path: "./img/cat-02.jpg",
          is_cat: true,
          is_swimming_cat: false,
        },
      ],

      // $el 與 $refs 操作 (this)
      el: {
        width: "N/A",
        height: "N/A",
      },
      ref: {
        width: "N/A",
        height: "N/A",
      },
    };
  },
  //當元件掛載完成時 $el 與 $refs 操作 (this)
  mounted() {
    console.log(this.$el);
    this.el.width = this.$el.clientWidth || "N/A";
    this.el.height = this.$el.clientHeight || "N/A";
    // $refs['ref-example'] 裡的文字顏色改為 #999
    this.$refs["ref-example"].style.color = "#999";
    // 取得 $refs['ref-example'] 的寬/高
    this.ref.width = this.$refs["ref-example"].clientWidth || "N/A";
    this.ref.height = this.$refs["ref-example"].clientHeight || "N/A";
  },

  // 事件
  methods: {
    testEvent: function () {
      alert("click seccess!(點擊成功)");
    },
  },

  // 初始化 - beforeCreate 與 created
  beforeCreate() {
    // Vue 實體化後，響應式開始前，資料初始化程式可於此處撰寫。
  },
  created() {
    // Vue 實體化後，開始響應式後，資料初始化程式可於此處撰寫。
  },

  // 元件及樣板掛載 - beforeMount 與 mounted
  beforeMount() {
    // 元件或樣板掛載前，要執行的程序。
  },
  // mounted() {
  //   // 元件或樣板掛載完成後，要執行的程序。
  // },

  //元件及樣板銷毀 - beforeUnmount 與 unmounted
  beforeUnmount() {
    // 元件或樣板銷毀前，要執行的程序。(應用於計數器)
  },
  unmounted() {
    // 元件或樣板銷毀前，要執行的程序。(應用於轉導頁面)
  },

  // 資料更新及重新渲染 - beforeUpdate 與 updated
  beforeUpdate() {
    // 資料更新後，畫面渲染前執行的程序
  },
  updated() {
    // 資料更新後，完成畫面渲染時，執行的程序
  },
});

// Vue.js 渲染畫面的 HTML Element
app.mount("#app");

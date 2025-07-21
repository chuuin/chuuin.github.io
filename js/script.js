/*========== toggle style switcher ==========*/
/* 打開齒輪選顏色更換 */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');

styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
});

/* 滑動滾輪會自動收回 */
window.addEventListener('scroll', () => {
    if (document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open');
    }
});

/*=================================================================*/
/*========== 文字顏色更換 ==========*/
/*colorCangeBtns為陣列*/
const colorChangeBtns = document.querySelectorAll('.color-change');
/*originalColor未更改前的原始顏色*/
let originalColor = '';
/*changeBtn為項目名稱; i為每個物件的編號*/
colorChangeBtns.forEach((changeBtn, i) => {
    /* 點擊changeBtn*/
    changeBtn.addEventListener('click', () => {
        /* 判斷Class 名稱是否包含color */
        if (document.body.className.indexOf('color') >= 0) {
            /*有的話就先移除*/
            document.body.classList.remove(originalColor);
        }
        /*點擊的顏色後  產生點擊的class名稱    */
        originalColor = 'color' + i;
        /* 將此名稱加入body */
        document.body.classList.add(originalColor);
    });
})
/*=================================================================*/

/*========== 版面黑白更換 ==========*/
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
});
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')) {
        dayNight.querySelector('i').classList.add('fa-sun');
    } else {
        dayNight.querySelector('i').classList.add('fa-moon');
    }
});

/*=================================================================*/

/*=========== typed.js  ==========*/
let typed = new Typed('.typing', {
    strings: [ "CSS.", "SASS.","Bootstrap.","JavaScript.", "Vue.","Git.","Figma.",],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true,

});
// console.log(typed);
/*=================================================================*/
/* Aside */

const navItem = document.querySelectorAll('.nav li a');
const navList = document.querySelectorAll('.nav li');
const allSections = document.querySelectorAll('.section');
const totalSection = allSections.length;
const navTogglerBtn = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

/* 先抓取navItem 裡的item(<a>連結) */
navItem.forEach((item) => {
    // console.log(item);
    /* 點擊某一個item(<a>連結)後 */
    item.addEventListener('click', () => {
        /* 抓取navList 裡的list(<li>)後 */
        navList.forEach((list, i) => {
            allSections[i].classList.remove('back-section');
            if (list.querySelector('a').classList.contains('active')) {
                allSections[i].classList.add('back-section');
            };
            // list(每一個<li>裡面的a)移除active
            list.querySelector('a').classList.remove("active");
        });
        // 移除後+active 
        item.classList.add("active");
        showSection(item);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }

    });
});

function showSection(element) {
    allSections.forEach((section) => {
        section.classList.remove("active");
    });
    // getAttribute() => 擷取屬性  split(?)[?]=>剪下(?)後的第[?]之後
    //取名target為 item(element)的(a連結)屬性"href"的[1] 
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
};

/*=================================================================*/
const hireMeBtn = document.querySelector(".hire-me");

hireMeBtn.addEventListener("click", (event) => {
    allSections.forEach((section,i)=>{
        section.classList.remove('back-section');
        allSections[1].classList.add('back-section');
    });
    
    // 取名event為item(target)的值
    // console.log(event.target);

    showSection(event.target);
    updateNav(event.target);
});
function updateNav(element) {
    // console.log(element.getAttribute("href").split("#")[1]);
    navList.forEach((updateList, i) => {
        updateList.querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === updateList.querySelector('a').getAttribute("href").split("#")[1]) {
            updateList.querySelector('a').classList.add("active");
        }
    });


};

/*=================================================================*/

navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    allSections.forEach((sectionToggler) => {
        sectionToggler.classList.toggle("open");
    });
};


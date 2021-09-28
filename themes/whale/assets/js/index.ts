import { scrollToDest } from "./utils";

document.addEventListener("DOMContentLoaded", function () {
    /**
     * 首頁top_img底下的箭頭
     */
    const scrollDownInIndex = () => {
        const $scrollDownEle = document.getElementById('scroll-down');
        $scrollDownEle && $scrollDownEle.addEventListener('click', function () {
            scrollToDest(document.getElementById('content-inner').offsetTop, 300);
        });
    };
    scrollDownInIndex();
});

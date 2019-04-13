jQuery(function ($) {
    //=>获取数据
    let flowRender = (function () {
        let $flowList = $('.flowBox > li');
        let flowList = $flowList.get();  //将类数组装换为数组
        let page = 0;
        let getDate = function () {
            if (page > 10) {
                alert('没有更多数据了');
                $(window).off('scroll', loadMore);
                return;
            }
            page++;
            $.ajax({
                type: "get",
                url: 'json/data.json?page=' + page,
                cache: false,
                dataType: "json",
                success: insertHTML
            });
        }
        //通过li的内容高度排序
        let liSort = function () {
            //排序: 改变原数组,以li内容从低到高 排序
            flowList = flowList.sort(function (a,b) {
                let aHeight = a.offsetHeight;
                let bHeight = b.offsetHeight;
                if (aHeight === 0) {
                    return;
                }
                return aHeight - bHeight;
            })
        }
        let insertHTML = function (result) {
            for (let i = 0; i < result.length; i += 3) {
                liSort();
                flowList[0].innerHTML += queryHTML(result[i]);
                flowList[1].innerHTML += queryHTML(result[i + 1]);
                flowList[2].innerHTML += queryHTML(result[i + 2]);
            }
        }
        let queryHTML = function ({id,pic,title,link} = {}) {
            return `<a href="${link}" target="_blank">
                <div><img src="${pic}" alt=""></div>
                <span>${title}</span>
            </a>`;
        }
        // =>加载更多
        let getMore = function () {
            let winH = document.documentElement.clientHeight,
                pageH = document.documentElement.scrollHeight,
                scrollT = document.documentElement.scrollTop;
                console.log(scrollT);
            if (scrollT >= pageH - winH - 100) {
                //=>距离底部还有100PX加载更多数据
                getDate();
            }
        }
        return {
            init: function () {
                getDate();
                $(window).on('scroll',getMore);
            }
        }
    })()
    flowRender.init();
})
$(document).ready(function() {
    $("body #Select").each(function(i) {
    	$("#baidu").click(function() {
    		$("#inp").attr({name:"wd",placeholder:"百度一下"});
    		$("#sform").attr({action:"https://www.baidu.com/s?"});
    	}),$("#haoso").click(function() {
    		$("#inp").attr({name:"q",placeholder:"360搜索"});
    		$("#sform").attr({action:"https://www.so.com/s?"});
    	}),$("#bing").click(function() {
    		$("#inp").attr({name:"q",placeholder:"必应搜索"});
    		$("#sform").attr({action:"https://cn.bing.com/search?"});
    	}),$("#sougou").click(function() {
    		$("#inp").attr({name:"query",placeholder:"搜狗搜索"});
    		$("#sform").attr({action:"https://www.sogou.com/web?"});
    	}),$("#chinaso").click(function() {
    		$("#inp").attr({name:"q",placeholder:"中国搜索"});
    		$("#sform").attr({action:"http://www.chinaso.com/search/pagesearch.htm?"});
    	}),$("#yuandex").click(function() {
    		$("#inp").attr({name:"text",placeholder:"yandex搜索"});
    		$("#sform").attr({action:"https://yandex.com/search/?"});
    	}),$("#yahoo").click(function() {
    		$("#inp").attr({name:"p",placeholder:"雅虎搜索"});
    		$("#sform").attr({action:"https://search.yahoo.com/search?"});
    	}),$("#google").click(function() {
    		$("#inp").attr({name:"q",placeholder:"谷歌搜索"});
    		$("#sform").attr({action:"http://www.google.com/search?"});
    	}),$("#duck").click(function() {
    		$("#inp").attr({name:"q",placeholder:"duckduckgo搜索"});
    		$("#sform").attr({action:"https://duckduckgo.com/?"});
    	}),$("#github").click(function() {
    		$("#inp").attr({name:"q",placeholder:"Github搜索"});
    		$("#sform").attr({action:"https://github.com/search?"});
    	}),$("#zhihu").click(function() {
    		$("#inp").attr({name:"q",placeholder:"知乎搜索"});
    		$("#sform").attr({action:"https://www.zhihu.com/search?"});
    	}),$("#douban").click(function() {
    		$("#inp").attr({name:"q",placeholder:"豆瓣搜索"});
    		$("#sform").attr({action:"https://www.douban.com/search?source=suggest&"});
    	}),$("#weibo").click(function() {
    		$("#inp").attr({name:"q",placeholder:"新浪微博搜索"});
    		$("#sform").attr({action:"https://s.weibo.com/weibo?"});
    	}),$("#toutiao").click(function() {
    		$("#inp").attr({name:"keyword",placeholder:"今日头条"});
    		$("#sform").attr({action:"https://www.toutiao.com/search/?"});
    	}),$("#youtube").click(function() {
    		$("#inp").attr({name:"search_query",placeholder:"YouTube"});
    		$("#sform").attr({action:"https://www.youtube.com/results?"});
    	}),$("#bilibili").click(function() {
    		$("#inp").attr({name:"keyword",placeholder:"哔哩哔哩"});
    		$("#sform").attr({action:"https://search.bilibili.com/all?"});
    	});
    });
});
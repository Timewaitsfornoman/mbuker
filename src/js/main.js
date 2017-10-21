var ajax = require('../../unit/common/js/getApi');
var shareBox = require('../../unit/common/js/shareBox');
var slider = require('../../unit/libs/lib-slider/2.0.0/slider');

var page = 1;
var loading = false;

var banners = {
    itemList: ['//static2.ivwen.com/users/4842968/bf00fa0f2e9a4823ac9f42c436ec0ccd.jpg-mobile',
     'http://static2.ivwen.com/users/4842968/828daf6103044020b9c71c1e6ec00506.jpg-mobile',
     'http://static2.ivwen.com/users/4842968/b0e11ce0142e482584df7cea294219cc.jpg-mobile',
     'http://static2.ivwen.com/users/4842968/22788bb1031140ce937e2ba672045925.jpg-mobile',
     'http://static2.ivwen.com/users/4842968/7dd19d6fc795441b8a72ee4bb92e53bf.jpg-mobile',
     'http://static2.ivwen.com/users/4842968/48fd8b283bdb43aeb43798e7a9d358df.jpg-mobile',
     'http://static2.ivwen.com/users/4842968/dc9963c6dc93471f9442291ce180867b.jpg-mobile'
     ]
};

var index = {

    init: function() {
        this.sendApi.mainApi();
        this.addEvent();
        this.readerBanner(banners);
        shareBox();
    },

    readerBanner: function(data) {

        var itemList = data.itemList;
        var len = itemList.length;
        var item = '';
        var banner = '<div id="J_slider-outer" class="slider-outer"><ul id="J_slider-wrap" class="slider-wrap">';

        for (var i = 0; i < len; i++) {
            item = itemList[i];
            banner += '<li>' +
                '<a href="" target="_blank">' +
                '<img class="lazyimg" src="' + item + '" alt="banner"/>' +
                '</a>' +
                '</li>';
        }

        banner += '</ul></div><div id="J_slider-status" class="slider-status"></div>';

        $('#J_slider').html(banner);

        this.initSlide();
    },

    initSlide: function() {

        var sliderPic = new slider({
            container: '#J_slider',
            wrap: '#J_slider-outer',
            panel: '#J_slider-wrap',
            trigger: '#J_slider-status',
            fullScreen: true,
            sizeRadio: 463.5 / 750,
            play: true,
            loop: true
        });
    },

    sendApi: {

        mainApi: function(data) {

            ajax.callAPI({
                type: 'post',
                url: '/api/main',
                data: {},
                dataType: 'json',
                success: function(rsp) {

                    index.renderMain(rsp.articles);

                    // var featureScopes = rsp.featureScopes;

                    // if (featureScopes) {
                    //     index.readerBanner(featureScopes[0]);
                    //     index.renderMain(featureScopes);
                    // } else {

                    // }
                    loading = false;
                },
                error: function(error) {
                    loading = false;
                }
            });
        }
    },

    renderItem: function(index, data) {

        /*var itemlist = data.itemList;
        var len = itemlist.length;
        var item = {};
        var html = '';
        for (var i = 0; i < len; i++) {
            item = itemlist[i];
            html += '<li class="tu-item">' +
                '<a href="http://event.tujiaapp.com/custom-link.html?id=' + item.key + '" target="_blank">' +
                '<div class="waper-img" style="background-image: url(' + item.imagePath + '")>' +
                '</div></a>' +
                '<div>' +
                '<h1 class="tu-title">' + item.label + '</h1>';

            html += item.description && '<p class="tu-describe">' + item.description + '</p>' || '';

            html += '<p class="user-about">' +
                '<span class="user-info">' +
                '<img src="' + item.owner.avatar + '" alt="' + item.owner.name + '"/>' + (item.owner.name || '') + '</span>' +
                '<span class="page-view">' +
                '<i class="pageview-icon"></i>' + (item.sequence || '') +
                '</span>' +
                '</p>' +
                '</div>' +
                '</li>';
        }

        switch (index) {
            case 1:
                $('#J-tuicun').html(html);
                break;
            case 2:
                $('#J-yule').html(html);
                break;
            case 3:
                $('#J-shishang').html(html);
                break;
            case 4:
                $('#J-lvyou').html(html);
                break;
            case 5:
                $('#J-shenghuo').html(html);
                break;
        }*/

        var html = '';

        html += '<li class="tu-item">' +
            '<a href="https://www.meipian.cn/' + data.article_id + '" target="_blank">' +
            '<div class="waper-img" style="background-image: url(' + data.cover_img_url + '")>' +
            '</div></a>' +
            '<div>' +
            '<h1 class="tu-title">' + data.title + '</h1>';

        html += data.description && '<p class="tu-describe">' + data.description + '</p>' || '';

        html += '<p class="user-about">' +
            '<span class="user-info">' +
            '<img src="' + data.author_head + '" alt="' + data.author + '"/>' + '<span class="user-name">' + (data.author || '') + '</span>' + '</span>' +
            '<span class="page-view">' +
            '<i class="pageview-icon"></i>' + '<span class="user-name">' + (data.visit_count || '0') + '</span>' +
            '</span>' +
            '</p>' +
            '</div>' +
            '</li>';

        $('#J-tuicun').append(html);
    },

    renderMain: function(data) {
        var len = data.length;
        for (var i = 1; i < len; i++) {
            this.renderItem(0, data[i]);
        }
    },

    addEvent: function() {

        $('#J_navheader').on('click', 'li', function() {

            var $this = $(this);
            var index = $this.index();

            $this.addClass('nav-current').siblings().removeClass('nav-current');
            switch (index) {

                case 0:
                    $('#J-tuicun').removeClass('hide').siblings().addClass('hide');
                    break;
                case 1:
                    $('#J-yule').removeClass('hide').siblings().addClass('hide');;
                    break;
                case 2:
                    $('#J-shishang').removeClass('hide').siblings().addClass('hide');
                    break;
                case 3:
                    $('#J-lvyou').removeClass('hide').siblings().addClass('hide');
                    break;
                case 4:
                    $('#J-shenghuo').removeClass('hide').siblings().addClass('hide');
                    break;
            }
        });

        var $win = $(window);

        $(document).on('click', '.J_gotop', function() {
            $win.scrollTop(0);
        });

        $(document).on('click', '.J_downbottom', function() {
            var h = $(document).height() - $win.height();
            $win.scrollTop(h);
        });

        $(document).on('click', '.J_refresh', function() {
            window.location.href = window.location.href;
        });
    }
}

index.init();
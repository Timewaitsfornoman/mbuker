var ajax = require('../../unit/common/js/getApi');
var shareBox = require('../../unit/common/js/shareBox');
var slider = require('../../unit/libs/lib-slider/2.0.0/slider');

var page = 1;
var loading = false;
var host = window.location.host;

var index = {

    init: function() {
        this.sendApi.mainApi();
        this.addEvent();
        shareBox();
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

    readerBanner: function(data) {

        var item = '',
            len = data.length;
        var banner = '<div id="J_slider-outer" class="slider-outer"><ul id="J_slider-wrap" class="slider-wrap">';

        for (var i = 0; i < len; i++) {
            item = data[i];
            banner += '<li>' +
                '<a href="' + item.target + '" target="_blank">' +
                '<img class="lazyimg" src="' + item.img_url + '" alt="banner"/>' +
                '</a>' +
                '</li>';
        }

        banner += '</ul></div><div id="J_slider-status" class="slider-status"></div>';

        $('#J_slider').html(banner);

        this.initSlide();
    },

    sendApi: {

        mainApi: function(data) {

            ajax.callAPI({
                type: 'post',
                url: '/api/main',
                data: {},
                dataType: 'json',
                success: function(rsp) {
                    index.readerBanner(rsp.banners);
                    index.renderMain(rsp.articleslist);
                    loading = false;
                },
                error: function(error) {
                    loading = false;
                }
            });
        }
    },

    renderMain: function(data) {
        var len = data.length;
        for (var i = 0; i < len; i++) {
            this.renderItem(i, data[i]);
        }
    },

    renderItem: function(index, data) {

        var item = {},
            html = '',
            len = data.length;

        for (var i = 0; i < len; i++) {
            item = data[i];
            html += '<li class="tu-item">' +
                '<a href="https://' + item.domain + '/' + item.article_id + '" target="_blank">' +
                '<div class="waper-img" style="background-image: url(' + item.cover_img_url + '")>' +
                '</div></a>' +
                '<div>' +
                '<h1 class="tu-title">' + item.title + '</h1>';

            // html += item.description && '<p class="tu-describe">' + item.description + '</p>' || '';

            html += '<p class="user-about">' +
                '<span class="user-info">' +
                '<img src="' + item.author_head + '" alt="' + item.author + '"/>' + (item.author || '') + '</span>' +
                '<span class="page-view">' +
                '<i class="pageview-icon"></i>' + (item.visit_count || '') +
                '</span>' +
                '</p>' +
                '</div>' +
                '</li>';
        }

        switch (index) {
            case 0:
                $('#J-tuicun').html(html);
                break;
            case 1:
                $('#J-yule').html(html);
                break;
            case 2:
                $('#J-shishang').html(html);
                break;
            case 3:
                $('#J-lvyou').html(html);
                break;
            case 4:
                $('#J-shenghuo').html(html);
                break;
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




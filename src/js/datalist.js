require(['config'],function(){
    require(['jquery','common'],function($){
        // 导入头部
        $('header').load('../html/ilg-header.html',function(){
            // 最顶端显示
            $('.head-1').on('mouseover',function(){
                $('.head-1').addClass('white');
                $('.head-11').show();
            }).on('mouseleave',function(){
                $('.head-1').removeClass('white');
                $('.head-11').hide();
            });

            $('.head1').on('mouseover',function(){
                $('.head1').addClass('white');
                $('.head11').show();
            }).on('mouseleave',function(){
                $('.head1').removeClass('white');
                $('.head11').hide();
            });

            $('.head2').on('mouseover',function(){
                $('.head2').addClass('white');
                $('.head21').show();
            }).on('mouseleave',function(){
                $('.head2').removeClass('white');
                $('.head21').hide();
            });

            $('.head4').on('mouseover',function(){
                $('.head4').addClass('white');
                $('.head41').show();
            }).on('mouseleave',function(){
                $('.head4').removeClass('white');
                $('.head41').hide();
            });

            // 导航
            $('.nav1').on('mouseover',function(){
                $('.nav1').addClass('shenhong');
                $('.nav2').show();
            });
            $('.nav2').on('mouseleave',function(){
                $('.nav1').removeClass('shenhong');
                $('.nav2').hide();
            }); 
            $('.nav2').find('li').on('mouseover',function(){
                $(this).find('.nav3').show();
            }).on('mouseleave',function(){
                $(this).find('.nav3').hide();
            });
            $('.nav1').siblings().on('mouseover',function(){
                $(this).addClass('shenhong');
            }).on('mouseleave',function(){
                $(this).removeClass('shenhong');
            });
        });

        $('footer').load('../html/ilg-footer.html',function(){});
    });
});
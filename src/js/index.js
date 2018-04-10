require(['config'],function(){
    require(['jquery','common'],function($){
        // 导入头部
        $('header').load('./html/ilg-header.html',function(){
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
        
        // 轮播图
        //定义全局变量和定时器
        var i = 0 ;
        var timer;
         
        $(document).ready(function(){
            //用jquery方法设置第一张图片显示，其余隐藏
            $('.ig').eq(0).show().siblings('.ig').hide();
           
            //调用showTime()函数（轮播函数）
            showTime();
           
            //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
            $('.tab').hover(function(){
            //获取当前i的值，并显示，同时还要清除定时器
                i = $(this).index();
                Show();
                clearInterval(timer);
            },function(){
            //
                showTime();
            });
        });
         
         
        //创建一个showTime函数
        function showTime(){
          //定时器
          timer = setInterval(function(){
            //调用一个Show()函数
            Show();
            i++;
            //当图片是最后一张的后面时，设置图片为第一张
            if(i==5){
              i=0;
            }
          },3000);
        }
         
         
        //创建一个Show函数
        function Show(){
            //在这里可以用其他jquery的动画
            $('.ig').eq(i).fadeIn(300).siblings('.ig').fadeOut(300);
           
            //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
            $('.tab').eq(i).addClass('bg').siblings('.tab').removeClass('bg');
        }

        // 页面固定定位
        var toTop = document.getElementById('toTop');
        var toLeft = document.getElementsByClassName('toLeft')[0];
        window.onscroll = function(){
            var scrollTop = window.scrollY;

            // 当滚动条滚动过的距离大于1000
            // 显示返回顶部按钮
            if(scrollTop >= 1000){
                toTop.style.display = 'block';
                toLeft.style.display = 'block';
            }else{
                toTop.style.display = 'none';
                toLeft.style.display = 'none';
            }
        }


        // 点击返回顶部
        toTop.onclick = function(){

            var timer = setInterval(function(){

                var speed = parseInt(window.scrollY/5)

                if(window.scrollY <= 10){
                    speed = 0;
                    clearInterval(timer);
                }

                scrollBy(0,-speed);

            },30)
        }
        $('footer').load('./html/ilg-footer.html',function(){});
    });
});
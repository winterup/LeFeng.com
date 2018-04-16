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

            $('.nav3').on('click',function(){
                $(location).attr('href', '../html/datalist.html');
            })
            $('.head0 .a1').on('click',function(){
                $(location).attr('href', '../html/login.html');
            })
            $('.head0 .a2').on('click',function(){
                $(location).attr('href', '../html/reg.html');
            })
            // 提取用户名
            $.ajax({
                url:'../api/t_cookie.php',
                dataType:'json',
                data:{
                    id0:'1'
                },
                success:function(data){
                    // console.log(data);
                    if(data==='fail'){
                        $('.head-2').hide();
                        $('.head0').show();
                    }else{
                        var box1 = data.map(function(item){
                            return`
                            嗡，欢迎来乐蜂，<span>${item.username}</span><a>退出登录</a> 
                            `
                        }).join('');
                        $('.head-2').html(box1).show();
                        $('.head0').hide();

                        $('.head-2 a').on('click',function(){
                            console.log(6666);
                            // 删除用户名
                            ajax({
                                url:'../api/cookie_del.php',
                                data:{id0:1},
                                success:function(data){
                                    window.location.reload();
                                    $('.head0').show();
                                    $('.head-2').hide();
                                }
                            })
                        })
                    }
                    
                }
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
        var totemai = document.getElementsByClassName('totemai')[0];
        var tobaokuan = document.getElementsByClassName('tobaokuan')[0];
        window.onscroll = function(){
            var scrollTop = window.scrollY;

            // 当滚动条滚动过的距离大于1000
            // 显示返回顶部按钮
            if(scrollTop >= 1000){
                toTop.style.display = 'block';
                toLeft.style.display = 'block';
                totemai.style.display = 'block';
                tobaokuan.style.display = 'block';
            }else{
                toTop.style.display = 'none';
                toLeft.style.display = 'none';
                totemai.style.display = 'none';
                tobaokuan.style.display = 'none';
            }

            // 获取滚动条滚动过的距离
            var scrollTop = window.scrollY;
            // console.log($('.tit3').offset().top);
            if($(window).scrollTop() >= 1342 && $(window).scrollTop()<4254){
                // 给search添加一个类：fixed
                $('.totemai').addClass('totemai1');
            }else{
                $('.totemai').removeClass('totemai1');
            }
            if($(window).scrollTop() >= 4254){
                // 给search添加一个类：fixed
                $('.tobaokuan').addClass('tobaokuan1');
            }else{
                $('.tobaokuan').removeClass('tobaokuan1');
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
        // tab键
        $('.totemai').on('click',function(){
            $('body,html').animate({
                scrollTop: 1342
            }, 300);
        });
        $('.tobaokuan').on('click',function(){
            $('body,html').animate({
                scrollTop: 4254
            }, 300);
        });

        // 导入数据
        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            data:{
                category:'7-8折'
                // id:'0,5'
            },
            success:function(data){
                // console.log(data);
                var box1 = data.map(function(item){
                    return`
                    <div class="jingxuan1">
                        <i></i>
                        <div class="jingxuan_r">
                            <img src="${item.imgs}"/>
                        </div>
                        <div class="jingxuan_l">
                            <p><j>${item.discount}折/</j>${item.name}</p>
                            <span><b>￥${item.price}</b>&nbsp&nbsp<del>￥${item.priced}</del></span>
                        </div>
                    </div>
                    `
                }).join('');
                $('.jingxuan').html(box1);
            }
        });

        $.ajax({
            url:'../api/index1.php',
            dataType:'json',
            // data:{
            //     category:'7-8折'
            // },
            success:function(data){
                // console.log(data);
                var box1 = data.map(function(item){
                    return`
                    <div class="temai1">
                        <img src="${item.imgs}"/>
                        <p>${item.zhe}</p>
                        <span><i>￥${item.zhe}</i>&nbsp&nbsp<j>￥${item.name}</j></span>
                    </div>
                    `
                }).join('');
                $('.temai').html(box1);
            }
        });

        $.ajax({
            url:'../api/index.php',
            dataType:'json',
            // data:{
            //     category:'7-8折'
            // },
            success:function(data){
                // console.log(data);
                var box1 = data.map(function(item){
                    return`
                    <ul class="changxian1">
                        <img src="${item.imgs}"/>
                        <p><j>${item.discount}折/</j>${item.name}</p>
                        <span><b>￥${item.price}</b>&nbsp&nbsp<del>￥${item.priced}</del></span>
                    </ul>
                    `
                }).join('');
                $('.changxian').html(box1);
            }
        });

        $('footer').load('./html/ilg-footer.html',function(){});
    });
});
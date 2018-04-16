require(['config'],function(){
    require(['jquery','common'],function($){
        // 导入头部
        $('header').load('./ilg-header.html',function(){
            // 最顶端显示
            $('.head-1').on('mouseover',function(){
                $('.head-1').addClass('white');
                $('.head-11').show();
            }).on('mouseleave',function(){
                $('.head-1').removeClass('white');
                $('.head-11').hide();
            });

            $('.nav3').on('click',function(){
                $(location).attr('href', '../html/datalist.html');
            })
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

        // 获取参数
        //获取传递过来的参数
        var params = location.search;//'?id=g001'
        params = params.slice(1);
        // console.log(params);
        // 拆分成数组
        params = params.split('&');
        // 遍历数组，还原成对象
        var dado = {};
        params.forEach(function(item1){
            var arr = item1.split('=');
            // dado[arr[0]] = decodeURI(arr[1]);
            dado[arr[0]] =arr[1];
        });
        var res = dado.id;
        console.log(res);
        // 导入数据1
        $.ajax({
            url:'../api/goods.php',
            dataType:'json',
            data:{
                id:res
                // category:'母婴专区'
            },
            success:function(data){
                var box1 = (function(){
                    return`
                    <img src="${data.imgs}"/>
                    `
                });
                $('.goods_ccl').html(box1);
                var box2 = (function(){
                    return`
                    <h5>${data.name}</h5>
                    `
                });
                $('.goods_t h5').html(box2);
                var box3 = (function(){
                    return`
                    <p>${data.name}</p>
                    `
                });
                $('.goods_ct p').html(box3);
                var box4 = (function(){
                    return`
                    <i>${data.price}</i>
                    `
                });
                $('.p1 i').html(box4);
                $('.xiding i').html(box4);
                var box5 = (function(){
                    return`
                    <j>${data.discount}折</j>
                    `
                });
                $('.p1 j').html(box5);
                var box6 = (function(){
                    return`
                    <del>￥${data.priced}</del>
                    `
                });
                $('.p1 del').html(box6);
                $('.xiding del').html(box6);
                var box7 = (function(){
                    return`
                    <span>${data.price/2}</span>
                    `
                });
                $('.p5 span').html(box7);
            }
        });

        // 导入数据2
        $.ajax({
            url:'../api/datalist1.php',
            dataType:'json',
            data:{
                id:'0,10'
            },
            success:function(data){
                // console.log(data);
                var box2 = data.map(function(item){
                    return`
                    <div class="like_b1">
                        <img src="${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><b>￥${item.price}</b>&nbsp&nbsp<del>￥${item.priced}</del></span>
                    </div>
                    `
                }).join('');
                $('.goods_brb').html(box2);
            }
        });

        // tab键
        $('.goods_blt1').on('click',function(){
            $('.goods_blt1').addClass('blt_light');
            $('.goods_blt2').removeClass('blt_light');
            $('body,html').animate({
                scrollTop: 787
            }, 300);
        });
        $('.goods_blt2').on('click',function(){
            $('.goods_blt1').removeClass('blt_light');
            $('.goods_blt2').addClass('blt_light');
            $('body,html').animate({
                scrollTop: 1048
            }, 300);
        });
        // 吸顶
        var toolbar = document.getElementsByClassName('goods_blt')[0];
        // 绑定滚动事件
        window.onscroll = function(){
            // 获取滚动条滚动过的距离
            var scrollTop = window.scrollY;
            // console.log($('.chengnuo').offset().top);
            if($(window).scrollTop() >= 788){
                // 给search添加一个类：fixed
                $('.goods_blt').addClass('fixed');
                $('.xiding').show();
            }else{
                $('.goods_blt').removeClass('fixed');
                $('.xiding').hide();
            }
        }

        // 数量加减
        $('.btnr').on('click',function(){
            let qty1 = $('.qty').val();
            qty1++;
            $('.qty').val(qty1);
            return $('.qty').val();
        })
        $('.btnl').on('click',function(){
            let qty0 = $('.qty').val();
            if(qty0>1){
                qty0--;
                $('.qty').val(qty0);
                return $('.qty').val();
            }
        })

        
        // 点击加入购物车
        $('.p4 span').on('click',function(){
            let _id = res;
            let _name = $('.goods_ct p p').html();
            let _price = $('.p1 i i').html();
            let _discount = $('.p1 j j').html();
            let _priced = $('.p1 del del').html();
            console.log(666);
            
            ajax({
                url:'../api/join_car.php',
                data:{id:_id},
                success:function(data){
                    // console.log(data);
                    if(data === 'success'){
                        // 点击加入购物车
                        let _imgs = $('.goods_ccl img')[0].src;
                        let _qty = $('.qty').val();

                        ajax({
                            url:'../api/join_car.php',
                            data:{
                                id:_id,
                                name:_name,
                                price:_price,
                                qty:_qty,
                                imgs:_imgs,
                                discount:_discount,
                                priced:_priced,
                                type:'reg'
                            },
                            success:function(data){
                                // console.log(data);
                            }
                        })
                    }else{
                    }
                }
            })

            $('.gouwuche').show().on('click',function(){
                $(location).attr('href', 'car.html')
            });
        })

        // 点击加入购物车
        // $('.p4 span').on('click',function(){
        //     let _imgs = $('.goods_ccl img')[0].src;

        //     ajax({
        //         url:'../api/join_car.php',
        //         data:{
        //             id:_id,
        //             name:_name,
        //             price:_price,
        //             qty:_qty,
        //             imgs:_imgs,
        //             discount:_discount,
        //             priced:_priced,
        //             type:'reg'
        //         },
        //         success:function(data){
        //             // console.log(data);
        //             if(data == 'success'){
        //                 alert('注册成功');
        //             }
        //         }
        //     })
        // })

        $('footer').load('../html/ilg-footer.html',function(){});
    });
});
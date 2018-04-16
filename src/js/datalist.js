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
        


        // 导入数据1
        $.ajax({
            url:'../api/datalist.php',
            dataType:'json',
           
            success:function(data){
                var page = document.querySelector('.page');
                var main_rlist = document.querySelector('.list');
                let pageNo = 1;
                let qty = 20;
                let arr_status = [200,304];
                let xhr = new XMLHttpRequest();
                xhr.onload = ()=>{
                    if(arr_status.indexOf(xhr.status)!=-1){
                        let res = JSON.parse(xhr.responseText);

                        main_rlist.innerHTML = res.data.map(item=>{
                            return`
                            <div class="list1">
                                <input type="text" value="${item.id}">
                                <img src="${item.imgs}"/>
                                <p>${item.name}</p>
                                <span><b>￥${item.price}</b>&nbsp&nbsp<j>(${item.discount}折)</j>&nbsp&nbsp<del>￥${item.priced}</del></span>&nbsp&nbsp&nbsp&nbsp<button class="btn_b1">加入购物车</button>
                            </div>
                            `
                        });
                        // 传参
                        $('.list .list1').on('click',function(){
                            console.log($(this).find('input').attr('value'));
                            var params = '?';
                            params += 'id='+$(this).find('input').attr('value');
                            console.log(params);
                            // 跳转页面
                           location.href = 'goods.html' + params;
                        });
                        // 处理分页
                        let pageQty = Math.ceil(res.total/res.qty);

                        page.innerText = '';
                        for(let i=1;i<=pageQty;i++){
                            let span = document.createElement('span');
                            span.innerText = i;
                            if(i===res.pageNo){
                                span.className = 'active';
                            }
                            page.appendChild(span);
                        }
                    }
                }


                xhr.open('post','../api/datalist.php');

                xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');

                // POS请求发送数据
                xhr.send(`pageNo=${pageNo}&qty=${qty}`);


                // 切换分页
                page.onclick = function(e){
                    if(e.target.tagName.toLowerCase() === 'span'){
                        pageNo = e.target.innerText*1;
                        xhr.open('post','../api/datalist.php');
                        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
                        xhr.send(`pageNo=${pageNo}&qty=${qty}`);
                    }
                }
            }
        });

        // 导入数据2
        $.ajax({
            url:'../api/datalist1.php',
            dataType:'json',
            data:{
                id:'0,8'
            },
            success:function(data){
                // console.log(data);
                var box2 = data.map(function(item){
                    return`
                    <div class="like_b1">
                        <img src="${item.imgs}"/>
                        <p>${item.name}</p>
                        <span><b>￥${item.price}</b>&nbsp&nbsp<j>(${item.discount}折)</j>&nbsp&nbsp<del>￥${item.priced}</del></span>
                    </div>
                    `
                }).join('');
                $('.like_b0').html(box2);
            }
        });

        // 显示猜你喜欢按钮
        $('.like').on('mouseover',function(){
            $('.like_btnl').show().on('click',function(){
                $('.like_b0').animate({left: '-1000px'});
                $('like_tr span').html('2');
            });
            $('.like_btnr').show().on('click',function(){
                $('.like_b0').animate({left: '0px'});
            });
        }).on('mouseleave',function(){
            $('.like_btnl').hide();
            $('.like_btnr').hide();
        });

        $('footer').load('../html/ilg-footer.html',function(){});
    });
});
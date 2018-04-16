require(['config'],function(){
    require(['jquery','common'],function($){
        // 导入头部
        $('header').load('../html/rl-header.html',function(){
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
        });

        $.ajax({
            url:'../api/car.php',
            dataType:'json',
            // data:{
            //     category:'7-8折'
            // },
            success:function(data){
                // console.log(data);
                var box1 = data.map(function(item){
                    return`
                    <ul class="shangpin1 clearfix">
                        <li><img src="${item.imgs}"/></li>
                        <li><j>${item.name}</j></li>
                        <li><b>${item.price}</b><br/><del>${item.priced}</del></li>
                        <li><input type="button" class="btnl" value="-"/><input type="text" class="qty" value="${item.qty}"/><input type="button" class="btnr" value="+"/></li>
                        <li><span>${item.price}</span></li>
                        <li class="del">删除</li>
                    </ul>
                    `
                }).join('');
                $('.shangpin').html(box1);

                // 删除商品
                $('.shangpin1 .del').on('click',function(){
                    let _name = $('.shangpin1 li j').html();
                    ajax({
                        url:'../api/car_del.php',
                        data:{name:_name},
                        success:function(data){
                            window.location.reload();
                        }
                    })
                })

                var sum = 0;  
                $(".shangpin1 li span").each(function(i){  
                    sum = sum + parseInt($(this).html());  
                });  
                $('.yuanjia j').html(sum)
                $('.zongjin j').html(sum)

                var sum1 = 0;  
                $(".shangpin1 li .qty").each(function(i){  
                    sum1 = sum1 + parseInt($(this).val());  
                });  
                $('.yuanjia i').html(sum1)

                var sum2 = 0;  
                $(".shangpin1 li del").each(function(i){  
                    sum2 = sum2 + parseInt($(this).text());  
                });  
                $('.youhuijia j').html(sum2)

                // 数量加减
                $('.btnr').on('click',function(){
                    let qty1 = $(this).parent().find('.qty').val();
                    qty1++;

                    let danjia = $(this).parent().parent().find('b').html();
                    let zongjia = $(this).parent().parent().find('span').html();
                    zongjia = danjia*qty1
                    $(this).parent().parent().find('span').html(zongjia)
                    $(this).parent().find('.qty').val(qty1);

                    var sum = 0;  
                    $(".shangpin1 li span").each(function(i){  
                        sum = sum + parseInt($(this).html());  
                    });  
                    $('.yuanjia j').html(sum)
                    $('.zongjin j').html(sum)

                    var sum1 = 0;  
                    $(".shangpin1 li .qty").each(function(i){  
                        sum1 = sum1 + parseInt($(this).val());  
                    });  
                    $('.yuanjia i').html(sum1)

                    var sum2 = 0;  
                    $(".shangpin1 li del").each(function(i){  
                        sum2 = sum2 + parseInt($(this).text());  
                    });  
                    $('.youhuijia j').html(sum2)
                })
                $('.btnl').on('click',function(){
                    let qty0 = $(this).parent().find('.qty').val();
                    if(qty0>1){
                        qty0--;
                        let danjia = $(this).parent().parent().find('b').html();
                        let zongjia = $(this).parent().parent().find('span').html();
                        zongjia = danjia*qty0
                        $(this).parent().parent().find('span').html(zongjia)
                        $(this).parent().find('.qty').val(qty0);

                        var sum = 0;  
                        $(".shangpin1 li span").each(function(i){  
                            sum = sum + parseInt($(this).html());  
                        });  
                        $('.yuanjia j').html(sum)
                        $('.zongjin j').html(sum)

                        var sum1 = 0;  
                        $(".shangpin1 li .qty").each(function(i){  
                            sum1 = sum1 + parseInt($(this).val());  
                        });  
                        $('.yuanjia i').html(sum1)

                        var sum2 = 0;  
                        $(".shangpin1 li del").each(function(i){  
                            sum2 = sum2 + parseInt($(this).text());  
                        });  
                        $('.youhuijia j').html(sum2)
                    }
                })
            }
        });
        
        
        $('.jiesuan_c').show();
     
    

        $('footer').load('../html/rl-footer.html',function(){

        });
    });
});
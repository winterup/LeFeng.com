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

        // 登录
        let username = document.querySelector('#username');
        let password = document.querySelector('#password');
        let btnReg = document.querySelector('.btn');
        let group = username.parentNode;
        let txt = username.nextElementSibling;

        btnReg.onclick=function(){
            let _username = username.value;
            let _password = password.value;

            ajax({
                url:'../api/login.php',
                data:{
                    username:_username,
                    password:_password,
                    // type:'reg'
                },
                success:function(data){
                    // console.log(data);
                    if(data == 'success'){
                        alert('登录成功');
                        $(location).attr('href', '../index.html');
                    }else{
                        alert('登录名或密码错误')
                    }
                }
            })
        }

        $('footer').load('../html/rl-footer.html',function(){
        });
    });
});
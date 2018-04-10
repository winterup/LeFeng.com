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

        // 注册验证
        let username = document.querySelector('#username');
        let SMS1 = document.querySelector('#SMS');
        let SMS = document.querySelector('.SMS');
        let password = document.querySelector('#password');
        let makesure = document.querySelector('#makesure');
        let btnReg = document.querySelector('.btn');
        let group = username.parentNode;
        let txt = username.nextElementSibling;

        function test(){  
            // 0-9的随机数  
            var arr = [];//容器  
            for(var i =0;i<6;i++){//循环六次  
                var num = Math.random()*9;//Math.random();每次生成(0-1)之间的数;  
                num = parseInt(num,10);  
                arr.push(num);  
            }         
            // console.log(arr);  
            var b = arr.join("");
            return b;
        }; 



        username.onblur = function(){
            let _username = username.value;

            ajax({
                url:'../api/reg.php',
                data:{username:_username},
                success:function(data){
                    // console.log(data);
                    if(data === 'success'){
                        group.classList.remove('has-error');
                        group.classList.add('has-success');
                        txt.innerHTML = '';
                    }else{
                        group.classList.remove('has-success');
                        group.classList.add('has-error');
                        txt.innerHTML = _username+"这个用户太受欢迎了";
                    }
                }
            })
        }
        
        // SMS.onclick = function(){
            SMS.innerText = test();
        // }
        console.log(SMS.innerText)

        btnReg.onclick=function(){
            let _username = username.value;
            let _password = password.value;
            let _makesure = makesure.value;
            let _SMS1 = SMS1.value;

            if(!/^1[34578]\d{9}$/.test(_username)){
                alert('手机号码格式错误');
                console.log(666);
                return false;
            }

            if(SMS.innerText !== _SMS1){
                alert('验证码错误');
                return false;
            }
            
            if(!/^[^\s]{6,20}$/.test(_password)){
                alert('密码格式错误');
                return false;
            }

            if(_password !== _makesure){
                alert('两个密码不一致');
                return false;
            }

            ajax({
                url:'../api/reg.php',
                data:{
                    username:_username,
                    password:_password,
                    type:'reg'
                },
                success:function(data){
                    // console.log(data);
                    if(data == 'success'){
                        alert('注册成功');
                        $(location).attr('href', 'login.html');
                    }
                }
            })
        }

        $('footer').load('../html/rl-footer.html',function(){

        });
    });
});
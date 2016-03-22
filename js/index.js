// document.addEventListener('readystatechange',function(){
// 	if(document.readyState === 'complete'){
// 		var user = document.getElementsByClassName('user')[0];
// 		    mask = document.getElementById('user-mask');
// 		    guest = document.getElementsByClassName('guest')[0];
// 		    usermore = document.getElementsByClassName('user-more')[0];
// 		    guideroles = document.getElementsByClassName('guide-roles')[0];
// 		    discover = document.getElementsByClassName('discover')[0];
// 		    panel = document.getElementsByClassName('discover-panel')[0];
// 		    back = document.getElementsByClassName('discover-search-back')[0];
// 		    spinner_ring = document.getElementsByClassName('spinner_ring')[0];
// 		    guideback = document.querySelector('.guide-back img');

//         user.onclick = function(){
//         	mask.style.display = 'block';
//         	guest.style.display = 'block';
//         	guest.style.transform = 'translate3d(0, 0, 0)';
//         	mask.onclick = function(){
//         	mask.style.display = 'none';
//         	guest.style.transform = 'translate3d(-100%, 0, 0)';
//            }
//         }   
//         usermore.onclick = function(){
//             guideroles.style.transform = 'translate3d(0, 0, 0)';
//             guideroles.style.opacity = 1;
//             guideback.onclick = function(){
//         	guideroles.style.transform = 'translate3d(0, -100%, 0)';
//             guideroles.style.opacity = 0;
//           }
//         }
//         discover.onclick = function(){
//             panel.style.opacity = 1;
//             panel.style.transform = 'translate3d(0,0,0)';
//             back.onclick = function(){
//             	panel.style.opacity = 0;
//                 panel.style.transform = 'translate3d(100%,0,0)';
//             }
//         }
//         var x = 0;
//         var t = function(){
//         	x += 2;
//         	spinner_ring.style.transform = 'rotate('+x+'deg)';
//         }
//         setInterval(t,1)
// 	}
// })

$(function(){
    $('.tabs').children().bind('tap',function(){
        $('.tabs').children().removeClass('best')
        $(this).removeClass('best').addClass('best');
        
    })





    $('.discover').bind('tap',function(e){
        $('.discover-panel').css({opacity:1,left:'-100%'})
        $('.discover-search-back').tap(function(){
            $('.discover-panel').css({opacity:0,left:0})
        })


        var x = 0;
         var t = function(){
         x += 2;
         $('spinner_ring').css('transform','rotate('+x+'deg)') 
        }
         setInterval(t,1)

    })






    $('.tabs').find('li').swipeRight(function(e){
         e.stopPropagation();
         e.preventDefault();
    })
    $('.button-collapse').bind('tap',function(e){
        $('#slide-out').css({left:0})
        e.stopPropagation();
    })
    $('#slide-out').bind('tap',function(e){
        e.stopPropagation();
    })
    $(document).bind('tap swipeLeft',function(){

        $('#slide-out').css({left:'-105%'})
    })
    $(document).bind('swipeRight',function(){
        $('#slide-out').css({left:0})
    })

  // 把栏目记录到li上
   $(".tabs li").each(function(i){
    $(this).data('index',lists[i].id);
  })

   $('#articles').first().addClass('active');
   // 点击li
   $(".tabs li").click(function(){
    var listsId=$(this).data('index');
    var shuju=content.filter(function(v,i){
        return v.cateid==listsId;
    })
    $("#articles").empty();
    shuju.forEach(function(v,i){
        var el=$("#yangben").clone();
        el.attr('id','');
        el.find('.img').attr('src',v.src);
        
        el.find('.article-title').text(v.title);
        el.find(".article-source").text(v.source);
        el.find('.article-date').html(v.date);
        el.find('.article-coments').html(v.coments);
        el.find('.article-like').html(v.like);
        el.data('index',v.id);
        $("#articles").append(el);

    })
 })





})
document.addEventListener('plusready',function(){
    
    $('.button-collapse').tap(function(){

        var index=$(this).data('index');
        var w=plus.webview.create('zuoce.html','zuoce',{},{xx:index});
        w.show();
        
    })
    
})
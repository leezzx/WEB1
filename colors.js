var Hone = {
    setColor:function(color) {
        // var h1list = document.querySelectorAll('h1');
        // var i = 0;
        // while(i < h1list.length) {
        //     h1list[i].style.color = color;
        //     i = i + 1;
        // }
        $('h1').css('color', color); // $ : 이 웹페이지의 모든 h1태그를 jquery로 제어한다는 뜻(google CDN jquery사용)
    }
}
var Body = {
    setColor:function(color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    }, // 객체간의 구분은 ,로 함
    setBackgroundColor:function(color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body'); // document.querySelector('body')를 변수(var)로 지정
    if(self.value === 'night') {Body.setBackgroundColor('black'); Body.setColor('white'); self.value = 'day';// document.querySelector('#night_day')는 자기 자신이기에 this로 대체
        Hone.setColor('powderblue');
    }
    else {Body.setBackgroundColor('white'); Body.setColor('black'); self.value = 'night';
        Hone.setColor('blue');
    }
}
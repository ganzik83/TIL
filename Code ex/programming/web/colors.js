var links = {
    setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    //     while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1
    //     }
    // }
    $('a').css('color', color);
    }
}
var body = {
    setColor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
    },
    backGroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
    }
}

function nightAndDay(self){
var target = document.querySelector('body');
if(self.value === 'night') {
    body.backGroundColor('black');
    body.setColor('white');
    self.value = 'day';

    links.setColor('powderblue');

} else {
    body.backGroundColor('white');
    body.setColor('black');
    self.value = 'night';
    
    links.setColor('pink');

}
}

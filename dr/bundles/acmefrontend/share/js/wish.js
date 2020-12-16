Zepto(function($){

	//rem计算字体大小。设计图为1080宽时，rem基数为59.999，x/59.999= (rem)；设计图为640宽时，rem基数为35.555，x/35.555= (rem)；
    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                // if (docEl.style.fontSize) return;
                clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                var myclientWidth = clientWidth;
                if (myclientWidth>=1024) {myclientWidth = 480};
                docEl.style.fontSize = 20 * (myclientWidth / 360) + 'px';
                if (document.body) {
                    // document.body.style.fontSize = docEl.style.fontSize;
                }
            };
        recalc();
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('**DOMContentLoaded**', recalc, false);
    })(document, window);
        
	$('#myAudio').attr('src', 'http://wmbns.oss-cn-hangzhou.aliyuncs.com/mydr.mp3');
	$('.wish_cort').addClass('start');
	$('.share_bk a').click(function(){
		$('.share_bk').hide();
	})
})

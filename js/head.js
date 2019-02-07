$(function () {
  $('.toggle-menu').on('click', function () {
    if (!$('.menus').is(':visible')) {
      $('.menus').velocity('stop')
        .velocity('transition.slideDownIn', { duration: 300 })
    } else {
      $('.menus').velocity('stop')
        .velocity('transition.slideUpOut', { duration: 300 })
    }
  })
  $(document).on('click', function (e) {
    var flag = $('.menus')[0].contains(e.target) || $('.toggle-menu')[0].contains(e.target)
    if (!flag && $('.toggle-menu').is(':visible')) {
      $('.menus').velocity('stop')
        .velocity('transition.slideUpOut', { duration: 300 })
    }
  })
  $(window).on('resize', function (e) {
    if (!$('.toggle-menu').is(':visible')) {
      if (!$('.menus').is(':visible')) {
        $('.menus').velocity('stop')
          .velocity('transition.slideDownIn', { duration: 300 })
      }
    }
  })
})
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();

require.config({
  paths: {
    'jQuery': 'jquery',
    'jQeasing': 'jquery.easings.min',
    'jQslimscroll':'jquery.slimscroll.min',
    'jQfullPage':'jquery.fullPage.min',
    'bootstrap':'bootstrap.min',
  },
  shim: {
    'jQuery': {
      exports: '$'
    },
    'bootstrap': ['jQuery'],
    'jQeasing': ['jQuery'],
    'jQslimscroll': ['jQuery'],
    'jQfullPage': ['jQeasing', 'jQslimscroll']
  }
});

require(['jQuery', 'bootstrap','jQeasing', 'jQslimscroll','jQfullPage'], function ($) {
  $(document).ready(function () {
    $('#fullpage').fullpage({
      menu: true,
      // slidesNavigation: false,
      // slidesNavPosition: 'bottom',
      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,
    });

    $('ul.nav > li').click(function (e) {
      $('ul.nav > li').removeClass('active');
      $(this).addClass('active');
    });

    // set images
    var myPinterestSrc="https://raw.githubusercontent.com/ldong/myPinterest/iPhone/iPhoneDemo.gif";
    $("#myPinterest").attr("src", myPinterestSrc);

    var squid = "https://raw.githubusercontent.com/ldong/Squid/master/demo/demo.gif";
    $('#iOSsquid').attr('src', squid);

    var ldMineSweeper ="https://raw.githubusercontent.com/ldong/LDMineSweeper_iOS/master/demo/demo.gif"
    $('#ldMineSweeper').attr('src',ldMineSweeper);

    var ticTacToe= "https://raw.githubusercontent.com/ldong/tic_tac_toe/master/demo.png";
    $('#ticTacToe').attr('src',ticTacToe);
  });
});

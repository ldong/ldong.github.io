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
  });
});

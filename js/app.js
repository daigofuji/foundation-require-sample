define([
  'jquery',
  'modernizr',
  'fastclick',
  'foundation.reveal'
  ], function ($, Modernizr, FastClick) {
    $(document).foundation({});

    $('#myModal').foundation('reveal', 'open');
});
$(function() { /* Drop down animations for 'Show Styles' links and text dropdown */
  $( ".bbcid-styleguide-notes" ).accordion({
    collapsible: true,
    active: false
  });
  $( ".bbcid-text-dropdown" ).accordion({
    collapsible: true,
    active: false
  });
});

$(function() { /* Toggle checkbox tick */
  $( ".checkbox" ).click(function() {
    $( "a.checkbox" ).toggleClass( "checked" );
  });
});

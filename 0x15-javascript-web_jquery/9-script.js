$(document).ready(function () {
  $.getJSON(
  '  https://fourtonfish.com/hellosalut/?lang=fr',
    function (data) {
      $.each(data.query.results, function (i, value) {
        $('DIV#sf_wind_speed').text(value.wind.speed);
      });
    }
  );
});

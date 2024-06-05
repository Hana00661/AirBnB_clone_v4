/* Dynamic Funcionality */
$('document').ready(function () {
  /* Listens for changes on each amenities INPUT checkbox tag */
  const amenitiesId = {};
  $('.amenities INPUT[type="checkbox"]').click(function () {
    if ($(this).prop('checked')) {
      amenitiesId[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenitiesId[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenitiesId).join(', '));
  });
  /* Listens for changes on each states INPUT checkbox tag */
  const statesId = {};
  const citiesId = {};
  const citiesStates = {};
  $('.locations h2 INPUT[type="checkbox"]').click(function () {
    if ($(this).prop('checked')) {
      statesId[$(this).attr('data-id')] = $(this).attr('data-name');
      citiesStates[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete statesId[$(this).attr('data-id')];
      delete citiesStates[$(this).attr('data-id')];
    }

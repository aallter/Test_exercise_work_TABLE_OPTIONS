$(document).on("click.bs.dropdown.data-api", ".noclose", function (e) { e.stopPropagation() });

$('.dropdown').on('shown.bs.dropdown', function() {
    $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
  }).on('hidden.bs.dropdown', function() {
    $(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
  });

$('#close').on('click',function(){
    $('.wind-table').css('display','none');
});
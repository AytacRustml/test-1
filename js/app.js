
$("#accordion button").click(function () {
    $("#accordion p").stop().slideUp()
    $(this).next().stop().slideToggle()
    
})

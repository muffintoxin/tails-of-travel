$(document).ready(function () {
    var apiKey = 'AIzaSyBAObxrVVzfw0d31yKx9d7JgPegJNkapr8';
    var apiKey2 = 'AIzaSyBB9dhmGS7775XKuS8PDCUWmBSQaQNTih8';
    var baseUrl = 'https://www.google.com/maps/embed/v1/search?key=' + apiKey + '&q=pet+friendly+'

    function processJSON(json) {
        // Do stuff here
        console.log(json);
    }
    $('#search-page').keyup(function(event){
        if(event.keyCode == 13){
            $('#search-button').click();
        }
    });
    $('#search-button').click(function (event) {
        $('#search-results').removeClass('hidden')
        $('html, body').animate({
            scrollTop: $('#search-results').offset().top
        }, 500);
        var city = $('#input-city').val();
        var keyWord = $('#input-keyword').text() + '+';
        //var keyWord = $('#input-keyword').val() + '+';
        console.log(baseUrl + keyWord + city);
        $('#results-frame').attr('src', baseUrl + city);
        var address = 'Berlin'
        /*$.ajax({
            type: "GET",
            url: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=" + city + "&radius=500&key=" + apiKey2,
            dataType: "json",
            success: processJSON
        })*/
    });
    $('input:text').focus(function(){$(this).val("")});
    $('#search-dropdown').hover(
        function(){
            $(this).addClass('dropdown--open')
        },function(){
            $(this).removeClass('dropdown--open')
        }
    )
    $('#search-dropdown-content').click(function(event){
        console.log($(event.target).text())
        $('#input-keyword').val($(event.target).text())
        $('#search-dropdown').removeClass('dropdown--open')
        $('#search-button').click()
    })
})
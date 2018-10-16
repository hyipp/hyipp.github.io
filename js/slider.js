


///////////////////////////////////////////    Вид помещения  //////////////////////////////////////////////////////////////////////////////

var flatClicked = true;
var officeClicked = false;
var houseClicked = false;
$(function () {
 
  $('.flat').css("background-color", "blue")
  $('.flat').css("color", "white")

  $(".office").bind('click', function () {
    flatClicked = false;
    officeClicked = true;
    houseClicked = false;
      $('.type').css("background-color", "white")
      $('.type').css("color", "blue")
      $('.office').css("background-color", "blue")
      $('.office').css("color", "white")
      $('.flat-container').css('display', 'none');
      $('.house-container').css('display', 'none');
      $('.office-container').css('display', 'block');
      $("#total").val(2250 * discont);
      $("#office-slider").slider({
          value: 1
      });
      $("#flat-slider").slider({
          value: 1
      });
      $("#house-slider").slider({
          value: 1
      });
      $("#office-amount").val('50');
      $('input:checkbox').removeAttr('checked');
      $(".icon1").css("display", "block");
      $(".icon2").css("display", "block");
      $(".icon3").css("display", "none");
      $(".icon4").css("display", "block");
      $(".icon5").css("display", "block");

  });
});
$(function () {
  $(".flat").bind('click', function () {
      flatClicked = true;
      officeClicked = false;
      houseClicked = false;
      $('.type').css("background-color", "white")
      $('.type').css("color", "blue")
      $('.flat').css("background-color", "blue")
      $('.flat').css("color", "white")
      $('.office-container').css('display', 'none');
      $('.house-container').css('display', 'none');
      $('.flat-container').css('display', 'block');
      $("#total").val(1700 * discont);
      $("#office-slider").slider({
          value: 1
      });
      $("#flat-slider").slider({
          value: 1
      });
      $("#house-slider").slider({
          value: 1
      });
      $("#flat-amount").val('1');
      $('input:checkbox').removeAttr('checked');
      $(".icon1").css("display", "block");
      $(".icon2").css("display", "block");
      $(".icon3").css("display", "block");
      $(".icon4").css("display", "none");
      $(".icon5").css("display", "none");
  });
});

$(function () {
  $(".house").bind('click', function () {
    flatClicked = false;
    officeClicked = false;
    houseClicked = true;
      $('.type').css("background-color", "white")
      $('.type').css("color", "blue")
      $('.house').css("background-color", "blue")
      $('.house').css("color", "white")
      $('.office-container').css('display', 'none');
      $('.flat-container').css('display', 'none');
      $('.house-container').css('display', 'block');
      $("#total").val(2500 * discont);
      $("#office-slider").slider({
          value: 1
      });
      $("#flat-slider").slider({
          value: 1
      });
      $("#house-slider").slider({
          value: 1
      });
      $("#bath-slider").slider({
          value: 1
      });
      $("#office-amount").val('100');
      $('input:checkbox').removeAttr('checked');
      $(".icon1").css("display", "block");
      $(".icon2").css("display", "block");
      $(".icon3").css("display", "block");
      $(".icon4").css("display", "block");
      $(".icon5").css("display", "block");
  });
});


/////////////////////////////////////////////////////          СЛАЙДЕРЫ         ///////////////////////////////////////////////////////////
var total;
var rooms = 1;
var baths = 1;
var meters = 50;
var discont = 1;
$(function () {
  $("#flat-slider").slider({
      range: "max",
      min: 1,
      max: 4,
      value: 1,
      slide: function (event, ui) {
          $("#flat-amount").val(ui.value);
          rooms = ui.value;
          if(rooms >=2)
          {
            total = (700 + rooms * 1000 + features) * discont;
            $("label[for='flat-amount']").text("Кол-во комнат:")
          }
          else
          {
              total = (1700 + features) * discont;
          }
          if(rooms >=4)
          {
            total = "Цена договорная"
            $("#flat-amount").val("100м2");
            $("label[for='flat-amount']").text("Больше")
          }
          $("#total").val(total);
      }
  });
  $("label[for='flat-amount']").text("Кол-во комнат:")
  $("#flat-amount").val($("#flat-slider").slider("value"));
  $("#total").val(1700);
});



$(function () {
  $("#office-slider").slider({
      range: "max",
      min: 50,
      max: 100,
      value: 1,
      step: 10,
      slide: function (event, ui) {
          $("#office-amount").val(ui.value);
          meters = ui.value;
          total = (meters * 45 + features) * discont;
          $("#total").val(total);
      }
  });
  $("#office-amount").val($("#office-slider").slider("value"));

});

$(function () {
  $("#house-slider").slider({
      range: "max",
      min: 50,
      max: 400,
      value: 1,
      step: 10,
      slide: function (event, ui) {
          $("#house-amount").val(ui.value);
          meters = ui.value;
          total = (meters * 50 + baths * 200 + features) * discont;
          $("#total").val(total);
      }
  });
  $("#house-amount").val($("#house-slider").slider("value"));

});

$(function () {
  $("#bath-slider").slider({
      range: "max",
      min: 1,
      max: 6,
      value: 1,
      slide: function (event, ui) {
          $("#bath-amount").val(ui.value);
          baths = ui.value;
          $("#total").val((meters * 50 + baths * 200) * discont);
      }
  });
  $("#bath-amount").val($("#bath-slider").slider("value"));
});




//////////////////////////////////////////////////          ИКОНКИ                  ////////////////////////////////////////////////////////////////

var features = 0;

$(document).ready(function () {
  var totalStr = $("#total").val();
  total = parseInt(totalStr);
  $('#myCheckbox1').change(function () {
      var price = 50
      if (this.checked) {
          features += price;
          $("#total").val(total += price);
      }
      else {
          features -= price;
          $("#total").val(total -= price);
      }

  });

  $('#myCheckbox2').change(function () {
      var price = 70
      if (this.checked) {
          features += price;
          $("#total").val(total += price);
      }
      else {
          features -= price;
          $("#total").val(total -= price);
      }
  });

  $('#myCheckbox3').change(function () {
      var price = 130
      if (this.checked) {
          features += price;
          $("#total").val(total += price);
      }
      else {
          features -= price;
          $("#total").val(total -= price);
      }
  });
  $('#myCheckbox4').change(function () {
      var price = 500
      if (this.checked) {
          features += price;
          $("#total").val(total += price);
      }
      else {
          features -= price;
          $("#total").val(total -= price);
      }
  });
  $('#myCheckbox5').change(function () {
      var price = 700
      if (this.checked) {
          features += price;
          $("#total").val(total += price);
      }
      else {
          features -= price;
          $("#total").val(total -= price);
      }
  });
});


/////////////////////////////////////////////////  Периодичность        ////////////////////////////////////////////////////////////////


$(function () {
  var onetime = $('.oneTime').val();
  $('#periodHandler').val(onetime);
  $('.oneTime').css("background-color", "blue")
  $('.oneTime').css("color", "white")

  $('.oneTime').bind('click', function () {
      $('.period').css("background-color", "white")
      $('.period').css("color", "blue")
      $('.oneTime').css("background-color", "blue")
      $('.oneTime').css("color", "white")
      discont = 1;
      if(officeClicked == false && houseClicked == false && flatClicked == true)
      {
       if(rooms >=2)
          {
            $('#total').val(700 + rooms * 1000 + features);
          }
          else
          {
            $('#total').val(1700 + features);
          }
          if(rooms >=4)
          {
            $('#total').val("Цена договорная");
          }
      }
      if (flatClicked == false && houseClicked == false && officeClicked == true)
      {
        $('#total').val((meters * 45 + features) * discont)
      }
      if(flatClicked == false && officeClicked == false && houseClicked == true)
      {
        $('#total').val((meters * 50 + baths * 200) * discont)
      }
      var onetime = $('.oneTime').val();
      $('#periodHandler').val(onetime);
  });

  $('.everyWeek').bind('click', function () {
      $('.period').css("background-color", "white")
      $('.period').css("color", "blue")
      $('.everyWeek').css("background-color", "blue")
      $('.everyWeek').css("color", "white")
      discont = 0.8;
      if(officeClicked == false && houseClicked == false && flatClicked == true)
      {
      if(rooms >=2)
      {
        $('#total').val((700 + rooms * 1000 + features) * discont);
      }
      else
      {
        $('#total').val((1700 + features)* discont);
      }
      if(rooms >=4)
      {
        $('#total').val("Цена договорная");
      }
    
      }
      if (flatClicked == false && houseClicked == false && officeClicked == true)
      {
        $('#total').val((meters * 45 + features) * discont)
      }
      if(flatClicked == false && officeClicked == false && houseClicked == true)
      {
        $('#total').val((meters * 50 + baths * 200) * discont)
      }
      var everyWeek = $('.everyWeek').val();
      $('#periodHandler').val(everyWeek);
  });

  $('.every2Weeks').bind('click', function () {
      $('.period').css("background-color", "white")
      $('.period').css("color", "blue")
      $('.every2Weeks').css("background-color", "blue")
      $('.every2Weeks').css("color", "white")
      discont = 0.85;
      if(officeClicked == false && houseClicked == false && flatClicked == true)
      {
        if(rooms >=2)
        {
          $('#total').val((700 + rooms * 1000 + features) * discont);
        }
        else
        {
          $('#total').val((1700 + features)* discont);
        }
        if(rooms >=4)
        {
          $('#total').val("Цена договорная");
        }
      
      }
      if (flatClicked == false && houseClicked == false && officeClicked == true)
      {
        $('#total').val((meters * 45 + features) * discont)
      }
      if(flatClicked == false && officeClicked == false && houseClicked == true)
      {
        $('#total').val((meters * 50 + baths * 200) * discont)
      }
      var every2Weeks= $('.every2Weeks').val();
      $('#periodHandler').val(every2Weeks);
  });

  $('.every4Weeks').bind('click', function () {
      $('.period').css("background-color", "white")
      $('.period').css("color", "blue")
      $('.every4Weeks').css("background-color", "blue")
      $('.every4Weeks').css("color", "white")
      discont = 0.9;
      if(officeClicked == false && houseClicked == false && flatClicked == true)
      {
        if(rooms >=2)
        {
          $('#total').val((700 + rooms * 1000 + features) * discont);
        }
        else
        {
          $('#total').val((1700 + features)* discont);
        }
        if(rooms >=4)
        {
          $('#total').val("Цена договорная");
        }
      
      }
      if (flatClicked == false && houseClicked == false && officeClicked == true)
      {
        $('#total').val((meters * 45 + features) * discont)
      }
      if(flatClicked == false && officeClicked == false && houseClicked == true)
      {
        $('#total').val((meters * 50 + baths * 200) * discont)
      }
      var every4Weeks = $('.every4Weeks').val();
      $('#periodHandler').val(every4Weeks);
  });

});
///////////////////////////////////////////////////   Тип  помещения ////////////////////////
$(function () {
  var roomType = $('.flat').val();
  $('#roomTypeHandler').val(roomType)

  $('.flat').bind('click', function () {
       var roomType = $('.flat').val();
      $('#roomTypeHandler').val(roomType)
  });
  $('.office').bind('click', function () {
      var roomType = $('.office').val();
      $('#roomTypeHandler').val(roomType)
  });
  $('.house').bind('click', function () {
      var roomType = $('.house').val();
      $('#roomTypeHandler').val(roomType)
  });

});
///////////////////////////////////////////////////   Тип  уборки    ////////////////////////
$('.simple').bind('click', function () {
    var Type = $('.simple').val();
    $('#cleanTypeHandler').val(Type)
});
$('.standart').bind('click', function () {
    var Type = $('.standart').val();
    $('#cleanTypeHandler').val(Type)
});
$('.super').bind('click', function () {
    var Type = $('.super').val();
    $('#cleanTypeHandler').val(Type)
});
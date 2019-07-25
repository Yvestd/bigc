//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/
$(document).ready(function() { 
    $('.btn-number').click(function(e){
        e.preventDefault();
        
        fieldName = $(this).attr('data-field');
        type      = $(this).attr('data-type');
        var input = $("input[name='"+fieldName+"']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if(type == 'minus') {
                
                if(currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                } 
                if(parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if(type == 'plus') {

                if(currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if(parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function(){
       $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {
        
        minValue =  parseInt($(this).attr('min'));
        maxValue =  parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());
        
        name = $(this).attr('name');
        if(valueCurrent >= minValue) {
            $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if(valueCurrent <= maxValue) {
            $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }   
    });
    $(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});

// Modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

//Close Menu
// $(document).ready(function() {   
    //$(window).click(function(e) {
        /*if (!$(e.target).hasClass('menu-img') && $("#showRightPush").hasClass('active')) {
            $("body").toggleClass("cbp-spmenu-push-toleft");
            $("#cbp-spmenu-s2").toggleClass("cbp-spmenu-open");
            $("#showRightPush").toggleClass("active");
        }*/
       /* $(".cbp-spmenu-push").click(function(){
            $("body").toggleClass("cbp-spmenu-push-toleft");
            $("#cbp-spmenu-s2").toggleClass("cbp-spmenu-open");
            $("#showRightPush").toggleClass("active");
        })*/
        // console.log(e.target.className)
        // alert(e.target.className)
        // if($(".menu-img").hasClass('menu-img')){
        //     $("body").addClass("cbp-spmenu-push-toleft");
        //     $("#cbp-spmenu-s2").addClass("cbp-spmenu-open");
        //     $("#showRightPush").addClass("active");
        // }
        // if($(".cbp-spmenu-push-toleft").hasClass('cbp-spmenu-push-toleft')){
        //     $("body").removeClass("cbp-spmenu-push-toleft");
        //     $("#cbp-spmenu-s2").removeClass("cbp-spmenu-open");
        //     $("#showRightPush").removeClass("active");
        // }

    //});

//     $('nav.cbp-spmenu').click(function(event){
//         event.stopPropagation();
//     });
// });

var heightWindow = $(window).height()
        var heightElem = $(".code-scan.footer").height()
        var result = heightWindow - heightElem
        console.log(result)
        $(".code-scan.footer").css("top", result - 15)

//Footer Code Key
// $(document).ready(function() {
//     var heightWindow = $(window).height()
//     var heightElem = $(".code-scan.footer").height()
//     var result = heightWindow - heightElem
//     $(".code-scan.footer").css("top", result - 15)
// });
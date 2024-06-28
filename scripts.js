    
$(document).ready(function() {
    if ($(this).scrollTop() > 0) {
        $('#navbar nav').removeClass('navbar-transparent');
    } else {
        $('#navbar nav').addClass('navbar-transparent');
    }

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#navbar nav').removeClass('navbar-transparent');
        } else {
            $('#navbar nav').addClass('navbar-transparent');
        }
    });
});

$(document).ready(function() {
    let catt = "Vendor Payments,Supplier Payments,Refunds,Salary Disbursements,Rewards,Cashbacks,Wages"

    let categories = catt.split(',');

    new TypeIt('.typed', {
        strings: categories,
        speed: 100, 
        breakLines: false, 
        loop: true
    }).go();
});

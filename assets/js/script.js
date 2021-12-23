$(document).ready(function(){

    // trigger
    $('.trigger').on('click', function(e){
        e.preventDefault()
        
        let el = $(this).attr('href')
        let tujuan = $(el)

        $('html,body').animate({
            scrollTop: $(this).attr('href') == '#program' ? tujuan.offset().top - 50 : tujuan.offset().top - 100
        }, 500)
    })

    // link active
    $('.link-act').on('click', function(){
        $('.link-act').removeClass('active')
        $(this).addClass('active')
    })
    $('.navbar-brand').on('click', function(){
        $('.link-act').removeClass('active')
        $('.hom').addClass('active')
    })
    $('.reg-click').on('click', function(){
        $('.link-act').removeClass('active')
        $('.reg').addClass('active')
    })
})
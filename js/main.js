$(".nav-item .nav-link").click(function(){
    $('body,html').animate({scrollTop:$("#" + $(this).data('value')).offset().top},1000)
    $(".nav-item .nav-link").removeClass("active")
    $(this).addClass(".active")
})
  
//quotes
let quotes = [
    {quote:"“Be yourself; everyone else is already taken.”" ,author:"Oscar Wilde"},
    {quote:"“So many books, so little time.”" ,author:" Frank Zappa"},
    {quote:"“A room without books is like a body without a soul.”" ,author:" Marcus Tullius Cicero"},
    {quote:"“You only live once, but if you do it right, once is enough.”" ,author:"Mae West"},
    {quote:"“Be the change that you wish to see in the world.”" ,author:" Mahatma Gandhi"}
]
function getQuote(){
let rondomQuote = Math.floor(Math.random()*quotes.length)
document.getElementById("quo").innerHTML =`${quotes[rondomQuote].quote}` 
document.getElementById("author").innerHTML = `${quotes[rondomQuote].author}`

}
$(".nav-item .nav-link").click(function(){
    $("body,html").animate({scrollTop:$("#" + $(this).data("value")).offset().top + 1}
        ,1000)
        $(".nav-item .nav-link").removeClass("active")  
        $(this).addClass("active")  
})

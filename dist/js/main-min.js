$(document).ready(function(){$(".has-menu#myrabida-list-btn").click(function(){$(this).find(".arrow-menu").toggleClass("faRot"),$("#myrabida-list").slideToggle()}),$(".has-menu#myfavorite-list-btn").click(function(){$(this).find(".arrow-menu").toggleClass("faRot"),$("#myfavorite-list").slideToggle()}),$(".has-menu#mysaves-list-btn").click(function(){$(this).find(".arrow-menu").toggleClass("faRot"),$("#mysaves-list").slideToggle()}),$(".has-menu#profile-list-btn").click(function(){$(this).find(".arrow-menu").toggleClass("faRot"),$("#profile-list").slideToggle()}),$(".menu-list-items.menu-list-notification").slimscroll({height:"250px",position:"left"}),$(".ithoub-sidebar-inner").slimscroll({position:"left",height:"87vh"}),$(".rbd-summery-inner").slimscroll({position:"left",height:"85vh"}),$(window).scroll(function(){$(this).scrollTop()>100?$(".btn-scroll-top").addClass("showBtn"):$(".btn-scroll-top").removeClass("showBtn")}),$(window).scroll(function(){$(this).scrollTop()>100?$(".rbd-navbar").addClass("nav-active"):$(".rbd-navbar").removeClass("nav-active")});var s,o=0,n=$(".sub-navbar");$(window).scroll(function(){var t=$(window).scrollTop(),i=n.height();s<(o=t)&&t>i+i?n.addClass("scrollUp"):s>o&&!(t<=i)&&n.removeClass("scrollUp"),s=o}),$(".btn-scroll-top").click(function(){return $("html, body").animate({scrollTop:0},600),!1}),$(".btn-sidebar-toggle").on("click",function(){$(this).toggleClass("open-active"),$(".toggle-sidebar-aside, .article-single").toggleClass("nocolumn")})}),$(".owl-carousel").owlCarousel({rtl:!0,loop:!1,margin:10,nav:!1,dots:!1,lazyLoad:!0,responsive:{0:{items:1},600:{items:2},1200:{items:3}}}),new Vue({el:".page",data:{name:"dsdsdsdsd",posts:[{title:"خمسة مدونات يجب على كل مطور زيارتها",content:"تطور شكل البشر كثيرًا منذ ملايين السنين وحتى اليوم، لذا أجسادهم على إضافات تصبح عيونه",img:'background-image: url("img/01d8da76232507.5c63938b9b70b.jpg")'},{title:"خمسة مدونات يجب على كل مطور زيارتها",content:"تطور شكل البشر كثيرًا منذ ملايين السنين وحتى اليوم، لذا قد لا نستطيع منع أنفسنا لذا قد لا نستطيع منع أنفسنا من وهل قد هل ستحتوي أجسادهم على إضافات هل ستحتوي أجسادهم على إضافات تصبح عيونه",img:'background-image: url("img/07be8688707567.5dde6a3625984.jpg")'},{title:"خمسة مدونات يجب على كل مطور زيارتها",content:"تطور شكل البشر كثيرًا منذ ملايين السنين وحتى اليوم، لذا قد لا نستطيع منع أنفسنا لذا قد لا نستطيع منع أنفسنا من وهل قد هل ستحتوي أجسادهم على إضافات هل ستحتوي أجسادهم على إضافات تصبح عيونه",img:'background-image: url("img/a837a188707567.5dde6a362835e.jpg")'}],search:[{title:"خمسة مدونات يجب على كل مطور زيارتها"},{title:"خمسة مدونات يجب على كل مطور زيارتها"},{title:"خمسة مدونات يجب على كل مطور زيارتها"}],notif:[{title:"لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>",profile:'<img src="img/user3.jpg">',icon:'<span class="notify-icon notify-icon-heart"><i class="fa fa-heart"></i></span>',ago:' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'},{title:"لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>",profile:'<img src="img/user3.png">',icon:'<span class="notify-icon notify-icon-comment"><i class="fa fa-comment"></i></span>',ago:' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'},{title:"لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>",profile:'<img src="img/user2.png">',icon:'<span class="notify-icon notify-icon-heart"><i class="fa fa-heart"></i></span>',ago:' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'},{title:"لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>",profile:'<img src="img/madf3366.png">',icon:'<span class="notify-icon notify-icon-comment"><i class="fa fa-comment"></i></span>',ago:' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'},{title:"لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>",profile:'<img src="img/abdellah.png">',icon:'<span class="notify-icon notify-icon-heart"><i class="fa fa-heart"></i></span>',ago:' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'},{title:"لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>",profile:'<img src="img/user2.png">',icon:'<span class="notify-icon notify-icon-comment"><i class="fa fa-comment"></i></span>',ago:' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'}],story:[{color:'<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>'},{color:'<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>'},{color:'<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>'},{color:'<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>'},{color:'<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>'},{color:'<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>'}],showR:!1,RBDusername:"",dataa:""},methods:{showSearch:function(){""==this.dataa?this.showR=!1:this.showR=!0},clearSearch:function(){this.showR=!1}}});
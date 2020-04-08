new Vue ({
    el: '.page',
    data: {
      name: 'dsdsdsdsd',
      posts: [
        {
            title: 'خمسة مدونات يجب على كل مطور زيارتها',
            content: 'تطور شكل البشر كثيرًا منذ ملايين السنين وحتى اليوم، لذا أجسادهم على إضافات تصبح عيونه',
            img: 'background-image: url("img/01d8da76232507.5c63938b9b70b.jpg")',
        },
        {
            title: 'خمسة مدونات يجب على كل مطور زيارتها',
            content: 'تطور شكل البشر كثيرًا منذ ملايين السنين وحتى اليوم، لذا قد لا نستطيع منع أنفسنا لذا قد لا نستطيع منع أنفسنا من وهل قد هل ستحتوي أجسادهم على إضافات هل ستحتوي أجسادهم على إضافات تصبح عيونه',
            img: 'background-image: url("img/07be8688707567.5dde6a3625984.jpg")',
        },
        {
            title: 'خمسة مدونات يجب على كل مطور زيارتها',
            content: 'تطور شكل البشر كثيرًا منذ ملايين السنين وحتى اليوم، لذا قد لا نستطيع منع أنفسنا لذا قد لا نستطيع منع أنفسنا من وهل قد هل ستحتوي أجسادهم على إضافات هل ستحتوي أجسادهم على إضافات تصبح عيونه',
            img: 'background-image: url("img/a837a188707567.5dde6a362835e.jpg")',
        },
          
       ],
       search: [
        {
            title: 'خمسة مدونات يجب على كل مطور زيارتها',
        },
        {
            title: 'خمسة مدونات يجب على كل مطور زيارتها',
        },
        {
            title: 'خمسة مدونات يجب على كل مطور زيارتها',
        },
       ],
       notif: [
        {
            title: 'لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>',
            profile: '<img src="img/user3.jpg">',
            icon: '<span class="notify-icon notify-icon-heart"><i class="fa fa-heart"></i></span>',
            ago: ' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'
        },
        {
            title: 'لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>',
            profile: '<img src="img/user3.png">',
            icon: '<span class="notify-icon notify-icon-comment"><i class="fa fa-comment"></i></span>',
            ago: ' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'
        },
        {
            title: 'لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>',
            profile: '<img src="img/user2.png">',
            icon: '<span class="notify-icon notify-icon-heart"><i class="fa fa-heart"></i></span>',
            ago: ' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'
        },
        {
            title: 'لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>',
            profile: '<img src="img/madf3366.png">',
            icon: '<span class="notify-icon notify-icon-comment"><i class="fa fa-comment"></i></span>',
            ago: ' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'
        },
        {
            title: 'لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>',
            profile: '<img src="img/abdellah.png">',
            icon: '<span class="notify-icon notify-icon-heart"><i class="fa fa-heart"></i></span>',
            ago: ' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'
        },
        {
            title: 'لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong>',
            profile: '<img src="img/user2.png">',
            icon: '<span class="notify-icon notify-icon-comment"><i class="fa fa-comment"></i></span>',
            ago: ' | <span class="notify-time"><i class="fa fa-clock"></i> منذ 5 دقائق</span>'
        },
       ],
       story: [
        {
            color: '<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>',
        },
        {
            color: '<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>',
        },
        {
            color: '<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>',
        },
        {
            color: '<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>',
        },
        {
            color: '<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>',
        },
        {
            color: '<a href="#">لقد قام <strong>عبد الله الهادي</strong> نبضة لمقالك <strong>ماهو الفرق بين واجهة المستخدم</strong></a>',
        },
       ],
       showR: false,
       RBDusername: '',
       dataa:''
    },
    methods: {
        showSearch: function() {
            if(this.dataa == '' ){
                this.showR = false;
            }else{
            this.showR = true;
            }
        },
        clearSearch: function(){
            this.showR = false;
        }
    }
  });
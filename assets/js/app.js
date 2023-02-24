import { portfolio } from '../data/register.js';
import { themes } from '../data/themes.js';



$(document).ready(function(){

    // set banner
    const media = ["ng", "android", "coffe", "enyo", "react", "js", "node", "opera", "pug", "cordova", "ts", "bb", "ios", "css", "hb", "in", "less", "safari", "grunt", "pcss", "ws", "ff", "bower", "bs", "cp", "fa", "html", "jm", "st", "sass", "mi", "yom", "ac", "ws", "edge", "ff", "fs", "git", "ionic", "md", "php", "ps", "wos"]
    $('#aboutMe').prepend(`<div class="banner"><div class="banner-wrapper"></div></div>`);
    media.forEach((item)=> {
        $('.banner-wrapper').append(`
            <div class="scl ${item}"></div>
        `)
    });



    // build portfolio
    portfolio.forEach(domain => {

        // Generate Navigation

        $('#nav').append(`
            <a class="nav-link" href="#${domain.id}">${domain.name}</a>
        `);

        //Generate Portfolio Section
        $('#portfolio').append(`
            <section id="${domain.id}">
                <h2 class="section-title">${domain.name}</h2>
                 <div class= "flex-container"></div>
            </section>`)
            domain.data.forEach(item => {
                $(`#${domain.id} .flex-container`).append(`
                    <div class="grid">
                        <a href="${item.url}" target="_blank" class="card">
                            <figure style="background-image: url(${item.image})" class="card-media"></figure>
                            <div class="card-body"> 
                                <h3 class="title"> ${item.name}</h3>
                                <article>
                                    ${item.details}
                                </article>
                            </div>
                        </a>
                    </div>
                `);
            });

    });
    // Find me Nav link
    $('#nav').append(`<a class="nav-link fr" href="#findMe">Find Me</a>`);

    // sticky nav
    $(window).on('scroll', function(e){
        const st = $(window).scrollTop();
        if(st > 80) {
            $('#header').addClass('fill');
        } else {
            $('#header').removeClass('fill')
        }
        
        scrollSpy();
    });

   
    // Smooth scroll
    $('.nav-link').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        const spyPanel = $(this).attr('href');
        const spyPanelY = $(spyPanel).position().top;
        $('html , body').animate({ scrollTop: (spyPanelY - 60)}, 600);
        $('#header').removeClass('open');
    })

    // Scroll Spy
    function scrollSpy() {
        const windowScrollTop = $(window).scrollTop();
        const gutter = $(window).height() / 3;

        $('.nav-link').each(function () {
            const spyPanel = $(this).attr('href');
            const spyPanelY = $(spyPanel).position().top;
            if (spyPanelY <= (windowScrollTop + gutter)) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        });
    }





    // Theme switch
    function changeTheme () {
        let i = Math.floor(Math.random() * themes.length);
        $(':root').css({
            '--text': themes[i].text,
            '--prime': themes[i].prime,
            '--second': themes[i].second,
            '--bodybg': themes[i].bodybg
        })
    };

    changeTheme();
    $(window).click(function(){
        changeTheme();
    })


    // Toggle Menu
    $('.menu-toogle').click(function(){
        $('#header').toggleClass('open');
    });





    // Find me
    $('#findMe').mousemove(function(e){
        const pointer = $('.pointer');
        const x = e.clientX - (pointer.width()/2);
        const y = (e.pageY - e.currentTarget.offsetTop) - (pointer.height()/2);
        pointer.css({
            transform: `translate(${x}px, ${y}px)`
        })
    })
    $('#findMe').mouseout(function(){
        $('.pointer').css('opacity', 0)
    })
    $('#findMe').mouseover(function(){
        $('.pointer').css('opacity', 1)
    })


   

    
});


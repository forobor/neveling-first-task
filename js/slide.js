$(document).ready(function(){
    const posts = [ 
        {
            background: 'https://i.pinimg.com/originals/a1/d8/ba/a1d8bae4d65f3739e616fb1e2fe001cb.jpg',
            title: 'Takimata magna rebum',
            text: '1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui elit, dignissim vitae velit quis, efficitur efficitur metus. Vestibulum egestas fringilla hendrerit.'
        },
        {
            background: 'https://www.taurho-transcribes.co.uk/wp-content/uploads/2017/02/Medical-transcription-resized-correct.png',
            title: 'Yagyrtem Yarf opal',
            text: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui elit, dignissim vitae velit quis, efficitur efficitur metus. Vestibulum egestas fringilla hendrerit.'
        },
        {
            background: 'https://cdn.lifehacker.ru/wp-content/uploads/2017/12/obl_1513848756-1140x570.jpg',
            title: 'Ugha lyer furm',
            text: '3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dui elit, dignissim vitae velit quis, efficitur efficitur metus. Vestibulum egestas fringilla hendrerit.'
        }
    ]

    for(let j = 0; j < posts.length; j++) {
        $('.dots').append(`<div class='dot' name=${j}/>`);
    }
    $('.dot').get(0).classList.add("active")
    let i=0;

    const changePostInfo = id => {
        $('.stage').animate({opacity: 0}, 500, () => {
                $('.stage-title').text(`${posts[id].title}`);
                $('.stage-text').text(`${posts[id].text}`);
                $('.stage').css({'background-image':`url(${posts[id].background})`});
                dot = $('.dot').get(id);
                dot.classList.add("active");
            }
        );
        $('.stage').animate({opacity: 1},700);        
    }

    const removeActive = id => {
        let dot = $('.dot').get(i);
        dot.classList.remove("active");
    }

    $('#slickButton').click(() => {
        removeActive(i)
        if(i < posts.length - 1) {
            i++;                 
        } else if (i === posts.length - 1) {
            i = 0;
        }
        changePostInfo(i)
    });
    
    $('.dot').click(event => {
        removeActive(i)
        i = +event.target.attributes.name.value;
        changePostInfo(i)
    })


    $('.hamburger').click(() => {
        $(".navigation").toggle(100);
    })
});
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category_options button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    const offerCardsContainer = document.querySelector('.offer-cards-container');
    let currentIndex = 0;

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < offerCardsContainer.children.length - 1) {
            currentIndex++;
            updateSlider();
        }
    });

    function updateSlider() {
        const cardWidth = offerCardsContainer.children[0].offsetWidth + 10;
        offerCardsContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

$(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 4,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
                margin: 10,
            },
            768: {
                items: 3,
                margin: 10,
            },
            1024: {
                items: 4,
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const foodTab = document.getElementById('foodTab');
    const foodCollection = document.getElementById('nav-tabContent');

    function checkPosition() {
        const foodCollectionRect = foodCollection.getBoundingClientRect();
        if (foodCollectionRect.top <= -1500) {
            foodTab.style.position = 'relative';
            foodTab.style.top = '0';
        } else {
            foodTab.style.position = 'sticky';
            foodTab.style.top = '65px';
            foodTab.style.zIndex = '100';
        }
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
});

function openbag() {
    document.getElementById("mybag").style.width = "350px"
}

function closebag() {
    document.getElementById("mybag").style.width = "0px"
}
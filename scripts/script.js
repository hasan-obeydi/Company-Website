
let $ = document
let bergerIcon = $.querySelector('.berger-icon')
let mobileMenu = $.querySelector('.mobile-menu')
let navMenuLinks = $.querySelectorAll('.menu-links__link')
let mobileMenuLinks = $.querySelectorAll('.mobile-menu-links__link')
let favoriteIcons = $.querySelectorAll('.destination-card-imagebox__favorite-icon')
let destinationBtn = $.querySelector('.destinaion__btn')
let destinaionCloseCards = $.querySelectorAll('.destinaion-card--close')
let newsletterForm = $.querySelector('.newsletter__inputbox')
let newsletterSendIconBox = $.querySelector('.newsletter__send-icon-box')
let newsletterInput = $.querySelector('.newsletter__input')
let footerArrowTop = $.querySelector('.footer__arrow-top')
let mainItem = null
let isFavourite = false
let isDestination = false

function bergerIconHandler() {
    bergerIcon.classList.toggle('berger-icon--open')
    mobileMenu.classList.toggle('mobile-menu--open')
}
function navMenuLinksHandler(MainItemContent) {
    navMenuLinks.forEach((item => {
        if (item.innerHTML === MainItemContent) {
            mainItem = item
        }
        if (item.className.includes('menu-links__link--active')) {
            item.classList.remove('menu-links__link--active')
        }

    }))
    mainItem.classList.toggle('menu-links__link--active')
}
function mobileMenuLinkHandler(MainItemContent) {
    mobileMenuLinks.forEach((item => {
        if (item.innerHTML === MainItemContent) {
            mainItem = item
        }
        if (item.className.includes('mobile-menu-links__link--active')) {
            item.classList.remove('mobile-menu-links__link--active')
        }

    }))
    mainItem.classList.toggle('mobile-menu-links__link--active')
}
function favoriteIconHandler(icon) {
    icon.classList.toggle('destination-card-imagebox__favorite-icon--active')
}
function destinationBtnHandler() {
    destinaionCloseCards.forEach(item => {
        item.classList.toggle('destinaion-card--open')
        item.classList.toggle('destinaion-card--close')
    })
    if (isDestination) {
        destinationBtn.innerHTML = 'View more'
        isDestination = false
    } else {
        destinationBtn.innerHTML = 'View less'
        isDestination = true
    }
} 
function newsletterFormHandler(event) {
    event.preventDefault()
}
function newsletterInputHandler() {
    newsletterInput.value = ''
}


bergerIcon.addEventListener('click', bergerIconHandler)
navMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenuLinksHandler(link.innerHTML)
        mobileMenuLinkHandler(link.innerHTML)
    })
})
mobileMenuLinks.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenuLinkHandler(item.innerHTML)
        navMenuLinksHandler(item.innerHTML)
    })
})
favoriteIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        favoriteIconHandler(icon)
    })
})
destinationBtn.addEventListener('click', destinationBtnHandler)
newsletterForm.addEventListener('submit', newsletterFormHandler)
newsletterSendIconBox.addEventListener('click', newsletterInputHandler)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        bergerIcon.classList.remove('berger-icon--open')
        mobileMenu.classList.remove('mobile-menu--open')
    }

})
import sprite from '../img/sprite.svg';
import burger from '../img/png/burger-img.png';
import sauce from '../img/png/sauce.png';

export const Header = (open) => {
    const template = `
        <div class="mobile-nav">
            <nav class="links-nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#dishes">Dishes</a></li>
                <li><a href="#dinning">Dinning</a></li>
                <li><a href="#chefs">Our Chefs</a></li>
                <li><a href="#contact">Contact</a></li>
            </nav>
            <button class="hamburger">menu</button>
        </div>
        <header id="home">
            <div class="header">
                <nav class="nav">
                    <li class="nav__list"><a href="#home" class="nav__link">Home</a></li>
                    <li class="nav__list"><a href="#about" class="nav__link">About</a></li>
                    <li class="nav__list"><a href="#dishes" class="nav__link">Dishes</a></li>
                    <svg class="brand__logo">
                        <use xlink:href=${sprite}#brand-logo></use>
                    </svg>
                    <li class="nav__list"><a href="#dinning" class="nav__link">Dinning</a></li>
                    <li class="nav__list"><a href="#chefs" class="nav__link">Our Chefs</a></li>
                    <li class="nav__list"><a href="#contact" class="nav__link">Contact</a></li>
                </nav>
                <div class="burger"> <img src=${burger} alt="burger" class="burger__img"/> </div>
                <div class="hero-text">
                    <span>deal of the week<span> 
                    <h1>Maharaja<br>Mac</h1>
                </div>
                <img src=${sauce} alt="tomatoe sauce" class="sauce"/>
                <h1 class="discount">50%<span>discount</span></h1>
                <button class="cta">book a table</button>
                <div class="copy"> <p>Breakfast that’s<br>freshly prepared.</p> <h4>Even if you’re not.</h4> </div>
            </div>
        </header>
    `;

    return template;
}
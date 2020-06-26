import ramen from '../img/png/ramen.png';
import potatoes from '../img/png/potatoes.png';
import curry from '../img/png/curry.png';

export const Dishes = () => {

    const template = `
        <section id="dishes" class="dishes">
            <div class="dishes__wrapper">
                <h2 class="heading-2">Our Favourite Dishes</h2>
                <h3 class="heading-3">A dependable, compassionate presence you can trust.</h3>
                <div class="dishes__box">
                    <div class="dishes-card">
                        <h3 class="dishes-card__heading">Spicy Crab<br>Ramen</h3>
                        <img src=${ramen} alt="crab" class="dishes-card__img"/>
                        <h5 class="dishes-card__tag">Potato / bread / cheese</h5>
                        <div class="dishes-card__cta">
                            <h4 class="dishes-card__price">$20</h4>
                            <button >order now</button>
                        </div>
                    </div>
                    <div class="dishes-card">
                        <h3 class="dishes-card__heading">Fried Potatoes Vegetable</h3>
                        <img src=${potatoes} alt="crab" class="dishes-card__img"/>
                        <h5 class="dishes-card__tag">PORK / VEGGIES / SHOYU</h5>
                        <div class="dishes-card__cta">
                            <h4 class="dishes-card__price">$15</h4>
                        <button >order now</button>
                    </div>
                    </div>
                    <div class="dishes-card">
                        <h3 class="dishes-card__heading">Crab With<br>Curry</h3>
                        <img src=${curry} alt="crab" class="dishes-card__img"/>
                        <h5 class="dishes-card__tag">Potato / bread / cheese</h5>
                        <div class="dishes-card__cta">
                            <h4 class="dishes-card__price">$35</h4>
                        <button >order now</button>
                    </div>
                    </div>
                    <div class="dishes-card">
                        <h3 class="dishes-card__heading">Spicy Crab<br>Ramen</h3>
                        <img src=${ramen} alt="crab" class="dishes-card__img"/>
                        <h5 class="dishes-card__tag">Potato / bread / cheese</h5>
                        <div class="dishes-card__cta">
                            <h4 class="dishes-card__price">$10</h4>
                        <button >order now</button>
                    </div>
                    </div>
                    <div class="dishes-card">
                        <h3 class="dishes-card__heading">Fried Potatoes Vegetable</h3>
                        <img src=${potatoes} alt="crab" class="dishes-card__img"/>
                        <h5 class="dishes-card__tag">Potato / bread / cheese</h5>
                        <div class="dishes-card__cta">
                            <h4 class="dishes-card__price">$10</h4>
                        <button >order now</button>
                    </div>
                    </div>
                    <div class="dishes-card">
                        <h3 class="dishes-card__heading">Crab With<br>Curry</h3>
                        <img src=${curry} alt="crab" class="dishes-card__img"/>
                        <h5 class="dishes-card__tag">Potato / bread / cheese</h5>
                        <div class="dishes-card__cta">
                            <h4 class="dishes-card__price">$5</h4>
                        <button>order now</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    return template;
}
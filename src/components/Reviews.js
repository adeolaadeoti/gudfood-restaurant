import cus1 from '../img/png/cus-1.png';
import cus2 from '../img/png/cus-2.png';
import cus3 from '../img/png/cus-3.png';

export const Reviews = () => {

    const template = `
        <section id="reviews" class="reviews">
            <div class="client-box">
                <h2>What Our<br>Clients Says</h2>
            </div>
            <div class="review-box review-box--1">
            <div class="details">
                <p class="paragraph">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se</p>
                <div class="client-profile">
                    <img src=${cus1} alt="jane doe"/>
                    <div class="username">
                        <h6>jane doe</h6>
                        <p>ceo fanmilk</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="review-box review-box--2">
                <div class="details">
                    <p class="paragraph">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam.Pellentesque habitant morbi tristique se, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se, Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    <div class="client-profile">
                    <img src=${cus2} alt="jane doe"/>
                    <div class="username">
                        <h6>jane doe</h6>
                        <p>ceo fanmilk</p>
                    </div>
                </div>
            </div>
            </div>
            <div class="review-box review-box--3">
                <div class="details">
                    <p class="paragraph">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis , Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se</p>
                    <div class="client-profile">
                    <img src=${cus3} alt="jane doe"/>
                    <div class="username">
                        <h6>jane doe</h6>
                        <p>ceo fanmilk</p>
                    </div>
                </div>
            </div>
        </section>
    `;

    return template;
}
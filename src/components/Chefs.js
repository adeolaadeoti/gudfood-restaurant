import janet from '../img/png/janet.png';
import mustav from '../img/png/mustav.png';
import george from '../img/png/george.png';

export const Chefs = () => {

    const template = `
        <section id="chefs" class="chefs">
            <div class="chefs__wrapper">
                <h2 class="heading-2 heading-2--sub">our chefs</h2>
                <h3 class="heading-3 heading-3--sub">Our Chefs are trained specifically to provide quality food.</h3>
                <div class="chefs-box">
                    <div class="chefs-card">
                        <div class="chefs-card__wrapper">
                            <img src=${janet} alt="janet weah"/>
                            <div class="chefs-card__title">
                                <h5>janet weah</h5>
                                <p>master chef</p>
                            </div>
                        </div>
                    </div>
                    <div class="chefs-card">
                        <div class="chefs-card__wrapper">
                            <img src=${mustav} alt="janet weah"/>
                            <div class="chefs-card__title">
                                <h5>Mustav Dimtrov</h5>
                                <p>junior cook</p>
                            </div>
                        </div>
                    </div>
                    <div class="chefs-card">
                        <div class="chefs-card__wrapper">
                            <img src=${george} alt="janet weah"/>
                            <div class="chefs-card__title">
                                <h5>george martins</h5>
                                <p>Non veg special</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    return template;
}
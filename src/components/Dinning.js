import dinning from '../img/png/dinning-img.png'

export const Dinning = () => {

    const template = `
        <section id="dinning" class="dinning">
            <div class="dinning__content">
                <h2 class="heading-2">Ultimate Dinning Experience Like <br>No Other</h2>
                <p class="paragraph">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vestibulum orci quam. Pellentesque habitant morbi tristique se</p>
                <button class="cta">book a table</button>
            </div>
            <img src=${dinning} alt="dinning image" class="dinning__img"/>
        </section>
    `;

    return template;
}
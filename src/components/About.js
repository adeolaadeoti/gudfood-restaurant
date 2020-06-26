import aboutImg from '../img/png/about-img.png';

export const About = () => {

    const template = `
        <section id="about" class="about">
            <img src=${aboutImg} alt="about image" class="about__img"/>
            <div class="about__content">
                <h2 class="heading-2">about us</h2>
                <h3 class="heading-3">Our team of registered nurses and skilled healthcare professionals provide in-home nursing.</h3>
                <p class="paragraph">Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line digital divide with additional click-throughs from DevOps immersion along. additional clickthroughsdivide with additional clickthroughs from DevOps. Nanotechnology immersion along from DevOps.</p>
            </div>
        </section>
    `;

    return template;
}
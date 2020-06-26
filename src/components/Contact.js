export const Contact = () => {

    const template = `
        <section id="contact" class="contact">
            <div class="contact__wrapper">
                <div class="newsletter">
                    <h2 class="heading-2 bigFont">Join our<br>Newsletter List</h2>
                    <h3 class="heading-3">get all the latest offers,<br>discounts and other benefits</h3>
                </div>
                <div class="mail">
                    <div class="mail__box">
                        <div class="email">
                            <input type="email" placeholder="enter your email"/>
                        </div>
                        <button>subscribe now</button>
                    </div>
                </div>
            </div>
        </section>
    `;

    return template;
}
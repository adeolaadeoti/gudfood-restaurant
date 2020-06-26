import brandLogo from '../img/SVG/brand-logo.svg';

export const Footer = () => {

    const template = `
        <footer id="footer" class="footer">
            <div class="footer__wrapper">
                <div class="about-brand">
                    <img src=${brandLogo} alt="gudfood logo" class="logo"/>
                    <p class="paragraph paragraph--sub">At vero eos et accusamus et iusto odio dignissimos ducimus qui bland itiis praesentium voluptatum deleniti atque corrupti.</p>
                </div>
                <div class="opening-hours">
                    <h3 class="heading-3">opening hours</h3>
                    <h5 class="heading-5">Mon  -  Fri: 8 am - 8 pm<br><br>Sat: 9am - 4pm<br><br>Sun: Closed</h5>
                </div>
                <div class="contact-info">
                    <h3 class="heading-3">Contact Info</h3>
                    <h5 class="heading-5">(1800) 574 9687<br><br>No.26, baker Street, Lagos.<br><br>Justrestro@contact.co.in</h5>
                </div>
            </div>
        </footer>
    `;

    return template;
}
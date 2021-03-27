/* WhatsAppButton UI-component */

import './whatsapp-button.css';

import whatsAppIcon from '../../../assets/icons/svg/whatsapp-icon.svg';

const WhatsAppButton = () => (
  <>
    <nav>
      <a
        // eslint-disable-next-line max-len
        href="https://api.whatsapp.com/send?phone=573206848738&text=Hola%20Quiero%20Saber%20M%c3%a1s&source=&data=&app_absent="
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <img src={whatsAppIcon} alt="" />
      </a>
    </nav>
  </>
);

export default WhatsAppButton;

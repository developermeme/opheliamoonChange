import { ExpandMore, MailIcon } from "./FooterIcons";
import { SocialIcons } from "./SocialIcons";
import FooterTopBar from "./FooterTopBar/FooterTopBar";
import "./Footer.scss";
import { footerLinks } from "./Constant";
import React from "react";
import { onChange, onClick } from "../../constant/Types";
import { SubscriptionServices } from "../../utils/API";
import { validateEmailId } from "../UserAccount/Script";
import { toast } from "react-toastify";

function Footer() {
  const [count, setCount] = React.useState<number | undefined>(undefined);
  const [openSubscribe, setOpenSubscribe] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>("");

  const handleOnChange = (e: onChange) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: onClick) => {
    e.preventDefault();
    const isValidEmailId = validateEmailId(email);
    if (isValidEmailId.formIsValid) {
      SubscriptionServices.NewsLetter({ email: email })
        .then((res: any) => {
          toast.success("Successfully Added");
        })
        .catch((error: any) => {
          toast.error("Something Went Wrong");
        });
    } else {
      toast.error(isValidEmailId.error);
    }
  };

  const handleClick = (index: number, e: any) => {
    e.preventDefault();
    if (index === count) {
      setCount(undefined);
    } else {
      setCount(index);
    }
  };

  const handleSubscribeClick = (e: any) => {
    e.preventDefault();
    setOpenSubscribe(!openSubscribe);
  };

  const getServices = () => {
    return footerLinks.map((item: any, index: number) => {
      const isOpen = index === count ? "is-open" : "";

      return (
        <div className="grid__item" key={index}>
          <p className="footer__title small--hide footer-head">{item.head}</p>
          <button className="h4 footer__title collapsible-trigger collapsible-trigger-btn medium-up--hide">
            {item.head}
            <span
              className="collapsible-trigger__icon collapsible-trigger__icon--open"
              onClick={(e: any) => {
                handleClick(index, e);
              }}
            >
              <ExpandMore />
            </span>
          </button>

          <div
            className={`collapsible-content collapsible-content--small ${isOpen}`}
          >
            <div className="collapsible-content__inner">
              <div className="footer__collapsible">
                <ul className="no-bullets site-footer__linklist">
                  {item.text.map((link: any, index: number) => {
                    return (
                      <li key={index}>
                        <a href={link.path} className="footer-link u-h5">
                          {link.head}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const getSubscribe = () => {
    const isOpen = openSubscribe ? "is-open" : "";

    return (
      <div className="grid__item">
        <p className="footer__title small--hide footer-head">STAY IN TOUCH</p>
        <button className="h4 footer__title collapsible-trigger collapsible-trigger-btn medium-up--hide">
          STAY IN TOUCH
          <span
            className="collapsible-trigger__icon collapsible-trigger__icon--open"
            onClick={handleSubscribeClick}
          >
            <ExpandMore />
          </span>
        </button>

        <div
          className={`collapsible-content collapsible-content--small ${isOpen}`}
        >
          <div className="collapsible-content__inner">
            <div className="footer__collapsible">
              <p className="sub-text">Subscribe to get special offers</p>
              <form>
                <div className="footer__newsletter">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="contact[email]"
                    className="footer__newsletter-input"
                    value={email}
                    onChange={handleOnChange}
                    required
                  />
                  <button
                    type="submit"
                    className="footer__newsletter-btn"
                    name="commit"
                    aria-label="Subscribe"
                    onClick={handleSubscribe}
                  >
                    <MailIcon />
                    <span className="footer__newsletter-btn-label">
                      Subscribe
                    </span>
                  </button>
                </div>
              </form>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <footer className="site-footer">
      <div className="page-width">
        <FooterTopBar />

        <div className="grid">
          {getServices()}
          {getSubscribe()}
        </div>
        <div className="footer__small-text u-h5">
          <div>
            Copyright{" "}
            <a href="/" className="footer__link">
              ©Ophelia-moon
            </a>
            , All Rights Reserved.
          </div>
          <div>
            Powered By
            <a
              href="https://meme-global.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              MEME WORLDWIDE INDIA PRIVATE LIMITED
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import King from "../../../../assets/image/King.png";
import Person from "../../../../assets/image/Person.png";
import Mobile from "../../../../assets/image/Mobile.png";
import Mail from "../../../../assets/image/Mail.png";
import logo from "../../../../assets/image/nav/logo.png";
import Globe from "../../../../assets/image/Globe.png";
import { useProfile } from "../MyProfile/useProfile.hook";
var QRCode = require("qrcode.react");

export const ReferalCards = () => {
  const { ProfileInfo, subsInfo } = useProfile();

  return (
    <div className="opre-cards ">
      <div className="opre-card">
        <div className="opre-card-wrapper">
          <div className="opre-row u-h5">
            <img height={25} width={18} src={Person} alt="Person" />
            <span>{ProfileInfo?.fname}</span>
          </div>
          <div className="opre-row u-h5">
            <img height={20} width={18} src={King} alt="King" />
            <span>{subsInfo.plan}</span>
          </div>
          <div className="opre-qrcode">
            <QRCode value={ProfileInfo.userReferral} size={90} />
          </div>
          <div className="opre-row u-h5">
            <img height={23} width={18} src={Mobile} alt="Mobile" />
            <span>{ProfileInfo?.uPhone}</span>
          </div>
          <div className="opre-row u-h5">
            <img
              height={20}
              width={18}
              src={Mail}
              className="email-icon"
              alt="Mail"
            />
            <span className="email-text">{ProfileInfo?.email}</span>
          </div>
        </div>
      </div>
      <div className="opre-card">
        <div className="opre-logo-wrapper">
          <div className="opre-card-logo">
            <img src={logo} height={130} width={100} alt="Logo" />
          </div>
          <div className="opre-row u-h5 weburl">
            <img height={15} width={18} src={Globe} alt="Globe" />
            <span>
              <a href="https:/ophelia-moon.in">https:/ophelia-moon.in</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

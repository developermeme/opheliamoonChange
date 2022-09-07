import googlePlay from "../../../assets/image/googlePlay.png";
import appleStore from "../../../assets/image/appleStore.png";

export const DownloadApp = () => {
  return (
    <div className="dwn-wrapper">
      <a className="dwn-anc" href="/" rel="noreferrer" target="_blank">
        <div className="dwn-img-container">
          <img
            className="download-app-img"
            src={googlePlay}
            alt="Google Play Store"
          />
        </div>
      </a>
      <a className="dwn-anc" href="/" rel="noreferrer" target="_blank">
        <div className="dwn-img-container">
          <img
            className="download-app-img"
            src={appleStore}
            alt="Apple App Store"
          />
        </div>
      </a>
    </div>
  );
};

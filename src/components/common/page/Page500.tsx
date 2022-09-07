import { useNavigate } from "react-router-dom";
import { TextButton } from "../../ui-kit/TextButton/TextButton.view";
import { useWindowSize } from "../../../hook/useWindowSize.hook";
import "./Style.scss";

export const Page500 = () => {
  const navigate = useNavigate();
  const [width, height] = useWindowSize();

  return (
    <div
      className="error-container"
      style={{ minHeight: height, minWidth: width }}
    >
      <div className="error-container-wrapper">
        <h1 className="u-h2 error-head">Server Error (500)</h1>
        <p className="error-text">
          Something bad happened. It's not your fault.
        </p>
        <TextButton
          items="Back To Home"
          isprimary={true}
          className="ErrorBtn"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

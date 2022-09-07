import React, { useState } from "react";
import { toast } from "react-toastify";
import { onClick } from "../../../../constant/Types";
import { UpdateProfileservice } from "../../../../utils/API";
import { generateRandomId, LoggedInUser } from "../../../common/Script";
import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { SideMenu } from "../Layout/SideMenu/SideMenu";
import "./Help.scss";

function Help() {
  const [textAreaValue, setTextAreaValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  const handleSubmit = async (event: onClick) => {
    event.preventDefault();

    if (textAreaValue) {
      try {
        await UpdateProfileservice.help({
          message: textAreaValue,
          email: LoggedInUser as string,
          id: `#${generateRandomId(3)}`,
        });
        toast.success("Sent successfully");
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong, Please Contact support team");
      }
    } else {
      toast.error("Enter Something...");
    }
  };

  return (
    <>
      <div className="column main">
        <div className="block">
          <div className="block-title u-h3">Contact Us</div>

          <div className="help-container">
            <textarea
              id="subject"
              name="subject"
              placeholder="how Can I help you ?"
              value={textAreaValue}
              rows={5}
              onChange={handleChange}
              required
            ></textarea>
            <TextButton
              isprimary
              items={"Submit"}
              onClick={handleSubmit as any}
            />
          </div>
        </div>
      </div>
      <SideMenu />
    </>
  );
}

export default Help;

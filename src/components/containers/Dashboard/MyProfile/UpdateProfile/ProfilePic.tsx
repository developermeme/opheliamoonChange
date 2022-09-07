import { Avatar, IconButton } from "@material-ui/core";
import { useProfile } from "../useProfile.hook";

export default function ProfilePic() {
  const { fileSelected, handleImageChange } = useProfile();

  return (
    <div className="Profile__Image">
      <input
        type="file"
        onChange={handleImageChange}
        id="upload"
        accept=".png, .jpg, .jpeg"
        style={{ display: "none" }}
      />
      <label htmlFor="upload">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <Avatar
            id="avatar"
            src={fileSelected as any}
            style={{
              width: "70px",
              height: "70px",
              backgroundColor: "#c70c0c",
            }}
          />
        </IconButton>
      </label>
      <label htmlFor="avatar" />
    </div>
  );
}

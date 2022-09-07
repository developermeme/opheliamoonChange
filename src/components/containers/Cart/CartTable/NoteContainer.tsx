import { TextButton } from "../../../ui-kit/TextButton/TextButton.view";
import { useCart } from "../useCart.hook";

export const NoteContainer = () => {
  const { handleSaveNote, handleClearNote, note, onSaveChange } = useCart();

  return (
    <div className="order-notes-cart">
      <div className="title">Add Order Note</div>
      <div className="order-notes-content">
        <fieldset className="fieldset">
          <div className="field text">
            <label htmlFor="order-message-whole-message" className="label">
              <span>Message:</span>
            </label>
            <div className="control">
              <textarea
                id="order-message-whole-message"
                className="input-text"
                value={note}
                onChange={onSaveChange}
                rows={5}
                data-scrollable=""
              ></textarea>
            </div>
          </div>
        </fieldset>
      </div>

      <div className="form-button secondary">
        <TextButton
          items="Save"
          isprimary={true}
          className="saveChange"
          onClick={handleSaveNote}
        />
        <TextButton
          items="Clear Note"
          isSecondary={true}
          className="saveChange"
          onClick={handleClearNote}
        />
      </div>
    </div>
  );
};

import EntriesList from "./EntryList";

export function Button() {
  return <input type="submit" className="form-button" value="Create" />;
}
export default function EntryForm({ onAddEntry }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const newEntry = {
      moto: data.moto,
      notes: data.notes,
    };

    console.log(newEntry);
    event.target.reset();
    event.target.elements.moto.focus();

    onAddEntry(newEntry);
  }
  return (
    <>
      <h2>New Entry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-title">Motto</label>
        <input type="text" id="input-title" name="moto" required />
        <label htmlFor="input-notes">Notes</label>
        <textarea id="input-notes" name="notes" rows="10" required></textarea>
        <Button />
      </form>
    </>
  );
}

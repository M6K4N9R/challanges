export default function EntryForm() {
  return (
    <>
      <h2>New Entry</h2>
      <form>
        <label htmlFor="input-title">Motto</label>
        <input type="text" id="input-title" name="moto" required />
        <label htmlFor="input-notes">Notes</label>
        <textarea id="input-notes" name="notes" rows="10" required></textarea>
        <Button />
      </form>
    </>
  );
}

export function Button() {
  return <input type="submit" className="form-button" value="Create" />;
}

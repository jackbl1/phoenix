function Page1(formData: any, setFormData: any) {
  return (
    <div className="artist-flow-body">
      Who are people coming to see?
      <br />
      <input
        className="input-style"
        type="text"
        placeholder="Ex. concert, comedy show, sports event, etc."
        value={formData.event}
        onChange={(e) => {
          setFormData({ ...formData, event: e.target.value });
        }}
      />
      <br />
      <br />
      What are people coming to see?
      <br />
      <input
        className="input-style"
        type="text"
        placeholder="Ex. The Beatles, The Los Angeles Rams, Dave Chapelle, etc."
        value={formData.artist}
        onChange={(e) => {
          setFormData({ ...formData, artist: e.target.value });
        }}
      />
      <br />
      <button className="addAnotherButton">+ add another?</button>
      <br />
    </div>
  );
}

export default Page1;

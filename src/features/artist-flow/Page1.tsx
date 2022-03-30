function Page1(formData: any, setFormData: any) {
  return (
    <div className="artist-flow">
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
      <button>+ add another?</button>
      <br />
    </div>
  );
}

export default Page1;

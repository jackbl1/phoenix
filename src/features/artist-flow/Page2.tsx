function Page2(formData: any, setFormData: any) {
  return (
    <div className="artist-flow">
      <div className="row">
        What is the name of the venue?
        <input
          className="input-style"
          type="text"
          placeholder="Ex. The Filmore, John's Garage, etc."
          value={formData.venue}
          onChange={(e) => {
            setFormData({ ...formData, venue: e.target.value });
          }}
        />
        City?
        <input
          className="input-style-short"
          type="text"
          placeholder="Ex. San Francisco "
          value={formData.city}
          onChange={(e) => {
            setFormData({ ...formData, city: e.target.value });
          }}
        />
        State?
        <input
          className="input-style-short"
          type="text"
          placeholder="Ex. California"
          value={formData.state}
          onChange={(e) => {
            setFormData({ ...formData, state: e.target.value });
          }}
        />
      </div>
      <div className="row">
        When is it?
        <input
          className="input-style"
          type="text"
          placeholder="Month, day, year"
          value={formData.date}
          onChange={(e) => {
            setFormData({ ...formData, date: e.target.value });
          }}
        />
        How many tickets are being sold?
        <input
          className="input-style-short"
          type="number"
          placeholder="Ex. 1000"
          value={formData.ticketNum}
          onChange={(e) => {
            setFormData({ ...formData, ticketNum: e.target.value });
          }}
        />
        <input
          className="input-style-short"
          type="text"
          placeholder="Level? (Ex. GA, VIP)"
          value={formData.level}
          onChange={(e) => {
            setFormData({ ...formData, level: e.target.value });
          }}
        />
      </div>
      <div className="row">
        Opening act or experience
        <input
          className="input-style"
          type="text"
          placeholder="Optional!"
          value={formData.opener}
          onChange={(e) => {
            setFormData({ ...formData, opener: e.target.value });
          }}
        />
      </div>
    </div>
  );
}

export default Page2;

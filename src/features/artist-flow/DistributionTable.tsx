interface IDistributionTableProps {}

function DistributionTable(props: IDistributionTableProps) {
  return (
    <div className="dark-container-wide">
      <div className="row">
        <div className="col">
          <p>For</p>
          <input className="input-style-short-disabled" value="VIP" disabled />
          <input className="input-style-short-disabled" value="GA" disabled />
          <input
            className="input-style-short-disabled"
            value="Deluxe"
            disabled
          />
          <input className="input-style-short-disabled" value="Lawn" disabled />
        </div>

        <div className="col">
          <p>% receiving</p>
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10%"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10%"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10%"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10%"
          />
        </div>
        <div className="col">
          <p># of tickets</p>
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 100"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 10"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 1"
          />
          <input
            className="input-style-short"
            type="text"
            placeholder="Ex. 0"
          />
        </div>
      </div>
    </div>
  );
}

export default DistributionTable;

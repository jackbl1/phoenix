import { environmentVariables } from "../../app/environmentVariables";

interface IProgressBarProps {
  stepNumber: number;
}

function ProgressBar(props: IProgressBarProps) {
  const steps = environmentVariables.V2ArtistFlow
    ? [
        "Event Information",
        "Base Image",
        "Solid Attributes",
        "Lottery Attributes",
        "Review Info",
        "Preview & Send",
      ]
    : ["Event Information", "NFTs", "Preview & Send"];
  let count = 0;
  return (
    <ul className="steps steps-vertical">
      {steps.map((stepName) => {
        count++;
        if (count < props.stepNumber)
          return <li className="step step-success">{stepName}</li>;
        if (count === props.stepNumber)
          return <li className="step step-warning">{stepName}</li>;
        else return <li className="step">{stepName}</li>;
      })}
    </ul>
  );
}

export default ProgressBar;

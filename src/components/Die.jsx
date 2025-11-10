import { cn } from "./cn";

export const Die = (props) => {
  return (
    <button className={cn("die shrink", props.isHeld ? "held" : "")} onClick={() => props.hold(props.id)}
    aria-label={`Die with value ${props.value}, ${props.isHeld ? 'held' : 'not held'}`}>
      {props.value}
    </button>
  );
};

import { cn } from "./cn";

export const Die = (props) => {
  return (
    <button className={cn("die shrink", props.isHeld ? "held" : "")} onClick={() => props.hold(props.id)}>
      {props.value}
    </button>
  );
};

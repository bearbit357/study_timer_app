import { Button } from "../ui/button";

export function TimerControler({
  start,
  pause,
  resume,
}: {
  start: () => void;
  pause: () => void;
  resume: () => void;
}) {
  return (
    <div>
      <Button onClick={resume}>Start</Button>
      <Button onClick={pause}>Pause</Button>
    </div>
  );
}

"use client";
import { useTimer } from "react-timer-hook";
import { Button } from "../ui/button";
import { useTimerStore } from "@/lib/store";
import TimerSetting from "./Timer-setting";
import { TimerControler } from "./Timer-controler";

export function MyTimer({ expiryTimestamp }: { expiryTimestamp: Date }) {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="text-center">
      <div className="text-[100px]">
        <span>{hours.toString().padStart(2, "0")}</span>:
        <span>{minutes.toString().padStart(2, "0")}</span>:
        <span>{seconds.toString().padStart(2, "0")}</span>
      </div>
      <TimerControler start={start} pause={pause} resume={resume} />
      <TimerSetting pause={pause} />
    </div>
  );
}

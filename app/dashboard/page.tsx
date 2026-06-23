"use client";
import { MyTimer } from "@/components/Timer/Timer";
import TimerSetting from "@/components/Timer/Timer-setting";
import { useTimerStore } from "@/lib/store";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { timerHours, timerMinutes } = useTimerStore();
  const [time, setTime] = useState<Date>(() => {
    const t = new Date();
    return t;
  });
  useEffect(() => {
    const t = new Date();
    t.setSeconds(timerHours * 60 * 60 + timerMinutes * 60);
    setTime(t);
  }, [timerHours, timerMinutes]);
  return (
    <div className="flex flex-col">
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}

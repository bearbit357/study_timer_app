"use client";

import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  WheelPicker,
  type WheelPickerOption,
  WheelPickerWrapper,
} from "../ui/wheel-picker";
import { useTimerStore } from "@/lib/store";

export default function TimerSetting({ pause }: { pause: () => void }) {
  const { timerHours, timerMinutes, setTimerHours, setTimerMinutes } =
    useTimerStore();
  useEffect(() => {
    pause();
  }, [timerHours, timerMinutes]);

  const createArray = (length: number, add = 0): WheelPickerOption<number>[] =>
    Array.from({ length }, (_, i) => {
      const value = i + add;
      return {
        label: value.toString().padStart(2, "0"),
        value: value,
      };
    });

  const hourOptions = createArray(12);
  const minuteOptions = createArray(60);

  return (
    <div className="flex flex-col items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>aaa</DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit">
          <div className="w-56">
            <WheelPickerWrapper>
              <WheelPicker
                options={hourOptions}
                defaultValue={timerHours}
                infinite
                onValueChange={(e) => setTimerHours(e)}
              />
              <WheelPicker
                options={minuteOptions}
                defaultValue={timerMinutes}
                infinite
                onValueChange={(e) => setTimerMinutes(e)}
              />
            </WheelPickerWrapper>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

"use client";

import { useState } from "react";
import DayView from "~/components/calendar/day-view";
import WeekView from "~/components/calendar/week-view";
import { Switch } from "~/components/ui/switch";

enum View {
  DAY = "day",
  WEEK = "week",
}
export default function HomePage() {
  const [view, setView] = useState<View>(View.DAY);
  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex gap-4">
        <Switch
          checked={view === View.WEEK}
          onCheckedChange={(checked: boolean) =>
            checked ? setView(View.WEEK) : setView(View.DAY)
          }
        />
        <p>{view === View.DAY ? "dan" : "nedelja"}</p>
      </div>
      {view === View.WEEK ? (
        <WeekView editable={true} />
      ) : (
        <DayView editable={true} />
      )}
    </div>
  );
}

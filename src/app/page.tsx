"use client";

import { Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import DayView from "~/components/calendar/day-view";
import WeekView from "~/components/calendar/week-view";
import { Switch } from "~/components/ui/switch";

enum View {
  DAY = "day",
  WEEK = "week",
}

const VIEW_STORAGE_KEY = "selectedView";

export default function HomePage() {
  const [view, setView] = useState<View>(() => {
    const storedView = localStorage.getItem(VIEW_STORAGE_KEY);
    return storedView === View.WEEK ? View.WEEK : View.DAY;
  });
  useEffect(() => {
    localStorage.setItem(VIEW_STORAGE_KEY, view);
  }, [view]);

  const isMobileDevice = useMemo(() => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  }, []);

  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <Switch
            checked={view === View.WEEK}
            onCheckedChange={(checked: boolean) =>
              checked ? setView(View.WEEK) : setView(View.DAY)
            }
          />
          <p>{view === View.DAY ? "dan" : "nedelja"}</p>
        </div>
        {isMobileDevice && (
          <a
            href={`tel:${+381641181096}`}
            className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2"
          >
            <Phone />
            <h2>Pozovite nas</h2>
          </a>
        )}
      </div>
      {view === View.WEEK ? (
        <WeekView editable={false} />
      ) : (
        <DayView editable={false} />
      )}
    </div>
  );
}

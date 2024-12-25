"use client";

import { Check, Copy, Phone } from "lucide-react";
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
  const phoneNumber = "0113295351";
  const [isCopied, setIsCopied] = useState(false);

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
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Switch
            checked={view === View.WEEK}
            onCheckedChange={(checked: boolean) =>
              checked ? setView(View.WEEK) : setView(View.DAY)
            }
          />
          <p>{view === View.DAY ? "Dnevni jelovnik" : "Nedeljni jelovnik"}</p>
        </div>
        {isMobileDevice ? (
          // Show link to dial the number on mobile devices
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center gap-2 rounded-lg border px-4 py-2"
          >
            <Phone />
            <h2>Pozovite nas</h2>
          </a>
        ) : (
          // Show phone number and copy button on non-mobile devices
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 flex-shrink-0" />
            <div className="flex items-center">
              <span>{phoneNumber}</span>
              <div
                onClick={handleCopy}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full p-2 hover:bg-gray-200"
              >
                {isCopied ? (
                  <Check className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <Copy className="h-5 w-5 flex-shrink-0" />
                )}
              </div>
            </div>
          </div>
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

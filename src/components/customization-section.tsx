"use client";

import { cn } from "~/lib/utils";
import { Icon } from "./icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useState } from "react";
import { MenuThemeSelector } from "./theme/select-theme";
import { useMenuTheme } from "./theme-context";

export const CustomizationSection = () => {
  const [open, setOpen] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    theme: { backgroundColor, borderColor },
    isDirty,
    resetTheme,
    saveTheme,
  } = useMenuTheme();

  console.log("Is dirty: ", isDirty);
  console.log("lOADING: ", isLoading);
  return (
    backgroundColor &&
    borderColor && (
      <Accordion
        orientation="horizontal"
        type="single"
        collapsible
        value={open}
        onValueChange={setOpen}
        className={cn(
          "fixed right-1 top-1/2 -translate-y-1/2 transform rounded-2xl border-2 bg-background p-4",
        )}
        style={{ backgroundColor, borderColor }}
      >
        <AccordionItem
          value="item-1"
          className={cn(
            "flex h-[70px] max-h-[90%] transition-all duration-500",
            {
              "h-[200px]": open === "item-1",
            },
          )}
        >
          <AccordionContent containerClassName="data-[state=closed]:animate-accordion-right data-[state=open]:animate-accordion-left w-[300px]">
            <MenuThemeSelector />
          </AccordionContent>
          <AccordionTrigger className="flex flex-row-reverse [&>svg]:hidden">
            {isLoading ? (
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-2"
                style={{ borderColor }}
              >
                <Icon name="Pencil" />
              </div>
            ) : isDirty ? (
              <div className="flex flex-col gap-4">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2"
                  style={{ borderColor }}
                  onClick={async (event) => {
                    setIsLoading(true);
                    await saveTheme();
                    event.stopPropagation();
                  }}
                >
                  <Icon name="CheckIcon" />
                </div>

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2"
                  style={{ borderColor }}
                  onClick={(event) => {
                    resetTheme();
                    event.stopPropagation();
                  }}
                >
                  <Icon name="X" />
                </div>
              </div>
            ) : (
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full border-2"
                style={{ borderColor }}
              >
                <Icon name="Pencil" />
              </div>
            )}
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    )
  );
};

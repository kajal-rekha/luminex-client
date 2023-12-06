"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useState } from "react";

interface HorizontalTabProps {
  tabs: string[];
  children: React.ReactNode;
  onClick?: () => void;
}

const HorizontalTab: React.FC<HorizontalTabProps> = ({
  tabs,
  children,
  onClick,
}) => {
  const [shouldOpenTab, setShouldOpenTab] = useState<number>(0);

  const handleClick = useCallback(
    (index: number) => {
      setShouldOpenTab(index);
      onClick && onClick;
    },
    [onClick]
  );
  return (
    <div className="flex flex-col gap-20 mt-24">
      {/* TABS */}
      <div className="flex gap-5 items-center self-center border-b border-orange">
        {tabs?.map((tab: string, index: number) => (
          <button
            onClick={() => handleClick(index)}
            key={index}
            className={cn(
              "eq border-gray flex h-[5rem] w-[15rem] items-center justify-center whitespace-nowrap border px-6 py-3 text-center text-lg font-semibold uppercase tracking-widest rounded-tl-2xl rounded-tr-2xl",

              shouldOpenTab === index && "border-orange bg-orange text-light"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* CONTENTS */}
      <div>
        {React.Children.toArray(children)?.map(
          (item: React.ReactNode, index: number) => (
            <div
              className={cn(shouldOpenTab === index ? "block" : "hidden")}
              key={index}
            >
              {item}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HorizontalTab;

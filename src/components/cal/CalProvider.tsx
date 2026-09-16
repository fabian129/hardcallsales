"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export const DEFAULT_CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK || "hardcallsales/strategimote";

export function CalProvider() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#7851A9",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Failed to initialize Cal.com embed:", err);
      }
    })();
  }, []);

  return null;
}

export async function openCalModal(calLink?: string) {
  try {
    const cal = await getCalApi();
    cal("modal", {
      calLink: calLink || DEFAULT_CAL_LINK,
      config: {
        layout: "month_view",
        theme: "dark",
      },
    });
  } catch (err) {
    console.error("Error opening Cal.com modal:", err);
    window.location.href = "/boka-mote";
  }
}

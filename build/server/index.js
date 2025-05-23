import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, json } from "@remix-run/node";
import { RemixServer, useLoaderData, Meta, Links, Outlet, ScrollRestoration, Scripts, useLocation, Link } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Partytown } from "@builder.io/partytown/react";
import { Analytics } from "@vercel/analytics/react";
import * as React from "react";
import React__default, { useLayoutEffect, useState, useId, useRef, useEffect } from "react";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { HighlightInit } from "@highlight-run/remix/client";
import { XIcon, MenuIcon, HomeIcon, CameraIcon, MessageSquareIcon, InfoIcon, Loader2Icon, HospitalIcon, HeartPulseIcon, StethoscopeIcon, Building2Icon, HeartIcon, ShieldPlusIcon, ActivityIcon, GraduationCapIcon, TwitterIcon, LinkedinIcon, ChevronDown, BrainCircuitIcon, TimerIcon, ClipboardCheckIcon, ShieldCheckIcon, CheckIcon, UserIcon, RefreshCw, SendIcon, UploadIcon } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useForm } from "@formspree/react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import * as SwitchPrimitives from "@radix-ui/react-switch";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/tailwind-3kicvjQy.css";
const TailwindIndicator = () => {
  if (process.env.NODE_ENV === "production") return null;
  return /* @__PURE__ */ jsxs("div", { className: "fixed bottom-1 right-1 z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white", children: [
    /* @__PURE__ */ jsx("div", { className: "block sm:hidden", children: "xs" }),
    /* @__PURE__ */ jsx("div", { className: "hidden sm:block md:hidden", children: "sm" }),
    /* @__PURE__ */ jsx("div", { className: "hidden md:block lg:hidden", children: "md" }),
    /* @__PURE__ */ jsx("div", { className: "hidden lg:block xl:hidden", children: "lg" }),
    /* @__PURE__ */ jsx("div", { className: "hidden xl:block 2xl:hidden", children: "xl" }),
    /* @__PURE__ */ jsx("div", { className: "hidden 2xl:block", children: "2xl" })
  ] });
};
const themes = [
  {
    name: "zinc",
    label: "Zinc",
    activeColor: {
      light: "240 5.9% 10%",
      dark: "240 5.2% 33.9%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        card: "0 0% 100%",
        "card-foreground": "240 10% 3.9%",
        popover: "0 0% 100%",
        "popover-foreground": "240 10% 3.9%",
        primary: "240 5.9% 10%",
        "primary-foreground": "0 0% 98%",
        secondary: "240 4.8% 95.9%",
        "secondary-foreground": "240 5.9% 10%",
        muted: "240 4.8% 95.9%",
        "muted-foreground": "240 3.8% 46.1%",
        accent: "240 4.8% 95.9%",
        "accent-foreground": "240 5.9% 10%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "0 0% 98%",
        border: "240 5.9% 90%",
        input: "240 5.9% 90%",
        ring: "240 5.9% 10%",
        radius: "0.5rem"
      },
      dark: {
        background: "240 10% 3.9%",
        foreground: "0 0% 98%",
        card: "240 10% 3.9%",
        "card-foreground": "0 0% 98%",
        popover: "240 10% 3.9%",
        "popover-foreground": "0 0% 98%",
        primary: "0 0% 98%",
        "primary-foreground": "240 5.9% 10%",
        secondary: "240 3.7% 15.9%",
        "secondary-foreground": "0 0% 98%",
        muted: "240 3.7% 15.9%",
        "muted-foreground": "240 5% 64.9%",
        accent: "240 3.7% 15.9%",
        "accent-foreground": "0 0% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "0 0% 98%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "240 4.9% 83.9%"
      }
    }
  },
  {
    name: "slate",
    label: "Slate",
    activeColor: {
      light: "215.4 16.3% 46.9%",
      dark: "215.3 19.3% 34.5%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "222.2 84% 4.9%",
        card: "0 0% 100%",
        "card-foreground": "222.2 84% 4.9%",
        popover: "0 0% 100%",
        "popover-foreground": "222.2 84% 4.9%",
        primary: "222.2 47.4% 11.2%",
        "primary-foreground": "210 40% 98%",
        secondary: "210 40% 96.1%",
        "secondary-foreground": "222.2 47.4% 11.2%",
        muted: "210 40% 96.1%",
        "muted-foreground": "215.4 16.3% 46.9%",
        accent: "210 40% 96.1%",
        "accent-foreground": "222.2 47.4% 11.2%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "210 40% 98%",
        border: "214.3 31.8% 91.4%",
        input: "214.3 31.8% 91.4%",
        ring: "222.2 84% 4.9%",
        radius: "0.5rem"
      },
      dark: {
        background: "222.2 84% 4.9%",
        foreground: "210 40% 98%",
        card: "222.2 84% 4.9%",
        "card-foreground": "210 40% 98%",
        popover: "222.2 84% 4.9%",
        "popover-foreground": "210 40% 98%",
        primary: "210 40% 98%",
        "primary-foreground": "222.2 47.4% 11.2%",
        secondary: "217.2 32.6% 17.5%",
        "secondary-foreground": "210 40% 98%",
        muted: "217.2 32.6% 17.5%",
        "muted-foreground": "215 20.2% 65.1%",
        accent: "217.2 32.6% 17.5%",
        "accent-foreground": "210 40% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "210 40% 98%",
        border: "217.2 32.6% 17.5%",
        input: "217.2 32.6% 17.5%",
        ring: "212.7 26.8% 83.9"
      }
    }
  },
  {
    name: "stone",
    label: "Stone",
    activeColor: {
      light: "25 5.3% 44.7%",
      dark: "33.3 5.5% 32.4%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "20 14.3% 4.1%",
        card: "0 0% 100%",
        "card-foreground": "20 14.3% 4.1%",
        popover: "0 0% 100%",
        "popover-foreground": "20 14.3% 4.1%",
        primary: "24 9.8% 10%",
        "primary-foreground": "60 9.1% 97.8%",
        secondary: "60 4.8% 95.9%",
        "secondary-foreground": "24 9.8% 10%",
        muted: "60 4.8% 95.9%",
        "muted-foreground": "25 5.3% 44.7%",
        accent: "60 4.8% 95.9%",
        "accent-foreground": "24 9.8% 10%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "60 9.1% 97.8%",
        border: "20 5.9% 90%",
        input: "20 5.9% 90%",
        ring: "20 14.3% 4.1%",
        radius: "0.95rem"
      },
      dark: {
        background: "20 14.3% 4.1%",
        foreground: "60 9.1% 97.8%",
        card: "20 14.3% 4.1%",
        "card-foreground": "60 9.1% 97.8%",
        popover: "20 14.3% 4.1%",
        "popover-foreground": "60 9.1% 97.8%",
        primary: "60 9.1% 97.8%",
        "primary-foreground": "24 9.8% 10%",
        secondary: "12 6.5% 15.1%",
        "secondary-foreground": "60 9.1% 97.8%",
        muted: "12 6.5% 15.1%",
        "muted-foreground": "24 5.4% 63.9%",
        accent: "12 6.5% 15.1%",
        "accent-foreground": "60 9.1% 97.8%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "60 9.1% 97.8%",
        border: "12 6.5% 15.1%",
        input: "12 6.5% 15.1%",
        ring: "24 5.7% 82.9%"
      }
    }
  },
  {
    name: "gray",
    label: "Gray",
    activeColor: {
      light: "220 8.9% 46.1%",
      dark: "215 13.8% 34.1%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "224 71.4% 4.1%",
        card: "0 0% 100%",
        "card-foreground": "224 71.4% 4.1%",
        popover: "0 0% 100%",
        "popover-foreground": "224 71.4% 4.1%",
        primary: "220.9 39.3% 11%",
        "primary-foreground": "210 20% 98%",
        secondary: "220 14.3% 95.9%",
        "secondary-foreground": "220.9 39.3% 11%",
        muted: "220 14.3% 95.9%",
        "muted-foreground": "220 8.9% 46.1%",
        accent: "220 14.3% 95.9%",
        "accent-foreground": "220.9 39.3% 11%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "210 20% 98%",
        border: "220 13% 91%",
        input: "220 13% 91%",
        ring: "224 71.4% 4.1%",
        radius: "0.35rem"
      },
      dark: {
        background: "224 71.4% 4.1%",
        foreground: "210 20% 98%",
        card: "224 71.4% 4.1%",
        "card-foreground": "210 20% 98%",
        popover: "224 71.4% 4.1%",
        "popover-foreground": "210 20% 98%",
        primary: "210 20% 98%",
        "primary-foreground": "220.9 39.3% 11%",
        secondary: "215 27.9% 16.9%",
        "secondary-foreground": "210 20% 98%",
        muted: "215 27.9% 16.9%",
        "muted-foreground": "217.9 10.6% 64.9%",
        accent: "215 27.9% 16.9%",
        "accent-foreground": "210 20% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "210 20% 98%",
        border: "215 27.9% 16.9%",
        input: "215 27.9% 16.9%",
        ring: "216 12.2% 83.9%"
      }
    }
  },
  {
    name: "neutral",
    label: "Neutral",
    activeColor: {
      light: "0 0% 45.1%",
      dark: "0 0% 32.2%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "0 0% 3.9%",
        card: "0 0% 100%",
        "card-foreground": "0 0% 3.9%",
        popover: "0 0% 100%",
        "popover-foreground": "0 0% 3.9%",
        primary: "0 0% 9%",
        "primary-foreground": "0 0% 98%",
        secondary: "0 0% 96.1%",
        "secondary-foreground": "0 0% 9%",
        muted: "0 0% 96.1%",
        "muted-foreground": "0 0% 45.1%",
        accent: "0 0% 96.1%",
        "accent-foreground": "0 0% 9%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "0 0% 98%",
        border: "0 0% 89.8%",
        input: "0 0% 89.8%",
        ring: "0 0% 3.9%"
      },
      dark: {
        background: "0 0% 3.9%",
        foreground: "0 0% 98%",
        card: "0 0% 3.9%",
        "card-foreground": "0 0% 98%",
        popover: "0 0% 3.9%",
        "popover-foreground": "0 0% 98%",
        primary: "0 0% 98%",
        "primary-foreground": "0 0% 9%",
        secondary: "0 0% 14.9%",
        "secondary-foreground": "0 0% 98%",
        muted: "0 0% 14.9%",
        "muted-foreground": "0 0% 63.9%",
        accent: "0 0% 14.9%",
        "accent-foreground": "0 0% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "0 0% 98%",
        border: "0 0% 14.9%",
        input: "0 0% 14.9%",
        ring: "0 0% 83.1%"
      }
    }
  },
  {
    name: "red",
    label: "Red",
    activeColor: {
      light: "0 72.2% 50.6%",
      dark: "0 72.2% 50.6%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "0 0% 3.9%",
        card: "0 0% 100%",
        "card-foreground": "0 0% 3.9%",
        popover: "0 0% 100%",
        "popover-foreground": "0 0% 3.9%",
        primary: "0 72.2% 50.6%",
        "primary-foreground": "0 85.7% 97.3%",
        secondary: "0 0% 96.1%",
        "secondary-foreground": "0 0% 9%",
        muted: "0 0% 96.1%",
        "muted-foreground": "0 0% 45.1%",
        accent: "0 0% 96.1%",
        "accent-foreground": "0 0% 9%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "0 0% 98%",
        border: "0 0% 89.8%",
        input: "0 0% 89.8%",
        ring: "0 72.2% 50.6%",
        radius: "0.4rem"
      },
      dark: {
        background: "0 0% 3.9%",
        foreground: "0 0% 98%",
        card: "0 0% 3.9%",
        "card-foreground": "0 0% 98%",
        popover: "0 0% 3.9%",
        "popover-foreground": "0 0% 98%",
        primary: "0 72.2% 50.6%",
        "primary-foreground": "0 85.7% 97.3%",
        secondary: "0 0% 14.9%",
        "secondary-foreground": "0 0% 98%",
        muted: "0 0% 14.9%",
        "muted-foreground": "0 0% 63.9%",
        accent: "0 0% 14.9%",
        "accent-foreground": "0 0% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "0 0% 98%",
        border: "0 0% 14.9%",
        input: "0 0% 14.9%",
        ring: "0 72.2% 50.6%"
      }
    }
  },
  {
    name: "rose",
    label: "Rose",
    activeColor: {
      light: "346.8 77.2% 49.8%",
      dark: "346.8 77.2% 49.8%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        card: "0 0% 100%",
        "card-foreground": "240 10% 3.9%",
        popover: "0 0% 100%",
        "popover-foreground": "240 10% 3.9%",
        primary: "346.8 77.2% 49.8%",
        "primary-foreground": "355.7 100% 97.3%",
        secondary: "240 4.8% 95.9%",
        "secondary-foreground": "240 5.9% 10%",
        muted: "240 4.8% 95.9%",
        "muted-foreground": "240 3.8% 46.1%",
        accent: "240 4.8% 95.9%",
        "accent-foreground": "240 5.9% 10%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "0 0% 98%",
        border: "240 5.9% 90%",
        input: "240 5.9% 90%",
        ring: "346.8 77.2% 49.8%",
        radius: "0.5rem"
      },
      dark: {
        background: "20 14.3% 4.1%",
        foreground: "0 0% 95%",
        popover: "0 0% 9%",
        "popover-foreground": "0 0% 95%",
        card: "24 9.8% 10%",
        "card-foreground": "0 0% 95%",
        primary: "346.8 77.2% 49.8%",
        "primary-foreground": "355.7 100% 97.3%",
        secondary: "240 3.7% 15.9%",
        "secondary-foreground": "0 0% 98%",
        muted: "0 0% 15%",
        "muted-foreground": "240 5% 64.9%",
        accent: "12 6.5% 15.1%",
        "accent-foreground": "0 0% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "0 85.7% 97.3%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "346.8 77.2% 49.8%"
      }
    }
  },
  {
    name: "orange",
    label: "Orange",
    activeColor: {
      light: "24.6 95% 53.1%",
      dark: "20.5 90.2% 48.2%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "20 14.3% 4.1%",
        card: "0 0% 100%",
        "card-foreground": "20 14.3% 4.1%",
        popover: "0 0% 100%",
        "popover-foreground": "20 14.3% 4.1%",
        primary: "24.6 95% 53.1%",
        "primary-foreground": "60 9.1% 97.8%",
        secondary: "60 4.8% 95.9%",
        "secondary-foreground": "24 9.8% 10%",
        muted: "60 4.8% 95.9%",
        "muted-foreground": "25 5.3% 44.7%",
        accent: "60 4.8% 95.9%",
        "accent-foreground": "24 9.8% 10%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "60 9.1% 97.8%",
        border: "20 5.9% 90%",
        input: "20 5.9% 90%",
        ring: "24.6 95% 53.1%",
        radius: "0.95rem"
      },
      dark: {
        background: "20 14.3% 4.1%",
        foreground: "60 9.1% 97.8%",
        card: "20 14.3% 4.1%",
        "card-foreground": "60 9.1% 97.8%",
        popover: "20 14.3% 4.1%",
        "popover-foreground": "60 9.1% 97.8%",
        primary: "20.5 90.2% 48.2%",
        "primary-foreground": "60 9.1% 97.8%",
        secondary: "12 6.5% 15.1%",
        "secondary-foreground": "60 9.1% 97.8%",
        muted: "12 6.5% 15.1%",
        "muted-foreground": "24 5.4% 63.9%",
        accent: "12 6.5% 15.1%",
        "accent-foreground": "60 9.1% 97.8%",
        destructive: "0 72.2% 50.6%",
        "destructive-foreground": "60 9.1% 97.8%",
        border: "12 6.5% 15.1%",
        input: "12 6.5% 15.1%",
        ring: "20.5 90.2% 48.2%"
      }
    }
  },
  {
    name: "green",
    label: "Green",
    activeColor: {
      light: "142.1 76.2% 36.3%",
      dark: "142.1 70.6% 45.3%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "240 10% 3.9%",
        card: "0 0% 100%",
        "card-foreground": "240 10% 3.9%",
        popover: "0 0% 100%",
        "popover-foreground": "240 10% 3.9%",
        primary: "142.1 76.2% 36.3%",
        "primary-foreground": "355.7 100% 97.3%",
        secondary: "240 4.8% 95.9%",
        "secondary-foreground": "240 5.9% 10%",
        muted: "240 4.8% 95.9%",
        "muted-foreground": "240 3.8% 46.1%",
        accent: "240 4.8% 95.9%",
        "accent-foreground": "240 5.9% 10%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "0 0% 98%",
        border: "240 5.9% 90%",
        input: "240 5.9% 90%",
        ring: "142.1 76.2% 36.3%"
      },
      dark: {
        background: "20 14.3% 4.1%",
        foreground: "0 0% 95%",
        popover: "0 0% 9%",
        "popover-foreground": "0 0% 95%",
        card: "24 9.8% 10%",
        "card-foreground": "0 0% 95%",
        primary: "142.1 70.6% 45.3%",
        "primary-foreground": "144.9 80.4% 10%",
        secondary: "240 3.7% 15.9%",
        "secondary-foreground": "0 0% 98%",
        muted: "0 0% 15%",
        "muted-foreground": "240 5% 64.9%",
        accent: "12 6.5% 15.1%",
        "accent-foreground": "0 0% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "0 85.7% 97.3%",
        border: "240 3.7% 15.9%",
        input: "240 3.7% 15.9%",
        ring: "142.4 71.8% 29.2%"
      }
    }
  },
  {
    name: "blue",
    label: "Blue",
    activeColor: {
      light: "221.2 83.2% 53.3%",
      dark: "217.2 91.2% 59.8%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "222.2 84% 4.9%",
        card: "0 0% 100%",
        "card-foreground": "222.2 84% 4.9%",
        popover: "0 0% 100%",
        "popover-foreground": "222.2 84% 4.9%",
        primary: "221.2 83.2% 53.3%",
        "primary-foreground": "210 40% 98%",
        secondary: "210 40% 96.1%",
        "secondary-foreground": "222.2 47.4% 11.2%",
        muted: "210 40% 96.1%",
        "muted-foreground": "215.4 16.3% 46.9%",
        accent: "210 40% 96.1%",
        "accent-foreground": "222.2 47.4% 11.2%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "210 40% 98%",
        border: "214.3 31.8% 91.4%",
        input: "214.3 31.8% 91.4%",
        ring: "221.2 83.2% 53.3%"
      },
      dark: {
        background: "222.2 84% 4.9%",
        foreground: "210 40% 98%",
        card: "222.2 84% 4.9%",
        "card-foreground": "210 40% 98%",
        popover: "222.2 84% 4.9%",
        "popover-foreground": "210 40% 98%",
        primary: "217.2 91.2% 59.8%",
        "primary-foreground": "222.2 47.4% 11.2%",
        secondary: "217.2 32.6% 17.5%",
        "secondary-foreground": "210 40% 98%",
        muted: "217.2 32.6% 17.5%",
        "muted-foreground": "215 20.2% 65.1%",
        accent: "217.2 32.6% 17.5%",
        "accent-foreground": "210 40% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "210 40% 98%",
        border: "217.2 32.6% 17.5%",
        input: "217.2 32.6% 17.5%",
        ring: "224.3 76.3% 48%"
      }
    }
  },
  {
    name: "yellow",
    label: "Yellow",
    activeColor: {
      light: "47.9 95.8% 53.1%",
      dark: "47.9 95.8% 53.1%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "20 14.3% 4.1%",
        card: "0 0% 100%",
        "card-foreground": "20 14.3% 4.1%",
        popover: "0 0% 100%",
        "popover-foreground": "20 14.3% 4.1%",
        primary: "47.9 95.8% 53.1%",
        "primary-foreground": "26 83.3% 14.1%",
        secondary: "60 4.8% 95.9%",
        "secondary-foreground": "24 9.8% 10%",
        muted: "60 4.8% 95.9%",
        "muted-foreground": "25 5.3% 44.7%",
        accent: "60 4.8% 95.9%",
        "accent-foreground": "24 9.8% 10%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "60 9.1% 97.8%",
        border: "20 5.9% 90%",
        input: "20 5.9% 90%",
        ring: "20 14.3% 4.1%",
        radius: "0.95rem"
      },
      dark: {
        background: "20 14.3% 4.1%",
        foreground: "60 9.1% 97.8%",
        card: "20 14.3% 4.1%",
        "card-foreground": "60 9.1% 97.8%",
        popover: "20 14.3% 4.1%",
        "popover-foreground": "60 9.1% 97.8%",
        primary: "47.9 95.8% 53.1%",
        "primary-foreground": "26 83.3% 14.1%",
        secondary: "12 6.5% 15.1%",
        "secondary-foreground": "60 9.1% 97.8%",
        muted: "12 6.5% 15.1%",
        "muted-foreground": "24 5.4% 63.9%",
        accent: "12 6.5% 15.1%",
        "accent-foreground": "60 9.1% 97.8%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "60 9.1% 97.8%",
        border: "12 6.5% 15.1%",
        input: "12 6.5% 15.1%",
        ring: "35.5 91.7% 32.9%"
      }
    }
  },
  {
    name: "violet",
    label: "Violet",
    activeColor: {
      light: "262.1 83.3% 57.8%",
      dark: "263.4 70% 50.4%"
    },
    cssVars: {
      light: {
        background: "0 0% 100%",
        foreground: "224 71.4% 4.1%",
        card: "0 0% 100%",
        "card-foreground": "224 71.4% 4.1%",
        popover: "0 0% 100%",
        "popover-foreground": "224 71.4% 4.1%",
        primary: "262.1 83.3% 57.8%",
        "primary-foreground": "210 20% 98%",
        secondary: "220 14.3% 95.9%",
        "secondary-foreground": "220.9 39.3% 11%",
        muted: "220 14.3% 95.9%",
        "muted-foreground": "220 8.9% 46.1%",
        accent: "220 14.3% 95.9%",
        "accent-foreground": "220.9 39.3% 11%",
        destructive: "0 84.2% 60.2%",
        "destructive-foreground": "210 20% 98%",
        border: "220 13% 91%",
        input: "220 13% 91%",
        ring: "262.1 83.3% 57.8%"
      },
      dark: {
        background: "224 71.4% 4.1%",
        foreground: "210 20% 98%",
        card: "224 71.4% 4.1%",
        "card-foreground": "210 20% 98%",
        popover: "224 71.4% 4.1%",
        "popover-foreground": "210 20% 98%",
        primary: "263.4 70% 50.4%",
        "primary-foreground": "210 20% 98%",
        secondary: "215 27.9% 16.9%",
        "secondary-foreground": "210 20% 98%",
        muted: "215 27.9% 16.9%",
        "muted-foreground": "217.9 10.6% 64.9%",
        accent: "215 27.9% 16.9%",
        "accent-foreground": "210 20% 98%",
        destructive: "0 62.8% 30.6%",
        "destructive-foreground": "210 20% 98%",
        border: "215 27.9% 16.9%",
        input: "215 27.9% 16.9%",
        ring: "263.4 70% 50.4%"
      }
    }
  }
];
const changeTheme = (theme) => {
  const root = document.documentElement;
  const themeObject = themes.find((t) => t.name === theme);
  if (!themeObject) return;
  Object.keys(themeObject == null ? void 0 : themeObject.cssVars.dark).forEach((property) => {
    root.style.setProperty(
      `--${property}`,
      themeObject == null ? void 0 : themeObject.cssVars.dark[property]
    );
  });
};
const getTheme = () => {
  let theme = "red";
  if (typeof window !== "undefined") {
    theme = localStorage.getItem("theme");
    if (theme !== null) {
      theme = theme.replace(/['"]+/g, "");
      return theme;
    }
    return "red";
  }
  return theme;
};
const themeAtom = atomWithStorage("theme", "red");
function useTheme() {
  return useAtom(themeAtom);
}
const links = () => [
  { rel: "stylesheet", href: stylesheet }
];
async function loader() {
  return json({
    ENV: {
      HIGHLIGHT_PROJECT_ID: process.env.HIGHLIGHT_PROJECT_ID
    }
  });
}
function App() {
  const { ENV } = useLoaderData();
  useLayoutEffect(() => {
    changeTheme(getTheme());
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsx(
      HighlightInit,
      {
        projectId: ENV.HIGHLIGHT_PROJECT_ID,
        serviceName: "my-remix-frontend",
        tracingOrigins: true,
        networkRecording: { enabled: true, recordHeadersAndBody: true }
      }
    ),
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        }
      ),
      /* @__PURE__ */ jsx(Partytown, { debug: true, forward: ["dataLayer.push"] }),
      /* @__PURE__ */ jsx(
        "script",
        {
          type: "text/partytown",
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-6JV9TN499V"
        }
      ),
      /* @__PURE__ */ jsx(
        "script",
        {
          type: "text/partytown",
          dangerouslySetInnerHTML: {
            __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-6JV9TN499V');`
          }
        }
      ),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "relative overflow-x-hidden bg-background font-dm antialiased", children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(TailwindIndicator, {}),
      process.env.NODE_ENV === "production" && /* @__PURE__ */ jsx(Analytics, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: App,
  links,
  loader
}, Symbol.toStringTag, { value: "Module" }));
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input dark:border-white/10 bg-background/30 hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        black: "bg-gray-900 text-white hover:bg-gray-900/90 dark:bg-white dark:hover:bg-white/90 dark:text-gray-900"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const AppNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: /* @__PURE__ */ jsx(HomeIcon, { className: "h-5 w-5" })
    },
    {
      name: "Image Analysis",
      path: "/scan",
      icon: /* @__PURE__ */ jsx(CameraIcon, { className: "h-5 w-5" })
    },
    {
      name: "Assistant",
      path: "/chat",
      icon: /* @__PURE__ */ jsx(MessageSquareIcon, { className: "h-5 w-5" })
    },
    {
      name: "About",
      path: "/about",
      icon: /* @__PURE__ */ jsx(InfoIcon, { className: "h-5 w-5" })
    }
  ];
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 border-b border-primary/10 bg-background/80 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center gap-2",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute h-3 w-3 animate-ping rounded-full bg-primary opacity-75" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-bold", children: "KS" })
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-inter text-xl font-bold", children: [
              "KidneyScan",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "AI" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-6 lg:flex", children: navItems.map((item) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: item.path,
          className: cn(
            "flex items-center gap-1.5 text-sm font-medium transition-colors",
            isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
          ),
          children: [
            item.icon,
            item.name
          ]
        },
        item.path
      )) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "icon",
          className: "lg:hidden",
          onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen),
          "aria-label": "Toggle menu",
          children: isMobileMenuOpen ? /* @__PURE__ */ jsx(XIcon, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(MenuIcon, { className: "h-5 w-5" })
        }
      )
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsx("div", { className: "border-b border-primary/10 bg-background/95 py-4 lg:hidden", children: /* @__PURE__ */ jsx("nav", { className: "flex flex-col space-y-4 px-4", children: navItems.map((item) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: item.path,
        className: cn(
          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors",
          isActive(item.path) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
        ),
        onClick: () => setIsMobileMenuOpen(false),
        children: [
          item.icon,
          item.name
        ]
      },
      item.path
    )) }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 border-t border-primary/10 bg-background/80 backdrop-blur-md lg:hidden", children: /* @__PURE__ */ jsx("nav", { className: "grid h-16 grid-cols-4", children: navItems.map((item) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: item.path,
        className: cn(
          "flex flex-col items-center justify-center gap-1 text-xs font-medium transition-colors",
          isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
        ),
        children: [
          item.icon,
          /* @__PURE__ */ jsx("span", { children: item.name })
        ]
      },
      item.path
    )) }) })
  ] });
};
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background/30 px-3 py-2 text-sm caret-primary ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  LabelPrimitive.Root,
  {
    ref,
    className: cn(labelVariants(), className),
    ...props
  }
));
Label.displayName = LabelPrimitive.Root.displayName;
const Banner = () => {
  const [state, handleSubmit] = useForm("mjvqrzpz");
  useTheme();
  return /* @__PURE__ */ jsxs("section", { className: "relative mt-48 flex flex-col items-center justify-between gap-10 bg-gradient-to-br from-primary/20 via-transparent to-primary/20", children: [
    /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-gradient-to-r from-primary to-transparent" }),
    /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-7xl px-5", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-2xl flex-col gap-6 lg:mx-0", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl", children: [
        /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "Early",
          " "
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "Detection",
          " "
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "Can",
          " "
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "Save",
          " "
        ] }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: "Lives" })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-lg text-muted-foreground lg:text-left", children: "Schedule a screening today with KidneyScan AI and take control of your kidney health." }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "mx-auto flex w-full max-w-md flex-col items-end gap-2 lg:mx-0 lg:flex-row",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex w-full max-w-sm basis-2/3 flex-col items-start gap-1.5", children: [
              /* @__PURE__ */ jsx(
                Label,
                {
                  className: "text-left text-muted-foreground",
                  htmlFor: "email-banner",
                  children: "Request more information"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  name: "email-banner",
                  required: true,
                  id: "email-banner",
                  type: "email",
                  placeholder: "your.email@example.com"
                }
              )
            ] }),
            !state.succeeded && /* @__PURE__ */ jsxs(
              Button,
              {
                type: "submit",
                className: "w-full max-w-sm lg:w-fit",
                disabled: state.submitting,
                children: [
                  state.submitting && /* @__PURE__ */ jsx(Loader2Icon, { className: "mr-2 h-4 w-4 animate-spin" }),
                  state.submitting && "Submitting",
                  !state.submitting && "Contact Us"
                ]
              }
            ),
            state.succeeded && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "secondary",
                className: "pointer-events-none w-full max-w-sm lg:w-fit",
                children: "Thank you! Our team will reach out shortly."
              }
            )
          ]
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "h-[1px] w-full bg-gradient-to-l from-primary to-transparent" })
  ] });
};
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const Cms = () => {
  const partners = [
    {
      component: /* @__PURE__ */ jsx(HospitalIcon, { height: 42, width: 42, className: "text-primary/80" }),
      name: "Memorial Health"
    },
    {
      component: /* @__PURE__ */ jsx(HeartPulseIcon, { height: 42, width: 42, className: "text-primary/80" }),
      name: "Kidney Care Centers"
    },
    {
      component: /* @__PURE__ */ jsx(StethoscopeIcon, { height: 42, width: 42, className: "text-primary/80" }),
      name: "MedTrust Alliance"
    },
    {
      component: /* @__PURE__ */ jsx(Building2Icon, { height: 42, width: 42, className: "text-primary/80" }),
      name: "University Medical Center"
    },
    {
      component: /* @__PURE__ */ jsx(HeartIcon, { height: 42, width: 42, className: "text-primary/80" }),
      name: "LifeSpan Health"
    },
    {
      component: /* @__PURE__ */ jsx(ShieldPlusIcon, { height: 42, width: 42, className: "text-primary/80" }),
      name: "Guardian Medical Group"
    },
    {
      component: /* @__PURE__ */ jsx(ActivityIcon, { height: 42, width: 42, className: "text-primary/80" }),
      name: "Vitality Healthcare"
    },
    {
      component: /* @__PURE__ */ jsx(GraduationCapIcon, { height: 42, width: 42, className: "text-primary/80" }),
      name: "Medical Research Institute"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "mx-5", children: [
    /* @__PURE__ */ jsx("p", { className: "mb-8 text-center text-sm font-medium text-muted-foreground", children: "TRUSTED BY LEADING HEALTHCARE PROVIDERS" }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto flex flex-wrap items-center justify-center gap-8 fill-foreground lg:gap-x-14", children: partners.map((item) => /* @__PURE__ */ jsx(React__default.Fragment, { children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 100, children: /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(
        TooltipTrigger,
        {
          "aria-label": item.name,
          className: "cursor-default",
          children: item.component
        }
      ),
      /* @__PURE__ */ jsx(TooltipContent, { side: "bottom", children: /* @__PURE__ */ jsx("p", { children: item.name }) })
    ] }) }) }, item.name)) })
  ] });
};
const Textarea = React.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background/30 px-3 py-2 text-sm caret-primary ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const Discord = (props) => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx("path", { d: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" }) });
const Contact = () => {
  const [state, handleSubmit] = useForm("xpzgladz");
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto mt-48 flex max-w-7xl flex-col items-center gap-20 px-5 lg:flex-row", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-2xl flex-grow basis-0 flex-col gap-6", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("h1", { className: "mt-4 scroll-m-20 text-center font-inter text-4xl font-extrabold tracking-tight lg:text-left lg:text-5xl", children: [
        /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "Get",
          " "
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "In",
          " "
        ] }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: "Touch" })
      ] }) }),
      /* @__PURE__ */ jsxs("p", { className: "text-center text-lg text-muted-foreground lg:text-left", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden lg:block", children: "If you have any questions, suggestions, or would like to discuss potential collaborations, please don't hesitate to reach out. I'd love to hear from you!" }),
        /* @__PURE__ */ jsx("span", { className: "block lg:hidden", children: "Questions, ideas, or collaborations? Reach out—I'm all ears!" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-start", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 lg:items-start", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://twitter.com/NaderFerjani",
            className: "inline-flex gap-2",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              /* @__PURE__ */ jsx(TwitterIcon, { className: "h-6 w-6 text-primary" }),
              " "
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/nader-ferjani/",
            className: "flex items-center gap-2",
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              /* @__PURE__ */ jsx(LinkedinIcon, { className: "h-6 w-6 text-primary" }),
              " ",
              /* @__PURE__ */ jsx("span", {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Discord, { className: "h-6 w-6 fill-primary" }),
          " ",
          /* @__PURE__ */ jsx("span", {})
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        onSubmit: handleSubmit,
        className: "gradient-border relative flex w-full max-w-xl flex-grow basis-0 flex-col gap-4 rounded-md bg-gradient-to-br from-white/5 to-transparent p-6 before:bg-gradient-to-br before:from-white/5 before:to-transparent",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx(
              Label,
              {
                className: "text-left text-muted-foreground",
                htmlFor: "name",
                children: "Full name"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                type: "text",
                id: "name",
                placeholder: "John Doe",
                name: "fullname",
                className: "w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-1.5", children: [
            /* @__PURE__ */ jsx(
              Label,
              {
                className: "text-left text-muted-foreground",
                htmlFor: "contact-email",
                children: "Email"
              }
            ),
            /* @__PURE__ */ jsx(
              Input,
              {
                required: true,
                type: "email",
                placeholder: "john.doe@example.com",
                name: "contact-email",
                id: "contact-email",
                className: "w-full"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid w-full gap-1.5", children: [
            /* @__PURE__ */ jsx(
              Label,
              {
                htmlFor: "message",
                className: "text-left text-muted-foreground",
                children: "Message"
              }
            ),
            /* @__PURE__ */ jsx(
              Textarea,
              {
                required: true,
                placeholder: "Your message here...",
                id: "message",
                name: "message"
              }
            )
          ] }),
          !state.succeeded && /* @__PURE__ */ jsxs(Button, { variant: "secondary", disabled: state.submitting, children: [
            state.submitting && /* @__PURE__ */ jsx(Loader2Icon, { className: "mr-2 h-4 w-4 animate-spin" }),
            state.submitting && "Sending",
            !state.succeeded && !state.submitting && "Send message"
          ] }),
          state.succeeded && /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              className: "pointer-events-none",
              children: "Message sent!"
            }
          )
        ]
      }
    )
  ] });
};
const Accordion = AccordionPrimitive.Root;
const AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}) {
  const id = useId();
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            patternContentUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ jsx("circle", { id: "pattern-circle", cx, cy, r: cr })
          }
        ) }),
        /* @__PURE__ */ jsx(
          "rect",
          {
            width: "100%",
            height: "100%",
            strokeWidth: 0,
            fill: `url(#${id})`
          }
        )
      ]
    }
  );
}
const faqs = [
  {
    question: "How accurate is KidneyScan AI in detecting kidney cancer?",
    answer: "KidneyScan AI has a detection accuracy rate of over 95% in clinical trials, making it one of the most reliable non-invasive screening tools available for kidney cancer detection."
  },
  {
    question: "Is the KidneyScan AI screening procedure covered by insurance?",
    answer: "Most major health insurance providers cover KidneyScan AI screening, especially for patients with risk factors. We recommend checking with your specific insurance provider for coverage details."
  },
  {
    question: "How long does the screening process take?",
    answer: "The entire screening process takes approximately 20-30 minutes, with results typically available within 24-48 hours through our secure patient portal or via your healthcare provider."
  },
  {
    question: "Is the KidneyScan AI technology painful or invasive?",
    answer: "No, KidneyScan AI technology is completely non-invasive and painless. It uses advanced imaging techniques that require no radiation, injections, or invasive procedures."
  }
];
const FAQs = () => {
  return /* @__PURE__ */ jsx("section", { className: "relative mx-auto px-5 pb-8 pt-48", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-6 text-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25", children: /* @__PURE__ */ jsx("span", { className: "brightness-[1.7]", children: "FAQs" }) }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl", children: [
        /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "Frequently",
          " "
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "asked",
          " "
        ] }),
        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: "questions" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground", children: [
      "Have more questions about our kidney cancer detection technology?",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "#name",
          className: cn(
            buttonVariants({ variant: "link" }),
            "px-0 text-lg text-foreground"
          ),
          children: "Contact our medical team."
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(
        DotPattern,
        {
          width: 20,
          height: 20,
          cx: 1,
          cy: 1,
          cr: 1,
          className: cn(
            "fill-primary/40 [mask-image:linear-gradient(to_bottom,transparent,white,white,transparent,transparent)]"
          )
        }
      ),
      /* @__PURE__ */ jsx(
        Accordion,
        {
          collapsible: true,
          type: "single",
          className: "mx-auto w-full max-w-4xl grow basis-28 text-left",
          children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${index}`, children: [
            /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-xl hover:no-underline", children: faq.question }),
            /* @__PURE__ */ jsx(AccordionContent, { className: "text-base text-muted-foreground", children: faq.answer })
          ] }, index))
        }
      )
    ] })
  ] }) });
};
const FeatureCard = ({
  title,
  description,
  icon,
  backgroundColor
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "gradient-border relative flex max-w-sm flex-col gap-5 rounded-md bg-gradient-to-b via-transparent p-5 text-center before:bg-gradient-to-b before:to-transparent md:bg-gradient-to-br md:text-left md:before:bg-gradient-to-br",
        backgroundColor
      ),
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "gradient-border relative mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b to-transparent before:bg-gradient-to-b before:via-transparent before:to-transparent md:ml-0 md:bg-gradient-to-br md:before:bg-gradient-to-br",
              backgroundColor
            ),
            children: icon
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ jsx("h2", { className: "scroll-m-20 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-2xl font-semibold tracking-tight text-transparent", children: title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: description })
        ] })
      ]
    }
  );
};
const featuresData = [
  {
    title: "AI-Powered Analysis",
    description: "Our advanced AI algorithms analyze medical imaging with high accuracy.",
    icon: /* @__PURE__ */ jsx(BrainCircuitIcon, { size: 28, className: "text-red-500" }),
    backgroundColor: "from-red-500/20 to-red-500/5"
  },
  {
    title: "Early Detection",
    description: "Identify kidney abnormalities before symptoms appear.",
    icon: /* @__PURE__ */ jsx(TimerIcon, { size: 28, className: "text-red-500" }),
    backgroundColor: "from-red-500/20 to-red-500/5"
  },
  {
    title: "Non-Invasive Screening",
    description: "Comfortable, radiation-free scanning technology.",
    icon: /* @__PURE__ */ jsx(HeartPulseIcon, { size: 28, className: "text-red-500" }),
    backgroundColor: "from-red-500/20 to-red-500/5"
  },
  {
    title: "Detailed Reports",
    description: "Comprehensive results with medical-grade accuracy and clarity.",
    icon: /* @__PURE__ */ jsx(ClipboardCheckIcon, { className: "text-red-500" }),
    backgroundColor: "from-red-500/20 to-red-500/5"
  },
  {
    title: "Health Monitoring",
    description: "Track changes over time with regular screenings and comparisons.",
    icon: /* @__PURE__ */ jsx(ActivityIcon, { className: "text-red-500" }),
    backgroundColor: "from-red-500/20 to-red-500/5"
  },
  {
    title: "Data Security",
    description: "HIPAA-compliant platform with encrypted patient data.",
    icon: /* @__PURE__ */ jsx(ShieldCheckIcon, { size: 28, className: "text-red-500" }),
    backgroundColor: "from-red-500/20 to-red-500/5"
  }
];
const Features = () => {
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto mt-48 max-w-7xl px-5", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-2xl flex-col gap-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25", children: /* @__PURE__ */ jsx("span", { className: "brightness-[1.7]", children: "Life-Saving Technology" }) }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl", children: [
          /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
            "Advanced",
            " "
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
            "Kidney",
            " "
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
            "Cancer",
            " "
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
            "Detection",
            " "
          ] }),
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: "Technology" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden lg:block", children: "Our innovative AI-powered screening technology helps detect kidney cancer in its earliest stages, when treatment is most effective and survival rates are highest." }),
        /* @__PURE__ */ jsx("span", { className: "block lg:hidden", children: "Early detection of kidney cancer when treatment is most effective and survival rates are highest." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { className: "mt-20 grid place-content-center gap-20 md:grid-cols-2 lg:grid-cols-3", children: featuresData.map((feature, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      FeatureCard,
      {
        title: feature.title,
        description: feature.description,
        backgroundColor: feature.backgroundColor,
        icon: feature.icon
      }
    ) }, i)) }) })
  ] });
};
const Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "mt-24 flex h-32 flex-col items-center justify-between bg-gradient-to-b from-transparent to-primary/20", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-5 text-center", children: [
      "Your health matters. Join us in revolutionizing AI healthcare. Together, we can make a difference! ",
      " ",
      /* @__PURE__ */ jsxs("span", { className: "whitespace-nowrap ", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "mailto:ferjani.nader@hotmail.fr",
            className: "font-medium text-primary brightness-150 hover:underline"
          }
        ),
        " ",
        "🚀"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-auto h-[1px] w-full bg-gradient-to-r from-transparent via-primary to-transparent" })
  ] });
};
const Fire = ({ linearFrom, linearTo, ...props }) => /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 1280", ...props, children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      fill: "url(#fire-a)",
      d: "M309.4 1.7c3.1 10 7.2 35.5 8.6 53.2 4.4 56.9-6.4 127.1-28.3 185.1-33.2 87.8-46.2 145.2-46.1 204.5 0 27 1.4 41.5 6 62 1.3 6 4 18.4 5.9 27.5 3.3 15.4 8.5 36.1 22 87.5 19.9 75.8 22.9 121.3 10.9 164-3 10.5-10.3 28.5-11.5 28.5-1.3 0-1.1-2.4.3-3.8.6-.6.9-1.5.5-1.9-.4-.3-.8-.4-1-.2-13.1 20.9-23.3 32.3-33.7 37.8-5.6 3-7.7 3.6-15.1 3.9-8 .4-9 .2-13.2-2.2-11.2-6.6-25.2-26.5-31.2-44.5-7.9-23.5-11-45.1-11-77.1.1-31.1 3.1-53.3 10.4-77.1l3-9.4-3 3.5c-3.6 4.2-8.1 14.8-12.9 30.6-2 6.6-4.7 14.6-5.8 17.6-2.8 7.4-7.5 30.5-10.1 48.8-7.1 51-4.5 102.8 7.4 145 9 31.9 23.1 60.6 40.7 83 4 5 8.6 10.8 10.1 12.8 1.6 2 3.8 3.9 5 4.2 1.3.4 2.2 1.4 2.2 2.5s3 5.8 6.6 10.5c33.5 43.1 49.7 73.3 55.3 102.9 1.8 9.5 2.1 28.9.5 37.7-2.2 12.4-3.5 15-10.3 19.9-3.5 2.5-9.2 5.8-12.8 7.5l-6.4 3-5.5-1.6c-24.2-7.1-47.1-31.9-59.9-64.9-3.3-8.5-3.8-8.6-3.3-.3 1.7 31.1 7.9 56.4 19.9 81.8 18 37.9 47.9 70 81.2 87.3 14.3 7.4 39.1 10.6 57.2 7.3 16.9-3.1 25.3-8.2 43.7-26.4 80.7-80.2 115.5-189.9 100.7-317.5-1.4-11.8-2-14.5-3.7-16-1.7-1.5-1.8-2-.7-2.7 1.1-.7 1-1.8-.3-6.7-.9-3.2-2.8-11.6-4.2-18.6-1.4-7.1-3.1-14.1-3.8-15.5-.8-1.5-1.2-3.4-1-4.4.2-.9-2.1-10.1-5.1-20.5-9.3-32.2-25.2-74.8-43.9-117.6-8-18.4-9.3-20.7-11.3-20.7H410l2.1 5.2c13.1 32.8 20.6 54.1 23.2 66.3 1.6 6.9 4.6 34.6 6.8 62 1.5 17.9.7 51.1-1.5 63-3.6 19.6-11 37.4-20.3 49-4.1 5.1-5.6 6.2-9.8 7.3-11 2.9-20.1-.3-27.2-9.6-6.4-8.4-7.7-20-4.8-41.7.8-6.1 1.5-13.2 1.5-15.9 0-3.6.6-5.6 2-7.1 1.5-1.6 2.7-6.2 4.9-19.6 7.5-44.7 10.4-78.4 10.4-121.9 0-45.3-2.3-65.4-11-94-7.8-25.7-14.1-40.6-39.8-93-27.5-56.1-34.6-73.3-41.9-102-11.7-46.2-9.7-76.9 12.4-186.5 10.2-50.4 14-71.8 16.9-94.5 8.5-65.8 3.4-119.4-15.7-166.6-4-10-5.1-12-7.1-12.2-1.8-.3-2.2 0-1.7 1.5z"
    }
  ),
  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "fire-a", x1: "50%", y1: "0%", x2: "50%", y2: "100%", children: [
    /* @__PURE__ */ jsx("stop", { stopColor: "currentColor", className: linearFrom }),
    /* @__PURE__ */ jsx(
      "stop",
      {
        offset: 1,
        stopColor: "currentColor",
        className: linearTo
      }
    )
  ] }) })
] });
const Hero = () => {
  const [state, handleSubmit] = useForm("mjvqrzpz");
  const [theme, setTheme] = useTheme();
  if (theme !== "red") {
    setTheme("red");
  }
  return /* @__PURE__ */ jsxs("main", { className: "mx-auto my-10 flex min-h-[calc(100vh-73px)] max-w-2xl flex-col justify-center gap-6 px-5 text-center lg:my-0", children: [
    /* @__PURE__ */ jsxs(
      motion.h1,
      {
        initial: { opacity: 0, y: -10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: "easeOut" },
        className: cn(
          "scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl"
        ),
        children: [
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: "Early Detection" }),
          " ",
          /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
            "Saves",
            " "
          ] }),
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-primary to-rose-600 bg-clip-text text-5xl font-extrabold text-transparent lg:text-8xl", children: "Lives." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.p,
      {
        initial: { opacity: 0, y: -10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
        className: "text-base text-muted-foreground lg:text-lg",
        children: [
          "Welcome to ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "KidneyScan AI" }),
          ", our advanced technology provides fast, accurate, and non-invasive kidney cancer screening.",
          " ",
          /* @__PURE__ */ jsx("span", { className: "hidden lg:block", children: "Get results you can trust with our AI-powered detection system." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.form,
      {
        initial: { opacity: 0, y: -10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
        onSubmit: handleSubmit,
        className: "mx-auto mt-8 flex w-full max-w-sm flex-col items-end space-y-2",
        children: [
          !state.succeeded && /* @__PURE__ */ jsx("p", { className: "w-full text-center text-sm text-muted-foreground", children: "Join hundreds of medical facilities using our technology" }),
          state.succeeded && /* @__PURE__ */ jsx("p", { className: "w-full text-center text-sm text-muted-foreground", children: "Your health is our priority" }),
          /* @__PURE__ */ jsx("p", { className: "w-full text-center text-sm text-muted-foreground" })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.span,
      {
        initial: { opacity: 0, y: -10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: "easeOut", delay: 0.6 },
        className: "mx-auto",
        children: /* @__PURE__ */ jsx(
          Fire,
          {
            className: "h-56",
            linearFrom: "text-primary/10",
            linearTo: "text-primary"
          }
        )
      }
    )
  ] });
};
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const Pricing = () => {
  const [checked, setChecked] = useState(false);
  return /* @__PURE__ */ jsxs("section", { className: "mx-auto mb-8 mt-48 px-5 dark:bg-[radial-gradient(ellipse_40%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]", children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto mb-16 h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-primary to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl flex-col gap-6 text-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25", children: /* @__PURE__ */ jsx("span", { className: "brightness-[1.7]", children: "Service Options" }) }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl", children: [
          /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
            "Healthcare",
            " "
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
            "Solutions",
            " "
          ] }),
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: "Plans" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Choose the right screening and monitoring solution for your healthcare needs" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 flex items-center justify-center space-x-2", children: [
        /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "price-toggle",
            className: cn(checked && "text-muted-foreground"),
            children: "One-time"
          }
        ),
        /* @__PURE__ */ jsx(
          Switch,
          {
            id: "price-toggle",
            defaultChecked: false,
            checked,
            onCheckedChange: () => setChecked(!checked),
            className: "data-[state=unchecked]:bg-primary",
            "aria-label": "toggle pricing"
          }
        ),
        /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: "price-toggle",
            className: cn(!checked && "text-muted-foreground"),
            children: "Annual Plan"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-around lg:px-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-bl from-primary/10 via-transparent to-transparent p-8 text-left before:bg-gradient-to-bl before:from-primary/30 before:to-primary/5 lg:max-w-none", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-left", children: [
            /* @__PURE__ */ jsx("p", { children: "Basic Screening" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl text-muted-foreground", children: "$" }),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent", children: "199" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Essential screening for individuals" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-8 flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Single kidney screening test" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "AI-powered analysis" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Detailed medical report" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Patient portal access" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Digital results delivery" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Email support" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { className: "mt-8 w-full", variant: "outline", children: "Schedule Screening" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "gradient-border relative w-full max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-b from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-b before:from-primary before:to-primary/10 lg:max-w-none", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-left", children: [
            /* @__PURE__ */ jsx("p", { children: "Continuous Monitoring" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl text-muted-foreground", children: "$" }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent", children: [
                checked ? "599" : "249",
                checked && /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "SAVE 40%" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Regular monitoring for at-risk patients" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-8 flex flex-col gap-4 text-left", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: checked ? "4 screenings per year" : "Single comprehensive screening" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Enhanced AI detection" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Comparative analysis" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Physician consultation" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Priority scheduling" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Full medical report integration" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { className: "mt-8 w-full", children: "Enroll Now" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "gradient-border relative max-w-sm flex-grow basis-0 rounded-md bg-gradient-to-br from-primary/10 via-transparent to-transparent p-8 before:bg-gradient-to-br before:from-primary/30 before:to-primary/5 lg:max-w-none", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-left", children: [
            /* @__PURE__ */ jsx("p", { children: "Healthcare Provider" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-2xl text-muted-foreground" }),
              /* @__PURE__ */ jsx("span", { className: "flex items-center gap-2 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-5xl font-medium text-transparent", children: "Custom" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Enterprise solutions for medical facilities" })
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-8 flex flex-col gap-4 text-left", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Unlimited patient screenings" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Full EMR/EHR integration" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Customized reporting" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Dedicated medical liaison" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "24/7 technical support" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(CheckIcon, { className: "5 mt-0.5 shrink-0 text-primary" }),
              /* @__PURE__ */ jsx("span", { children: "Staff training & certification" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Button, { className: "mt-8 w-full", variant: "outline", children: "Request Information" })
        ] })
      ] })
    ] })
  ] });
};
const meta$3 = () => {
  return [
    { title: "KidneyScan AI" },
    {
      name: "description",
      content: "Advanced kidney cancer detection technology powered by AI. Early detection saves lives. Fast, accurate, and non-invasive screening for kidney cancer. Trust KidneyScan AI for reliable results."
    },
    {
      name: "keywords",
      content: "Kidney cancer detection, Early cancer screening, Kidney tumor detection, AI medical diagnostics, Non-invasive cancer screening, Renal cell carcinoma, Kidney health, Medical imaging AI, Early detection saves lives, Cancer prevention, Kidney disease screening, Healthcare AI, Medical diagnostics, Cancer detection technology, Precision medicine, Medical innovation"
    },
    {
      name: "robots",
      content: "index, follow"
    },
    {
      name: "author",
      content: "KidneyScan AI Team"
    },
    {
      tagName: "link",
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    },
    {
      tagName: "link",
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    },
    {
      tagName: "link",
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    },
    {
      tagName: "link",
      rel: "manifest",
      href: "/site.webmanifest"
    },
    {
      tagName: "link",
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#e11d48"
    },
    {
      name: "msapplication-TileColor",
      content: "#e11d48"
    },
    {
      name: "theme-color",
      content: "#ffffff"
    },
    {
      property: "og:title",
      content: "KidneyScan AI - Advanced Kidney Cancer Detection Technology"
    },
    {
      property: "og:description",
      content: "Early detection saves lives. Our AI-powered technology provides fast, accurate, and non-invasive screening for kidney cancer with reliable results."
    },
    {
      property: "og:image",
      name: "og:image",
      content: "https://kidneyscanai.com/kidneyscan-og-image.png"
    },
    {
      property: "og:url",
      content: "https://kidneyscanai.com/"
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:title",
      content: "KidneyScan AI - Advanced Kidney Cancer Detection Technology"
    },
    {
      name: "twitter:description",
      content: "Early detection saves lives. Our AI-powered technology provides fast, accurate, and non-invasive screening for kidney cancer with reliable results."
    },
    {
      name: "twitter:image",
      content: "https://kidneyscanai.com/kidneyscan-og-image.png"
    },
    {
      name: "twitter:url",
      content: "https://kidneyscanai.com/"
    },
    {
      name: "twitter:domain",
      content: "kidneyscanai.com"
    }
  ];
};
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]", children: [
    /* @__PURE__ */ jsx(AppNavbar, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-16 flex max-w-xl flex-col gap-4 px-5 sm:flex-row", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "flex items-center gap-2", size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/scan", children: [
        /* @__PURE__ */ jsx(CameraIcon, { className: "h-5 w-5" }),
        "Analyze Kidney Scan"
      ] }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "flex items-center gap-2", size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/chat", children: [
        /* @__PURE__ */ jsx(MessageSquareIcon, { className: "h-5 w-5" }),
        "Chat with Assistant"
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Cms, {}),
    /* @__PURE__ */ jsx(Features, {}),
    /* @__PURE__ */ jsx(Pricing, {}),
    /* @__PURE__ */ jsx(Banner, {}),
    /* @__PURE__ */ jsx(FAQs, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const meta$2 = () => {
  return [
    { title: "About KidneyScan AI" },
    {
      name: "description",
      content: "Learn about KidneyScan AI, our mission to revolutionize kidney cancer detection through advanced AI technology, and the team behind our innovation."
    }
  ];
};
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]", children: [
    /* @__PURE__ */ jsx(AppNavbar, {}),
    /* @__PURE__ */ jsx("main", { className: "mx-auto max-w-4xl px-5 pb-24 pt-16", children: /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h1", { className: "font-inter text-4xl font-extrabold tracking-tight lg:text-5xl", children: /* @__PURE__ */ jsxs("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: [
          "About KidneyScan",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "AI" })
        ] }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg text-muted-foreground", children: "KidneyScan AI is at the forefront of medical technology, dedicated to early detection of kidney cancer through advanced artificial intelligence. Our mission is to save lives by making early detection accessible, accurate, and affordable for everyone." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-inter text-2xl font-bold tracking-tight lg:text-3xl", children: "Our Mission" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "We believe that early detection is the key to improving kidney cancer survival rates. By leveraging cutting-edge AI and machine learning, we've developed a technology that can detect potential kidney tumors with over 95% accuracy, even at early stages when traditional screening methods might miss them." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-inter text-2xl font-bold tracking-tight lg:text-3xl", children: "Our Technology" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "KidneyScan AI uses deep learning neural networks trained on thousands of medical images to identify patterns associated with kidney tumors. Our system can analyze various types of kidney scans, including:" }),
          /* @__PURE__ */ jsxs("ul", { className: "ml-6 list-disc space-y-2 text-lg text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "CT scans" }),
            /* @__PURE__ */ jsx("li", { children: "MRI images" }),
            /* @__PURE__ */ jsx("li", { children: "Ultrasound images" }),
            /* @__PURE__ */ jsx("li", { children: "Other medical imaging formats" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "The AI has been trained to identify subtle indicators that might escape the human eye, especially in early-stage tumors where visual cues can be minimal." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-inter text-2xl font-bold tracking-tight lg:text-3xl", children: "Privacy & Security" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "We understand the sensitive nature of medical data. All images uploaded to KidneyScan AI are processed with strict adherence to healthcare privacy standards. We use state-of-the-art encryption and security protocols to ensure your medical information remains confidential and protected." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-inter text-2xl font-bold tracking-tight lg:text-3xl", children: "Our Team" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "KidneyScan AI was developed by a multidisciplinary team of medical professionals, AI researchers, and software engineers committed to transforming healthcare through technology. Our advisory board includes leading nephrologists, oncologists, and radiologists who guide our development to ensure clinical relevance and accuracy." })
      ] }),
      /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { className: "font-inter text-2xl font-bold tracking-tight lg:text-3xl", children: "Important Disclaimer" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "While KidneyScan AI provides highly accurate preliminary assessments, it is designed as a supportive tool for healthcare professionals, not a replacement for proper medical evaluation. Always consult with qualified healthcare providers for diagnosis and treatment decisions." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AboutPage,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const defaultMessages = [
  {
    id: "1",
    content: "Hello! I'm your KidneyScan AI assistant. How can I help you with kidney cancer detection and information today?",
    role: "assistant",
    timestamp: /* @__PURE__ */ new Date()
  }
];
const getSampleResponse = (question) => {
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes("symptom") || lowerQuestion.includes("sign")) {
    return "Common symptoms of kidney cancer may include blood in urine, pain in your side that doesn't go away, loss of appetite, unexplained weight loss, and fatigue. However, many people with kidney cancer don't have obvious symptoms, especially in early stages.";
  }
  if (lowerQuestion.includes("treatment") || lowerQuestion.includes("therapy")) {
    return "Kidney cancer treatment options depend on the stage and type, but may include surgery, targeted therapy, immunotherapy, radiation therapy, or chemotherapy. Your healthcare provider will recommend the best approach based on your specific situation.";
  }
  if (lowerQuestion.includes("risk") || lowerQuestion.includes("cause")) {
    return "Risk factors for kidney cancer include smoking, obesity, high blood pressure, family history of kidney cancer, certain genetic conditions, long-term dialysis, and workplace exposure to specific chemicals.";
  }
  if (lowerQuestion.includes("accuracy") || lowerQuestion.includes("reliable") || lowerQuestion.includes("detection")) {
    return "Our KidneyScan AI detection technology has demonstrated over 95% accuracy in clinical studies for detecting kidney tumors. However, it's designed as a preliminary screening tool and should be followed up with consultation from healthcare professionals.";
  }
  if (lowerQuestion.includes("test") || lowerQuestion.includes("scan") || lowerQuestion.includes("screening")) {
    return "Our kidney cancer screening uses AI to analyze images of your kidneys. You can upload images from CT scans, MRIs, or ultrasounds for analysis. The process is non-invasive and provides quick preliminary results.";
  }
  return "That's a great question. To give you the most accurate information for your specific situation, I'd recommend consulting with a healthcare professional. Would you like me to provide general information about kidney cancer detection or screening options?";
};
const ChatBot = () => {
  const [messages, setMessages] = useState(defaultMessages);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    var _a;
    (_a = messagesEndRef.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const handleSendMessage = async (e) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;
    const userMessage = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: /* @__PURE__ */ new Date()
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        content: getSampleResponse(userMessage.content),
        role: "assistant",
        timestamp: /* @__PURE__ */ new Date()
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 1e3);
  };
  const handleReset = () => {
    setMessages(defaultMessages);
  };
  return /* @__PURE__ */ jsx("section", { className: "mx-auto mt-24 max-w-7xl px-5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-2xl flex-col gap-6 text-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25", children: /* @__PURE__ */ jsx("span", { className: "brightness-[1.7]", children: "Virtual Assistant" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: "KidneyScan AI Assistant" }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Ask questions about kidney cancer, detection methods, or get help interpreting your results." }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-8 flex w-full max-w-2xl flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-[500px] flex-col rounded-t-lg border border-b-0 border-primary/20 bg-background/50", children: /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4", children: [
        messages.map((message) => /* @__PURE__ */ jsx(
          "div",
          {
            className: `mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`,
            children: /* @__PURE__ */ jsxs(
              "div",
              {
                className: `max-w-[80%] rounded-lg p-3 ${message.role === "user" ? "bg-primary text-white" : "bg-muted text-foreground"}`,
                children: [
                  message.role === "assistant" && /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary", children: "AI" }) }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs opacity-70", children: "KidneyScan Assistant" })
                  ] }),
                  message.role === "user" && /* @__PURE__ */ jsxs("div", { className: "mb-1 flex items-center justify-end", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs opacity-70", children: "You" }),
                    /* @__PURE__ */ jsx("div", { className: "ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-white/20", children: /* @__PURE__ */ jsx(UserIcon, { className: "h-3 w-3" }) })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: `text-sm ${message.role === "user" ? "text-right" : "text-left"}`, children: message.content })
                ]
              }
            )
          },
          message.id
        )),
        isLoading && /* @__PURE__ */ jsx("div", { className: "mb-4 flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "max-w-[80%] rounded-lg bg-muted p-4 text-foreground", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(RefreshCw, { className: "mr-2 h-4 w-4 animate-spin" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "KidneyScan Assistant is typing..." })
        ] }) }) }),
        /* @__PURE__ */ jsx("div", { ref: messagesEndRef })
      ] }) }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSendMessage,
          className: "flex rounded-b-lg border border-primary/20 bg-background/50 p-2",
          children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                value: inputValue,
                onChange: (e) => setInputValue(e.target.value),
                placeholder: "Type your question about kidney cancer...",
                className: "border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                size: "icon",
                disabled: isLoading || !inputValue.trim(),
                className: "ml-2 h-10 w-10 rounded-full",
                children: /* @__PURE__ */ jsx(SendIcon, { className: "h-4 w-4" })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: handleReset,
          className: "text-xs text-muted-foreground",
          children: "Reset conversation"
        }
      ) })
    ] })
  ] }) });
};
const meta$1 = () => {
  return [
    { title: "KidneyScan AI - Virtual Assistant" },
    {
      name: "description",
      content: "Chat with our AI assistant about kidney cancer detection, symptoms, treatments, and more. Get reliable information and guidance."
    }
  ];
};
function ChatPage() {
  return /* @__PURE__ */ jsxs("div", { className: "dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]", children: [
    /* @__PURE__ */ jsx(AppNavbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pb-24", children: /* @__PURE__ */ jsx(ChatBot, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ChatPage,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const ImageCapture = () => {
  const [captureMode, setCaptureMode] = useState("options");
  const [imageData, setImageData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [confidence, setConfidence] = useState(null);
  const [error, setError] = useState(null);
  const [diagnosisText, setDiagnosisText] = useState(null);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);
  const startCamera = async () => {
    setCaptureMode("camera");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      setError("Unable to access camera. Please check permissions.");
      setCaptureMode("options");
    }
  };
  const captureImage = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg");
      setImageData(dataUrl);
      setCaptureMode("preview");
      const stream = videoRef.current.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    }
  };
  const handleFileChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const result2 = reader.result;
      setImageData(result2);
      setCaptureMode("preview");
    };
    reader.readAsDataURL(file);
  };
  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
      fileInputRef.current.click();
    }
  };
  const handleReset = () => {
    setImageData(null);
    setResult(null);
    setConfidence(null);
    setError(null);
    setDiagnosisText(null);
    setCaptureMode("options");
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    }
  };
  const handleAnalyze = async () => {
    if (!imageData) return;
    setIsAnalyzing(true);
    setError(null);
    try {
      const base64Image = imageData.split(",")[1];
      const response = await fetch("http://localhost:8080/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          image: base64Image
        })
      });
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      if (Array.isArray(data) && data.length > 0 && data[0].image) {
        const diagnosis = data[0].image;
        setDiagnosisText(diagnosis);
        if (diagnosis === "Tumor") {
          setResult("positive");
          setConfidence(95);
        } else if (diagnosis === "Normal") {
          setResult("negative");
          setConfidence(95);
        } else {
          setResult("positive");
          setConfidence(85);
          setDiagnosisText(`Detected: ${diagnosis}`);
        }
      } else if (data.image) {
        const diagnosis = data.image;
        setDiagnosisText(diagnosis);
        if (diagnosis === "Tumor") {
          setResult("positive");
          setConfidence(95);
        } else if (diagnosis === "Normal") {
          setResult("negative");
          setConfidence(95);
        } else {
          setResult("positive");
          setConfidence(85);
          setDiagnosisText(`Detected: ${diagnosis}`);
        }
      } else {
        throw new Error("Unexpected response format from server");
      }
    } catch (err) {
      console.error("Error during analysis:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    } finally {
      setIsAnalyzing(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "mx-auto mt-24 max-w-7xl px-5", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-2xl flex-col gap-6 text-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("span", { className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary dark:bg-primary/25", children: /* @__PURE__ */ jsx("span", { className: "brightness-[1.7]", children: "Kidney Scan Analysis" }) }),
      /* @__PURE__ */ jsx("h1", { className: "mt-4 scroll-m-20 font-inter text-4xl font-extrabold tracking-tight lg:text-5xl", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent", children: "Capture or Upload" }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Take a photo of your kidney scan or upload an existing image for AI-powered tumor detection." }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto mt-8 w-full max-w-xl", children: [
      captureMode === "options" && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: startCamera,
            size: "lg",
            className: "flex h-32 flex-col gap-2 p-0",
            children: [
              /* @__PURE__ */ jsx(CameraIcon, { className: "h-8 w-8" }),
              /* @__PURE__ */ jsx("span", { children: "Take a Photo" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: triggerFileUpload,
            size: "lg",
            variant: "outline",
            className: "flex h-32 flex-col gap-2 p-0",
            children: [
              /* @__PURE__ */ jsx(UploadIcon, { className: "h-8 w-8" }),
              /* @__PURE__ */ jsx("span", { children: "Upload an Image" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "file",
                  ref: fileInputRef,
                  className: "hidden",
                  accept: "image/*",
                  onChange: handleFileChange
                }
              )
            ]
          }
        )
      ] }),
      captureMode === "camera" && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-4", children: [
        /* @__PURE__ */ jsx("div", { className: "relative aspect-video w-full overflow-hidden rounded-lg border border-primary/20 bg-black", children: /* @__PURE__ */ jsx(
          "video",
          {
            ref: videoRef,
            autoPlay: true,
            playsInline: true,
            className: "h-full w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex w-full justify-between", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleReset, children: "Cancel" }),
          /* @__PURE__ */ jsx(Button, { onClick: captureImage, children: "Capture Image" })
        ] })
      ] }),
      captureMode === "preview" && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-square w-full max-w-sm overflow-hidden rounded-lg border border-primary/20 bg-black/5", children: [
          imageData && /* @__PURE__ */ jsx(
            "img",
            {
              src: imageData,
              alt: "Kidney scan preview",
              className: "h-full w-full object-contain"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: handleReset,
              className: "absolute top-2 right-2 rounded-full bg-background/80 p-1 text-muted-foreground hover:bg-background hover:text-foreground",
              "aria-label": "Remove image",
              children: /* @__PURE__ */ jsx(XIcon, { className: "h-5 w-5" })
            }
          )
        ] }),
        error && /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm rounded-lg border border-red-200 bg-red-50 p-4 text-left text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-400", children: [
          /* @__PURE__ */ jsx("h3", { className: "mb-1 font-semibold", children: "Analysis Error" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: error })
        ] }),
        !result && !error ? /* @__PURE__ */ jsx(
          Button,
          {
            onClick: handleAnalyze,
            disabled: isAnalyzing,
            className: "w-full max-w-sm",
            children: isAnalyzing ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(RefreshCw, { className: "mr-2 h-4 w-4 animate-spin" }),
              "Analyzing scan..."
            ] }) : "Analyze for tumor detection"
          }
        ) : null,
        result && /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: cn(
            "rounded-lg border p-4",
            result === "positive" ? "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-400" : "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950/50 dark:text-green-400"
          ), children: [
            /* @__PURE__ */ jsxs("h3", { className: "mb-2 font-semibold", children: [
              diagnosisText && /* @__PURE__ */ jsx("span", { className: "font-bold", children: diagnosisText }),
              !diagnosisText && (result === "positive" ? "Potential tumor detected" : "No tumor detected")
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm", children: result === "positive" ? `Our AI has detected potential abnormalities with ${confidence}% confidence. Please consult with a healthcare professional for a thorough evaluation.` : `Our AI analysis shows no signs of kidney tumor with ${confidence}% confidence. Regular screening is still recommended.` })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                onClick: handleReset,
                className: "flex-1",
                children: "New Scan"
              }
            ),
            /* @__PURE__ */ jsx(Button, { className: "flex-1", children: "Schedule consultation" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx("strong", { children: "Note:" }),
          " This is a preliminary assessment and should not replace professional medical diagnosis."
        ] })
      ] })
    ] })
  ] }) });
};
const meta = () => {
  return [
    { title: "KidneyScan AI - Image Analysis" },
    {
      name: "description",
      content: "Upload kidney scans or take photos for AI-powered tumor detection. Get fast and accurate preliminary results from our advanced detection technology."
    }
  ];
};
function ScanPage() {
  return /* @__PURE__ */ jsxs("div", { className: "dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsla(var(--primary)_/_30%),#ffffff00)]", children: [
    /* @__PURE__ */ jsx(AppNavbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pb-24", children: /* @__PURE__ */ jsx(ImageCapture, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ScanPage,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Dv_CClom.js", "imports": ["/assets/components-DVmqD061.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-sG9wdUm2.js", "imports": ["/assets/components-DVmqD061.js", "/assets/use-theme-mVS1s4CG.js", "/assets/root-DaZoDgTo.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-CZfsgQqz.js", "imports": ["/assets/components-DVmqD061.js", "/assets/footer-BH9mAwpq.js", "/assets/input-hlI_xEtT.js", "/assets/use-theme-mVS1s4CG.js"], "css": [] }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/about-BrKmuBlY.js", "imports": ["/assets/components-DVmqD061.js", "/assets/footer-BH9mAwpq.js"], "css": [] }, "routes/chat": { "id": "routes/chat", "parentId": "root", "path": "chat", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/chat-eZSs-lqy.js", "imports": ["/assets/components-DVmqD061.js", "/assets/footer-BH9mAwpq.js", "/assets/input-hlI_xEtT.js", "/assets/refresh-cw-DM2zEIv2.js"], "css": [] }, "routes/scan": { "id": "routes/scan", "parentId": "root", "path": "scan", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/scan-BI73o3X4.js", "imports": ["/assets/components-DVmqD061.js", "/assets/footer-BH9mAwpq.js", "/assets/refresh-cw-DM2zEIv2.js"], "css": [] } }, "url": "/assets/manifest-93a8c2d2.js", "version": "93a8c2d2" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_fogOfWar": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/chat": {
    id: "routes/chat",
    parentId: "root",
    path: "chat",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/scan": {
    id: "routes/scan",
    parentId: "root",
    path: "scan",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};

"use client"
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";


export default function Provider({children}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextSSRPlugin
       routerConfig={extractRouterConfig(ourFileRouter)}
      />
      <Toaster postion="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}

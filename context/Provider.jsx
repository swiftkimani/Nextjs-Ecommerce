"use client"
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export default function Provider({children}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}

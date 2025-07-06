import QueryProvider from "../components/QueryProvider";
import SciFooterHolder from "../components/SciFooterHolder";
import SciNavbarHolder from "../components/SciNavbarHolder";
import { Provider } from "@/components/ui/provider";
import "./globals.css";

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Provider>
            <div className="bg-gray-50">
              <div className="min-h-screen max-w-screen-lg mx-auto flex flex-col justify-between">
                <div className="sticky top-0 z-50 w-full">
                  <SciNavbarHolder />
                </div>
                {children}
                <div className="w-full mx-auto">
                  <SciFooterHolder />
                </div>
              </div>
            </div>
          </Provider>
        </QueryProvider>
      </body>
    </html>
  );
}

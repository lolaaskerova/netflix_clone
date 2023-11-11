import Navbar from "@/components/Navbar";
import { siteConfig } from "@/config/site";
import { ReduxProvider } from "@/redux/provider";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone",
  manifest: `${siteConfig.url}/manifest.json`,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <head />
      <body className={poppins.className}>
        <ReduxProvider>
          <Navbar />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}


import Header from "../components/Header";
import CreateEventDrawer from '../components/createEventDrawer';


import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "Scheduler",
  description: "Generated by create next app"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
       <Header />
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {children}
        </main>
        <footer className="bg-blue-100 py-12">
          <div className="text-center px-4 mx-auto container text-gray-600">
            <p>Made by Me</p>
          </div>
        </footer>
        <CreateEventDrawer />
      </body>
    </html>
    </ClerkProvider>
  );
};

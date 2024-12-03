 import "./globals.css";

 
export const metadata = {
  title: "Form",
  description: "Form",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

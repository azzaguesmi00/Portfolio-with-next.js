import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
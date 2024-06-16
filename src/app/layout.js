import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'bluechat challenge website',
  description: 'Bluechat is Cameroons SuperApp',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
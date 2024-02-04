import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { template: '%s | Cloud Task', default: 'Cloud Task' },
  description:
    'A task tracker app hosted on the Cloudflare Pages platform, built with NextJS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="bg-gray-50">
          <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 sm:py-8 lg:px-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                  Cloud Task ☁️
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                  Manage your tasks and due dates here! 📝
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4 sm:mt-0 sm:flex-row sm:items-center">
                <Link
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
                  href="https://github.com/Luzefiru"
                  target="_blank"
                >
                  <span className="text-sm font-medium">GitHub</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>

                <button
                  className="block px-5 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring"
                  type="button"
                >
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </header>
        <main className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          {children}
        </main>
        <footer className="w-full py-4 px-4 sm:px-6 lg:px-8 mt-auto border-t-[1px] ">
          <Link
            href="https://github.com/Luzefiru"
            className="flex justify-center w-full text-sm text-gray-400 hover:text-black"
            target="_blank"
          >
            &copy; 2024 Luzefiru
          </Link>
        </footer>
      </body>
    </html>
  );
}

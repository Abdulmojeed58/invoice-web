import AuthLayout from "@/features/auth/layout/AuthLayout";
import DashboardLayout from "@/features/dashboard/layout/DashboardLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

// Layouts

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname.includes("auth")) {
    return (
      <SessionProvider session={pageProps.session}>
        <AuthLayout>
          <Toaster />
          <Component {...pageProps} />
        </AuthLayout>
      </SessionProvider>
    );
  }

  // if (router.pathname.includes("dashboard")) {
  return (
    <SessionProvider session={pageProps.session}>
      <DashboardLayout>
        <Toaster />
        <Component {...pageProps} />
      </DashboardLayout>
    </SessionProvider>
  );
  // }
  // return (
  //   <SessionProvider session={pageProps.session}>
  //     <Toaster />
  //     <Component {...pageProps} />
  //   </SessionProvider>
  // );
}

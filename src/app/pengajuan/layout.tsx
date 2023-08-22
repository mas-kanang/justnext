import Head from "next/head";
import React from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout(props: { children: any; pageTitle: any; }) {
  const { children, pageTitle } = props;
  return (
    <div>
      <Head>
        <title>Maskanang | {pageTitle}</title>
        <meta name="description" content="maskanang website" />
      </Head>
      <div className="flex flex-col min-h-screen ">
        <Header />
        <div className="flex-1 mt-10 bg-slate-100  ">{children}</div>
        <Footer />
      </div>
    </div>
  );
}

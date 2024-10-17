'use client'
import Cover from "@/components/utilities/cover";
import Head from "next/head";
import { useEffect } from "react";

export default function Fragances() {
  useEffect(() => {document.title = 'Hola'}, []);
  return (
    <>
      <Cover></Cover>
      <header>
        <h1 className="text-white">Mi coleccion</h1>
      </header>
    </>
  );
}

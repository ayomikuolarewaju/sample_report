"use client";

import React, { useRef } from "react";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";
import Extra from "@/components/Extra";
import General from "@/components/General";
import Grade from "@/components/Grade";
import Head from "@/components/Head";
import Student from "@/components/Student";
import Subject from "@/components/Subject";

function Page() {
  const printRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!printRef.current) return;

    try {
      // Remove iframes from a clone before processing
      const clone = printRef.current.cloneNode(true) as HTMLElement;
      clone.querySelectorAll("iframe").forEach((iframe) => iframe.remove());

      document.body.appendChild(clone);

      // Generate image from the cleaned clone
      const dataUrl = await toPng(clone, {
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        skipFonts: false,
      });

      document.body.removeChild(clone);

      // Create PDF from the image
      const pdf = new jsPDF("p", "pt", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const img = new Image();
      img.src = dataUrl;

      await new Promise((resolve) => {
        img.onload = () => resolve(null);
      });

      const imgWidth = pageWidth;
      const imgHeight = (img.height * imgWidth) / img.width;

      // Add first page
      pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);

      // Handle multi-page content - FIXED LOGIC
      let heightLeft = imgHeight;
      let position = 0;

      // Subtract pageHeight since first page is already added
      heightLeft -= pageHeight;
      position -= pageHeight; // Start position for next page

      while (heightLeft > 0) {
        pdf.addPage();
        pdf.addImage(dataUrl, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight; // Move position for next page
      }

      pdf.save("student_report.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <div>
      <div ref={printRef} className="">
        <Head />
        <Student />
        <Subject />
        <Extra />
        <General />
        <Grade />
      </div>
      <div className="flex justify-center items-center mt-5 ">
        <button
          onClick={downloadPDF}
          className="mb-4 bg-blue-300 text-white text-xs px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default Page;

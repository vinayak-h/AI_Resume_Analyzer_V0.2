"use client";

import { useRef, useState } from "react";

import { Navbar } from "@/features/landing/components/navbar";
import { HeroSection } from "@/features/landing/components/hero-section";

import { UploadDropzone } from "@/features/upload/components/upload-dropzone";

import { AnalysisLoader } from "@/features/dashboard/components/analysis-loader";
import { AnalysisDashboard } from "@/features/dashboard/components/analysis-dashboard";
import { AtsInsights } from "@/features/dashboard/components/ats-insights";
import { MissingSkills } from "@/features/dashboard/components/missing-skills";

import { Footer } from "@/features/landing/components/footer";

export default function Home() {

  const [uploadedFile, setUploadedFile] =
    useState<File | null>(null);

  const [isAnalyzing, setIsAnalyzing] =
    useState(false);

  const [analysisData, setAnalysisData] =
    useState<any>(null);

  // AUTO SCROLL REFS

  const loaderRef =
    useRef<HTMLDivElement>(null);

  const dashboardRef =
    useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <Navbar />

      <HeroSection />

      <UploadDropzone
        uploadedFile={uploadedFile}
        setUploadedFile={setUploadedFile}
        isAnalyzing={isAnalyzing}
        setIsAnalyzing={setIsAnalyzing}
        setAnalysisData={setAnalysisData}
        loaderRef={loaderRef}
        dashboardRef={dashboardRef}
      />

      {isAnalyzing && (
        <div ref={loaderRef}>
          <AnalysisLoader />
        </div>
      )}

      {!isAnalyzing && analysisData && (
        <div ref={dashboardRef}>

          <AnalysisDashboard
            analysisData={analysisData}
          />

          <AtsInsights
            analysisData={analysisData}
          />

          <MissingSkills
            analysisData={analysisData}
          />

        </div>
      )}

      <Footer />

    </main>
  );
}
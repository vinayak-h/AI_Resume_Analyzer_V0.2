"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import { motion } from "framer-motion";

type UploadDropzoneProps = {
  uploadedFile: File | null;

  setUploadedFile:
    React.Dispatch<
      React.SetStateAction<File | null>
    >;

  isAnalyzing: boolean;

  setIsAnalyzing:
    React.Dispatch<
      React.SetStateAction<boolean>
    >;

  setAnalysisData:
    React.Dispatch<
      React.SetStateAction<any>
    >;

  loaderRef:
    React.RefObject<HTMLDivElement | null>;

  dashboardRef:
    React.RefObject<HTMLDivElement | null>;
};

export function UploadDropzone({
  uploadedFile,
  setUploadedFile,
  isAnalyzing,
  setIsAnalyzing,
  setAnalysisData,
  loaderRef,
  dashboardRef,
}: UploadDropzoneProps) {

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {

      console.log(
        "Uploaded Files:",
        acceptedFiles
      );

      if (acceptedFiles.length > 0) {

        const file = acceptedFiles[0];

        setUploadedFile(file);

        setIsAnalyzing(true);

        // AUTO SCROLL TO LOADER

        setTimeout(() => {

          loaderRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }, 200);

        const formData = new FormData();

        formData.append("file", file);

        try {

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/parse-resume`,
            {
              method: "POST",
              body: formData,
            }
          );

          // HANDLE FAILED RESPONSE

          if (!response.ok) {

            throw new Error(
              "Failed to analyze resume"
            );

          }

          const result =
            await response.json();

          console.log(
            "Parsed Resume Data:",
            result
          );

          setAnalysisData(result.data);

        } catch (error) {

          console.error(
            "Upload Error:",
            error
          );

          alert(
            "Something went wrong while analyzing the resume."
          );

        } finally {

          setTimeout(() => {

            setIsAnalyzing(false);

            // AUTO SCROLL TO DASHBOARD

            setTimeout(() => {

              dashboardRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });

            }, 500);

          }, 4000);

        }
      }

    },
    [
      setUploadedFile,
      setIsAnalyzing,
      setAnalysisData,
      loaderRef,
      dashboardRef,
    ]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open,
  } = useDropzone({
    onDrop,

    accept: {
      "application/pdf": [".pdf"],
    },

    multiple: false,

    noClick: true,
  });

  return (
    <section
      id="upload-section"
      className="
        relative
        flex
        items-center
        justify-center
        bg-transparent
        px-6
        py-20
      "
    >

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="w-full max-w-3xl"
      >

        <div
          {...getRootProps()}
          className={`
            rounded-3xl
            border
            border-zinc-700/60
            bg-zinc-900/90
            p-14
            text-center
            shadow-2xl
            backdrop-blur-xl
            transition-all
            duration-300

            ${
              isDragActive
                ? "scale-[1.02] border-cyan-400 bg-cyan-500/10"
                : "hover:border-zinc-500/80 hover:bg-zinc-900"
            }
          `}
        >

          <input {...getInputProps()} />

          <div className="flex flex-col items-center justify-center">

            <div
              className="
                mb-6
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                p-5
              "
            >

              <UploadCloud
                className="
                  h-12
                  w-12
                  text-cyan-400
                "
              />

            </div>

            <h2
              className="
                text-3xl
                font-bold
                tracking-tight
                text-white
              "
            >
              Upload Your Resume
            </h2>

            <p
              className="
                mt-4
                max-w-md
                text-zinc-400
              "
            >
              Drag & drop your PDF resume
              to receive AI-powered ATS analysis,
              skill-gap detection, and career insights
            </p>

            <button
              onClick={open}
              className="
                mt-8
                rounded-xl
                bg-cyan-400
                px-6
                py-3
                font-medium
                text-black
                transition
                hover:scale-105
                hover:bg-cyan-300
              "
            >
              Browse Resume
            </button>

            <div
              className="
                mt-4
                text-sm
                text-zinc-500
              "
            >
              PDF Only • Max 5MB
            </div>

            {uploadedFile && (

              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-4
                  py-3
                  text-sm
                  text-cyan-300
                "
              >
                Uploaded: {uploadedFile.name}
              </div>

            )}

            {isAnalyzing && (

              <div
                className="
                  mt-6
                  rounded-xl
                  border
                  border-cyan-400/20
                  bg-cyan-500/10
                  px-5
                  py-3
                  text-sm
                  text-cyan-300
                  animate-pulse
                "
              >
                AI is analyzing your resume...
              </div>

            )}

          </div>

        </div>

      </motion.div>

    </section>
  );
}
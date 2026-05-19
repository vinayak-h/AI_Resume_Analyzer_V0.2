"use client";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <h1 className="text-xl font-bold text-white">
          AI-Resume-Analyzer
        </h1>

        <div className="flex items-center gap-4">

          <button
            onClick={() => {
              document
                .getElementById("upload-section")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm text-white transition hover:bg-white/10"
          >
            Upload Resume
          </button>

        </div>

      </div>

    </nav>
  );
}
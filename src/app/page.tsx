"use client";

import { useState } from "react";

export default function Home() {
  const [fileName, setFileName] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-8 text-white">
      <h1 className="mb-4 text-5xl font-bold">
        DocuMind
      </h1>

      <p className="mb-8 text-lg text-slate-400">
        Your AI-powered document assistant.
      </p>

      <label className="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
        Upload Document
        <input
          type="file"
          accept=".pdf,application/pdf"
          className="hidden"
          onChange={(event) => {
            const selectedFile = event.target.files?.[0];

            if (selectedFile) {
              setFileName(selectedFile.name);
            }
          }}
        />
      </label>

      {fileName && (
        <p className="mt-6 text-green-400">
          Selected: {fileName}
        </p>
      )}
    </main>
  );
}
"use client";

import { useState } from "react";

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);

    const pdfFiles = selectedFiles.filter(
      (file) => file.type === "application/pdf"
    );

    setFiles((previousFiles) => [...previousFiles, ...pdfFiles]);
    event.target.value = "";
  }

  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">
        <h1 className="mb-10 text-2xl font-bold text-blue-400">
          DocuMind
        </h1>

        <nav className="space-y-4 text-slate-300">
          <p className="rounded-lg bg-slate-800 p-3 text-white">
            Documents
          </p>
          <p className="p-3">AI Chat (Coming Soon)</p>
        </nav>
      </aside>

      {/* Main dashboard */}
      <section className="flex-1 p-10">
        <h2 className="mb-2 text-3xl font-bold">
          My Documents
        </h2>

        <p className="mb-8 text-slate-400">
          Upload and manage your research documents.
        </p>

        {/* Upload button */}
        <label className="inline-block cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700">
          + Upload PDF
          <input
            type="file"
            accept=".pdf,application/pdf"
            multiple
            className="hidden"
            onChange={handleUpload}
          />
        </label>

        {/* Document library */}
        <div className="mt-10">
          <h3 className="mb-4 text-xl font-semibold">
            Document Library
          </h3>

          {files.length === 0 ? (
            <p className="text-slate-500">
              No documents selected yet.
            </p>
          ) : (
            <div className="space-y-3">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-slate-800 bg-slate-900 p-4"
                >
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-slate-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
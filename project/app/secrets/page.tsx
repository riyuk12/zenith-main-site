"use client";
export default function HomePage() {
    return (
      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <div className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
            Hidden Pathway
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            You've stumbled onto something…<br />
            or maybe it found you.
          </p>
          <p className="text-md md:text-lg text-gray-400">
            Not everything here is what it seems.
            <br />
            Some doors don’t open with keys —
            <br />
            but with memory, instinct, and precision.
          </p>
          <a
            href="https://solve.zenithclub.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition"
          >
            Enter the Puzzle
          </a>
        </div>
      </main>
    );
  }
  
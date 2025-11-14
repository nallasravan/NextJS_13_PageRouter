"use client"

import Ram from "../components/Ram";


export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-cyan-400 mb-6">About Us</h1>
      <p className="text-lg text-gray-300 leading-relaxed">
        This app uses <strong className="text-cyan-400">pages/ folder</strong> +{' '}
        <strong className="text-cyan-400">Page Router</strong> +{' '}
        <strong className="text-cyan-400">Tailwind CSS only</strong>.
      </p>
      <Ram/>
    </div>
  );
}
'use client'

export default function GrievanceAboutPackPanel() {
  return (
    <div className="grow">
      <div className="p-6 space-y-6">
        {/* About This Pack */}
        <section className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow">
          <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-3">About This Pack</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Take control of your employment grievance—step by step.</strong>
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This pack is your structured companion through a complex and often overwhelming process. Whether you're just starting to raise concerns or formalising a written grievance, this toolkit is designed to help you feel informed, organised, and supported.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Key Resources</strong> – Straightforward guides, explainer videos, and legal context to help you understand your rights and what to expect next.
            </li>
            <li>
              <strong>Interactive Task List</strong> – Stay on track with a checklist of essential steps—tailored to where you are in your grievance process.
            </li>
            <li>
              <strong>Document Preparation Support</strong> – Smart tools and prompts to help you prepare draft letters, timelines, and evidence summaries—without needing legal expertise.
            </li>

          </ul>
             <li>
              <strong>This module does not provide legal advice and is not a substitute for a qualified solicitor.</strong> 
            </li>
        </section>
      </div>
    </div>
  )
}

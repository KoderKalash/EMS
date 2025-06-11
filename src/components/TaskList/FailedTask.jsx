"use client"

import { XCircle, Calendar, Tag, AlertTriangle, RotateCcw } from "lucide-react"

const FailedTask = ({ data }) => {
  const handleRetry = () => {
    // Handle retry logic
    console.log("Retrying task:", data.taskTitle)
  }

  const formatDate = (dateString) => {
    if (!dateString) return "No date"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <div className="flex-shrink-0 h-full w-[280px] sm:w-[300px] lg:w-[320px] group">
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-red-500/90 to-red-600/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-red-400/30 shadow-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Status Indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-red-500 rounded-t-2xl"></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-red-100" />
            <span className="bg-red-700/60 text-red-100 text-xs font-medium px-3 py-1.5 rounded-lg border border-red-600/40">
              {data.category || "General"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-red-100/80 text-xs">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(data.taskDate)}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 bg-red-700/60 px-3 py-1.5 rounded-lg border border-red-600/40">
            <XCircle className="w-4 h-4 text-red-200" />
            <span className="text-red-100 text-xs font-semibold">FAILED</span>
          </div>
          <div className="flex items-center gap-1 text-red-200/70 text-xs">
            <AlertTriangle className="w-3 h-3" />
            <span>Needs attention</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-red-50 mb-3 line-clamp-2 group-hover:text-white transition-colors duration-200">
            {data.taskTitle || "Untitled Task"}
          </h2>
          <p className="text-red-100/90 text-sm leading-relaxed line-clamp-3">
            {data.taskDescription || "No description available for this task."}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-red-200/80 text-xs font-medium">Progress</span>
            <span className="text-red-200/80 text-xs">0%</span>
          </div>
          <div className="w-full bg-red-700/40 rounded-full h-1.5">
            <div className="bg-red-300/60 h-1.5 rounded-full w-0 transition-all duration-300"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleRetry}
            className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/25 focus:ring-2 focus:ring-amber-400/50 focus:outline-none flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Retry Task
          </button>

          <div className="flex gap-2">
            <button className="flex-1 bg-red-700/60 hover:bg-red-700/80 text-red-100 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 border border-red-600/40 hover:border-red-500/60">
              Archive
            </button>
            <button className="flex-1 bg-red-700/60 hover:bg-red-700/80 text-red-100 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 border border-red-600/40 hover:border-red-500/60">
              Details
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-red-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-red-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}

export default FailedTask

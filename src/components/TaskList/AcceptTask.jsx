"use client"

import { Clock, Calendar, Tag, CheckCircle, XCircle, Play, Pause } from "lucide-react"

const AcceptTask = ({ data }) => {
  const handleMarkCompleted = () => {
    // Handle mark as completed logic
    console.log("Marking task as completed:", data.taskTitle)
  }

  const handleMarkFailed = () => {
    // Handle mark as failed logic
    console.log("Marking task as failed:", data.taskTitle)
  }

  const handlePauseTask = () => {
    // Handle pause task logic
    console.log("Pausing task:", data.taskTitle)
  }

  const formatDate = (dateString) => {
    if (!dateString) return "No date"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  // Simulate progress (you can replace this with actual progress data)
  const progress = 65

  return (
    <div className="flex-shrink-0 h-full w-[280px] sm:w-[300px] lg:w-[320px] group">
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-amber-500/90 to-amber-600/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-amber-400/30 shadow-lg hover:shadow-xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Status Indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-t-2xl"></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-amber-100" />
            <span className="bg-amber-700/60 text-amber-100 text-xs font-medium px-3 py-1.5 rounded-lg border border-amber-600/40">
              {data.category || "General"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-amber-100/80 text-xs">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(data.taskDate)}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 bg-amber-700/60 px-3 py-1.5 rounded-lg border border-amber-600/40">
            <Clock className="w-4 h-4 text-amber-200 animate-pulse" />
            <span className="text-amber-100 text-xs font-semibold">IN PROGRESS</span>
          </div>
          <div className="flex items-center gap-1 text-amber-200/70 text-xs">
            <Play className="w-3 h-3" />
            <span>Active</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-amber-50 mb-3 line-clamp-2 group-hover:text-white transition-colors duration-200">
            {data.taskTitle || "Untitled Task"}
          </h2>
          <p className="text-amber-100/90 text-sm leading-relaxed line-clamp-3">
            {data.taskDescription || "No description available for this task."}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-amber-200/80 text-xs font-medium">Progress</span>
            <span className="text-amber-200/80 text-xs">{progress}%</span>
          </div>
          <div className="w-full bg-amber-700/40 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-amber-300 to-amber-200 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Time Tracking */}
        <div className="mb-4 bg-amber-700/30 rounded-lg p-3 border border-amber-600/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-200" />
              <span className="text-amber-100 text-xs font-medium">Time Spent</span>
            </div>
            <span className="text-amber-100 text-xs font-bold">2h 30m</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <button
              onClick={handleMarkCompleted}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25 focus:ring-2 focus:ring-emerald-400/50 focus:outline-none flex items-center justify-center gap-1"
            >
              <CheckCircle className="w-3 h-3" />
              Complete
            </button>
            <button
              onClick={handleMarkFailed}
              className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/25 focus:ring-2 focus:ring-red-400/50 focus:outline-none flex items-center justify-center gap-1"
            >
              <XCircle className="w-3 h-3" />
              Failed
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handlePauseTask}
              className="flex-1 bg-amber-700/60 hover:bg-amber-700/80 text-amber-100 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 border border-amber-600/40 hover:border-amber-500/60 flex items-center justify-center gap-1"
            >
              <Pause className="w-3 h-3" />
              Pause
            </button>
            <button className="flex-1 bg-amber-700/60 hover:bg-amber-700/80 text-amber-100 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 border border-amber-600/40 hover:border-amber-500/60">
              Details
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}

export default AcceptTask

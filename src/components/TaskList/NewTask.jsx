"use client"

import { Plus, Calendar, Tag, Clock, Play } from "lucide-react"

const NewTask = ({ data }) => {
  const handleAcceptTask = () => {
    // Handle accept task logic
    console.log("Accepting task:", data.taskTitle)
  }

  const handleViewDetails = () => {
    // Handle view details logic
    console.log("Viewing details for:", data.taskTitle)
  }

  const formatDate = (dateString) => {
    if (!dateString) return "No date"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const getPriorityColor = (category) => {
    const colors = {
      urgent: "from-red-500 to-red-600",
      high: "from-orange-500 to-orange-600",
      medium: "from-yellow-500 to-yellow-600",
      low: "from-green-500 to-green-600",
      default: "from-blue-500 to-blue-600",
    }
    return colors[category?.toLowerCase()] || colors.default
  }

  return (
    <div className="flex-shrink-0 h-full w-[280px] sm:w-[300px] lg:w-[320px] group">
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-blue-500/90 to-blue-600/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-blue-400/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Status Indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-t-2xl"></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-blue-100" />
            <span
              className={`bg-gradient-to-r ${getPriorityColor(data.category)} text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm`}
            >
              {data.category || "General"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-blue-100/80 text-xs">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(data.taskDate)}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 bg-blue-700/60 px-3 py-1.5 rounded-lg border border-blue-600/40">
            <Plus className="w-4 h-4 text-blue-200" />
            <span className="text-blue-100 text-xs font-semibold">NEW TASK</span>
          </div>
          <div className="flex items-center gap-1 text-blue-200/70 text-xs">
            <Clock className="w-3 h-3" />
            <span>Pending</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-50 mb-3 line-clamp-2 group-hover:text-white transition-colors duration-200">
            {data.taskTitle || "Untitled Task"}
          </h2>
          <p className="text-blue-100/90 text-sm leading-relaxed line-clamp-3">
            {data.taskDescription || "No description available for this task."}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-blue-200/80 text-xs font-medium">Ready to start</span>
            <span className="text-blue-200/80 text-xs">0%</span>
          </div>
          <div className="w-full bg-blue-700/40 rounded-full h-1.5">
            <div className="bg-blue-300/60 h-1.5 rounded-full w-0 transition-all duration-300"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleAcceptTask}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25 focus:ring-2 focus:ring-emerald-400/50 focus:outline-none flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4" />
            Accept Task
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleViewDetails}
              className="flex-1 bg-blue-700/60 hover:bg-blue-700/80 text-blue-100 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 border border-blue-600/40 hover:border-blue-500/60"
            >
              Details
            </button>
            <button className="flex-1 bg-blue-700/60 hover:bg-blue-700/80 text-blue-100 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 border border-blue-600/40 hover:border-blue-500/60">
              Later
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}

export default NewTask

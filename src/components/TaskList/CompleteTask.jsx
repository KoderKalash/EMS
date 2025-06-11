"use client"

import { CheckCircle, Calendar, Tag, Trophy, Star } from "lucide-react"

const CompleteTask = ({ data }) => {
  const handleViewDetails = () => {
    // Handle view details logic
    console.log("Viewing details for completed task:", data.taskTitle)
  }

  const handleArchive = () => {
    // Handle archive logic
    console.log("Archiving task:", data.taskTitle)
  }

  const formatDate = (dateString) => {
    if (!dateString) return "No date"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  return (
    <div className="flex-shrink-0 h-full w-[280px] sm:w-[300px] lg:w-[320px] group">
      {/* Main Card */}
      <div className="relative bg-gradient-to-br from-emerald-500/90 to-emerald-600/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-emerald-400/30 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
        {/* Status Indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-t-2xl"></div>

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-100" />
            <span className="bg-emerald-700/60 text-emerald-100 text-xs font-medium px-3 py-1.5 rounded-lg border border-emerald-600/40">
              {data.category || "General"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-emerald-100/80 text-xs">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(data.taskDate)}</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 bg-emerald-700/60 px-3 py-1.5 rounded-lg border border-emerald-600/40">
            <CheckCircle className="w-4 h-4 text-emerald-200" />
            <span className="text-emerald-100 text-xs font-semibold">COMPLETED</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-200/70 text-xs">
            <Trophy className="w-3 h-3" />
            <span>Well done!</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-50 mb-3 line-clamp-2 group-hover:text-white transition-colors duration-200">
            {data.taskTitle || "Untitled Task"}
          </h2>
          <p className="text-emerald-100/90 text-sm leading-relaxed line-clamp-3">
            {data.taskDescription || "No description available for this task."}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-emerald-200/80 text-xs font-medium">Progress</span>
            <span className="text-emerald-200/80 text-xs">100%</span>
          </div>
          <div className="w-full bg-emerald-700/40 rounded-full h-1.5">
            <div className="bg-emerald-300/80 h-1.5 rounded-full w-full transition-all duration-300"></div>
          </div>
        </div>

        {/* Completion Stats */}
        <div className="mb-4 bg-emerald-700/30 rounded-lg p-3 border border-emerald-600/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-emerald-200" />
              <span className="text-emerald-100 text-xs font-medium">Task Rating</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3 h-3 text-emerald-300 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <div className="flex gap-2">
            <button
              onClick={handleViewDetails}
              className="flex-1 bg-emerald-700/60 hover:bg-emerald-700/80 text-emerald-100 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 border border-emerald-600/40 hover:border-emerald-500/60"
            >
              View Details
            </button>
            <button
              onClick={handleArchive}
              className="flex-1 bg-emerald-700/60 hover:bg-emerald-700/80 text-emerald-100 py-2 px-3 rounded-lg font-medium text-xs transition-all duration-200 border border-emerald-600/40 hover:border-emerald-500/60"
            >
              Archive
            </button>
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg font-medium text-xs transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 focus:ring-2 focus:ring-blue-400/50 focus:outline-none">
            Create Similar Task
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-4 left-4 w-6 h-6 bg-emerald-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  )
}

export default CompleteTask

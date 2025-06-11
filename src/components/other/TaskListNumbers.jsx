"use client"

import { Plus, CheckCircle, Clock, XCircle, TrendingUp, TrendingDown } from "lucide-react"

const TaskListNumbers = ({ data }) => {
  const taskStats = [
    {
      id: "new",
      title: "New Tasks",
      count: data.taskCounts.newTask,
      icon: Plus,
      bgColor: "from-blue-500 to-blue-600",
      borderColor: "border-blue-400/30",
      iconColor: "text-blue-100",
      textColor: "text-blue-50",
      shadowColor: "shadow-blue-500/25",
      trend: "+12%",
    },
    {
      id: "completed",
      title: "Completed",
      count: data.taskCounts.completed,
      icon: CheckCircle,
      bgColor: "from-emerald-500 to-emerald-600",
      borderColor: "border-emerald-400/30",
      iconColor: "text-emerald-100",
      textColor: "text-emerald-50",
      shadowColor: "shadow-emerald-500/25",
      trend: "+8%",
    },
    {
      id: "active",
      title: "In Progress",
      count: data.taskCounts.active,
      icon: Clock,
      bgColor: "from-amber-500 to-amber-600",
      borderColor: "border-amber-400/30",
      iconColor: "text-amber-100",
      textColor: "text-amber-50",
      shadowColor: "shadow-amber-500/25",
      trend: "+5%",
    },
    {
      id: "failed",
      title: "Failed",
      count: data.taskCounts.failed,
      icon: XCircle,
      bgColor: "from-red-500 to-red-600",
      borderColor: "border-red-400/30",
      iconColor: "text-red-100",
      textColor: "text-red-50",
      shadowColor: "shadow-red-500/25",
      trend: "-3%",
    },
  ]

  return (
    <div className="mt-6 md:mt-10">
      {/* Mobile Layout - 2x2 Grid */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
        {taskStats.map((stat) => {
          const IconComponent = stat.icon
          return (
            <div
              key={stat.id}
              className={`relative bg-gradient-to-br ${stat.bgColor} rounded-xl p-4 border ${stat.borderColor} shadow-lg hover:shadow-xl hover:${stat.shadowColor} transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <IconComponent className={`w-4 h-4 ${stat.iconColor}`} />
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-white/80">
                  {stat.trend.startsWith("+") ? (
                    <TrendingUp className="w-3 h-3" />
                  ) : (
                    <TrendingDown className="w-3 h-3" />
                  )}
                  <span>{stat.trend}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className={`text-2xl font-bold ${stat.textColor} mb-1`}>{stat.count}</h2>
                <h3 className={`text-sm font-medium ${stat.textColor}/90`}>{stat.title}</h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-white/5 rounded-full translate-y-6 -translate-x-6"></div>
            </div>
          )
        })}
      </div>

      {/* Tablet Layout - 2x2 Grid with larger cards */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 xl:gap-6">
        {taskStats.map((stat) => {
          const IconComponent = stat.icon
          return (
            <div
              key={stat.id}
              className={`relative bg-gradient-to-br ${stat.bgColor} rounded-2xl p-6 border ${stat.borderColor} shadow-lg hover:shadow-xl hover:${stat.shadowColor} transition-all duration-300 transform hover:-translate-y-1`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <IconComponent className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-white/80">
                  {stat.trend.startsWith("+") ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{stat.trend}</span>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className={`text-3xl font-bold ${stat.textColor} mb-2`}>{stat.count}</h2>
                <h3 className={`text-lg font-medium ${stat.textColor}/90`}>{stat.title}</h3>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full bg-white/10 rounded-full h-1.5">
                <div
                  className="bg-white/30 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min((stat.count / 10) * 100, 100)}%` }}
                ></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>
            </div>
          )
        })}
      </div>

      {/* Desktop Layout - Single Row */}
      <div className="hidden lg:flex justify-between gap-4 xl:gap-6">
        {taskStats.map((stat) => {
          const IconComponent = stat.icon
          return (
            <div
              key={stat.id}
              className={`relative flex-1 bg-gradient-to-br ${stat.bgColor} rounded-2xl p-6 xl:p-8 border ${stat.borderColor} shadow-lg hover:shadow-xl hover:${stat.shadowColor} transition-all duration-300 transform hover:-translate-y-1 group`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                  <IconComponent className={`w-6 h-6 xl:w-7 xl:h-7 ${stat.iconColor}`} />
                </div>
                <div className="flex items-center gap-1 text-sm font-medium text-white/80">
                  {stat.trend.startsWith("+") ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{stat.trend}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h2 className={`text-3xl xl:text-4xl font-bold ${stat.textColor} mb-2`}>{stat.count}</h2>
                <h3 className={`text-lg xl:text-xl font-medium ${stat.textColor}/90`}>{stat.title}</h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-white/30 h-2 rounded-full transition-all duration-500 group-hover:bg-white/40"
                  style={{ width: `${Math.min((stat.count / 10) * 100, 100)}%` }}
                ></div>
              </div>

              {/* Additional Info */}
              <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                <span>This month</span>
                <span className="font-medium">{stat.count > 0 ? "Active" : "No tasks"}</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12 group-hover:bg-white/10 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10 group-hover:bg-white/10 transition-colors duration-300"></div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TaskListNumbers

"use client"

import { useContext } from "react"
import { AuthContext } from "../../context/AuthProvider"
import { User, Clock, CheckCircle, XCircle, Plus } from "lucide-react"

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl mt-4 md:mt-6 border border-slate-700/50 shadow-2xl">
      {/* Desktop Header - Hidden on mobile */}
      <div className="hidden lg:flex bg-gradient-to-r from-slate-800 to-slate-700 mb-4 py-4 px-6 justify-between items-center rounded-xl border border-slate-600/30 shadow-lg">
        <div className="flex items-center gap-2 w-1/5">
          <User className="w-5 h-5 text-slate-300" />
          <h2 className="text-lg font-semibold text-slate-100">Employee</h2>
        </div>
        <div className="flex items-center gap-2 w-1/5 justify-center">
          <Plus className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-slate-100">New Tasks</h3>
        </div>
        <div className="flex items-center gap-2 w-1/5 justify-center">
          <Clock className="w-5 h-5 text-amber-400" />
          <h5 className="text-lg font-semibold text-slate-100">Active</h5>
        </div>
        <div className="flex items-center gap-2 w-1/5 justify-center">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <h5 className="text-lg font-semibold text-slate-100">Completed</h5>
        </div>
        <div className="flex items-center gap-2 w-1/5 justify-center">
          <XCircle className="w-5 h-5 text-red-400" />
          <h5 className="text-lg font-semibold text-slate-100">Failed</h5>
        </div>
      </div>

      {/* Mobile/Tablet Header */}
      <div className="lg:hidden mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 mb-2">Team Overview</h2>
        <p className="text-slate-400 text-sm">Task statistics for all employees</p>
      </div>

      {/* Data Rows */}
      <div className="space-y-3">
        {userData.map((elem, idx) => (
          <div key={idx}>
            {/* Desktop Layout */}
            <div className="hidden lg:flex bg-slate-800/60 hover:bg-slate-800/80 transition-all duration-300 border border-slate-600/40 hover:border-slate-500/60 py-4 px-6 justify-between items-center rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <div className="w-1/5">
                <h2 className="text-lg font-medium text-slate-100 flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {elem.firstName.charAt(0).toUpperCase()}
                  </div>
                  {elem.firstName}
                </h2>
              </div>

              <div className="w-1/5 flex justify-center">
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg px-3 py-1.5 min-w-[60px] text-center">
                  <h3 className="text-lg font-semibold text-blue-300">{elem.taskCounts.newTask}</h3>
                </div>
              </div>

              <div className="w-1/5 flex justify-center">
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg px-3 py-1.5 min-w-[60px] text-center">
                  <h5 className="text-lg font-semibold text-amber-300">{elem.taskCounts.active}</h5>
                </div>
              </div>

              <div className="w-1/5 flex justify-center">
                <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg px-3 py-1.5 min-w-[60px] text-center">
                  <h5 className="text-lg font-semibold text-emerald-300">{elem.taskCounts.completed}</h5>
                </div>
              </div>

              <div className="w-1/5 flex justify-center">
                <div className="bg-red-500/20 border border-red-400/30 rounded-lg px-3 py-1.5 min-w-[60px] text-center">
                  <h5 className="text-lg font-semibold text-red-300">{elem.taskCounts.failed}</h5>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden bg-slate-800/60 border border-slate-600/40 rounded-xl shadow-lg p-4 sm:p-5">
              {/* Employee Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm sm:text-base font-bold">
                  {elem.firstName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-slate-100">{elem.firstName}</h2>
                  <p className="text-slate-400 text-xs sm:text-sm">Employee</p>
                </div>
              </div>

              {/* Task Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm text-blue-300 font-medium">New</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-blue-300">{elem.taskCounts.newTask}</div>
                </div>

                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" />
                    <span className="text-xs sm:text-sm text-amber-300 font-medium">Active</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-amber-300">{elem.taskCounts.active}</div>
                </div>

                <div className="bg-emerald-500/20 border border-emerald-400/30 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                    <span className="text-xs sm:text-sm text-emerald-300 font-medium">Done</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-300">{elem.taskCounts.completed}</div>
                </div>

                <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <XCircle className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
                    <span className="text-xs sm:text-sm text-red-300 font-medium">Failed</span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-red-300">{elem.taskCounts.failed}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllTask

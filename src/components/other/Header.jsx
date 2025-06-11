"use client"

import { useState, useEffect } from "react"
import { getLocalStorage } from "../../utils/localStorage"
import { LogOut, User, Crown } from "lucide-react"

const Header = (props) => {
  const [username, setUsername] = useState("User")
  const [isAdmin, setIsAdmin] = useState(false)
  const { employees } = getLocalStorage()

  useEffect(() => {
    if (!employees) {
      setUsername("Admin")
      setIsAdmin(true)
    } else {
      setUsername(employees[0].firstName)
      setIsAdmin(false)
    }
  }, [employees])

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "")
    props.changeUser("")
    // window.location.reload()
  }

  const getCurrentTime = () => {
    const now = new Date()
    const hours = now.getHours()
    if (hours < 12) return "Good Morning"
    if (hours < 17) return "Good Afternoon"
    return "Good Evening"
  }

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl md:rounded-2xl border border-slate-700/50 shadow-2xl">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="flex items-center justify-between mb-4">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                {isAdmin ? <Crown className="w-6 h-6 text-white" /> : <User className="w-6 h-6 text-white" />}
              </div>
              {isAdmin && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="w-2.5 h-2.5 text-white" />
                </div>
              )}
            </div>
            <div>
              <p className="text-slate-400 text-xs font-medium">{getCurrentTime()}</p>
              <h1 className="text-lg font-bold text-slate-100">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {username}
                </span>{" "}
                <span className="text-lg">👋</span>
              </h1>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={logOutUser}
            className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden xs:inline">Log Out</span>
          </button>
        </div>

        {/* Status Bar */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>{isAdmin ? "Admin" : "Employee"}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
              <span>Online</span>
            </div>
          </div>
          <div className="text-slate-500">
            {new Date().toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:flex lg:hidden items-center justify-between">
        {/* Welcome Section */}
        <div className="flex items-center gap-4">
          {/* User Avatar */}
          <div className="relative">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              {isAdmin ? <Crown className="w-7 h-7 text-white" /> : <User className="w-7 h-7 text-white" />}
            </div>
            {isAdmin && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                <Crown className="w-2.5 h-2.5 text-white" />
              </div>
            )}
          </div>

          {/* Welcome Text */}
          <div className="space-y-1">
            <p className="text-slate-400 text-sm font-medium">{getCurrentTime()}</p>
            <h1 className="text-xl font-bold text-slate-100">
              Welcome back,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {username}
              </span>{" "}
              <span className="text-xl">👋</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <p className="text-slate-500 text-xs">{isAdmin ? "Administrator Access" : "Employee Dashboard"}</p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={logOutUser}
          className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/25 focus:ring-2 focus:ring-red-400/50 focus:outline-none flex items-center gap-2"
        >
          <LogOut className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          Log Out
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between">
          {/* Welcome Section */}
          <div className="flex items-center gap-4">
            {/* User Avatar */}
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                {isAdmin ? <Crown className="w-8 h-8 text-white" /> : <User className="w-8 h-8 text-white" />}
              </div>
              {isAdmin && (
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Crown className="w-3 h-3 text-white" />
                </div>
              )}
            </div>

            {/* Welcome Text */}
            <div className="space-y-1">
              <p className="text-slate-400 text-sm font-medium">{getCurrentTime()}</p>
              <h1 className="text-2xl font-bold text-slate-100">
                Welcome back,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {username}
                </span>{" "}
                <span className="text-2xl">👋</span>
              </h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <p className="text-slate-500 text-xs">{isAdmin ? "Administrator Access" : "Employee Dashboard"}</p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Status Indicator */}
            <div className="flex items-center gap-2 bg-slate-800/60 px-4 py-2 rounded-xl border border-slate-600/40">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">Online</span>
            </div>

            {/* Logout Button */}
            <button
              onClick={logOutUser}
              className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/25 focus:ring-2 focus:ring-red-400/50 focus:outline-none flex items-center gap-2"
            >
              <LogOut className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              Log Out
            </button>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-6 pt-4 border-t border-slate-700/50">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                <span>Last login: Today</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                <span>Status: Active</span>
              </div>
            </div>
            <div className="text-slate-500">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

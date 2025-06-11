"use client"

import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthProvider"
import { Plus, Calendar, User, Tag, FileText, Send } from "lucide-react"

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [asignTo, setAsignTo] = useState("")
  const [category, setCategory] = useState("")

  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    })

    const data = userData

    data.forEach((elem) => {
      if (asignTo == elem.firstName) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
    })
    setUserData(data)
    console.log(data)

    setTaskTitle("")
    setCategory("")
    setAsignTo("")
    setTaskDate("")
    setTaskDescription("")
  }

  return (
    <div className="bg-slate-900/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 mt-4 md:mt-6 rounded-xl md:rounded-2xl border border-slate-700/50 shadow-2xl">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-100">Create New Task</h2>
        </div>
        <p className="text-slate-400 text-sm">Fill in the details below to create a new task for your team</p>
      </div>

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className="space-y-6"
      >
        {/* Mobile/Tablet: Single Column Layout */}
        <div className="lg:hidden space-y-6">
          {/* Task Title */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <FileText className="w-4 h-4 text-blue-400" />
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value)
              }}
              className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-blue-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-blue-400/20"
              type="text"
              placeholder="Make a UI design"
              required
            />
          </div>

          {/* Date and Assign To - Side by side on larger mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <Calendar className="w-4 h-4 text-amber-400" />
                Due Date
              </label>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value)
                }}
                className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 focus:border-amber-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-amber-400/20"
                type="date"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <User className="w-4 h-4 text-emerald-400" />
                Assign To
              </label>
              <input
                value={asignTo}
                onChange={(e) => {
                  setAsignTo(e.target.value)
                }}
                className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-emerald-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-emerald-400/20"
                type="text"
                placeholder="Employee name"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <Tag className="w-4 h-4 text-purple-400" />
              Category
            </label>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value)
              }}
              className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-purple-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-purple-400/20"
              type="text"
              placeholder="design, dev, etc"
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <FileText className="w-4 h-4 text-slate-400" />
              Task Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value)
              }}
              className="w-full h-32 sm:h-40 text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-slate-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-slate-400/20 resize-none"
              placeholder="Describe the task in detail..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 py-3 sm:py-4 px-6 rounded-xl text-sm font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25 focus:ring-2 focus:ring-emerald-400/50 focus:outline-none flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Create Task
          </button>
        </div>

        {/* Desktop: Two Column Layout */}
        <div className="hidden lg:flex w-full items-start justify-between gap-8">
          {/* Left Column */}
          <div className="w-[45%] space-y-6">
            {/* Task Title */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <FileText className="w-4 h-4 text-blue-400" />
                Task Title
              </label>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value)
                }}
                className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-blue-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-blue-400/20"
                type="text"
                placeholder="Make a UI design"
                required
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <Calendar className="w-4 h-4 text-amber-400" />
                Due Date
              </label>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value)
                }}
                className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 focus:border-amber-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-amber-400/20"
                type="date"
                required
              />
            </div>

            {/* Assign To */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <User className="w-4 h-4 text-emerald-400" />
                Assign To
              </label>
              <input
                value={asignTo}
                onChange={(e) => {
                  setAsignTo(e.target.value)
                }}
                className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-emerald-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-emerald-400/20"
                type="text"
                placeholder="Employee name"
                required
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <Tag className="w-4 h-4 text-purple-400" />
                Category
              </label>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value)
                }}
                className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-purple-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-purple-400/20"
                type="text"
                placeholder="design, dev, etc"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[45%] space-y-6">
            {/* Description */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <FileText className="w-4 h-4 text-slate-400" />
                Task Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value)
                }}
                className="w-full h-48 text-sm py-3 px-4 rounded-xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-slate-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-slate-400/20 resize-none"
                placeholder="Describe the task in detail..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 py-4 px-6 rounded-xl text-sm font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25 focus:ring-2 focus:ring-emerald-400/50 focus:outline-none flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateTask

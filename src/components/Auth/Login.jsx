"use client"

import { useState } from "react"
import { Mail, Lock, LogIn, Shield, Eye, EyeOff } from "lucide-react"

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate loading delay
        setTimeout(() => {
            handleLogin(email, password)
            setEmail("")
            setPassword("")
            setIsLoading(false)
        }, 1000)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23334155%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>


            {/* Login Container */}
            <div className="relative w-full max-w-md">
                {/* Main Login Card */}
                <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                    {/* Header */}
                    <div className="text-center mb-8 sm:mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-lg">
                            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                        </div>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100 mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-slate-400 text-sm sm:text-base">
                            Sign in to access your dashboard
                        </p>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={submitHandler} className="space-y-6">
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                <Mail className="w-4 h-4 text-emerald-400" />
                                Email Address
                            </label>
                            <div className="relative">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 pl-12 sm:pl-14 rounded-xl sm:rounded-2xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-emerald-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-emerald-400/20"
                                    type="email"
                                    placeholder="Enter your email"
                                />
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-300 mb-2">
                                <Lock className="w-4 h-4 text-emerald-400" />
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 pl-12 sm:pl-14 pr-12 sm:pr-14 rounded-xl sm:rounded-2xl outline-none bg-slate-800/60 border border-slate-600/40 text-slate-100 placeholder-slate-400 focus:border-emerald-400/60 focus:bg-slate-800/80 transition-all duration-300 focus:ring-2 focus:ring-emerald-400/20"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                />
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300 transition-colors duration-200"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                                    ) : (
                                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-400/20 focus:ring-2"
                                />
                                <span>Remember me</span>
                            </label>
                            <button
                                type="button"
                                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium"
                            >
                                Forgot password?
                            </button>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 disabled:from-emerald-500/50 disabled:to-emerald-600/50 text-white py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/25 focus:ring-2 focus:ring-emerald-400/50 focus:outline-none flex items-center justify-center gap-2 disabled:transform-none disabled:shadow-none"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Signing in...
                                </>
                            ) : (
                                <>
                                    <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Sign In
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 sm:my-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-700/50"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-slate-900/80 text-slate-400">Or continue with</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Login Buttons */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 border border-slate-600/40 rounded-xl sm:rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 text-slate-300 hover:text-slate-100 transition-all duration-300 text-sm font-medium"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <span className="hidden sm:inline">Google</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 border border-slate-600/40 rounded-xl sm:rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 text-slate-300 hover:text-slate-100 transition-all duration-300 text-sm font-medium"
                        >
                            <svg
                                className="w-4 h-4 sm:w-5 sm:h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.432c.6.111.82-.261.82-.577v-2.262c-3.338.726-4.033-1.612-4.033-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.47-2.382 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 016.006 0c2.29-1.552 3.296-1.23 3.296-1.23.655 1.652.243 2.873.12 3.176.77.839 1.234 1.91 1.234 3.221 0 4.61-2.807 5.624-5.48 5.921.43.37.814 1.102.814 2.222v3.293c0 .319.218.694.825.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z"
                                    clipRule="evenodd"
                                />
                            </svg>

                            <span className="hidden sm:inline">GitHub</span>
                        </button>
                    </div>

                    {/* Footer */}
                    <div className="mt-6 sm:mt-8 text-center">
                        <p className="text-slate-400 text-sm">
                            Don't have an account?{" "}
                            <button className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 font-medium">
                                Sign up here
                            </button>
                        </p>
                    </div>
                </div>

                {/* Security Badge */}
                <div className="mt-4 sm:mt-6 text-center">
                    <div className="inline-flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Your data is protected with enterprise-grade security</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

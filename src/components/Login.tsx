import React, { useState } from 'react';
import backgroundImage from '../assets/background.png';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div
            className="min-h-screen bg-[#0a0f12] text-white font-sans relative overflow-hidden flex items-center justify-center p-4 md:p-8 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="container mx-auto max-w-6xl z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 lg:pr-12">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#00d2b4] rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-xl font-bold tracking-tight">aps</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Expert level Cybersecurity <br />
                        in <span className="text-[#00d2b4]">hours</span> not weeks.
                    </h1>

                    <div className="space-y-6">
                        <p className="text-lg font-medium text-gray-300">What's included</p>
                        <ul className="space-y-4">
                            {[
                                "Effortlessly spider and map targets to uncover hidden security flaws",
                                "Deliver high-quality, validated findings in hours, not weeks.",
                                "Generate professional, enterprise-grade security reports automatically."
                            ].map((text, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0">
                                        <svg className="w-5 h-5 text-[#00d2b4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-8 border-t border-gray-800 space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="text-green-500 font-bold">★ Trustpilot</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            <span className="text-white font-semibold">Rated 4.5/5.0</span> (100k+ reviews)
                        </p>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 w-full max-w-lg shadow-2xl">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign up</h2>
                            <p className="text-gray-500 text-sm">
                                Already have an account? <a href="#" className="text-[#00d2b4] font-semibold hover:underline">Log in</a>
                            </p>
                        </div>

                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First name*"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00d2b4] text-gray-900 transition-all"
                                />
                                <input
                                    type="text"
                                    placeholder="Last name*"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00d2b4] text-gray-900 transition-all"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Email address*"
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00d2b4] text-gray-900 transition-all"
                            />

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password (8+ characters)*"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00d2b4] text-gray-900 transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex items-start gap-3 py-2">
                                <input type="checkbox" id="terms" className="mt-1 accent-[#00d2b4]" />
                                <label htmlFor="terms" className="text-gray-500 text-xs leading-relaxed">
                                    I agree to Aps's <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                                </label>
                            </div>

                            <button className="w-full bg-[#00d2b4] hover:bg-[#00b99e] text-white font-bold py-4 rounded-full transition-colors shadow-lg">
                                Create account
                            </button>

                            <div className="flex items-center justify-between gap-4 pt-6">
                                <button type="button" className="flex-1 flex justify-center py-3 bg-black rounded-full hover:bg-gray-900 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.67-1.48 3.671-2.948 1.156-1.688 1.637-3.325 1.663-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.619-2.324-4.39-2.376-2-.356-3.3.41-4.299.41zM11.3 5.306c.896-1.084 1.51-2.583 1.343-4.08-.135-.045-1.64.48-2.618 1.61-.871 1-1.488 2.559-1.303 4.014 1.701.129 2.59-1.544 2.578-1.544z" />
                                    </svg>
                                </button>
                                <button type="button" className="flex-1 flex justify-center py-3 bg-[#f8f9fa] border border-gray-200 rounded-full hover:bg-gray-100 transition-colors">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                </button>
                                <button type="button" className="flex-1 flex justify-center py-3 bg-[#4267b2] rounded-full hover:bg-[#365899] transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

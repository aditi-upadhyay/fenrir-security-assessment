import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface Toast {
    id: string;
    message: string;
    type: ToastType;
}

interface ToastContextType {
    showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, []);

    const showToast = useCallback((message: string, type: ToastType = 'success') => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, type }]);

        // Auto-dismiss after 3 seconds
        setTimeout(() => {
            removeToast(id);
        }, 3000);
    }, [removeToast]);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {/* Toast Container */}
            <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
                {toasts.map((toast) => (
                    <ToastComponent
                        key={toast.id}
                        message={toast.message}
                        type={toast.type}
                        onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastComponent: React.FC<{ message: string; type: ToastType; onClose: () => void }> = ({ message, type, onClose }) => {
    const styles = {
        success: {
            bg: 'bg-white dark:bg-gray-900',
            border: 'border-green-500',
            icon: <CheckCircle size={18} className="text-green-500" />
        },
        error: {
            bg: 'bg-white dark:bg-gray-900',
            border: 'border-red-500',
            icon: <AlertCircle size={18} className="text-red-500" />
        },
        info: {
            bg: 'bg-white dark:bg-gray-900',
            border: 'border-blue-500',
            icon: <Info size={18} className="text-blue-500" />
        }
    }[type];

    return (
        <div className={`
            ${styles.bg} ${styles.border} border-l-4 text-gray-800 dark:text-gray-100 px-4 py-4 rounded-md shadow-xl 
            flex items-center gap-4 animate-slide-up pointer-events-auto
            min-w-[320px] max-w-md transition-all duration-300
        `}>
            <div className="shrink-0">{styles.icon}</div>
            <span className="flex-1 text-xs font-bold tracking-wide leading-relaxed">{message}</span>
            <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors p-1"
            >
                <X size={16} />
            </button>
        </div>
    );
};

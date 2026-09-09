import { AlertTriangle, X } from "lucide-react";

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message?: string;
    confirmText?: string;
}

export default function ConfirmModal({
    isOpen,
    onClose,
    onConfirm,
    title = "Clear all data?",
    message = "Are you sure you want to perform this action? This cannot be undone.",
    confirmText = "Clear Data",
}: ConfirmModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs transition-opacity">
            <div className="w-full max-w-sm bg-white rounded-2xl p-6 border border-rose-100 shadow-xl flex flex-col gap-4 animate-in fade-in zoom-in-95 duration-150">

                <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                            <AlertTriangle className="w-5 h-5" />
                        </div>
                        <h2 className="text-lg font-bold text-slate-900 leading-snug">
                            {title}
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>


                <p className="text-sm text-slate-600 leading-relaxed">
                    {message}
                </p>

                <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                        className="px-4 py-2 text-xs font-semibold text-white bg-rose-500 hover:bg-rose-600 active:scale-95 rounded-lg transition-all duration-150 cursor-pointer shadow-xs"
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
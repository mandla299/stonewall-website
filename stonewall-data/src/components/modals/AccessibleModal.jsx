
import React, { useEffect, useRef, useState, useId } from 'react';
import { X } from 'lucide-react';

/**
 * AccessibleModal — content-only modal dialog (no backdrop here).
 * The backdrop and positioning are handled by the parent (Navbar overlay).
 *
 * Props:
 * - title: string (required)
 * - description: string (optional, short summary for screen readers)
 * - onClose: function (required)
 * - children: modal body content
 *
 * Behavior:
 * - Focus trap inside the dialog
 * - Esc to close
 * - Restores focus to previously focused element on unmount
 * - Mount animation (fade + translate)
 */
const AccessibleModal = ({ title, description, onClose, children }) => {
  const dialogRef = useRef(null);
  const closeBtnRef = useRef(null);
  const prevFocusedRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const titleId = useId();

  // Setup focus management
  useEffect(() => {
    prevFocusedRef.current = document.activeElement;
    // Allow transition to kick in after mount
    const t = setTimeout(() => {
      setMounted(true);
      // Focus close button as an obvious starting point for keyboard users
      closeBtnRef.current?.focus();
    }, 10);

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose?.();
      } else if (e.key === 'Tab') {
        // Trap focus in the dialog
        const focusableSelectors = [
          'a[href]',
          'button:not([disabled])',
          'textarea',
          'input',
          'select',
          '[tabindex]:not([tabindex="-1"])',
        ].join(',');
        const focusables = dialogRef.current?.querySelectorAll(focusableSelectors);
        const list = focusables ? Array.from(focusables) : [];
        if (list.length === 0) return;

        const first = list[0];
        const last = list[list.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKeyDown);
      // Restore focus to previously focused element
      prevFocusedRef.current && prevFocusedRef.current.focus?.();
    };
  }, [onClose]);

  return (
    <section
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={description ? `${titleId}-desc` : undefined}
      className={`relative w-full max-w-5xl mx-auto rounded-xl bg-white shadow-xl ring-1 ring-black/5
                  transition-all duration-200
                  ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
      tabIndex={-1}
    >
      {/* Header */}
      <div className="flex items-start gap-3 px-5 sm:px-6 pt-5 sm:pt-6">
        <div className="flex-1">
          <h2
            id={titleId}
            className="text-lg sm:text-xl font-bold tracking-tight text-[#1e1b4b]"
          >
            {title}
          </h2>
          {description ? (
            <p id={`${titleId}-desc`} className="mt-1 text-sm text-gray-600">
              {description}
            </p>
          ) : null}
        </div>
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#1e1b4b] hover:text-[#ff7200] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7200]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Divider */}
      <hr className="mt-4 border-gray-100" />

      {/* Body */}
      <div className="px-5 sm:px-6 pb-6 sm:pb-7 pt-4">
        {children}
      </div>
    </section>
  );
};

export default AccessibleModal;

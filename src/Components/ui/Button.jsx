import React from "react";
import clsx from "clsx"; // utile pour combiner les classes

function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  // VARIANTES DE COULEURS
  const variants = {
    primary: "bg-slate-900 text-amber-50 hover:bg-slate-800",
    secondary: "bg-blue-900 text-white hover:bg-blue-800",
    light: "bg-white text-slate-900 border border-slate-300 hover:bg-slate-100",
    outline: "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
  };

  // TAILLES
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-7 py-3 text-lg",
    xl: "px-9 py-4 text-xl",
  };

  return (
    <button
      {...props}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full font-medium tracking-wide shadow-md hover:shadow-lg hover:-translate-y-[1px] active:scale-95 transition-all duration-200",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;

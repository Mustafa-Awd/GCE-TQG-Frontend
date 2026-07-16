function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-2xl border border-slate-700 px-8 py-4 hover:border-slate-500 transition ${className}`}
    >
      {children}
    </a>
  );
}

export default SecondaryButton;

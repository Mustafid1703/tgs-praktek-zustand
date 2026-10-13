export function Button({ className = '', variant = 'default', ...props }) {
  const variantClass = variant === 'outline'
    ? 'border border-slate-300 bg-white hover:bg-slate-100'
    : 'bg-slate-900 text-white hover:bg-slate-700'

  return (
    <button
      className={`inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${variantClass} ${className}`}
      {...props}
    />
  )
}
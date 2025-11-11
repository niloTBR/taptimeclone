const SectionTitle = ({ miniTitle, title, description, className = '' }) => {
  const isLeftAligned = className.includes('text-left')
  return (
    <div className={`${isLeftAligned ? 'text-left' : 'text-center'} space-y-6 ${className}`}>
      {miniTitle && (
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100">
          <span className="text-sm font-medium text-gray-700">
            {miniTitle}
          </span>
        </div>
      )}
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight" style={{fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif"}}>
          {title}
        </h2>
        {description && (
          <p className={`text-lg text-muted-foreground max-w-3xl leading-relaxed ${isLeftAligned ? '' : 'mx-auto'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SectionTitle
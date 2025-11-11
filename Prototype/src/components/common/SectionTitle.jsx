const SectionTitle = ({ miniTitle, title, description, className = '' }) => {
  const isLeftAligned = className.includes('text-left')
  return (
    <div className={`${isLeftAligned ? 'text-left' : 'text-center'} space-y-4 ${className}`}>
      {miniTitle && (
        <div className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
          {miniTitle}
        </div>
      )}
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight" style={{fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif"}}>
        {title}
      </h2>
      {description && (
        <p className={`text-muted-foreground max-w-2xl ${isLeftAligned ? '' : 'mx-auto'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
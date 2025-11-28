import { ChevronRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'

const PageHeader = ({ 
  title, 
  description, 
  breadcrumbs = [], 
  actions = null,
  className = '',
  size = 'default' // 'default' | 'large'
}) => {
  const sizeClasses = {
    default: 'py-16 pt-32',
    large: 'py-24 pt-48'
  }

  const titleClasses = {
    default: 'text-xl md:text-2xl',
    large: 'text-xl md:text-2xl'
  }

  return (
    <section className={`${sizeClasses[size]} px-4 bg-muted/30 ${className}`}>
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="flex items-center hover:text-foreground transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <ChevronRight className="w-4 h-4" />
                  {crumb.href ? (
                    <Link 
                      to={crumb.href}
                      className="hover:text-foreground transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground font-medium">{crumb.label}</span>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Content */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className={`${titleClasses[size]} font-semibold tracking-tight`}>
                {title}
              </h1>
              {description && (
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
            
            {/* Actions */}
            {actions && (
              <div className="pt-4">
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageHeader
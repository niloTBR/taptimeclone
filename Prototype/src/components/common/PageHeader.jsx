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
    <section className={`relative ${sizeClasses[size]} px-4 text-white ${className}`} style={{backgroundImage: "url('/yianni-mathioudakis-clhGuYYPJpE-unsplash.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
      <div className="absolute inset-0 bg-[#48768c]/80"></div>
      <div className="relative z-10">
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
              <h1 className={`${titleClasses[size]} font-semibold tracking-tight text-white`}>
                {title}
              </h1>
              {description && (
                <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed">
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
      </div>
    </section>
  )
}

export default PageHeader
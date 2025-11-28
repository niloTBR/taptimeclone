import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Users, UserCheck, Shield, Layout, Smartphone } from 'lucide-react'

const PrototypesPage = () => {
  const prototypes = [
    {
      category: 'Main Website',
      icon: Globe,
      items: [
        { name: 'Homepage', path: '/', description: 'Main landing page' }
      ]
    },
    {
      category: 'User',
      icon: Users,
      items: [
        { name: 'Onboarding', path: '/signup/user', description: 'User registration flow' },
        { name: 'User Dashboard', path: '/user/dashboard', description: 'User control panel' }
      ]
    },
    {
      category: 'Expert',
      icon: UserCheck,
      items: [
        { name: 'Onboarding', path: '/signup/expert', description: 'Expert application flow' }
      ]
    },
    {
      category: 'Admin Panel',
      icon: Shield,
      items: [
        { name: 'Admin Dashboard', path: '/admin/dashboard', description: 'Admin control panel' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Prototype Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prototypes.map((section, index) => {
            const Icon = section.icon
            return (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[#efffba] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg">{section.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.path}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm group-hover:text-black">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" />
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PrototypesPage
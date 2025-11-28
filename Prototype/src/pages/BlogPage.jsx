import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Calendar, User, ArrowRight, Clock, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import StandardPage from '@/components/layout/StandardPage'
import SectionTitle from '@/components/common/SectionTitle'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const featuredPost = {
    title: "From Stuck to Breakthrough: How 15 Minutes Changed Everything",
    excerpt: "Sarah had been trying to break into product management for months. One conversation with a Stripe PM gave her the exact framework she needed. Two months later, she landed her dream job.",
    author: "Success Stories",
    date: "January 20, 2025",
    category: "Success Story",
    readTime: "5 min read",
    image: "/api/placeholder/600/300"
  }

  const posts = [
    {
      title: "The Hidden Cost of Going It Alone",
      excerpt: "Why entrepreneurs waste months solving problems others have already conquered, and how 15 minutes can save you weeks of trial and error.",
      author: "Michael Chen",
      date: "January 18, 2025", 
      category: "Insights",
      readTime: "4 min read"
    },
    {
      title: "What Great Mentors Actually Do Differently",
      excerpt: "It's not about giving advice. The best mentors ask better questions, share specific frameworks, and help you see blind spots.",
      author: "Emily Rodriguez",
      date: "January 15, 2025",
      category: "Mentorship", 
      readTime: "6 min read"
    },
    {
      title: "Why Traditional Networking Events Don't Work",
      excerpt: "Stop collecting business cards. Start having focused conversations with people who've already solved your problems.",
      author: "David Kim",
      date: "January 12, 2025",
      category: "Insights",
      readTime: "3 min read"
    },
    {
      title: "The Questions That Unlock Everything",
      excerpt: "What to ask in your first 15 minutes with an expert to get maximum value. Plus: the one question that separates amateurs from pros.",
      author: "Lisa Thompson",
      date: "January 10, 2025",
      category: "How-to",
      readTime: "4 min read"
    },
    {
      title: "From Zero to Funded in 90 Days",
      excerpt: "How three TapTime sessions helped James pivot his startup idea and secure $2M in seed funding.",
      author: "Success Stories", 
      date: "January 8, 2025",
      category: "Success Story",
      readTime: "7 min read"
    },
    {
      title: "The Compound Effect of Expert Advice",
      excerpt: "Small insights compound over time. Why one good conversation is worth more than ten mediocre courses.",
      author: "Alex Park",
      date: "January 5, 2025", 
      category: "Insights",
      readTime: "5 min read"
    }
  ]

  const categories = ["All", "Success Story", "Insights", "Mentorship", "How-to"]

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const headerActions = (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button size="lg" className="rounded-full px-8 bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-lg" asChild>
        <Link to="/browse">
          Find Your Expert
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  )

  return (
    <StandardPage
      title="Stories, Insights & How-To's"
      description="Real stories from professionals who found their breakthrough moments"
      actions={headerActions}
      headerSize="large"
    >
      {/* Search Bar */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              className="pl-12 rounded-full border-2 border-muted-foreground/20 focus:border-foreground"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "rounded-full px-6 bg-[#efffba] text-black hover:bg-black hover:text-white transition-all" 
                  : "rounded-full px-6 border-2 border-black text-black bg-transparent hover:bg-black hover:text-white transition-all"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-gray-100 border-0 overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2 relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-[#efffba] text-black border-0">
                  Featured
                </Badge>
              </div>
              <div className="lg:col-span-3 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-semibold leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <Button className="w-fit rounded-full bg-[#efffba] text-black border border-[#efffba] hover:bg-black hover:text-white hover:border-black transition-all">
                    Read Story
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={index} className="bg-gray-100 border-0 hover:bg-gray-200 transition-colors cursor-pointer group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Footer Bar Style */}
      <div className="py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-[#efffba] rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2 text-black">
                  Get stories in your inbox
                </h3>
                <p className="text-sm text-black/70">
                  Weekly insights from people who've made it happen
                </p>
              </div>
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full border-2 border-black/20 focus:border-black bg-white"
                />
                <Button type="submit" className="rounded-full px-6 bg-[#081d34] text-white hover:bg-[#0a2040] transition-all">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StandardPage>
  )
}

export default BlogPage
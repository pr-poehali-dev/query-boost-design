import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-magenta-50 font-body">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/img/1e554d02-8fcf-4dc9-9739-fba49083c26e.jpg" 
              alt="QueryBoost Logo" 
              className="h-10 w-10 rounded-lg"
            />
            <div>
              <h1 className="text-xl font-heading font-bold text-gray-900">QueryBoost</h1>
              <p className="text-sm text-purple-600 font-medium">E-commerce optimization tool</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-700 hover:to-magenta-700">
            Join as Tester
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
            🚀 Optimize thousands of search queries in one click
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-magenta-600 bg-clip-text text-transparent">QueryBoost</span><br />
            E-commerce instrument<br />
            for automatic optimal promotion
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            We help our clients spend their advertising budget more efficiently and get more views 
            for every ruble invested. More views = more sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-700 hover:to-magenta-700 px-8 py-4 text-lg"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Start Today - Join as Tester
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-purple-200">
              <Icon name="Play" className="mr-2" size={20} />
              See How It Works
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-purple-600">Data-Driven</div>
            <div className="text-gray-600">ML-powered forecasts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-magenta-600">Maximum</div>
            <div className="text-gray-600">Budget efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-purple-600">One Click</div>
            <div className="text-gray-600">Thousands of queries optimized</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Our Secret Sauce: Data-Driven Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our recommendations are not guesswork but data-driven forecasts. Using your advertising budget as input, 
              our custom-trained ML model selects the optimal set of search queries for promotion and determines 
              how much to allocate to each query for maximum efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Brain" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Custom ML Model</h3>
              <p className="text-gray-600">
                Our machine learning model is trained specifically for e-commerce optimization, 
                providing accurate predictions for query performance
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-magenta-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Target" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Optimal Budget Allocation</h3>
              <p className="text-gray-600">
                Automatically determines the perfect amount to spend on each search query 
                to maximize your return on advertising investment
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-magenta-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Measurable Growth</h3>
              <p className="text-gray-600">
                Get more views for every ruble invested with data-backed recommendations 
                that drive real, measurable sales growth
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-magenta-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Unlock Advanced Analytics in Just a Few Clicks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Anyone can get personalized recommendations built on in-depth database analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Subscribe on Website</h3>
              <p className="text-gray-600 mb-6">
                Simple registration process to get started with your personalized optimization journey
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Icon name="UserPlus" className="mx-auto text-purple-600 mb-2" size={24} />
                <p className="font-medium text-sm">Quick & Easy Setup</p>
              </div>
            </div>

            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-magenta-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Input Your Budget</h3>
              <p className="text-gray-600 mb-6">
                Our ML model analyzes your advertising budget to create optimal query allocation strategy
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Icon name="Calculator" className="mx-auto text-magenta-600 mb-2" size={24} />
                <p className="font-medium text-sm">Smart Budget Analysis</p>
              </div>
            </div>

            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-magenta-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Get Recommendations</h3>
              <p className="text-gray-600 mb-6">
                Receive personalized, data-driven recommendations for optimal query promotion
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <Icon name="BarChart3" className="mx-auto text-purple-600 mb-2" size={24} />
                <p className="font-medium text-sm">Advanced Analytics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Customer Success in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our data-driven approach transforms advertising efficiency
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Before QueryBoost:</h4>
                    <div className="text-sm text-gray-600 space-y-2">
                      <div className="flex justify-between">
                        <span>Ad Budget:</span>
                        <span>₽50,000/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Manual Query Selection:</span>
                        <span>20 queries</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Views per Ruble:</span>
                        <span>0.8 views</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>Efficiency:</span>
                        <span>Low</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-r from-purple-50 to-magenta-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-gray-900">After QueryBoost:</h4>
                    <div className="text-sm space-y-2">
                      <div className="flex justify-between">
                        <span>Same Budget:</span>
                        <span>₽50,000/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>AI-Optimized Queries:</span>
                        <span>500+ queries</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>Views per Ruble:</span>
                        <span>2.4 views (+200%)</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>Efficiency:</span>
                        <span>Maximum</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 via-purple-700 to-magenta-600 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Start Today - Join as a Tester
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get early access to personalized recommendations and be among the first to experience 
            the power of data-driven e-commerce optimization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Join Beta Testing Program
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg"
            >
              <Icon name="FileText" className="mr-2" size={20} />
              Get White Paper
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="Users" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Early Access Program</p>
            </div>
            <div>
              <Icon name="BarChart3" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Personalized Analytics</p>
            </div>
            <div>
              <Icon name="Zap" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Instant Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Trusted by Early Adopters
            </h2>
            <p className="text-gray-600">
              Our solution is already trusted by small and medium-sized sellers who have seen 
              measurable growth in their sales after applying our recommendations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <Icon name="Store" className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Small Business Owner</p>
                  <p className="text-sm text-gray-500">Fashion & Accessories</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "QueryBoost transformed how I approach advertising. The data-driven recommendations 
                increased my sales by 40% with the same budget."
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-magenta-500 to-magenta-600 rounded-full flex items-center justify-center mr-3">
                  <Icon name="TrendingUp" className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Medium Seller</p>
                  <p className="text-sm text-gray-500">Electronics & Gadgets</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "The ML-powered optimization is incredible. I now get 3x more views per ruble 
                spent compared to my manual approach."
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-magenta-600 rounded-full flex items-center justify-center mr-3">
                  <Icon name="Target" className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Marketplace Expert</p>
                  <p className="text-sm text-gray-500">E-commerce Consultant</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "We're building partnerships with QueryBoost because their data-driven approach 
                delivers measurable results that our clients love."
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Icon name="Users" className="mr-2" size={20} />
                <span className="font-semibold text-purple-600">Growing</span>
                <span className="ml-1">user base</span>
              </div>
              <div className="flex items-center">
                <Icon name="TrendingUp" className="mr-2" size={20} />
                <span className="font-semibold text-magenta-600">Strong</span>
                <span className="ml-1">market traction</span>
              </div>
              <div className="flex items-center">
                <Icon name="Handshake" className="mr-2" size={20} />
                <span className="font-semibold text-purple-600">Expert</span>
                <span className="ml-1">partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/img/1e554d02-8fcf-4dc9-9739-fba49083c26e.jpg" 
                alt="QueryBoost Logo" 
                className="h-8 w-8 rounded-lg"
              />
              <div>
                <h3 className="font-heading font-bold">QueryBoost</h3>
                <p className="text-sm text-gray-400">E-commerce optimization tool</p>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 QueryBoost. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
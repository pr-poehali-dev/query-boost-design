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
              alt="Query Boost Logo" 
              className="h-10 w-10 rounded-lg"
            />
            <div>
              <h1 className="text-xl font-heading font-bold text-gray-900">Query Boost</h1>
              <p className="text-sm text-purple-600 font-medium">AI for Wildberries</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-700 hover:to-magenta-700">
            Try for Free
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
            🚀 Keyword Research Revolution
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Find the <span className="bg-gradient-to-r from-purple-600 to-magenta-600 bg-clip-text text-transparent">perfect</span><br />
            keywords<br />
            for Wildberries
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Query Boost uses AI to find high-frequency keywords that will increase 
            your Wildberries product sales by 3-5x
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-700 hover:to-magenta-700 px-8 py-4 text-lg"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Start Analysis
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-purple-200">
              <Icon name="Play" className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-purple-600">15,000+</div>
            <div className="text-gray-600">Products Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-magenta-600">350%</div>
            <div className="text-gray-600">Average Sales Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-purple-600">2.4 sec</div>
            <div className="text-gray-600">Analysis Speed</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Why do sellers choose Query Boost?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We transform the complex keyword research process into a simple and effective solution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Brain" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">AI Analysis</h3>
              <p className="text-gray-600">
                Artificial intelligence analyzes millions of queries and finds the most effective keywords
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-magenta-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Sales Growth</h3>
              <p className="text-gray-600">
                The right keywords increase product visibility and conversion to purchases
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-magenta-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Time Saving</h3>
              <p className="text-gray-600">
                Instead of hours of manual work — get results in seconds through automation
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
              How does Query Boost work?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 3-step process for maximum results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Upload Your Product</h3>
              <p className="text-gray-600 mb-6">
                Enter product name or upload a link to your Wildberries product page
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-sm text-gray-500">Example:</p>
                <p className="font-medium">"Women's Nike Sneakers"</p>
              </div>
            </div>

            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-magenta-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">AI Finds Keywords</h3>
              <p className="text-gray-600 mb-6">
                Algorithm analyzes search queries and competitors, selecting the best options
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">women's sneakers</Badge>
                  <Badge variant="secondary" className="text-xs">Nike Air Max</Badge>
                  <Badge variant="secondary" className="text-xs">athletic shoes</Badge>
                </div>
              </div>
            </div>

            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-magenta-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Get Results</h3>
              <p className="text-gray-600 mb-6">
                Ready list of high-frequency keywords for your product
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between text-sm">
                  <span>Frequency: 50,000+ per month</span>
                  <span className="text-green-600 font-medium">+287% sales</span>
                </div>
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
              See how it works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Live example of product analysis with Query Boost
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Original Product:</h4>
                    <p className="text-gray-600 mb-4">"iPhone 15 Smartphone 128GB"</p>
                    <div className="text-sm text-gray-500">
                      <div className="flex justify-between mb-2">
                        <span>Current Sales:</span>
                        <span>150 units/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Search Position:</span>
                        <span>#47</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-r from-purple-50 to-magenta-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-gray-900">Analysis Results:</h4>
                    <div className="space-y-2 mb-4">
                      <Badge className="bg-purple-100 text-purple-700">iPhone 15 Pro Max</Badge>
                      <Badge className="bg-purple-100 text-purple-700">Apple smartphone original</Badge>
                      <Badge className="bg-purple-100 text-purple-700">new phone 2024</Badge>
                      <Badge className="bg-purple-100 text-purple-700">iPhone 15 buy cheap</Badge>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between mb-2 text-green-600 font-medium">
                        <span>Sales Forecast:</span>
                        <span>520 units/month (+247%)</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>Expected Position:</span>
                        <span>#8-12</span>
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
            Ready to boost your Wildberries sales?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of successful sellers who are already using Query Boost
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Contact Us
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="CheckCircle" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Free Trial Period</p>
            </div>
            <div>
              <Icon name="Shield" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Results Guarantee</p>
            </div>
            <div>
              <Icon name="Users" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Customer Testimonials
            </h2>
            <p className="text-gray-600">Learn how Query Boost helped other sellers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">AN</span>
                </div>
                <div>
                  <p className="font-semibold">Anna Nikolaeva</p>
                  <p className="text-sm text-gray-500">Clothing Seller</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "Sales increased by 400% in the first month of use. Amazing tool!"
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-magenta-500 to-magenta-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">MK</span>
                </div>
                <div>
                  <p className="font-semibold">Mikhail Kozlov</p>
                  <p className="text-sm text-gray-500">Electronics Supplier</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "I used to spend hours selecting keywords. Now everything is automated!"
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-magenta-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">ES</span>
                </div>
                <div>
                  <p className="font-semibold">Elena Smirnova</p>
                  <p className="text-sm text-gray-500">Beauty Store</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "Conversion increased by 2.5x. Recommend to all Wildberries sellers!"
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Icon name="Users" className="mr-2" size={20} />
                <span className="font-semibold text-purple-600">5,000+</span>
                <span className="ml-1">happy customers</span>
              </div>
              <div className="flex items-center">
                <Icon name="TrendingUp" className="mr-2" size={20} />
                <span className="font-semibold text-magenta-600">284%</span>
                <span className="ml-1">average sales growth</span>
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
                alt="Query Boost Logo" 
                className="h-8 w-8 rounded-lg"
              />
              <div>
                <h3 className="font-heading font-bold">Query Boost</h3>
                <p className="text-sm text-gray-400">AI for Wildberries</p>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Query Boost. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
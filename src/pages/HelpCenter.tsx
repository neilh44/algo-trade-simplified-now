import { useState } from 'react';
import Header from '@/components/Header';
import AppFooter from '@/components/AppFooter';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, HelpCircle, Book, MessageCircle, Phone } from 'lucide-react';

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'Getting Started',
      icon: Book,
      faqs: [
        { question: 'How do I create my first trading strategy?', answer: 'Start with our beginner tutorial...' },
        { question: 'What programming languages are supported?', answer: 'We support Python, JavaScript...' },
      ]
    },
    {
      title: 'Account & Billing',
      icon: HelpCircle,
      faqs: [
        { question: 'How do I upgrade my plan?', answer: 'Go to Settings > Billing...' },
        { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards...' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
              <p className="text-xl text-muted-foreground">Find answers to common questions and get support</p>
            </div>
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faqCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon className="h-5 w-5 text-primary mr-2" />
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.faqs.map((faq, faqIndex) => (
                          <div key={faqIndex}>
                            <h4 className="font-medium text-sm">{faq.question}</h4>
                            <p className="text-xs text-muted-foreground">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  );
}
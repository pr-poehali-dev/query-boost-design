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
              <p className="text-sm text-purple-600 font-medium">AI для Wildberries</p>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-700 hover:to-magenta-700">
            Попробовать бесплатно
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-in">
          <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
            🚀 Революция в подборе ключевых слов
          </Badge>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Найди <span className="bg-gradient-to-r from-purple-600 to-magenta-600 bg-clip-text text-transparent">идеальные</span><br />
            ключевые слова<br />
            для Wildberries
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Query Boost использует ИИ для поиска высокочастотных ключевых слов, 
            которые увеличат продажи ваших товаров на Wildberries в 3-5 раз
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-magenta-600 hover:from-purple-700 hover:to-magenta-700 px-8 py-4 text-lg"
            >
              <Icon name="Zap" className="mr-2" size={20} />
              Начать анализ
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-purple-200">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-slide-up">
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-purple-600">15,000+</div>
            <div className="text-gray-600">Проанализированных товаров</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-magenta-600">350%</div>
            <div className="text-gray-600">Рост продаж в среднем</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-heading font-bold text-purple-600">2.4 сек</div>
            <div className="text-gray-600">Скорость анализа</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 mb-6">
              Почему продавцы выбирают Query Boost?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы превращаем сложный процесс подбора ключевых слов в простое и эффективное решение
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Brain" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">ИИ-анализ</h3>
              <p className="text-gray-600">
                Искусственный интеллект анализирует миллионы запросов и находит самые эффективные ключевые слова
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-magenta-500 to-magenta-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Рост продаж</h3>
              <p className="text-gray-600">
                Правильные ключевые слова увеличивают видимость товаров и конверсию в покупки
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow animate-scale-in">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-magenta-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Экономия времени</h3>
              <p className="text-gray-600">
                Вместо часов ручной работы — получите результат за секунды с помощью автоматизации
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
              Как работает Query Boost?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Простой процесс в 3 шага для максимального результата
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Загрузите товар</h3>
              <p className="text-gray-600 mb-6">
                Введите название товара или загрузите ссылку на карточку Wildberries
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <p className="text-sm text-gray-500">Пример:</p>
                <p className="font-medium">"Кроссовки женские Nike"</p>
              </div>
            </div>

            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-magenta-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">ИИ находит ключевые слова</h3>
              <p className="text-gray-600 mb-6">
                Алгоритм анализирует поисковые запросы и конкурентов, выбирая лучшие варианты
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">кроссовки женские</Badge>
                  <Badge variant="secondary" className="text-xs">Nike Air Max</Badge>
                  <Badge variant="secondary" className="text-xs">спортивная обувь</Badge>
                </div>
              </div>
            </div>

            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-magenta-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">Получите результат</h3>
              <p className="text-gray-600 mb-6">
                Готовый список высокочастотных ключевых слов для вашего товара
              </p>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="flex items-center justify-between text-sm">
                  <span>Частота: 50,000+ в месяц</span>
                  <span className="text-green-600 font-medium">+287% продаж</span>
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
              Посмотрите, как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Живой пример анализа товара с помощью Query Boost
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold mb-3 text-gray-900">Исходный товар:</h4>
                    <p className="text-gray-600 mb-4">"Смартфон iPhone 15 128GB"</p>
                    <div className="text-sm text-gray-500">
                      <div className="flex justify-between mb-2">
                        <span>Текущие продажи:</span>
                        <span>150 шт/месяц</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Позиция в поиске:</span>
                        <span>#47</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gradient-to-r from-purple-50 to-magenta-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-gray-900">Результат анализа:</h4>
                    <div className="space-y-2 mb-4">
                      <Badge className="bg-purple-100 text-purple-700">iPhone 15 Pro Max</Badge>
                      <Badge className="bg-purple-100 text-purple-700">смартфон Apple оригинал</Badge>
                      <Badge className="bg-purple-100 text-purple-700">телефон новый 2024</Badge>
                      <Badge className="bg-purple-100 text-purple-700">iPhone 15 купить дешево</Badge>
                    </div>
                    <div className="text-sm">
                      <div className="flex justify-between mb-2 text-green-600 font-medium">
                        <span>Прогноз продаж:</span>
                        <span>520 шт/месяц (+247%)</span>
                      </div>
                      <div className="flex justify-between text-green-600 font-medium">
                        <span>Ожидаемая позиция:</span>
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
            Готовы увеличить продажи на Wildberries?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам успешных продавцов, которые уже используют Query Boost
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Icon name="Rocket" className="mr-2" size={20} />
              Начать бесплатно
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Связаться с нами
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Icon name="CheckCircle" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Бесплатный пробный период</p>
            </div>
            <div>
              <Icon name="Shield" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Гарантия результата</p>
            </div>
            <div>
              <Icon name="Users" className="mx-auto mb-2" size={24} />
              <p className="text-sm opacity-90">Поддержка 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Отзывы наших клиентов
            </h2>
            <p className="text-gray-600">Узнайте, как Query Boost помог другим продавцам</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">АН</span>
                </div>
                <div>
                  <p className="font-semibold">Анна Николаева</p>
                  <p className="text-sm text-gray-500">Продавец одежды</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "Продажи выросли на 400% за первый месяц использования. Потрясающий инструмент!"
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-magenta-500 to-magenta-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">МК</span>
                </div>
                <div>
                  <p className="font-semibold">Михаил Козлов</p>
                  <p className="text-sm text-gray-500">Поставщик электроники</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "Раньше тратил часы на подбор ключевых слов. Теперь всё делается автоматически!"
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-magenta-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">ЕС</span>
                </div>
                <div>
                  <p className="font-semibold">Елена Смирнова</p>
                  <p className="text-sm text-gray-500">Магазин красоты</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <p className="text-gray-600">
                "Конверсия увеличилась в 2.5 раза. Рекомендую всем продавцам на Wildberries!"
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 text-gray-500">
              <div className="flex items-center">
                <Icon name="Users" className="mr-2" size={20} />
                <span className="font-semibold text-purple-600">5,000+</span>
                <span className="ml-1">довольных клиентов</span>
              </div>
              <div className="flex items-center">
                <Icon name="TrendingUp" className="mr-2" size={20} />
                <span className="font-semibold text-magenta-600">284%</span>
                <span className="ml-1">средний рост продаж</span>
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
                <p className="text-sm text-gray-400">AI для Wildberries</p>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Поддержка</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Query Boost. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
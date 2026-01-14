import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        
        <header className="mb-16 md:mb-24 text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
            ВЕКТОР 2026
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
            Ваш персональный маршрут к своим истинным целям и желаниям
          </p>
        </header>

        <section className="mb-20 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-8">
            Определите, чего вы действительно хотите в 2026 году
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            и выстройте понятный маршрут без откатов и самосаботажа
          </p>
        </section>

        <section className="mb-20 bg-card rounded-2xl p-8 md:p-12 shadow-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
              Практикум для женщин, которые устали жить «как надо», 
              но готовы честно разобраться — чего хочу я и куда иду дальше.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                <Icon name="Calendar" className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Формат</h3>
                  <p className="text-muted-foreground">онлайн · 14 дней</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                <Icon name="Sparkles" className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-2">Старт</h3>
                  <p className="text-muted-foreground">26 февраля</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
                Хочу участвовать
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Анна"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="anna@example.com"
                    className="w-full"
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg font-medium"
              >
                Зарегистрироваться
              </Button>
            </form>
          ) : (
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
                <Icon name="Check" className="text-accent" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Спасибо за регистрацию!
              </h3>
              <p className="text-muted-foreground">
                Мы отправили письмо на {email} с деталями практикума
              </p>
            </div>
          )}
        </section>

        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>© 2026 Вектор. Все права защищены</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

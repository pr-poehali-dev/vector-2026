import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const targetAudience = [
    'не понимаете, чего хотите именно вы, а не окружающие',
    'устали, но не можете остановиться и выдохнуть',
    'много думаете, но мало двигаетесь вперёд',
    'боитесь ошибиться и поэтому откладываете решения',
    'ставите цели, но не чувствуете к ним энергии',
    'пробовали курсы и книги, но ничего не менялось по-настоящему'
  ];

  const results = [
    'чёткое понимание своих настоящих желаний, а не навязанных',
    'ясные ориентиры на 2026 год — без иллюзий и «надо»',
    'ощущение внутренней опоры и уверенности в решениях',
    'понимание, куда направлять энергию, а где перестать сливать её',
    'способность возвращать мотивацию, когда накрывает синдром самозванца, хочется всё бросить, пропадает вера в себя'
  ];

  const program = [
    {
      number: 1,
      title: 'Мысли, которые управляют вашей жизнью',
      about: 'Как формируется внутренний диалог и почему именно мысли определяют ваше состояние и выборы.',
      result: 'Вы начнёте отличать свои мысли от навязанных и увидите, что именно мешает жить и действовать иначе.'
    },
    {
      number: 2,
      title: 'Какое место вы занимаете в своей жизни',
      about: 'Роли, в которых вы застряли, и почему жизнь «для всех» лишает вас энергии.',
      result: 'Вы увидите, куда уходит ваша энергия, и поймёте, где пора вернуть себя себе.'
    },
    {
      number: 3,
      title: 'Опора на себя и выбор',
      about: 'Любовь к себе, ответственность и скрытые выгоды детской позиции.',
      result: 'Вы поймёте, почему избегаете выбора, и начнёте выходить из сценариев самосаботажа.'
    },
    {
      number: 4,
      title: 'Чего вы хотите на самом деле',
      about: 'Истинные желания vs. ожидания окружающих. Страхи, сомнения и внутренние запреты.',
      result: 'Вы сформулируете свои реальные желания, а не навязанные цели.'
    },
    {
      number: 5,
      title: 'Страх, сопротивление и прокрастинация',
      about: 'Почему вы откладываете важное и как страх управляет действиями.',
      result: 'Вы научитесь двигаться, даже когда страшно, не сливая энергию.'
    },
    {
      number: 6,
      title: 'Цели без иллюзий',
      about: 'Как ставить цели, которые действительно хочется достигать.',
      result: 'У вас появятся понятные и живые цели на 2026 год, с внутренней опорой и мотивацией.'
    },
    {
      number: 7,
      title: 'Пространство для новой жизни',
      about: 'Почему без расхламления — внутреннего и внешнего — движение невозможно.',
      result: 'Вы освободите пространство для новых этапов и почувствуете лёгкость и готовность к переменам.'
    },
    {
      number: 8,
      title: 'Закрепление и движение дальше',
      about: 'Как сохранить результат и не вернуться в старые сценарии.',
      result: 'Вы выйдете с ощущением устойчивости, ясности и понимания, как поддерживать себя дальше.'
    }
  ];

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
          <div className="border-4 border-accent rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6">
              Определите, чего вы действительно хотите в 2026 году
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              и выстройте понятный маршрут без откатов и самосаботажа
            </p>
          </div>
        </section>

        <section className="mb-20 bg-card rounded-2xl p-8 md:p-12 shadow-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl text-foreground mb-10 leading-relaxed">
              Практикум для женщин, которые устали жить «как надо», 
              но готовы честно разобраться — чего хочу я и куда иду дальше.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                <Icon name="Calendar" className="text-accent mt-1 flex-shrink-0" size={24} />
                <div className="text-left">
                  <h3 className="font-semibold text-primary mb-2">Формат</h3>
                  <p className="text-muted-foreground">онлайн · 14 дней</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl">
                <Icon name="Sparkles" className="text-accent mt-1 flex-shrink-0" size={24} />
                <div className="text-left">
                  <h3 className="font-semibold text-primary mb-2">Старт</h3>
                  <p className="text-muted-foreground">26 февраля</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg font-medium"
            >
              Хочу участвовать
            </Button>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-center">
            Кому подойдёт этот практикум
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-lg text-foreground mb-8">
              Этот практикум для вас, если сейчас вы:
            </p>
            <ul className="space-y-4 mb-10">
              {targetAudience.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Icon name="CircleCheck" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{item};</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border pt-8">
              <p className="text-lg text-foreground leading-relaxed">
                Вы умны, осознанны и уже многое знаете.<br />
                Но вам не хватает структуры, ясности и честного контакта с собой.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-center">
            Какой результат вы получите
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm">
            <p className="text-lg text-foreground mb-8">
              После практикума у вас будет:
            </p>
            <ul className="space-y-4 mb-10">
              {results.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <Icon name="Star" className="text-accent mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground">{item};</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-border pt-8 text-center">
              <p className="text-xl font-medium text-primary mb-4">
                состояние: «Я знаю, куда иду и зачем»
              </p>
              <p className="text-lg text-muted-foreground mb-2">
                Это не про мотивацию.
              </p>
              <p className="text-lg text-foreground font-medium">
                Это про взрослую ясность и движение.
              </p>
            </div>
            <div className="text-center mt-10">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg font-medium"
                asChild
              >
                <a href="https://t.me/millionskorny/4993" target="_blank" rel="noopener noreferrer">
                  Записаться
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-center">
            Что это за продукт и как он работает
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm text-center">
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              «ВЕКТОР 2026» — это онлайн-практикум с живыми эфирами,<br />
              где вы работаете вместе со мной, а не остаетесь один на один с заданиями.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
              <div className="p-6 bg-muted/30 rounded-xl">
                <p className="text-2xl font-bold text-accent mb-2">8</p>
                <p className="text-foreground">живых эфиров за 2 недели</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl">
                <Icon name="Users" className="text-accent mx-auto mb-2" size={32} />
                <p className="text-foreground">практики, задания и поддержка</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl">
                <Icon name="TrendingUp" className="text-accent mx-auto mb-2" size={32} />
                <p className="text-foreground">от хаоса → к ясным целям</p>
              </div>
              <div className="p-6 bg-muted/30 rounded-xl">
                <Icon name="Heart" className="text-accent mx-auto mb-2" size={32} />
                <p className="text-foreground">без нянчества и давления</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              Это не самостоятельное обучение «посмотрите когда-нибудь».<br />
              Вы идёте шаг за шагом и собираете свою картину будущего.
            </p>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-6 text-center">
            Программа практикума
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center">
            Внутри вы будете работать с:
          </p>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm mb-10">
            <ul className="space-y-3 text-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>мыслями и внутренними диалогами, которые управляют вашей жизнью;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>ролями, в которых застряли и теряете энергию;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>установками, мешающими выбирать себя и расти;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>страхом ошибок и сопротивлением;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>истинными желаниями и скрытыми выгодами бездействия;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>формированием реальных целей на 2026 год;</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-1">•</span>
                <span>очищением пространства для новых этапов.</span>
              </li>
            </ul>
            <div className="border-t border-border mt-8 pt-8 text-center">
              <p className="text-lg text-muted-foreground mb-2">
                Вы не просто «поймёте»,
              </p>
              <p className="text-xl font-medium text-primary">
                а соберёте целостное видение себя и своего пути.
              </p>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">
            8 живых эфиров · 2 недели · движение от путаницы к ясности
          </h3>

          <div className="space-y-6">
            {program.map((session) => (
              <div key={session.number} className="bg-card rounded-2xl p-6 md:p-8 shadow-sm hover-scale">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-accent">{session.number}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-primary mb-4">
                      {session.title}
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">О чём:</p>
                        <p className="text-foreground">{session.about}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Результат:</p>
                        <p className="text-foreground">{session.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg font-medium"
              asChild
            >
              <a href="https://t.me/millionskorny/4993" target="_blank" rel="noopener noreferrer">
                Хочу участвовать
              </a>
            </Button>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '1.4s' }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-center">
            Почему со мной
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <img 
                  src="https://cdn.poehali.dev/files/Алена .jpg" 
                  alt="Алёна Галсанова" 
                  className="w-48 h-48 rounded-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-primary mb-2">Алёна Галсанова</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  проводник по возвращению к себе и своим ориентирам
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">2 года практики</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">более 30 успешных кейсов</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">онлайн-формат</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle2" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">работаю не через мотивацию, а через ясность и ответственность</span>
                  </li>
                </ul>
                <div className="border-t border-border pt-6">
                  <p className="text-foreground leading-relaxed">
                    Я не обещаю «новую жизнь за 7 дней».<br />
                    Моя задача — помочь вам увидеть правду о себе, своих желаниях и возможностях
                    и выстроить путь, который выдержит реальность.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '1.6s' }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-center">
            Формат и стоимость
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-primary mb-8">
              Практикум «ВЕКТОР 2026»
            </h3>
            <div className="flex flex-col items-center gap-4 mb-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="p-4 bg-muted/30 rounded-xl flex items-center justify-center gap-2">
                  <Icon name="Monitor" className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">онлайн-формат</span>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl flex items-center justify-center gap-2">
                  <Icon name="Calendar" className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">2 недели работы</span>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl flex items-center justify-center gap-2">
                  <Icon name="Radio" className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">8 живых эфиров</span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-2/3">
                <div className="p-4 bg-muted/30 rounded-xl flex items-center justify-center gap-2">
                  <Icon name="FileText" className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">задания и практики</span>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl flex items-center justify-center gap-2">
                  <Icon name="MessageCircle" className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground">поддержка в процессе</span>
                </div>
              </div>
            </div>
            <div className="border-t border-border pt-8 mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <p className="text-3xl font-bold text-primary">3 500 ₽</p>
                <p className="text-xl text-muted-foreground line-through">вместо 7 000 ₽</p>
              </div>
              <p className="text-lg text-muted-foreground mb-3">Стоимость участия</p>
              <p className="text-accent font-medium">Из 10 мест осталось 3</p>
            </div>
            <div className="bg-muted/30 rounded-xl p-4 mb-8">
              <p className="text-lg font-medium text-foreground">
                Старт: 26 февраля
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg font-medium"
              asChild
            >
              <a href="https://t.me/millionskorny/4993" target="_blank" rel="noopener noreferrer">
                Оплатить участие
              </a>
            </Button>
          </div>
        </section>

        <section className="mb-20 animate-fade-in" style={{ animationDelay: '1.8s' }}>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-10 text-center">
            Подойдёт ли вам этот практикум?
          </h2>
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm text-center">
            <p className="text-lg text-foreground mb-8">
              Этот продукт для вас, если вы:
            </p>
            <ul className="space-y-4 mb-10 max-w-2xl mx-auto text-left">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">готовы честно посмотреть на себя и свою жизнь;</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">хотите ясности, а не вдохновения на пару дней;</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={20} />
                <span className="text-foreground">понимаете, что дальше жить «по-старому» не хочется.</span>
              </li>
            </ul>
            <div className="border-t border-border pt-8 mb-10">
              <p className="text-lg text-foreground leading-relaxed">
                Сейчас — хороший момент остановиться,<br />
                определить ориентиры и войти в 2026 год осознанно, а не по инерции.
              </p>
            </div>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg font-medium"
              asChild
            >
              <a href="https://t.me/millionskorny/4993" target="_blank" rel="noopener noreferrer">
                Хочу участвовать
              </a>
            </Button>
          </div>
        </section>

        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p>© 2026 Вектор. Все права защищены</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
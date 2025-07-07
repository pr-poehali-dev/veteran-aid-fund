import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-blue-600 rounded-full flex items-center justify-center">
                <Icon name="Shield" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Фонд «Возвращение домой»
                </h1>
                <p className="text-sm text-gray-600">
                  Поиск пропавших без вести защитников
                </p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                О фонде
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Программы
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Как помочь
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Отчеты
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Поддержать фонд
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">
              <Icon name="Heart" size={16} className="mr-2" />
              Специальная военная операция
            </Badge>
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Мы возвращаем
              <span className="text-red-600"> героев </span>
              домой
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Благотворительный фонд поиска и возвращения пропавших без вести
              солдат. Работаем на полях сражений и в местах боевых действий,
              чтобы каждый защитник вернулся к своим близким.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8"
              >
                <Icon name="Search" size={20} className="mr-2" />
                Сообщить о пропавшем
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Горячая линия
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Users" className="text-red-600" size={24} />
                </div>
                <CardTitle className="text-3xl font-bold text-red-600">
                  1,247
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">
                  Найдено и возвращено
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Search" className="text-blue-600" size={24} />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">
                  324
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Поисковых операций</p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" className="text-green-600" size={24} />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600">
                  47
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Регионов покрытия</p>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Clock" className="text-purple-600" size={24} />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-600">
                  24/7
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-medium">Круглосуточно</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Наши программы
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к поиску и возвращению пропавших без вести
              защитников
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Crosshair" className="text-red-600" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">Полевые операции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Работа непосредственно на полях сражений, эвакуация и поиск в
                  местах боевых действий с применением специального
                  оборудования.
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Database" className="text-blue-600" size={24} />
                </div>
                <CardTitle className="text-xl mb-2">База данных</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Ведение централизованной базы данных пропавших без вести,
                  координация с военными частями и госорганами.
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon
                    name="HeartHandshake"
                    className="text-green-600"
                    size={24}
                  />
                </div>
                <CardTitle className="text-xl mb-2">Поддержка семей</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Психологическая и материальная поддержка семей пропавших без
                  вести, помощь в оформлении документов и льгот.
                </p>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Как помочь
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ваша поддержка помогает нам возвращать героев домой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Icon name="CreditCard" className="text-red-600" size={24} />
                  Финансовая поддержка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Средства на оборудование, транспорт, оплату работы поисковых
                  групп
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Перевести средства
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Icon name="Users" className="text-blue-600" size={24} />
                  Волонтерство
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Присоединиться к поисковым группам, помочь в документообороте
                </p>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Стать волонтером
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (800) 123-45-67
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Icon name="Mail" size={20} className="mr-2" />
              Написать email
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

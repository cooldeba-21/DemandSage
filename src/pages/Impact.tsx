import { DollarSign, TrendingDown, Users, Clock, Leaf, BarChart3 } from 'lucide-react';

export default function Impact() {
  const restaurantBenefits = [
    {
      icon: DollarSign,
      title: '8-12% Cost Savings',
      description: 'Reduce food waste, optimize inventory, and minimize emergency orders',
      color: 'emerald'
    },
    {
      icon: TrendingDown,
      title: '30-40% Less Waste',
      description: 'Prepare the right amount of food at the right time',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Optimized Staffing',
      description: 'Schedule staff efficiently based on predicted demand patterns',
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Faster Preparation',
      description: 'Pre-position inventory and prep ingredients ahead of peak times',
      color: 'orange'
    }
  ];

  const platformBenefits = [
    {
      icon: BarChart3,
      title: 'Dynamic Pricing',
      description: 'Implement surge pricing and promotions at optimal times',
      color: 'cyan'
    },
    {
      icon: Users,
      title: 'Driver Optimization',
      description: 'Position delivery fleet based on predicted order volumes',
      color: 'teal'
    },
    {
      icon: TrendingDown,
      title: 'Reduced Cancellations',
      description: 'Better match restaurant capacity with customer demand',
      color: 'red'
    },
    {
      icon: DollarSign,
      title: 'Revenue Growth',
      description: 'Capture more orders during peak times with adequate capacity',
      color: 'green'
    }
  ];

  const metrics = [
    { label: 'Annual Inefficiency Addressed', value: '$1.8B', subtext: 'Across food delivery industry' },
    { label: 'Average ROI', value: '3.5x', subtext: 'Within first 6 months' },
    { label: 'Waste Reduction', value: '35%', subtext: 'Average decrease in food waste' },
    { label: 'Revenue Increase', value: '12%', subtext: 'Through better capacity planning' },
  ];

  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-100 text-emerald-600',
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
    cyan: 'bg-cyan-100 text-cyan-600',
    teal: 'bg-teal-100 text-teal-600',
    red: 'bg-red-100 text-red-600',
    green: 'bg-green-100 text-green-600'
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Measurable Impact
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Transform your bottom line with data-driven predictions that deliver real, quantifiable results for restaurants and delivery platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                <div className="text-sm font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-xs text-gray-600">{metric.subtext}</div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Restaurants
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Help restaurant partners maximize efficiency and profitability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {restaurantBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className={`w-14 h-14 ${colorMap[benefit.color]} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Delivery Platforms
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scale your operations intelligently and improve customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className={`w-14 h-14 ${colorMap[benefit.color]} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-lg">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12 border border-green-200">
            <div className="text-center mb-8">
              <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Environmental Impact
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Beyond business benefits, DemandSage helps reduce the environmental footprint of food delivery operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Food Waste Reduction</div>
                <div className="text-xs text-gray-600">Equivalent to removing 1,000+ cars from the road annually</div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">20%</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Carbon Footprint Decrease</div>
                <div className="text-xs text-gray-600">Through optimized logistics and reduced waste</div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">500K+</div>
                <div className="text-sm font-medium text-gray-900 mb-1">Meals Saved Annually</div>
                <div className="text-xs text-gray-600">Per platform using DemandSage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Real Results from Day One
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Most clients see measurable improvements within the first month of deployment, with full ROI typically achieved in under 6 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
              >
                Calculate Your Savings
              </a>
              <a
                href="/solution"
                className="inline-flex items-center justify-center px-8 py-3 bg-emerald-700 text-white border-2 border-white rounded-lg hover:bg-emerald-800 transition-colors font-medium"
              >
                Explore the Solution
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

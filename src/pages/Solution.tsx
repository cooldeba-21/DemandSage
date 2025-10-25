import { Database, Brain, TrendingUp, CheckCircle, Zap, BarChart3 } from 'lucide-react';

export default function Solution() {
  const steps = [
    {
      icon: Database,
      title: 'Data Ingestion',
      description: 'Aggregate historical order data, weather patterns, events, holidays, and real-time feeds from multiple sources.',
      color: 'blue'
    },
    {
      icon: Brain,
      title: 'Model Training',
      description: 'Train advanced ML models using XGBoost and TensorFlow on historical patterns to identify demand signals.',
      color: 'purple'
    },
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'Generate accurate predictions for upcoming hours, days, and weeks with confidence intervals.',
      color: 'emerald'
    },
    {
      icon: Zap,
      title: 'Real-Time Optimization',
      description: 'Continuously adjust predictions based on live data streams and emerging patterns.',
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'Actionable Insights',
      description: 'Deliver recommendations for inventory, staffing, pricing, and promotions through intuitive dashboards.',
      color: 'cyan'
    },
    {
      icon: CheckCircle,
      title: 'Continuous Learning',
      description: 'Models self-improve by learning from prediction accuracy and adapting to changing market conditions.',
      color: 'teal'
    }
  ];

  const features = [
    {
      title: 'Multi-Horizon Forecasting',
      description: 'Predict demand from 1 hour to 4 weeks ahead with varying granularity'
    },
    {
      title: 'Location Intelligence',
      description: 'Restaurant-level and zone-level predictions tailored to local patterns'
    },
    {
      title: 'External Factors',
      description: 'Integrate weather, events, holidays, and competitor activity'
    },
    {
      title: 'Anomaly Detection',
      description: 'Identify unusual patterns and alert operators to unexpected changes'
    },
    {
      title: 'Scenario Planning',
      description: 'Model different business scenarios and their impact on demand'
    },
    {
      title: 'API-First Design',
      description: 'Integrate seamlessly with existing POS, inventory, and delivery systems'
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 text-blue-600',
    purple: 'bg-purple-100 text-purple-600',
    emerald: 'bg-emerald-100 text-emerald-600',
    orange: 'bg-orange-100 text-orange-600',
    cyan: 'bg-cyan-100 text-cyan-600',
    teal: 'bg-teal-100 text-teal-600'
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our AI-Powered Solution
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              DemandSage combines cutting-edge machine learning with deep industry expertise to deliver the most accurate food demand forecasts in the market.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our end-to-end prediction pipeline transforms raw data into actionable business intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full">
                    <div className={`w-14 h-14 ${colorMap[step.color]} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-gray-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
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
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities designed for the complexity of food delivery operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-emerald-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Proven Accuracy
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our models consistently achieve over 92% accuracy in demand prediction, outperforming traditional forecasting methods by 40-60%.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Validated on millions of real orders</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Handles seasonal and event-driven spikes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Adapts to market changes in real-time</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">92%+</div>
                  <div className="text-sm text-gray-600">Prediction Accuracy</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">&lt;5min</div>
                  <div className="text-sm text-gray-600">Forecast Update Time</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Data Features Used</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">Continuous Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

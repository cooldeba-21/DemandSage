import { Code, Database, Cloud, Cpu, GitBranch, Shield, Zap, BarChart } from 'lucide-react';

export default function Technology() {
  const mlStack = [
    { name: 'XGBoost', description: 'Gradient boosting for high-accuracy predictions', icon: Zap },
    { name: 'TensorFlow', description: 'Deep learning for complex pattern recognition', icon: Cpu },
    { name: 'Scikit-learn', description: 'Classical ML algorithms and preprocessing', icon: GitBranch },
    { name: 'Pandas', description: 'Data manipulation and time series analysis', icon: BarChart }
  ];

  const backend = [
    { name: 'Python', description: 'Core ML and API development language' },
    { name: 'FastAPI', description: 'High-performance async API framework' },
    { name: 'PostgreSQL', description: 'Robust relational database with time-series support' },
    { name: 'Redis', description: 'In-memory caching for real-time performance' }
  ];

  const infrastructure = [
    { name: 'AWS EC2', description: 'Scalable compute instances' },
    { name: 'AWS S3', description: 'Data lake for historical records' },
    { name: 'AWS Lambda', description: 'Serverless functions for event processing' },
    { name: 'AWS CloudWatch', description: 'Monitoring and alerting' }
  ];

  const workflow = [
    {
      step: '1',
      title: 'Data Collection',
      description: 'Aggregate order history, weather data, events, promotions, and external signals from API integrations',
      color: 'blue'
    },
    {
      step: '2',
      title: 'Feature Engineering',
      description: 'Extract temporal patterns, location features, seasonal trends, and rolling statistics',
      color: 'purple'
    },
    {
      step: '3',
      title: 'Model Training',
      description: 'Train ensemble models using XGBoost and neural networks with automated hyperparameter tuning',
      color: 'emerald'
    },
    {
      step: '4',
      title: 'Prediction Generation',
      description: 'Generate forecasts for multiple time horizons with confidence intervals',
      color: 'orange'
    },
    {
      step: '5',
      title: 'Real-Time Updates',
      description: 'Continuously refine predictions as new data streams in throughout the day',
      color: 'cyan'
    },
    {
      step: '6',
      title: 'API Delivery',
      description: 'Serve predictions via REST API with sub-100ms response times',
      color: 'teal'
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    emerald: 'bg-emerald-600',
    orange: 'bg-orange-600',
    cyan: 'bg-cyan-600',
    teal: 'bg-teal-600'
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Code className="h-16 w-16 mx-auto mb-6 text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cutting-Edge Technology
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on proven, enterprise-grade infrastructure with state-of-the-art machine learning at its core.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Machine Learning Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Industry-leading frameworks that power our predictive models
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mlStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                  <Icon className="h-10 w-10 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
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
              Backend Architecture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Robust, scalable foundation for real-time predictions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {backend.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-start">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Infrastructure
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built on AWS for reliability, security, and global scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infrastructure.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Cloud className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prediction Workflow
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From raw data to actionable forecasts in milliseconds
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-emerald-200 to-cyan-200"></div>

            <div className="space-y-12">
              {workflow.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md border-2 border-gray-100 hover:border-emerald-300 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 ${colorMap[item.color]} rounded-full items-center justify-center text-white font-bold text-xl shadow-lg`}>
                    {item.step}
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-emerald-400" />
              <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-gray-400">SOC 2 compliant with end-to-end encryption and role-based access control</p>
            </div>

            <div className="text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-emerald-400" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-gray-400">Sub-100ms API response times with 99.9% uptime SLA</p>
            </div>

            <div className="text-center">
              <GitBranch className="h-12 w-12 mx-auto mb-4 text-emerald-400" />
              <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
              <p className="text-gray-400">RESTful API with comprehensive documentation and SDKs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Continuous Innovation
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our ML models improve continuously through automated retraining pipelines and A/B testing frameworks. We deploy updates weekly with zero downtime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-emerald-50 rounded-lg">
                <div className="text-2xl font-bold text-emerald-600 mb-2">Weekly</div>
                <div className="text-sm text-gray-700">Model Updates</div>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-700">Features Tracked</div>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-700">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

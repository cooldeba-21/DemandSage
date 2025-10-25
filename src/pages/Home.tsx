import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Predict Demand.<br />
              <span className="text-emerald-600">Optimize Operations.</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              AI-powered predictive analytics that helps food delivery platforms and restaurants forecast demand with precision, reduce waste, and maximize profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/solution"
                className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
              >
                Explore Solution <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Food Delivery Challenge
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The food delivery industry faces a critical problem: unpredictable demand leading to massive inefficiencies.
            </p>
            <h2 className='text-lg text-black'>Developed by Debashis Mohapatra</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-red-900 mb-2">$1.8B</h3>
              <p className="text-red-800 font-medium mb-2">Annual Inefficiency</p>
              <p className="text-red-700 text-sm">
                Lost to poor demand forecasting in food delivery operations
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-orange-900 mb-2">30-40%</h3>
              <p className="text-orange-800 font-medium mb-2">Food Waste</p>
              <p className="text-orange-700 text-sm">
                Of prepared food wasted due to inaccurate demand predictions
              </p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-900 mb-2">15-25%</h3>
              <p className="text-yellow-800 font-medium mb-2">Revenue Loss</p>
              <p className="text-yellow-700 text-sm">
                From stockouts and missed sales opportunities during peak times
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why DemandSage?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform transforms how food delivery businesses operate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate Forecasting</h3>
              <p className="text-gray-600">
                Machine learning models predict demand with 92%+ accuracy
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Insights</h3>
              <p className="text-gray-600">
                Get instant alerts and recommendations as conditions change
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Integration</h3>
              <p className="text-gray-600">
                Seamless API integration with your existing systems
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Actionable Analytics</h3>
              <p className="text-gray-600">
                Turn data into decisions with intuitive dashboards
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Join leading food delivery platforms and restaurants using DemandSage to optimize their business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-medium"
          >
            Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-8 w-8 text-emerald-500" />
              <span className="text-2xl font-bold text-white">DemandSage</span>
            </div>
            <p className="text-sm mb-4">
              AI-powered predictive analytics for food delivery. Helping restaurants and platforms optimize operations and reduce waste through intelligent demand forecasting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-emerald-500 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/solution" className="hover:text-emerald-500 transition-colors">Solution</Link></li>
              <li><Link to="/impact" className="hover:text-emerald-500 transition-colors">Impact</Link></li>
              <li><Link to="/technology" className="hover:text-emerald-500 transition-colors">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/team" className="hover:text-emerald-500 transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} DemandSage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

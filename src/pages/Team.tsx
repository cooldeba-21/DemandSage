import { Linkedin, Mail, GraduationCap, Briefcase } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Abhay Rathore',
      role: 'Co-Founder & CEO',
      education: 'IIT Delhi, B.Tech Computer Science',
      background: 'Former ML Engineer at Swiggy. 5+ years building scalable systems for food delivery. Led demand forecasting initiatives serving 100M+ users.',
      expertise: ['Machine Learning', 'Product Strategy', 'Food Tech'],
      image: '👨‍💼'
    },
    {
      name: 'Shivam Dubey',
      role: 'Co-Founder & CTO',
      education: 'IIT Bombay, B.Tech Computer Science',
      background: 'Ex-Senior Engineer at Zomato. Deep expertise in distributed systems and real-time data processing. Built infrastructure handling 10M+ daily transactions.',
      expertise: ['Backend Architecture', 'Cloud Infrastructure', 'Data Engineering'],
      image: '👨‍💻'
    },
    {
      name: 'Rajalaxmi Sahoo',
      role: 'Co-Founder & Head of AI',
      education: 'IISc Bangalore, M.Tech AI & ML',
      background: 'Research background in time-series forecasting. Published papers on demand prediction. Former Data Scientist at Amazon focusing on supply chain optimization.',
      expertise: ['Deep Learning', 'Time Series', 'Research'],
      image: '👩‍🔬'
    },
    {
      name: 'Ekta Mohanty',
      role: 'Co-Founder & Head of Operations',
      education: 'IIM Ahmedabad, MBA',
      background: 'Former Operations Manager at Uber Eats. 7+ years in food delivery operations. Scaled restaurant partnerships from 100 to 10,000+ venues.',
      expertise: ['Operations', 'Business Development', 'Client Success'],
      image: '👩‍💼'
    }
  ];

  const values = [
    {
      title: 'Data-Driven',
      description: 'Every decision backed by rigorous analysis and experimentation'
    },
    {
      title: 'Customer-First',
      description: 'Building solutions that solve real problems for restaurants and platforms'
    },
    {
      title: 'Innovation',
      description: 'Pushing the boundaries of what AI can do for food delivery'
    },
    {
      title: 'Sustainability',
      description: 'Reducing waste and environmental impact through intelligent predictions'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              A diverse team of technologists, data scientists, and industry experts united by a mission to transform food delivery through AI.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="flex items-start mb-6">
                  <div className="text-6xl mr-6">{member.image}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                    <div className="flex items-start text-sm text-gray-600 mb-2">
                      <GraduationCap className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-blue-600" />
                      <span>{member.education}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-start text-sm text-gray-700 mb-3">
                    <Briefcase className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-emerald-600" />
                    <p>{member.background}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Areas of Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-emerald-600 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border-2 border-emerald-100 hover:border-emerald-300 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Why We're Building DemandSage
            </h2>
            <p className="text-xl text-emerald-100 mb-6 max-w-4xl mx-auto">
              We've spent years in the food delivery trenches, watching restaurants struggle with waste and platforms lose revenue due to poor demand forecasting. We knew there had to be a better way. DemandSage is our answer: intelligent, scalable, and proven AI that makes food delivery more efficient, profitable, and sustainable.
            </p>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              Our team combines deep technical expertise with real-world operational knowledge. We don't just build algorithms—we build solutions that work in the chaos of real restaurants and delivery platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Join Our Journey
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always looking for talented engineers, data scientists, and business professionals passionate about using AI to solve real-world problems.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}

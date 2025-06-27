import React from 'react';

const pricingPlans = [
  {
    title: 'Basic Shoot',
    price: '₹2,999',
    features: [
      '30-minute session',
      '10 edited photos',
      '1 outfit change',
      'Indoor setup only',
    ],
    popular: false,
  },
  {
    title: 'Standard Shoot',
    price: '₹4,999',
    features: [
      '1-hour session',
      '25 edited photos',
      '2 outfit changes',
      'Indoor & Outdoor setup',
    ],
    popular: true,
  },
  {
    title: 'Premium Shoot',
    price: '₹7,999',
    features: [
      '2-hour session',
      '50 edited photos',
      'Unlimited outfit changes',
      'Props & lighting included',
      'Free consultation',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Packages</h2>
        <p className="text-gray-600 mt-2">Choose the best photo shoot package for your needs</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {pricingPlans.map((plan, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-lg shadow-md p-8 border ${
              plan.popular ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'
            }`}
          >
            {plan.popular && (
              <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold text-gray-900 mb-6">{plan.price}</p>
            <ul className="space-y-3 text-left text-gray-700 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

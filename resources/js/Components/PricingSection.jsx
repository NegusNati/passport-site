import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Basic',
    price: 'Free',
    frequency: '',
    description: 'Perfect for checking few time a day.',
    features: [
      '5 users included',
      'Up to 10 projects',
      '2GB of storage',
      'Email support',
    ],
    cta: 'Start your trial',
  },
  {
    name: 'Standard',
    price: '20',
    frequency: 'Birr/month',
    description: 'Ideal for frequent Passport checking.',
    features: [
      '20 users included',
      'Up to 50 projects',
      '10GB of storage',
      'Priority email support',
      'Phone support',
    ],
    cta: 'Start your trial',
  },
  {
    name: 'Enterprise',
    price: '$99',
    frequency: '/month',
    description: 'For large organizations with advanced needs.',
    features: [
      'Unlimited users',
      'Unlimited projects',
      'Unlimited storage',
      '24/7 phone and email support',
      'Dedicated account manager',
      'Custom integrations',
    ],
    cta: 'Contact sales',
  },
]

export default function PricingSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for your business
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Choose an affordable plan that's packed with the best features for engaging your audience,
          creating customer loyalty, and driving sales.
        </p>
        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold leading-8 text-gray-900">{tier.name}</h3>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">{tier.frequency}</span>
              </p>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


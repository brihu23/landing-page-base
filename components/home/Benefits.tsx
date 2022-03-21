/* This example requires Tailwind CSS v2.0+ */
import { GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LightningBoltIcon,
  },
]

export default function Benefits() {
  return (
    <div id="benefits" className="pt-6 pb-32 bg-black">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="relative">
          <h2 className="pb-4 text-3xl tracking-tight font-extrabold sm:mt-5 sm:text-5xl  text-center text-transparent bg-clip-text bg-gradient-to-b from-primary to-white">
            Supercharging your //value add here
          </h2>
        </div>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8 pt-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <dt>
                <p className="mt-5 text-lg leading-6 font-medium text-secondary"> <i> {feature.name} </i> </p>
              </dt>
              <dd className="mt-2 text-base text-gray-100 ">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

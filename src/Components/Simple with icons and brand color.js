/* This example requires Tailwind CSS v2.0+ */
import { ChartBarIcon, ShoppingBagIcon, CollectionIcon, PencilAltIcon, QuestionMarkCircleIcon} from '@heroicons/react/outline'

const navigation = [
  { name: 'Dashboard', icon: ChartBarIcon, href: '#', current: false },
  { name: 'Acquisition', icon: ShoppingBagIcon, href: '#', current: true },
  { name: 'Inventory', icon: CollectionIcon, href: '#', current: false },
  { name: 'CRM', icon: PencilAltIcon, href: '#', current: false },
  { name: 'Reports', icon: QuestionMarkCircleIcon, href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Overlay() {
  return (
<div>
    <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 pb-4 overflow-y-auto h-screen">
      <div className="flex items-center flex-shrink-0 px-4 space-y-5">
        <h1 className='text-3xl text-blue-600 font-normal'>Getcar</h1>
      </div>
      <div className="mt-5 flex-grow flex flex-col w-44">
        <nav className="flex-1 bg-white space-y-1" aria-label="Sidebar">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-indigo-50 border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                'group flex items-center px-2 py-2 text-sm font-medium border-l-4'
              )}
            >
              <item.icon
                className={classNames(
                  item.current ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 flex-shrink-0 h-6 w-6'
                )}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      </div>
 </div>
  )
}

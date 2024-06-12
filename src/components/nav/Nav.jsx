import { Link, NavLink } from 'react-router-dom'
import heroImg from '../../assets/hero-img.jpeg'
import { DocumentIcon, LinkIcon } from '@heroicons/react/24/outline'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { CakeIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'

export default function Nav() {
  return (
    <div>
        <div className="nav-container">
                <img src={heroImg} alt="Hero image with my details" />
            <div className="max-w-xl mx-auto">
                <div className='relative'>
                    <img className='absolute left-8 -top-11 rounded-full w-20 md:w-32 md:-top-16 block border-4 border-white' src="https://jhey.dev/media/image/enhanced/headshot-200x200.avif" alt="Profile pic" />
                </div>
                <div className="flex justify-end my-4">
                    <Link className='flex font-bold bg-blue-600 border-blue-600 border-4 rounded-full py-2 px-6 hover:border-white'>Resume
                    <DocumentIcon className='w-5 ml-1' style={{ strokeWidth: 3 }} />
                    </Link>
                </div>
                <h2 className='text-4xl font-bold'>Vishal Pawar</h2> {/* Try adding the tick mark sing near the name */}
                <p className='mb-2'>Brings ideas to life with code! ✨</p>
                <p className='mb-2 leading-tight'>Senior Web Engineer. Creative Developer. Content Creator. Whimsical Specialist. International Speaker. Ex-Google.</p>
                <div className='flex text-[#868e96] mb-4'>
                    <p className='flex mr-4'>
                        <BriefcaseIcon className='w-5 mr-2' />
                        Available
                    </p>
                    <p className='flex mr-4 text-blue-400 font-bold'>
                        <LinkIcon className='w-5 mr-2' /> <span className='hover:text-white'>/links</span>
                    </p>
                    <p className='flex mr-4'>
                        <CakeIcon className='w-5 mr-2' /> August 8th
                    </p>
                    <p className='flex mr-4'>
                        <CalendarDaysIcon className='w-5 mr-2' />
                        Joined
                    </p>
                </div>
                <div>Keep up to date with my latest projects and adventures follow me now Link this to the foller</div>
                <div>
                    <NavLink>Feed</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Content</NavLink>
                    <NavLink>Guestbook</NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

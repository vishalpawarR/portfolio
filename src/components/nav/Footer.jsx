import { PhoneIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <footer className='flex justify-center items-center h-16'>
      <div>
        <a className='w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]' href="tel:+91-7411334439" target="_blank">
          <PhoneIcon className='w-5' />
        </a>
      </div>
      <div>
        <a className='w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]' href="https://wa.me/+917411334439" target="_blank">
          <img src='./icons/whatsapp.svg' alt=''  className='w-5' />
        </a>
      </div>
      <div>
        <a className='w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]' href="mailto:vishalpawarr.git@gmail.com" target="_blank">
          <img src='./icons/gmail.svg' alt=''  className='w-5' />
        </a>
      </div>
      <div>
        <a className='w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]' href="https://x.com/VishalPawar_R" target="_blank">
          <img src='./icons/x.svg' alt=''  className='w-5' />
        </a>
      </div>
      <div>
        <a className='w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]' href="https://www.linkedin.com/in/vishalpawarr/" target="_blank">
          <img src='./icons/linkedin.svg' alt=''  className='w-5' />
        </a>
      </div>
      <div>
        <a className='w-10 h-10 grid place-items-center rounded-md hover:bg-[#495057]' href="https://github.com/vishalpawarR/" target="_blank">
          <img src='./icons/github.svg' alt=''  className='w-5' />
        </a>
      </div>
    </footer>
  )
}
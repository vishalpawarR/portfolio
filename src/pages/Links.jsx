export default function Links() {
  return (
    <>
        <h1 className="mb-4 text-4xl font-bold text-white">Link me!</h1>
        <p className="mb-4">Need a link to find me somewhere? Odds are, it's here.</p>
        <ul className="flex flex-wrap gap-2 mb-8">
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="/">Website</a>
            </li>
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="tel:+91-7411334439" target="_blank">Phone Call</a>
            </li>
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="https://wa.me/+917411334439" target="_blank">Chat on WhatsApp</a>
            </li>
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="mailto:vishalpawarr.git@gmail.com" target="_blank">Email</a>
            </li>
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="https://calendly.com/vishalpawarr" target="_blank">Schedule a call</a>
            </li>
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="./resume/resume.pdf" target="_blank">Resumé</a>
            </li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold text-white">Social Media</h2>
        <ul className="flex flex-wrap gap-2  mb-8">
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="https://x.com/VishalPawar_R" target="_blank">Twitter</a>
            </li>
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="https://www.linkedin.com/in/vishalpawarr/" target="_blank">LinkedIn</a>
            </li>
        </ul>

        <h2 className="mb-4 text-3xl font-bold text-white">Code</h2>
        <ul className="flex flex-wrap gap-2 mb-8">
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="https://github.com/vishalpawarR/" target="_blank">Github</a>
            </li>
            <li className="flex">
                <a className="w-full h-full p-3 bg-[#1f2937] rounded-lg text-text-2 hover:no-underline hover:bg-none border hover:border-blue-600 hover:text-blue-600" href="https://codepen.io/vishalpawarr" target="_blank">CodePen</a>
            </li>
        </ul>
    </>
  )
}
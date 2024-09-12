export default function Tweet() {
  return (
    <div className="max-w-xl mx-auto p-4 hover:bg-[#212529]">
        <div className="flex items-center">
            <img
            className="w-12 rounded-full"
              src="./profile.webp" alt="" />
            <p className="font-semibold">Vishal ✨</p>
        </div>
        <div>
            <h2>Hello World!</h2>
            <p>This is my site where I try and post about what I'm up to and how to do things with code. You can follow along with RSS by hitting the "Follow" button up above. Or if you're only interested in stuff I wrote about, check out /writing.</p>
        </div>
    </div>
  )
}

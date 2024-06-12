export default function Tweet() {
  return (
    <div>
        <p>pinned</p>
        <div className="flex items-center">
            <img
            className="w-12 rounded-full"
             src="https://jhey.dev/media/image/enhanced/headshot-200x200.avif" alt="" />
            <p className="font-semibold">Vishal ✨</p>
            <p> • <span className="font-light text-sm text-[#868e96]">Date</span></p>
        </div>
        <p>🌴 Feelin' fresh</p>
        <div>
            <h2>Hello World!</h2>
            <p>This is my site where I try and post about what I'm up to and how to do things with code. You can follow along with RSS by hitting the "Follow" button up above. Or if you're only interested in stuff I wrote about, check out /writing.</p>
        </div>
        <div>
          <img src="https://jhey.dev/media/image/enhanced/desk-shot-750x500.avif" alt="" />
        </div>
    </div>
  )
}

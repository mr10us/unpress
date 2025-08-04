import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  return (
    <section className="bg-[radial-gradient(circle,rgba(246,_207,_255,_1)_0%,_rgba(141,_34,_161,_1)_91%)] bg-fuchsia-200 py-30 lg:py-40">
      <ExportedImage
        className="lg:w-1/3 mx-auto"
        src="/images/qrdemo.png"
        width="1920"
        height="1080"
        alt="example image"
      />
    </section>
  )
}
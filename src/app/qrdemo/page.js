import ExportedImage from "next-image-export-optimizer";

export default function Home() {
  return (
    <section className="bg-fuchsia-800 py-30 lg:py-40">
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
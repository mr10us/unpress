import ExportedImage from "next-image-export-optimizer"

export const ImageSection = () => {
  return (
    <section className="container mx-auto">
      <ExportedImage src="/images/desktop.png" width="1280" height="680" />
    </section>
  )
}
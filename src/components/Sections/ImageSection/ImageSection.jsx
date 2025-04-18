import ExportedImage from "next-image-export-optimizer"

export const ImageSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <ExportedImage className="hidden md:inline" src="/images/desktop.png" width="1280" height="680" />
      <ExportedImage className="md:hidden rounded-[20px] w-full" src="/images/mobile.png" width="375" height="667" />
    </section>
  )
}
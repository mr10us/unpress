import ExportedImage from "next-image-export-optimizer";

export const ImpactSection = () => {
  return (
    <section className="container mx-auto px-4 lg:px-0">
      <h2 className="mb-20">Impact in Numbers</h2>

      <ul className="grid gap-y-32 [&_p]:text-gray-100 [&_p]:text-base lg:[&_p]:text-xl lg:[&_p]:leading-9 [&_h3]:text-3xl lg:[&_h3]:text-5xl [&_h3]:font-semibold">
        <li className="grid lg:grid-cols-2 gap-4">
          <div className="justify-self-end">
            <h3 className="text-[#4D6A95] text-5xl font-semibold">
              Save up to
            </h3>
            <p>on news production costs</p>
          </div>
          <ExportedImage
            src="/images/impacts/impact_1.svg"
            width="700"
            height="250"
          />
        </li>
        <li className="md:grid md:grid-cols-2 grid-rows-[200px] gap-4">
          <h3 className="text-primary md:col-start-1 md:row-start-1">Publish</h3>
          <ExportedImage
            className="mb-4 md:mb-0 md:col-start-1 md:row-start-1 self-end"
            src="/images/impacts/impact_2.svg"
            width="700"
            height="400"
          />
          <div>
            <span className="text-primary text-5xl font-semibold">faster</span>
            <p>than traditional workflows.</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

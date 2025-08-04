import ExportedImage from "next-image-export-optimizer";

export const CyprusSection = () => {
  return (
    <section className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 sm:items-end">
      <div className="flex gap-4 items-end sm:items-baseline sm:flex-col">
        <ExportedImage
          src="/images/cyprus.jpeg"
          width="120"
          height="120"
          alt="example image"
        />
        <ExportedImage
          className="h-auto object-contain"
          src="/images/volirator.jpeg"
          width="120"
          height="30"
          alt="example image"
        />
      </div>
      <div className="flex flex-col gap-2 text-gray-100">
        <p>Build by graduates of Cyprus Business School (Limassol, Cyprus)</p>
        <p>Participated in The University of Limassol Ignite Accelerator</p>
      </div>
    </section>
  );
};

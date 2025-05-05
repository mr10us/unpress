import { Typewriter } from "@/components/animations/Typewriter/Typewriter";

export const Result = ({ title, content, addedAt, origin }) => {
  const formatedTime = new Date(addedAt).toGMTString();
  return (
    <div>
      <Typewriter asChild>
        <h2 className="mb-10 text-4xl lg:text-6xl font-semibold text-primary text-center">
          Result
        </h2>
      </Typewriter>

      <Typewriter speed="default" asChild>
        <div className="content card px-10 py-8 text-gray-100">
          <p>{formatedTime}</p>
          <h3 className="text-3xl">{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <p>
            Origin:{" "}
            <a href={origin} className="underline" target="_blank">
              {origin}
            </a>
          </p>
        </div>
      </Typewriter>
    </div>
  );
};

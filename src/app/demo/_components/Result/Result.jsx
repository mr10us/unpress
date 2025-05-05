export const Result = ({title, content}) => {
  return (
    <div>
      <h2 className="mb-10 text-4xl lg:text-6xl font-semibold text-primary">Result</h2>

      <div className="content card px-10 py-8">
        <h2>{title}</h2>
        {content}
      </div>
    </div>
  )
}
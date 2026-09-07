export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <h3 className="section__title">
        <span className="section__index">{index}</span>
        {title}
      </h3>
      <div className="section__body">{children}</div>
    </section>
  )
}

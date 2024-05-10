export default function EntriesList({ date, title, icon }) {
  return (
    <section className="entries-section">
      <acticle className="entries --entry-one">
        <div className="date">{date}</div>
        <div className="acticle-info">
          <h3 className="entries--title">{title}</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {icon}
          </svg>
        </div>

        <p className="article">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, quos
          corporis quo vero delectus ratione, libero quam voluptate magni
          obcaecati natus architecto nulla veritatis! Commodi placeat quaerat
          enim aliquid velit?
        </p>
      </acticle>
    </section>
  );
}

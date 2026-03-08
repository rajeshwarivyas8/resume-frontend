

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>

      <p className="testimonials-subtitle">
        Hear what our users say about us. We're always looking for ways to
        improve. If you have a positive experience with us, leave a review.
      </p>

      <div className="testimonials-cards">
        {[
          { name: "Avery Johnson", handle: "@averywrites" },
          { name: "Briar Martin", handle: "@neilstellar" },
          { name: "Jordan Lee", handle: "@jordantalks" },
        ].map((user, i) => (
          <div className="testimonial-card" key={i}>
            <div className="stars">★★★★★</div>

            <h3>{user.name}</h3>
            <span>{user.handle}</span>

            <p>
              Radiant made undercutting all of our competitors an absolute
              breeze. The experience was smooth and professional.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}



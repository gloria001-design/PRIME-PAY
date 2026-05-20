import React from 'react'
import Cards from './Props/Cards'
import '../components/Css/HomeCssFile/Review.css'

import user1 from '../assets/tunde.png'
import user2 from '../assets/chioma.png'
import user3 from '../assets/blessing.png'
import user4 from '../assets/dave.png'
import user5 from '../assets/aisha.png'
import user6 from '../assets/dave.png'

const Reviews = () => {
  const customerReviews = [
    {
      id: 1,
      imageSrc: user1,
      title: "Sarah Jenkins",
      description: "Absolutely amazing service! My clothes came back smelling fresh, perfectly folded, and right on time. Highly recommend."
    },
    {
      id: 2,
      imageSrc: user2,
      title: "Michael Torres",
      description: "Super convenient and affordable. The online booking process was seamless, and the turnaround time was exactly 24 hours."
    },
    {
      id: 3,
      imageSrc: user3,
      title: "Emily Rogers",
      description: "Great customer support and eco-friendly products. I feel safe knowing they care about the environment as much as my clothes."
    },
    {
      id: 4,
      imageSrc: user4,
      title: "David Kim",
      description: "The best laundry service I have used so far. They handle delicate clothes with absolute care. Will be a regular customer!"
    },
    {
      id: 5,
      imageSrc: user5,
      title: "Jessica Taylor",
      description: "Saved me so much time during a busy work week. The pickup and delivery drivers were incredibly polite and professional."
    },
    {
      id: 6,
      imageSrc: user6,
      title: "Marcus Vance",
      description: "Fair pricing, premium quality cleaning, and consistent updates on my order status. Five stars all around!"
    }
  ]

  return (
    <section className="reviews-section">
      <div className="reviews-container">

        <div className="reviews-header">
          <h2 className="reviews-heading">What Our Customers Say</h2>
          <p className="reviews-subheading">Real reviews from real people who trust our services daily.</p>
        </div>

        <div className="reviews-cards-grid">
          {customerReviews.map((review) => (
            <Cards
              key={review.id}
              img={review.imageSrc}
              title={review.title}
              description={review.description}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Reviews
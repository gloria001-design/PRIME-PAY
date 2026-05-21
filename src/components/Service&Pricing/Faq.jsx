import React, { useState } from 'react'
import '../Css/ServiceCssFile/Faq.css'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqData = [
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 24 to 48 hours. Express same-day service is also available if booked before 10 AM."
    },
    {
      question: "Do you handle delicate fabrics?",
      answer: "Yes, we have a specialized dry cleaning process specifically designed for delicate garments like silk, lace, and wool."
    },
    {
      question: "Which areas do you cover?",
      answer: "We currently provide pickup and delivery services across the major metropolitan areas and surrounding suburbs."
    },
    {
      question: "Do you offer same-day service?",
      answer: "Yes! Our Express Service option guarantees your laundry is washed, dried, folded, and delivered back to you on the same day."
    }
  ]

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-left">
        <span className="faq-tag">FAQ</span>
        <h2>Frequently Asked Questions</h2>
      </div>

      <div className="faq-right">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              <span>{faq.question}</span>
              <span className={`faq-arrow ${openIndex === index ? 'rotate' : ''}`}>
                v
              </span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
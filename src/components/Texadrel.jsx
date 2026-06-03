import React from 'react'

export default function Texadrel() {
  return (
    <>
    <section className="ad-section">
  <div className="ad-container">
    <div className="ad-header">
      <span className="line" />
      <h2 className="ad-title">ՏԵՂԱԴՐԵԼ ՀԱՅՏԱՐԱՐՈՒԹՅՈՒՆ</h2>
      <span className="line" />
    </div>
    <p className="ad-subtitle">
      Մուտքագրեք Ձեր տվյալները նշված դաշտերում և մենք կկապնվենք Ձեզ հետ
    </p>
    <form className="ad-form">
      <div className="input-group">
        <input type="text" placeholder="Անուն Ազգանուն" required="" />
      </div>
      <div className="input-group">
        <input type="tel" placeholder="Հեռախոսահամար" required="" />
      </div>
      <div className="input-group">
        <input type="email" placeholder="Էլ. հասցե" required="" />
      </div>
      <button type="submit" className="submit-btn">
        Ուղարկել
      </button>
    </form>
  </div>
</section>
</>
)
}

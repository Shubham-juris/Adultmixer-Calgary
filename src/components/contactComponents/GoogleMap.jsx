import React from 'react'

const GoogleMap = () => {
  return (
   <>
         {/* Google Map */}
      <section className="max-w-5xl mx-auto mb-20 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Find Us on Map
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-lg h-80">
          <iframe
            src="https://maps.google.com/maps?q=calgary&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
   </>
  )
}

export default GoogleMap
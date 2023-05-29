// //  step:
// // - making class
// // // - making object
// // // - called it so it appears in browser using loop and innerHTML
// // // - refactor the code so it implements inheritance AuthorTestimonial
// // // - refactor the code so it implements polymorphism by making class CompanyTestimonial and override get author(the key point is polymorhp implement and override)
// // // - refactor the code so it implements abstraction by making get testimonialHTML and get author throw error when the children didn't use it
// // // - refactor the code so it implements encapsulation, use setter and getter (key point is, encapsulation try to make app more secure by implementing restriction)

// // Superclass
// class Testimonial {
//   #quote = "";
//   #image = "";

//   constructor(quote, image) {
//     this.#quote = quote;
//     this.#image = image;
//   }

//   get quote() {
//     return this.#quote;
//   }

//   get image() {
//     return this.#image;
//   }

//   // This is an abstract method that subclasses will implement
//   get author() {
//     throw new Error("getAuthor() method must be implemented");
//   }

//   //   This is a polymorphic method that can take any subclasses of Testimonial
//   get testimonialHTML() {
//     return `<div class="testimonial">
//                   <img
//                        src="${this.image}"
//                        class="profile-testimonial"
//                    />
//                    <p class="quote">${this.quote}</p>
//                    <p class="author">- ${this.author}</p>
//                </div>
//            `;
//   }
// }

// // Subclass
// class AuthorTestimonials extends Testimonial {
//   #author = "";

//   constructor(author, quote, image) {
//     super(quote, image);
//     this.#author = author;
//   }

//   get author() {
//     return this.#author;
//   }
// }

// //  Subclass
// class CompanyTestimonials extends Testimonial {
//   #company = "";

//   constructor(company, quote, image) {
//     super(quote, image);
//     this.#company = company;
//   }

//   get author() {
//     return this.#company + " Company";
//   }
// }

// const testimonial1 = new AuthorTestimonials(
//   "Okelah",
//   "Keyboard Keren",
//   "https://cdn.vcgamers.com/news/wp-content/uploads/2022/05/3f91bf6de6ad4e3ca3c86bd3b46264c5.jpg.1920x1080_q100_crop-scale_optimize_upscale-1.jpg"
// );
// const testimonial2 = new AuthorTestimonials(
//   "Mobil",
//   "Mobil Gw ini Cuy!!",
//   "https://www.motogila.com/wp-content/uploads/2022/02/Wallpaper-Mobil-Keren-3d.jpg"
// );
// const testimonial3 = new CompanyTestimonials(
//   "Toyota",
//   "Desain Yang Mantap!! 🔥🔥🔥",
//   "https://wallpapercave.com/wp/wp2665733.jpg"
// );
// const testimonial4 = new CompanyTestimonials(
//   "Keyboard",
//   "Mantap!! 🔥🔥🔥",
//   "https://st.depositphotos.com/2062107/2066/i/950/depositphotos_20665461-stock-photo-3d-keyboard.jpg"
// );
// const testimonial5 = new CompanyTestimonials(
//   "Wow",
//   "Mantap!! 🔥🔥🔥",
//   "https://hackster.imgix.net/uploads/attachments/962219/1_jRqFywW0uGlTYv3G3tRY-Q.jpeg?auto=compress%2Cformat"
// );

// let testimonialData = [
//   testimonial1,
//   testimonial2,
//   testimonial3,
//   testimonial4,
//   testimonial5,
// ];
// let testimonialHTML = "";

// for (let i = 0; i < testimonialData.length; i++) {
//   testimonialHTML += testimonialData[i].testimonialHTML;
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

const testimonialData = [
  {
    author: "Bintang Tamaro",
    quote: "Naruto Dattebayo",
    image:
      "https://cdn.teknobgt.com/wp-content/Anime-Wallpaper-Naruto-Keren-3D.png.webp",
    rating: 5,
  },
  {
    author: "Bintang Tamaro",
    quote: "Naruto Dattebayo",
    image:
      "https://cdn.idntimes.com/content-images/duniaku/post/20230331/believe-it-naruto-is-coming-to-fortnite-this-november-e9ace56bd4c936cad30541fbaa18655e.jpg",
    rating: 4,
  },
  {
    author: "Bintang Tamaro",
    quote: "One Piece!",
    image:
      "https://gallery-jatim.poskota.co.id/storage/Foto/2021/1609744327_1-org.jpg",
    rating: 3,
  },
  {
    author: "Bintang Tamaro",
    quote: "Keren Cuy!",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMl9iWBGqWhb6SMmz824Yz0t4_-GdkYe-C0A&usqp=CAUg",
    rating: 2,
  },
  {
    author: "My Car",
    quote: "Mobil Gw Nih Cuy!",
    image:
      "https://www.motogila.com/wp-content/uploads/2022/02/Wallpaper-Mobil-Keren-3d-930x620.jpg",
    rating: 1,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `<div class="testimonial">
                            <img
                                src="${item.image}"
                                class="profile-testimonial"
                            />
                            <p class="quote">${item.quote}</p>
                            <p class="author">- ${item.author}</p>
                            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                        </div>
        `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  //   console.log(testimonialFiltered);

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `<div class="testimonial">
                                <img
                                    src="${item.image}"
                                    class="profile-testimonial"
                                />
                                <p class="quote">${item.quote}</p>
                                <p class="author">- ${item.author}</p>
                                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                            </div>
                        `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

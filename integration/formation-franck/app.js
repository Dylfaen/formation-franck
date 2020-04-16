// $(document).ready(function() {
//   $("#myCarousel").on("slide.bs.carousel", function(e) {
//     var $e = $(e.relatedTarget);
//     var idx = $e.index();
//     var itemsPerSlide = 3;
//     var totalItems = $(".carousel-item").length;

//     if (idx >= totalItems - (itemsPerSlide - 1)) {
//       var it = itemsPerSlide - (totalItems - idx);
//       for (var i = 0; i < it; i++) {
//         // append slides to end
//         if (e.direction == "left") {
//           $(".carousel-item")
//             .eq(i)
//             .appendTo(".carousel-inner");
//         } else {
//           $(".carousel-item")
//             .eq(0)
//             .appendTo($(this).find(".carousel-inner"));
//         }
//       }
//     }
//   });
// });








$(document).ready(function () {
  

  const collapse_toggler = $(".toggle-collapse-on-hover");
  const not_collapse_toggler = $('.link').not(".toggle-collapse-on-hover")

  const collapse = $(".collapse")

  const secondary_navbar = $("#secondary-navbar")

  const articleUrls = {
    "toggler-qualite-air": [
      "/articles?cat=1",
      "/nos-fiches-pratiques?cat=1",
      "/conseil?cat=1",
      "/produits?cat=1",
    ],
    "toggler-confort-thermique": [
      "/articles?cat=2",
      "/nos-fiches-pratiques?cat=2",
      "/conseil?cat=2",
      "/produits?cat=2",
    ],
    "toggler-pompe-chaleur": [
      "/articles?cat=3",
      "/nos-fiches-pratiques?cat=3",
      "/conseil?cat=3",
      "/produits?cat=3",
    ],
    "toggler-refrigeration": [
      "/articles?cat=4",
      "/nos-fiches-pratiques?cat=4",
      "/conseil?cat=4",
      "/produits?cat=4",
    ]
  };


  // const loadArticles = function() {
  //   return new Promise(function(resolve, reject) {


  //   //Charger les urls ici à la place sur setTimeout
  //     setTimeout(function() {
  //       resolve({
  //         "toggler-qualite-air": [
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //         ],
  //         "toggler-confort-thermique": [
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //         ],
  //         "toggler-pompe-chaleur": [
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //         ],
  //         "toggler-refrigeration": [
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //           [
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 1"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 2"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 3"
  //             },
  //             {
  //               img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw33o_yz4QdnUCMl9tHcvbpU&ust=1585156384641000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCe2uvNs-gCFQAAAAAdAAAAABAD",
  //               titre: "Titre 4"
  //             }
  //           ],
  //         ],
  //       })
  //     }, 1000)
  //   })

  // }


  //Ouvre le collapse
  const openCollapse = function () {
    //On supprime collpase qui cache le collapse
    $('#detail-nav-item').removeClass("collapse")
    //On ajoute collapse.show qui affiche le collapse
    $('#detail-nav-item').addClass("collapse.show")
  }

  const closeCollapse = function () {
    //On ajoute collapse qui cache le collapse
    $('#detail-nav-item').addClass("collapse")
    //On supprime collapse.show qui affiche le collapse
    $('#detail-nav-item').removeClass("collapse.show")
  }

  const switchArticles = function (event) {
    let currentTogglerId = event.currentTarget.id;
    console.log("currentTogglerId", currentTogglerId)
  }


  // let cardModel = $.get("card.html")

  // const createArticle = function(article) {

  //   let cardElement = cardModel.clone();

  //   cardElement.find('.card-title').text(article.titre)
  //   cardElement.find('.card-img-top').src(article.img)

  //   return cardElement;
  // }

  // const createArticlesForToggler = function(articles, togglerKey, menuItemIndex) {
  //   let articleListToCreate = articles[togglerKey][menuItemIndex];

  //   let articleCards = articleListToCreate.map(function(article) {
  //     return createArticle(article)
  //   })

  //   return articleCards
  // }

  // const displayArticleCardsInDOM = function(articleCards) {
  //   collapse.find("#article-column-1").html(articleCards[0]);
  //   collapse.find("#article-column-2").html(articleCards[1]);
  //   collapse.find("#article-column-3").html(articleCards[2]);
  //   collapse.find("#article-column-4").html(articleCards[3]);
  // }


  collapse_toggler.mouseenter(openCollapse)
  collapse_toggler.mouseenter(switchArticles)


  const showColor = function(event) {
    hideAllColor();
    $(event.currentTarget).addClass("colored")
  } 

  const hideColor = function(event) {
    $(event.currentTarget).removeClass("colored")
  } 

  const hideAllColor = function() {
    collapse_toggler.removeClass("colored")
  }

  collapse_toggler.mouseenter(showColor)




  not_collapse_toggler.mouseenter(closeCollapse)

  secondary_navbar.mouseleave(closeCollapse)
  secondary_navbar.mouseleave(hideAllColor)

  

})

$(document).ready(function () {

  let location = window.location

  console.log("location", location)

  let urls = [
    {
      pathToCheck: "/ui/thermique",
      idToActivate: "#toggler-confort-thermique",
      type: "page",
      color: "blue"
    },
    {
      pathToCheck: "/ui/thermique-articles",
      idToActivate: "#sub-page-button-articles",
      type: "sub-page",
      color: "blue"
    },
    {
      pathToCheck: "/ui/thermique-fiche",
      idToActivate: "#sub-page-button-fiches",
      type: "sub-page",
      color: "blue"

    },
    {
      pathToCheck: "/ui/thermique-produits",
      idToActivate: "#sub-page-button-produits",
      type: "sub-page",
      color: "blue"
    },
    {
      pathToCheck: "/ui/ventilation",
      idToActivate: "#toggler-qualite-air",
      type: "page",
      color: "green"

    },
    {
      pathToCheck: "/ui/ventilation-articles",
      idToActivate: "#sub-page-button-articles",
      type: "sub-page",
      color: "green"

    },
    {
      pathToCheck: "/ui/ventilation-fiche",
      idToActivate: "#sub-page-button-fiches",
      type: "sub-page",
      color: "green"

    },
    {
      pathToCheck: "/ui/ventilation-produits",
      idToActivate: "#sub-page-button-produits",
      type: "sub-page",
      color: "green"
    }
  ];

  urls.forEach(function(url) {

    let property
    if(url.type === "page") {
      property = "border-color"
    } else {
      property = "background-color"
    }

    if(location.pathname.includes(url.pathToCheck)) {

      $(url.idToActivate).css(property, url.color)
    } else {
      $(url.idToActivate).css(property, "transparent")
    }
  })

})

/**
 * Les solutions possibles pour rendre actif un élement du menu quand il est affiché :
 * 
 * Il faut que l'information de l'onglet actif (et du sous-onglet actif) soit contenu dans l'url
 * 
 * */



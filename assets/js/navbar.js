document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll('.dropdown-menu').forEach(function (element) {
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  })


  if (window.innerWidth < 992) {
    document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
      everydropdown.addEventListener('hidden.bs.dropdown', function () {
        this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
          everysubmenu.style.display = 'none';
        });
      })
    });

    document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
      element.addEventListener('click', function (e) {

        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains('submenu')) {
          e.preventDefault();
          console.log(nextEl);
          if (nextEl.style.display == 'block') {
            nextEl.style.display = 'none';
          } else {
            nextEl.style.display = 'block';
          }

        }
      });
    })
  }
});







// $(document).ready(function () {

//   $("input[type='radio']").click(function () {
//     var sim = $("input[type='radio']:checked").val();
//     //alert(sim);
//     if (sim < 3) { $('.myratings').css('color', 'red'); $(".myratings").text(sim); } else { $('.myratings').css('color', 'green'); $(".myratings").text(sim); }
//   });
// });



/* review section */

// let fileInput = document.getElementById("file-input");
// let imageContainer = document.getElementById("iamges");
// let numOfFiles = document.getElementById("num-of-files");

// function preview() {
//     imageContainer.innerHTML = "";
//     numOfFiles.textContent = `${fileInput.length} Files Selected`;

//     for(i of fileInput.files) {
//         let reader = new FileReader();
//         let figure = document.createElement("figure");
//         let figCap = document.createElement("figcaption");

//         figCap.innerText = i.name;
//         figure.appendChild(figCap);

//         reader.onload=()=> {
//             let img = document.createElement("img");
//             img.setAttribute("src",reader.result);
//             figure.insertBefore(img, figCap);
//         }
//         imageContainer.appendChild(figure);
//         reader.readAsDataURL(i)

//     }
// }

// const image_input = document.querySelector(".image_input");

// function selectImage() {
//   image_input.click();
// }

// image_input.addEventListener("change", function () {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => {
//     uploaded_image = reader.result;
//     document.querySelector(".display_image").style.backgroundImage = `url(${uploaded_image})`;
//   });
//   reader.readAsDataURL(this.files[0]);
// })


function PreviewImageBeforeUpload (id) {
  document.querySelector("#"+id).addEventListener("change", function(e)  {
    if(e.target.files.lenght==0) {
      return;
    }
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);
    document.querySelector("#"+id+"-preview div").innerHTML=file.name;;
    document.querySelector("#"+id+"-preview img").src = url;
  })
}

PreviewImageBeforeUpload(image_input1);
PreviewImageBeforeUpload(image_input2);
PreviewImageBeforeUpload(image_input3);

/* review section end */


// slider

$('.responsive').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

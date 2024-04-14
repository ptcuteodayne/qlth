$(document).ready(function () {
    if ($(".intro").length) {
      $(".intro").each(function (inx, bg) {
        if (window.innerWidth > 1023) {
          // desktop
          $(bg).css("background-image", `url('${$(bg).attr("image-desktop")}')`);
        } else {
          // mobile
          if ($(bg).attr("image-mobile")) {
            $(bg).css("background-image", `url('${$(bg).attr("image-mobile")}')`);
          } else {
            $(bg).css("background-image", `url('${$(bg).attr("image-desktop")}')`);
          }
        }
      });
    }
    if ($(".header__dropdown").length && window.innerWidth < 1024) {
      $(".header__item .js_icon_dropdown").each(function (inx, dropdown) {
        $(dropdown).parents(".header__item").find(".header__dropdown").slideUp();
        $(dropdown).click(function (e) {
          e.preventDefault();
          $(dropdown).parents(".header__item").find(".header__dropdown").slideToggle();
          $(dropdown).toggleClass("active");
        });
      });
    }
    if ($(".header__language").length) {
      $(".header__language__current").click(function (e) {
        e.preventDefault();
        $(".header__language__list").slideToggle();
      });
    }
    if ($(".header__bars").length) {
      $(".header__bars").click(function (e) {
        e.preventDefault();
        $(".header__drawer").toggleClass("active");
        $(".header__language__list").slideUp();
      });
      $(".header__drawer__close").click(function (e) {
        e.preventDefault();
        $(".header__drawer").removeClass("active");
        $(".header__language__list").slideUp();
      });
    }
    if ($(".intro__link").length) {
      $(".intro__link").click(function (e) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: $(".about").offset().top,
          },
          100
        );
      });
    }
    if ($(".service__slider").length) {
      $(".service__slider").slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 700,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              centerMode: true,
              centerPadding: "30% 0 0",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if ($(".feedback__slider").length) {
      $(".feedback__slider").slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2000,
        speed: 700,
        swipeToSlide: true,
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: "20% 0 0",
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }
    if ($(".popup").length) {
      if($("#checkShow").length){
        if($("#checkShow").val() == 0){
          $(".modal").addClass("active");
          $(".popup").addClass("active");
          $(".popup").addClass("block");
          $("body").addClass("prevent-scroll");
        }
      }
      $(".popup__close").click(function (e) {
        e.preventDefault();
        $(".modal").removeClass("active");
        $(".popup").removeClass("active");
        $("body").removeClass("prevent-scroll");
      });
    }
    if ($(".header__bell").length && window.innerWidth < 1024) {
      $(".header__bell").click(function (e) {
        e.preventDefault();
        $(".notification").addClass("active");
      });
      $(".notification__close").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".notification").removeClass("active");
      });
    }
    if ($(".faq__list").length) {
      $(".faq__item__top").click(function (e) {
        e.preventDefault();
        $(this).parents(".faq__item").find(".faq__item__body").slideToggle();
        $(this).find("i").toggleClass("active");
      });
    }
  
    if ($(".detail-service__image").length) {
      $(".detail-service__image__for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: ".detail-service__image__nav",
        prevArrow: '<button class="slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
            },
          },
        ],
      });
      $(".detail-service__image__nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".detail-service__image__for",
        focusOnSelect: true,
      });
    }
    if ($(".faq__search").length) {
      var timeout = null;
      $(".faq__search")[0].addEventListener("input", function (e) {
        e.preventDefault();
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          const value = e.target.value
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
          $(".faq__item").each(function (inx, item) {
            if (
              $(item)
                .find(".faq__item__top")
                .text()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .includes(value)
            ) {
              item.style.display = "block";
            } else {
              item.style.display = "none";
            }
          });
        }, 300);
      });
    }
  
    const arrayBgImage = [
      ".service__slide__image",
      ".blog__image",
      ".intro",
      ".blog",
      ".faq",
    ]
    arrayBgImage.forEach(function(bg){
      if ($(bg).length) {
        $(bg).each(function (inx, image) {
          $(image).attr(
            "style",
            `background-image: ${$(image).attr("style").substring(18).replaceAll(" ", "%20").replaceAll("`", "")}`
          );
        });
      }
    })
  
  
    // set main
    const heightMain = window.innerHeight - $("footer").height();
    document.querySelector("main").style.minHeight = `${heightMain}px`;
    if (document.querySelector(".faq")) {
      document.querySelector(".faq").style.minHeight = `${heightMain}px`;
    }
    $(window).resize(function () {
      const heightMain = window.innerHeight - $("footer").height();
      document.querySelector("main").style.minHeight = `${heightMain}px`;
      if (document.querySelector(".faq")) {
        document.querySelector(".faq").style.minHeight = `${heightMain}px`;
      }
    });
  
  
    // if ($(".js_comment").length) {
    //   $(".js_comment").each(function (inx, comment) {
    //     $(comment).click(function (e) {
    //       e.preventDefault();
    //       $(comment).toggleClass("active");
    //       $(".js_reply").eq(inx).toggleClass("active");
    //     });
    //   });
    // }
    // if ($(".comment-list textarea").length) {
    //   $(".comment-list textarea").each(function (inx, reply) {
    //     reply.addEventListener("keydown", function (event) {
    //       if (event.keyCode === 13 && !event.shiftKey) {
    //         // Enter key pressed, submit form
    //         event.preventDefault();
    //         var test = 1;
    //         $(reply)
    //           .parents(".js_reply")
    //           .find("input, textarea")
    //           .each(function (inx, input) {
    //             const validityState = input.validity;
    //             if (validityState.valueMissing) {
    //               input.setCustomValidity(`${$(input).data("invalid")}`);
    //               input.reportValidity();
    //               test = 0;
    //               return false;
    //             } else {
    //               input.setCustomValidity("");
    //               input.reportValidity();
    //             }
    //           });
    //         if (test == 1) {
    //           $(reply).parents(".js_reply").submit();
    //         }
    //         // Call your submit function here
    //       } else if (event.keyCode === 13 && event.shiftKey) {
    //         // Shift+Enter key pressed, insert line break
    //         const startPos = this.selectionStart;
    //         const endPos = this.selectionEnd;
    //         const value = this.value;
    //         this.value = value.substring(0, startPos) + "\n" + value.substring(endPos, value.length);
    //         this.selectionStart = this.selectionEnd = startPos + 1;
    //         event.preventDefault();
    //       }
    //     });
    //   });
    // }
    function getRandomNumber (){
      const random = Math.floor(Math.random() * 10000).toString();
      var code = "";
      switch (random.length) {
        case 1:
          code = `000${random}`;
          break;
        case 2:
          code = `00${random}`;
          break;
        case 3:
          code = `0${random}`;
          break;
        default:
          code = random;
          break;
      }
      return code;
    }
    if ($(".comment").length) {
      $(".comment__code").val(getRandomNumber());
      if($(".comment__recode").length){
        $(".comment__recode").click(function (e) { 
          e.preventDefault();
          $(".comment__code").val(getRandomNumber());
          if($(".comment__accuracy.active").length){
            recode()
          }
        });
      }
    }
    if ($(".comment__rating .comment__stars span").length) {
      let current = $(".comment__rating .comment__stars span.checked").length;
      $(".comment__rating .comment__stars span").each(function (inx, star) {
        $(star).click(function (e) {
          e.preventDefault();
          if (current != $(star).data("value")) {
            if ($(star).data("value") > current) {
              for (var i = current; i < $(star).data("value"); i++) {
                $(".comment__rating .comment__stars span").eq(i).addClass("checked");
              }
            } else {
              for (var i = current; i >= $(star).data("value"); i--) {
                $(".comment__rating .comment__stars span").eq(i).removeClass("checked");
              }
            }
            current = $(star).data("value");
            $('input[name="rating"]').val(current);
          }
        });
      });
    }
    // if ($(".comment input[name='code']").length) {
    //   $(".comment input[name='code']")[0].addEventListener("input", function (e) {
    //     e.preventDefault();
    //     if (e.target.value == $(".comment__code").val()) {
    //       document.querySelector(".comment__submit").disabled = false;
    //     } else {
    //       document.querySelector(".comment__submit").disabled = true;
    //     }
    //   });
    // }
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    var timeTotype = null
    var timeoutChange = null
    function recode(){
      if(timeoutChange){
        clearTimeout(timeoutChange)
        clearInterval(timeTotype)
      }
      let timer = 60;
      timeTotype =  setInterval(()=>{
        $(".comment__accuracy").find("p").text(`${timer}s`)
        timer--
      }, 1000)
       timeoutChange = setTimeout(()=>{
        if(timeTotype){
          clearInterval(timeTotype)
          $(".comment__code").val(getRandomNumber());
          recode()
        }
      }, parseInt(`${timer}000`))
    }
    $(".comment__submit").click(function () {
      if ($(".comment #full-name, .comment #email, .comment #code, .comment #content").length) {
        $(".comment #full-name, .comment #email, .comment #code , .comment #content").each(function (inx, input) {
          const validityState = input.validity;
          if (validityState.valueMissing) {
            input.setCustomValidity(`${$(input).data("invalid")}`);
            input.reportValidity();
            return false;
          } else {
            if($(input).attr("name") === "email"){
              if(validateEmail($(input).val())){
                input.setCustomValidity("");
                input.reportValidity();
              }else{
                input.setCustomValidity(`${$(input).data("invalid")}`);
                input.reportValidity();
                return false;
              }
            }else if($(input).attr("name") === "code"){
              if($(input).val() === $(".comment__code").val()){
                input.setCustomValidity("");
                input.reportValidity();
              }else{
                input.setCustomValidity(`${$(input).data("invalid")}`);
                input.reportValidity();
                $(".comment__accuracy").addClass("active");
                $(".comment__code").val(getRandomNumber());
  
                
                recode()
                
                return false;
              }
            }
            else{
              input.setCustomValidity("");
              input.reportValidity();
            }
          }
        });
      }
      // if ($(".comment #fullname,.comment #email-mailbox,.comment #content-send").length) {
      //   $(".comment #fullname,.comment #email-mailbox,.comment #content-send").each(function (inx, input) {
      //     const validityState = input.validity;
      //     if (validityState.valueMissing) {
      //       input.setCustomValidity(`${$(input).data("invalid")}`);
      //       input.reportValidity();
      //       return false;
      //     } else {
      //       input.setCustomValidity("");
      //       input.reportValidity();
      //     }
      //   });
      // }
    });
    if ($(".comment-list__parent > .comment-item").length) {
      let counterParent = $(".comment-list__parent > .comment-item").length;
      if (counterParent < 8) {
        for (let index = 0; index < counterParent; index++) {
          $(".comment-list__parent > .comment-item").eq(index).addClass("active");
        }
      } else {
        let amount = 8;
        for (let index = 0; index < amount; index++) {
          $(".comment-list__parent > .comment-item").eq(index).addClass("active");
        }
        if ($(".js_comment_parent").length) {
          $(".js_comment_parent").addClass("active");
          $(".js_comment_parent").click(function () {
            $(".comment-list__parent > .comment-item.active").each(function (inx, active) {
              $(active).removeClass("active");
            });
            if ($(".js_comment_parent").text().includes("Xem thêm")) {
              for (let index = 0; index < amount + 8; index++) {
                $(".comment-list__parent > .comment-item").eq(index).addClass("active");
              }
              amount += 8;
              if (amount >= counterParent) {
                $(".js_comment_parent").text("Thu gọn");
              }
            } else {
              for (let index = 0; index < 4; index++) {
                $(".comment-list__parent > .comment-item").eq(index).addClass("active");
              }
              amount = 8;
              $(".js_comment_parent").text("Xem thêm");
              $("html, body").animate(
                {
                  scrollTop: $(".js_comment_parent").offset().top - window.innerHeight + 60,
                },
                100
              );
            }
          });
        }
      }
  
      // $(".comment-list__parent > .comment-item").each(function (inx, comment) {
      //   $(comment)
      //     .find(".comment-item__answer")
      //     .click(function () {
      //       $(comment).find(".comment-list__child").toggleClass("active");
      //       // child --- start
      //       let counterChild = $(comment).find(".comment-list__child").find(".comment-item").length;
      //       if (counterChild < 8) {
      //         for (let index = 0; index < counterChild; index++) {
      //           $(comment).find(".comment-list__child").find(".comment-item").eq(index).addClass("active");
      //         }
      //       } else {
      //         let amount = 8;
      //         for (let index = 0; index < amount; index++) {
      //           $(comment).find(".comment-list__child").find(".comment-item").eq(index).addClass("active");
      //         }
      //         if ($(comment).find(".js_comment_child").length) {
      //           $(comment).find(".js_comment_child").addClass("active");
      //           $(comment)
      //             .find(".js_comment_child")
      //             .click(function () {
      //               $(comment)
      //                 .find(".comment-list__child")
      //                 .find(".comment-item.active")
      //                 .each(function (inx, active) {
      //                   $(active).removeClass("active");
      //                 });
      //               if ($(comment).find(".js_comment_child").text().includes("Xem thêm")) {
      //                 for (let index = 0; index < amount + 4; index++) {
      //                   $(comment).find(".comment-list__child").find(".comment-item").eq(index).addClass("active");
      //                 }
      //                 amount += 8;
      //                 if (amount >= counterChild) {
      //                   $(comment).find(".js_comment_child").text("Thu gọn");
      //                 }
      //               } else {
      //                 for (let index = 0; index < 4; index++) {
      //                   $(comment).find(".comment-list__child").find(".comment-item").eq(index).addClass("active");
      //                 }
      //                 amount = 8;
      //                 $(comment).find(".js_comment_child").text("Xem thêm");
      //                 $("html, body").animate(
      //                   {
      //                     scrollTop: $(comment).find(".js_comment_child").offset().top - window.innerHeight + 60,
      //                   },
      //                   100
      //                 );
      //               }
      //             });
      //         }
      //       }
      //       // child --- end
      //     });
      // });
    }
    if ($(".comment-item__avatar").length) {
      function getRandomBrightColor() {
        var r = Math.floor(Math.random() * 128) + 128;
        var g = Math.floor(Math.random() * 128) + 128;
        var b = Math.floor(Math.random() * 128) + 128;
        return "#" + r.toString(16) + g.toString(16) + b.toString(16);
      }
      $(".comment-item__avatar").each(function (inx, avatar) {
        avatar.style.backgroundColor = getRandomBrightColor();
      });
    }
  
    // effect text
    gsap.registerPlugin(ScrollTrigger);
  
    const effectBegin = [
      // {
      //   element: ".slide__head__description",
      //   x: 0,
      //   y: 100,
      //   delay: 0.9,
      // },
      {
        element: ".intro__link",
        x: 0,
        y: 100,
        delay: 0.5,
      },
    ];
    effectBegin.forEach(function (item) {
      if (document.querySelectorAll(item.element).length) {
        document.querySelectorAll(item.element).forEach(function (element) {
          gsap.from(element, {
            opacity: 0,
            x: item.x,
            y: item.y,
            delay: item.delay,
            duration: 1,
          });
        });
      }
    });
    const effectAll = [
      // {
      //   element: ".customers-mobile__block",
      //   x: 0,
      //   y: 100,
      //   delay: 0.3,
      // },
      {
        element: ".intro__sub",
        x: 0,
        y: 100,
        delay: 0.3,
      },
      {
        element: ".no-product",
        x: 0,
        y: 100,
        delay: 0.4,
      },
      {
        element: ".intro__heading",
        x: 0,
        y: 100,
        delay: 0.4,
      },
      {
        element: ".intro__description",
        x: 0,
        y: 100,
        delay: 0.5,
      },
  
      {
        element: ".service__slider",
        x: 0,
        y: 100,
        delay: 0.6,
      },
      {
        element: ".footer__heading",
        x: 0,
        y: 100,
        delay: 0.3,
      },
      {
        element: ".footer__map",
        x: 0,
        y: 100,
        delay: 0.4,
      },
      {
        element: ".breadcrumb",
        x: 0,
        y: 100,
        delay: 0.3,
      },
      {
        element: ".service__heading",
        x: 0,
        y: 100,
        delay: 0.4,
      },
      {
        element: ".detail-service__name",
        x: 0,
        y: 100,
        delay: 0.3,
      },
      {
        element: ".detail-service__image",
        x: 0,
        y: 100,
        delay: 0.4,
      },
      {
        element: ".detail-service__body",
        x: 0,
        y: 100,
        delay: 0.3,
      },
      {
        element: ".blog__list",
        x: 0,
        y: 100,
        delay: 0.3,
      },
      {
        element: ".detail-blog__heading",
        x: 0,
        y: 100,
        delay: 0.4,
      },
      {
        element: ".detail-blog__body",
        x: 0,
        y: 100,
        delay: 0.4,
      },
      {
        element: ".faq__heading",
        x: 0,
        y: 100,
        delay: 0.3,
      },
      {
        element: ".faq__search",
        x: 0,
        y: 100,
        delay: 0.4,
      },
      {
        element: ".faq__devide",
        x: 0,
        y: 100,
        delay: 0.5,
      },
      {
        element: ".faq__list",
        x: 0,
        y: 100,
        delay: 0.6,
      },
      {
        element: ".contact__heading",
        x: 0,
        y: 100,
        delay: 0.3,
      },
      {
        element: ".feedback__slider",
        x: 0,
        y: 100,
        delay: 0.5,
      },
      {
        element: ".bg-white",
        x: 0,
        y: 100,
        delay: 0.3,
      },
    ];
    effectAll.forEach(function (item) {
      if (document.querySelectorAll(item.element).length) {
        document.querySelectorAll(item.element).forEach(function (element) {
          gsap.from(element, {
            opacity: 0,
            x: item.x,
            y: item.y,
            delay: item.delay,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              end: "top 100px",
              // markers: true,
            },
          });
        });
      }
    });
  
    const effectAllHaveStagger = [
      // {
      //   parent: ".foot__socials",
      //   element: ".foot__socials li",
      //   x: 0,
      //   y: 100,
      //   stagger: 0.2,
      //   delay: 0,
      // },
      {
        parent: ".contact__list",
        element: ".contact__item",
        x: 0,
        y: 100,
        stagger: 0.2,
        delay: 0,
      },
    ];
    effectAllHaveStagger.forEach(function (item) {
      if (document.querySelectorAll(item.element))
        gsap.from(item.element, {
          opacity: 0,
          x: item.x,
          y: item.y,
          delay: item.delay,
          stagger: item.stagger,
          duration: 1,
          scrollTrigger: {
            trigger: item.parent,
            start: "top 100%",
            end: "top 100px",
            // markers: true,
          },
        });
    });
  });
  
  
  //added 12/04/2023
  document.querySelectorAll(".like_cmt").forEach((e) => {
    e.addEventListener("click", function () {
      let dataId = e.getAttribute("data-id");
      let class_disableLike = e.classList.contains("active");
      let op = "request-like";
      let action = "";
      if (class_disableLike == true) {
        action = "decrease";
        $.ajax({
          type: "post",
          url: "/ajax.php",
          data: { id: dataId, op: op, action: action },
          dataType: "json",
          success: function (response) {
            if (response.success == 1) {
              let div_cmtItemResult = document.querySelector(".like-increase-" + dataId + "");
              div_cmtItemResult.innerHTML = response.like;
              e.classList.remove("active");
            }
          },
        });
      } else {
        action = "increase";
        $.ajax({
          type: "post",
          url: "/ajax.php",
          data: { id: dataId, op: op, action: action },
          dataType: "json",
          success: function (response) {
            if (response.success == 1) {
              let div_cmtItemResult = document.querySelector(".like-increase-" + dataId + "");
              div_cmtItemResult.innerHTML = response.like;
              e.classList.add("active");
            }
          },
        });
      }
    });
  });
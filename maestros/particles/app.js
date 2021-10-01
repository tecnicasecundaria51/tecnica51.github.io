particlesJS(
    {
        "particles": {
          "number": {
            "value": 100,
            "density": {
              "enable": false,
              "value_area": 800
            }
          },
          "color": {
            "value": "#fff"
          },
          "shape": {
            "type": "image",
            "stroke": {
              "width": 2,
              "color": "#dcd5d5"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/hoja.png",
              "width": 500,
              "height": 1000
            }
          },
          "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 6.979103266382638,
              "opacity_min": 1,
              "sync": true
            }
          },
          "size": {
            "value": 20,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 80.12050123385578,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 2
          },
          "move": {
            "enable": true,
            "speed": 4,
            "direction": "bottom-left",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "repulse"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 0.5
              }
            },
            "bubble": {
              "distance": 255.62994522215476,
              "size": 10,
              "duration": 10,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }
);
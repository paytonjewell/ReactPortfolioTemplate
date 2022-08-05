import React, {useState, useRef} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const spaceMoginOpts = {
   "autoPlay": true,
   "backgroundMask": {
      "composite": "destination-out",
      "cover": {
         "color": {
            "value": "#fff"
         },
         "opacity": 1
      },
      "enable": false
   },
   "fullScreen": {
      "enable": true,
      "zIndex": 0
   },
   "detectRetina": true,
   "duration": 0,
   "fpsLimit": 120,
   "interactivity": {
      "detectsOn": "window",
      "events": {
         "onClick": {
            "enable": false,
            "mode": "repulse"
         },
         "onDiv": {
            "selectors": [],
            "enable": false,
            "mode": [],
            "type": "circle"
         },
         "onHover": {
            "enable": false,
            "mode": "bubble",
            "parallax": {
               "enable": false,
               "force": 2,
               "smooth": 10
            }
         },
         "resize": true
     },
     "modes": {
       "attract": {
         "distance": 200,
         "duration": 0.4,
         "easing": "ease-out-quad",
         "factor": 1,
         "maxSpeed": 50,
         "speed": 1
       },
       "bounce": {
         "distance": 200
       },
       "bubble": {
         "distance": 250,
         "duration": 2,
         "mix": false,
         "opacity": 0,
         "size": 0,
         "divs": {
           "distance": 200,
           "duration": 0.4,
           "mix": false,
           "selectors": []
         }
       },
       "connect": {
         "distance": 80,
         "links": {
           "opacity": 0.5
         },
         "radius": 60
       },
       "grab": {
         "distance": 400,
         "links": {
           "blink": false,
           "consent": false,
           "opacity": 1
         }
       },
       "light": {
         "area": {
           "gradient": {
             "start": {
               "value": "#ffffff"
             },
             "stop": {
               "value": "#000000"
             }
           },
           "radius": 1000
         },
         "shadow": {
           "color": {
             "value": "#000000"
           },
           "length": 2000
         }
       },
       "push": {
         "default": true,
         "groups": [],
         "quantity": 4
       },
       "remove": {
         "quantity": 2
       },
       "repulse": {
         "distance": 400,
         "duration": 0.4,
         "factor": 100,
         "speed": 1,
         "maxSpeed": 50,
         "easing": "ease-out-quad",
         "divs": {
           "distance": 200,
           "duration": 0.4,
           "factor": 100,
           "speed": 1,
           "maxSpeed": 50,
           "easing": "ease-out-quad",
           "selectors": []
         }
       },
       "slow": {
         "factor": 3,
         "radius": 200
       },
       "trail": {
         "delay": 1,
         "pauseOnStop": false,
         "quantity": 1
       }
     }
   },
   "manualParticles": [],
   "motion": {
     "disable": false,
     "reduce": {
       "factor": 4,
       "value": true
     }
   },
   "particles": {
      "bounce": {
         "horizontal": {
            "random": {
               "enable": false,
               "minimumValue": 0.1
            },
            "value": 1
         },
         "vertical": {
            "random": {
            "enable": false,
            "minimumValue": 0.1
            },
            "value": 1
         }
      },
      "collisions": {
         "bounce": {
            "horizontal": {
               "random": {
                  "enable": false,
                  "minimumValue": 0.1
               },
               "value": 1
            },
            "vertical": {
               "random": {
                  "enable": false,
                  "minimumValue": 0.1
               },
               "value": 1
            }
         },
         "enable": false,
         "mode": "bounce",
         "overlap": {
            "enable": true,
            "retries": 0
         }
      },
      "color": {
         "value": "#ffffff",
         "animation": {
            "h": {
               "count": 0,
               "enable": false,
               "offset": 0,
               "speed": 1,
               "decay": 0,
               "sync": true
            },
            "s": {
               "count": 0,
               "enable": false,
               "offset": 0,
               "speed": 1,
               "decay": 0,
               "sync": true
            },
            "l": {
               "count": 0,
               "enable": false,
               "offset": 0,
               "speed": 1,
               "decay": 0,
               "sync": true
            }
         }
      },
      "destroy": {
         "mode": "none",
         "split": {
            "count": 1,
            "factor": {
               "random": {
                  "enable": false,
                  "minimumValue": 0
               },
               "value": 3
            },
            "rate": {
               "random": {
                  "enable": false,
                  "minimumValue": 0
               },
               "value": {
                  "min": 4,
                  "max": 9
               }
            },
            "sizeOffset": true
         }
      },
      "gradient": [],
      "groups": {},
      "links": {
         "blink": false,
         "color": {
            "value": "#ffffff"
         },
         "consent": false,
         "distance": 150,
         "enable": false,
         "frequency": 1,
         "opacity": 0.4,
         "shadow": {
            "blur": 5,
            "color": {
               "value": "#000"
            },
            "enable": false
         },
         "triangles": {
            "enable": false,
            "frequency": 1
         },
         "width": 1,
         "warp": false
      },
      "move": {
         "angle": {
            "offset": 0,
            "value": 90
         },
         "attract": {
            "distance": 200,
            "enable": false,
            "rotate": {
               "x": 600,
               "y": 600
            }
         },
         "center": {
            "x": 50,
            "y": 50,
            "radius": 0
         },
         "decay": 0,
         "distance": {},
         "direction": "none",
         "drift": 0,
         "enable": true,
         "gravity": {
            "acceleration": 9.81,
            "enable": false,
            "inverse": false,
            "maxSpeed": 50
         },
         "path": {
            "clamp": true,
            "delay": {
               "random": {
                  "enable": false,
                  "minimumValue": 0
               },
               "value": 0
            },
            "enable": false,
            "options": {}
         },
         "outModes": {
            "default": "out",
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
         },
         "random": true,
         "size": false,
         "speed": 1,
         "spin": {
            "acceleration": 0,
            "enable": false
         },
         "straight": false,
         "trail": {
            "enable": false,
            "length": 10,
            "fillColor": {
               "value": "#000000"
            }
         },
         "vibrate": false,
         "warp": false
      },
      "number": {
         "density": {
            "enable": true,
            "area": 800,
            "factor": 1000
         },
         "limit": 0,
         "value": 160
      },
      "opacity": {
         "random": {
            "enable": true,
            "minimumValue": 0.1
         },
         "value": {
            "min": 0,
            "max": 1
         },
         "animation": {
            "count": 0,
            "enable": true,
            "speed": 1,
            "decay": 0,
            "sync": false,
            "destroy": "none",
            "startValue": "random",
            "minimumValue": 0
         }
      },
      "reduceDuplicates": false,
      "repulse": {
         "random": {
            "enable": false,
            "minimumValue": 0
         },
         "value": 0,
         "enabled": false,
         "distance": 1,
         "duration": 1,
         "factor": 1,
         "speed": 1
      },
      "rotate": {
         "random": {
            "enable": false,
            "minimumValue": 0
         },
         "value": 0,
         "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false
         },
         "direction": "clockwise",
         "path": false
      },
      "shadow": {
         "blur": 0,
         "color": {
            "value": "#000"
         },
         "enable": false,
         "offset": {
            "x": 0,
            "y": 0
         }
      },
      "shape": {
         "options": {},
         "type": "circle"
      },
      "size": {
         "random": {
            "enable": true,
            "minimumValue": 1
         },
         "value": {
            "min": 1,
            "max": 3
         },
         "animation": {
            "count": 0,
            "enable": false,
            "speed": 4,
            "decay": 0,
            "sync": false,
            "destroy": "none",
            "startValue": "random",
            "minimumValue": 0.3
         }
      },
      "stroke": {
         "width": 0
      },
      "zIndex": {
         "random": {
            "enable": false,
            "minimumValue": 0
         },
         "value": 0,
         "opacityRate": 1,
         "sizeRate": 1,
         "velocityRate": 1
      }
   },
   "pauseOnBlur": true,
   "pauseOnOutsideViewport": true,
   "responsive": [],
   "style": {},
   "themes": [],
   "zLayers": 100,
   emitters: {
      direction: 'top-right',
      position: {
         y: 55,
         x: -30
      },
      rate: {
         delay: 7,
         quantity: 1
      },
      size: {
         width: 0,
         height: 0
      },
      particles: {
         shape: {
            type: "images",
            options: {
               images: [
                  {
                     src: "https://particles.js.org/images/amongus_blue.png",
                     width: 205,
                     height: 267
                  },
                  {
                     src: "https://particles.js.org/images/amongus_cyan.png",
                     width: 207,
                     height: 265
                  },
                  {
                     src: "https://particles.js.org/images/amongus_green.png",
                     width: 204,
                     height: 266
                  },
                  {
                     src: "https://particles.js.org/images/amongus_lime.png",
                     width: 206,
                     height: 267
                  },
                  {
                     src: "https://particles.js.org/images/amongus_orange.png",
                     width: 205,
                     height: 265
                  },
                  {
                     src: "https://particles.js.org/images/amongus_pink.png",
                     width: 205,
                     height: 265
                  },
                  {
                     src: "https://particles.js.org/images/amongus_red.png",
                     width: 204,
                     height: 267
                  },
                  {
                     src: "https://particles.js.org/images/amongus_white.png",
                     width: 205,
                     height: 267
                  }
               ]
            }
         },
         "size": {
            "random": {
               "enable": false,
               "minimumValue": 1
            },
            value: 40,
            "animation": {
               "count": 0,
               "enable": false,
               "speed": 4,
               "decay": 0,
               "sync": false,
               "destroy": "none",
               "startValue": "random",
               "minimumValue": 0.3
            },
         },
         "opacity": {
            "random": {
               "enable": false,
               "minimumValue": 0.1
            },
            "value": 1,
            "animation": {
               "count": 0,
               "enable": false,
               "speed": 1,
               "decay": 0,
               "sync": false,
               "destroy": "none",
               "startValue": "random",
               "minimumValue": 0
            }
         },
         "move": {
            speed: 10,
            "angle": {
               "offset": 0,
               "value": 0
            },
            "attract": {
               "distance": 200,
               "enable": false,
               "rotate": {
                  "x": 600,
                  "y": 600
               }
            },
            "center": {
               "x": 50,
               "y": 50,
               "radius": 0
            },
            "decay": 0,
            "distance": {},
            "direction": "right",
            "drift": 0,
            "enable": true,
            "gravity": {
               "acceleration": 9.81,
               "enable": false,
               "inverse": false,
               "maxSpeed": 50
            },
            "path": {
               "clamp": false,
               "delay": {
                  "random": {
                     "enable": false,
                     "minimumValue": 0
                  },
                  "value": 0
               },
               "enable": false,
               "options": {}
            },
            "outModes": {
               default: "destroy",
               "left": "none",
            },
            "random": false,
            "size": false,
            "spin": {
               "acceleration": 0,
               "enable": false
            },
            "straight": true,
            "trail": {
               "enable": false,
               "length": 10,
               "fillColor": {
                  "value": "#000000"
               }
            },
            "vibrate": false,
            "warp": false
         },
         zIndex: {
            value: -1
         },
         rotate: {
            value: {
               min: 0,
               max: 360
            },
            animation: {
               enable: true,
               speed: 10,
               sync: true
            }
         }
      }
   },
   absorbers: {

      destroy: false,
      size: {
         value: 10,
         limit: 150,
         random: false,
         density: 15
      },
      position: {
         x: 75,
         y: 50
      }
   }
};

export default function BaseLayout() {
   const [darkMode, setDarkMode] = useState(true);
   const [impostorOpacity, setImpostorOpacity] = useState(1);
   const [isBlackHoleEnabled, setIsBlackHoleEnabled] = useState(false);

   const handleClick = () => {
      setDarkMode(!darkMode);
   }

   const opts = spaceMoginOpts;
   const blackHoleAbsorver = {
      destroy: false,
      size: {
         value: 10,
         limit: 30,
         random: false,
         density: 15
      },
      position: {
         x: 75,
         y: 50
      }
   }

   opts.emitters.particles.opacity.value = impostorOpacity;
   opts.absorbers = isBlackHoleEnabled && blackHoleAbsorver;

   const particlesInit = async (main) => {
      console.log(main);
   
       // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
       // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(main);
   };

   return (
      <Box className={darkMode ? Style.dark : Style.light}>

         <Particles
            className={Style.particles}
            id="tsparticles"
            init={particlesInit}
            options={{...spaceMoginOpts, }}
            
         >
         </Particles>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={
                     <About
                        onLoad={() => setImpostorOpacity(0)}
                        setAbsorver={(v) => setIsBlackHoleEnabled(v)}
                        onLeave={() => {
                           setImpostorOpacity(1);
                           setIsBlackHoleEnabled(false);
                        }} 
                     />
                  }/>
                  <Route exact path={'/portfolio'} element={<Portfolio/>}/>
                  <Route exact path={'/skills'} element={<Skills/>}/>
               </Routes>
            </Grid>
         </Grid>
      </Box>
   )
}


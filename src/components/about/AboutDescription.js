import React from 'react';
import {Box, Link} from "@mui/material";
import {info} from "../../info/Info";

const specialWords = (str, fWeight) => (
    <span style={{
        ...(fWeight && { fontWeight: fWeight }),
        background: info.gradient, 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent'
    }}>
        {str}
    </span>
)

export default function AboutDescription({linkBtn}) {
    return (
        <Box 
            component={'main'} 
            display={'flex'} 
            p={4}
            flexDirection={{xs: 'column', md: 'row'}}
            alignItems={'flex-start'}
            justifyContent={'flex-start'} 
            height={'100%'}
            width={'100%'}
        >
                <Box
                    display={'flex'} 
                    flexDirection={'column'}
                    alignItems={'flex-start'}
                    justifyContent={'center'} 
                    px={{xs: '2rem', md: '3rem'}}
                >
                    <Box 
                        component={'h1'}
                        textAlign={'left'}
                        fontSize={'2.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        {specialWords('A little about me...')}
                    </Box>
                    <Box 
                        py={{xs: '1rem', md: '2rem'}}
                        px={{xs: '0.5rem', md: '1rem'}}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Who is Igor you ask ?
                    </Box>
                    <Box
                        variant="text"
                        py={'0.3rem'}
                        px={{xs: '0.5rem', md: '1rem'}}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Star Wars Lover(
                        {' '}
                        <Link
                            component="button"
                            underline="hover"
                            variant="body2"
                            onClick={linkBtn}
                        >
                            My Dev Tribute to Star Wars
                        </Link>
                        {' '})
                    </Box>
                    <Box
                        // py={{xs: '1rem', md: '2rem'}} 
                        py={'0.3rem'}
                        px={{xs: '0.5rem', md: '1rem'}}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Fluent in the language of memes
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Versed in the art of flying and manufacturing drones
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Always unfairly accused of being an imposter in Among Us.
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Extremely silly when around dogs.
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        A frequent visitor to beaches in the summer.
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        Chocoholic
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.3rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        and mostly a bad Valorant player.
                    </Box>
                    <Box   
                        px={{xs: '0.5rem', md: '1rem'}}
                        py={'0.5rem'}
                        fontSize={'1.0rem'} 
                        fontFamily={'Courier New, Courier, monospace'}
                    >
                        NOTE: Programmer in spare time.
                    </Box>
                </Box>

        </Box>        
    );
}
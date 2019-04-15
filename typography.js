import Typography from 'typography';

const typography = new Typography({
    baseFontSize:"18px",
    googleFonts:[{
        name:"Montserrat",
        styles:["700"]
    },
    {
        name:"Open Sans",
        styles:["400"]
    }
    ],
    headerFonsFamily:["Montserrat","Helvetica Neue","snas-serif"],
    bodyFontFamily:["Open Sans","sans-serif"]
});

typography.injectStyles();

export default typography;
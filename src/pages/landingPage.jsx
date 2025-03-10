import { createUseStyles } from "react-jss";
import NextArrowButton from "../shared/components/arrowNextButton";
import WaveEmoji from "../shared/icons/animatedIcons/waveIcon";

const useStyles = createUseStyles({
    '@keyframes fadeIn': {
        from: {
            opacity: 0,
            transform: 'translateY(10px)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    title: {
        display: 'flex',
        flexDirection: 'row',
        gap: '10px',
        fontSize: '50px',
        fontWeight: '800',
        opacity: 0,
        animation: '$fadeIn 0.8s ease-out forwards',

        '@media (max-width: 768px)': {
            fontSize: '32px', // Smaller on mobile
            gap: '12px',
            flexDirection: 'column  ',
        },
    },
    subtitle: {
        fontSize: '34px',
        fontWeight: '700',
        color: '#b597ea',
        opacity: 0,
        animation: '$fadeIn 1s ease-out 0.3s forwards',

        '@media (max-width: 768px)': {
            fontSize: '24px', // Smaller on mobile
        },
    },
    root: {
        padding: '20px',
        textAlign: 'left',
        gap: '50px',
        color: '#976be3',
        display: 'flex',
        fontFamily: 'Arial',
        flexDirection: 'column',
        top: '10px',
        alignItems: 'flex-start',
        position: 'relative',

        '@media (max-width: 768px)': {
            padding: '15px',
            gap: '30px', // Adjust spacing for mobile
        },
    },
});

const LandingPage = ({ onclick }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <span>Welcome to Spotify Stearing</span>
                <WaveEmoji/>
            </div>
            <div className={classes.subtitle}>
                <span>This demo allows you to control Spotify playback using your camera.</span>
            </div>
            <div className={classes.subtitle}>
                <NextArrowButton onClick={ onclick } />
            </div>
        </div>
    );
};

export default LandingPage;

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    root: {
        userSelect: "none",
        borderRadius: "10px",
        border: "1px solid #976be3",
        padding: "15px",
        display: "flex",
        alignItems: "center",
        background: "#f4f0fc",
        maxHeight: '90px',
    },
    text: {
        fontSize: "20px",
        fontWeight: "500",
        color: "#976be3",
    },
    song: {
        fontWeight: "bold",
    },
    artist: {
        fontStyle: "italic",
    },
});

const NowPlaying = ({ song, artist }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <span className={classes.text}>
                🎵 Now Playing: <span className={classes.song}>{song}</span> by{" "}
                <span className={classes.artist}>{artist}</span>
            </span>
        </div>
    );
};

export default NowPlaying;

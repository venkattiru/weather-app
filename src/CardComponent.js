import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import {
  WiHumidity,
  WiCelsius,
  WiSunrise,
  WiSunset,
  WiStrongWind,
  WiWindDeg,
  WiBarometer
} from 'react-icons/wi';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: blue[500]
  },
  weatherIcon: {
    fontSize: 40
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const getWeatherAvatar = () => {
  //   // if (props.details.weather.main === 'Clouds') {
  //   return (
  //     <>
  //       <FontAwesomeIcon icon="fa-duotone fa-cloud-moon" />
  //     </>
  //   );
  //   //  }
  // };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={`${props.details.name}, ${props.details?.sys?.country}`}
      />
      <div className="weather-icon">
        <img
          src={`http://openweathermap.org/img/wn/${
            props.details.weather[0].icon
          }@2x.png`}
          title={props.details.weather[0].description}
        />
        <Avatar className={classes.avatar}>
          <>
            {Math.floor(props.details.main?.temp)}
            <WiCelsius />
          </>
        </Avatar>
      </div>
      <CardContent>
        <Typography
          variant="body2"
          color="textPrimary"
          component="div"
          className="humidity-main"
        >
          <WiHumidity />
          <p>{`${props.details.main?.humidity}%`}</p>
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          component="div"
          className="pressure-main"
        >
          <WiBarometer />
          <p>{`${props.details.main?.pressure}hPa`}</p>
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          component="div"
          className="sunrise-set"
        >
          <WiSunrise />
          <p>
            {new Date(props.details.sys?.sunrise * 1000).toLocaleTimeString()}
          </p>
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          component="div"
          className="sunrise-set"
        >
          <WiSunset />
          <p>
            {new Date(props.details.sys?.sunset * 1000).toLocaleTimeString()}
          </p>
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          component="div"
          className="wind-set"
        >
          <WiStrongWind />
          <p>{`${props.details.wind?.speed} meter/sec`}</p>
        </Typography>
        <Typography
          variant="body2"
          color="textPrimary"
          component="div"
          className="wind-set"
        >
          <WiWindDeg />
          <p>{`${props.details.wind?.deg} deg`}</p>
        </Typography>
      </CardContent>
      <p className="updated-date">
        {`Updated as on ${new Date(props.details.dt * 1000).toLocaleString()}`}{' '}
      </p>
    </Card>
  );
}

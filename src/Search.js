import React, { useState, useRef } from 'react';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Input from './Input';
import CardComponent from './CardComponent';
import getWeatherData from './service';
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function Search() {
  const [search, setSearch] = useState(0);
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const classes = useStyles();
  const handleChange = e => {
    setSearch(e.target.value);
    setInputText('');
    setData('');
    setError('');
  };
  const handleInput = inputText => {
    setInputText(inputText);
  };
  const getweather = async () => {
    if (parseInt(search) === 3) {
      navigator.geolocation.getCurrentPosition(
        async position => {
          const wloc = await getWeatherData(
            position.coords.latitude,
            position.coords.longitude
          );
          console.log(wloc);
          setData(wloc);
        },
        error => setError(error.message)
      );
    } else {
      const wData = await getWeatherData(inputText);
      console.log(wData);
      wData ? setData(wData) : setError('Please check search and try again');
    }
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="search-by">search by</InputLabel>
        <Select
          native
          value={search}
          onChange={handleChange}
          inputProps={{
            name: 'searchby',
            id: 'search-by'
          }}
        >
          <option value="" />
          <option value={1}>city</option>
          <option value={2}>zipcode</option>
          <option value={3}> current Location</option>
        </Select>
      </FormControl>
      {parseInt(search) > 0 && parseInt(search) !== 3 && (
        <Input
          label={parseInt(search) === 1 ? 'City' : 'Zipcode'}
          onInput={txt => handleInput(txt)}
        />
      )}
      {(inputText.length > 0 || parseInt(search) === 3) && (
        <Button variant="contained" color="primary" onClick={getweather}>
          Search
        </Button>
      )}
      {data && !error && <CardComponent details={data} />}
      {error && <p className="error-msg">{error}</p>}
    </div>
  );
}

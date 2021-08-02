/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // DONE - filter by duration
  if (filters.duration) {
    output = output.filter(trip => (trip.days <= filters.duration.to && trip.days >= filters.duration.from));
  }
  // DONE - filter by tags
  if (filters.tags) {
    output = output.filter(trip => filters.tags.every(tag => trip.tags.includes(tag)));
  }

  // if(filters.tags.length > -1){
  //   for (let tag of filters.tags){
  //     output = output.filter(trip => trip.tags.indexOf(tag) > -1);
  //     // console.log(filters.tags.length);
  //   }
  // }


  // TODO - sort by cost descending (most expensive goes first)
  // let highestPrice = trips[0].cost;
  // let lowestPrice = trips[0].cost;
  // let sum = 0;
  // for (const tripPrice in trips) {
  //   const tripsPrice = trips[tripPrice].cost;
  //   console.log(tripsPrice);
  //   sum += parseFloat(tripsPrice);
  //   if (tripsPrice > highestPrice) highestPrice = tripsPrice;
  //   if (tripsPrice < lowestPrice) lowestPrice = tripsPrice;
  // }
  // console.log(sum);

  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  // DONE - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips.filter(trips => trips.country.code == countryCode);

  // DONE - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */

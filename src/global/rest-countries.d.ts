declare module 'rest-countries' {
  export type NativeName = {
    [key: string]: {
      official: string;
      common: string;
    };
  };

  export type Name = {
    common: string;
    official: string;
    nativeName: NativeName;
  };

  export type Currencies = {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };

  export type Languages = {
    [key: string]: string;
  };

  export type TCountry = {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: {
      root: string;
      suffixes: string[];
    };
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
    latlng: [number, number];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: {
      [key: string]: {
        f: string;
        m: string;
      };
    };
    flag: string;
    maps: {
      googleMaps: string;
      openStreetMaps: string;
    };
    population: number;
    gini: {
      [key: string]: number;
    };
    fifa: string;
    car: {
      signs: string[];
      side: string;
    };
    timezones: string[];
    continents: string[];
    flags: {
      png: string;
      svg: string;
    };
    coatOfArms: {
      png: string;
      svg: string;
    };
    startOfWeek: string;
    capitalInfo: {
      latlng: [number, number];
    };
    postalCode: {
      format: string;
      regex: string;
    };
  };
}

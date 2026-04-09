import { AxiosResponse } from "axios";
import _ from "@services/axios";
const api = {
  auth: {
    postSignup: async ({
      body: { name, surname, username, email, password },
    }: {
      body: {
        name: string;
        surname: string;
        username: string;
        email: string;
        password: string;
      };
    }): Promise<AxiosResponse<{ accessToken: string }>> => {
      const response = await _.post(`/auth/signup`, {
        name,
        surname,
        username,
        email,
        password,
      });
      return response;
    },

    postLogin: async ({
      body: { identifier, password },
    }: {
      body: { identifier: string; password: string };
    }): Promise<AxiosResponse<{ accessToken: string }>> => {
      const response = await _.post(`/auth/login`, { identifier, password });
      return response;
    },

    postValidate: async (): Promise<AxiosResponse<{ mensaje: string }>> => {
      const response = await _.post(`/auth/validate`, {});
      return response;
    },
  },

  portfolio: {
    postCoordenadas: async ({
      body: {
        ip,
        network,
        version,
        city,
        region,
        region_code,
        country,
        country_name,
        country_code,
        country_code_iso3,
        country_capital,
        country_tld,
        continent_code,
        in_eu,
        postal,
        latitude,
        longitude,
        timezone,
        utc_offset,
        country_calling_code,
        currency,
        currency_name,
        languages,
        country_area,
        country_population,
        asn,
        org,
      },
    }: {
      body: {
        ip: string;
        network: string;
        version: undefined;
        city: string;
        region: string;
        region_code: string;
        country: string;
        country_name: string;
        country_code: string;
        country_code_iso3: string;
        country_capital: string;
        country_tld: string;
        continent_code: string;
        in_eu: boolean;
        postal: string;
        latitude: number;
        longitude: number;
        timezone: string;
        utc_offset: string;
        country_calling_code: string;
        currency: string;
        currency_name: string;
        languages: string;
        country_area: number;
        country_population: number;
        asn: string;
        org: string;
      };
    }): Promise<AxiosResponse<{ mensaje: string }>> => {
      const response = await _.post(`/portfolio/coordenadas`, {
        ip,
        network,
        version,
        city,
        region,
        region_code,
        country,
        country_name,
        country_code,
        country_code_iso3,
        country_capital,
        country_tld,
        continent_code,
        in_eu,
        postal,
        latitude,
        longitude,
        timezone,
        utc_offset,
        country_calling_code,
        currency,
        currency_name,
        languages,
        country_area,
        country_population,
        asn,
        org,
      });
      return response;
    },
  },
};
export default api;

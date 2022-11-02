import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Offer } from '../types/offer';
import { Map, TileLayer } from 'leaflet';

type UseMapProps = {
  offers: Offer[];
}

function useMap({offers}: UseMapProps, mapRef: MutableRefObject<HTMLElement | null>, city: Offer['city']): Map | null {
  const [ map, setMap ] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  const amsterdamCity = offers.find((offer) => offer.city.name === 'Amsterdam');

  useEffect(() => {
    if(mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: amsterdamCity?.location.latitude,
          lng: amsterdamCity?.location.longitude,
        },
        zoom: amsterdamCity?.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;

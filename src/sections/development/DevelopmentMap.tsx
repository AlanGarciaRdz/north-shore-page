import { Button, Container, Grid } from '@nextui-org/react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import OptimizeImage from 'src/components/base/OptimizeImage';
import { DevelopmentCompleteProps } from 'src/components/development/Development.types';
import RenderContainer from 'src/components/layouts/RenderContainer';

interface ShowMapButtonProps {
  setShowMap: Dispatch<SetStateAction<boolean>>;
}
function ShowMapButton({ setShowMap }: ShowMapButtonProps) {
  return (
    <Container
      fluid
      responsive={false}
      css={{
        padding: 0,
        margin: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button
        color='secondary'
        css={{
          fontWeight: 'bold',
        }}
        onPress={() => {
          setShowMap(true);
        }}
      >
        {'Show Map'}
      </Button>
    </Container>
  );
}

export default function DevelopmentMap({ geo }: DevelopmentCompleteProps) {
  const [showMap, setShowMap] = useState(false);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAHKqD3Tvh3qX52tXMj9czl9grqIGP2oYQ',
  });

  if (geo.lat === undefined || geo.lng === undefined) {
    return <div />;
  }
  const lat = geo.lat;
  const lng = geo.lng;
  return (
    <Grid xs={12} css={{ marginTop: 45 }}>
      <RenderContainer
        mobileView={
          <Container
            fluid
            responsive={false}
            css={{
              padding: 0,
              margin: 0,
              width: '100%',
              height: 300,
              position: 'relative',
            }}
          >
            {showMap === false && (
              <>
                <OptimizeImage
                  src={'/dump/map.png'}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  alt={'dummy map'}
                  useBlur={true}
                />
                <ShowMapButton setShowMap={setShowMap} />
              </>
            )}
            {showMap === true && isLoaded === true && (
              <GoogleMap
                id='marker-example'
                mapContainerStyle={{ width: '100%', height: '100%', position: 'relative' }}
                zoom={15}
                center={{
                  lat: lat,
                  lng: lng,
                }}
              >
                <Marker
                  position={{
                    lat: lat,
                    lng: lng,
                  }}
                />
              </GoogleMap>
            )}
          </Container>
        }
        desktopView={
          <Container
            fluid
            responsive={false}
            css={{
              padding: 0,
              margin: 0,
              width: '100%',
              height: 400,
              position: 'relative',
            }}
          >
            {showMap === false && (
              <>
                <OptimizeImage
                  src={'/dump/map.png'}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  alt={'dummy map'}
                  useBlur={true}
                />
                <ShowMapButton setShowMap={setShowMap} />
              </>
            )}
            {showMap === true && isLoaded === true && (
              <GoogleMap
                id='marker-example'
                mapContainerStyle={{ width: '100%', height: '100%', position: 'relative' }}
                zoom={15}
                center={{
                  lat: lat,
                  lng: lng,
                }}
              >
                <Marker
                  position={{
                    lat: lat,
                    lng: lng,
                  }}
                />
              </GoogleMap>
            )}
          </Container>
        }
      />
    </Grid>
  );
}

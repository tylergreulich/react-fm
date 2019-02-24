import React from 'react';
import { PrimaryTitle } from '../../../shared/styles/PrimaryTitle';
import { Summary } from '../../../shared/styles/Summary';
import { ArtistBioProps } from './ArtistBio.interface';

const ArtistBio: React.FunctionComponent<ArtistBioProps> = ({ artist }) => {
  return artist && artist.bio ? (
    <>
      <PrimaryTitle>{`${artist ? artist.name : ''}`}</PrimaryTitle>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Summary
          dangerouslySetInnerHTML={{ __html: artist.bio && artist.bio.summary }}
        />
      </div>
    </>
  ) : null;
};

export default ArtistBio;

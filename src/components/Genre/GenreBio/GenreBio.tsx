import React from 'react';
import { PrimaryTitle } from '../../../shared/styles/PrimaryTitle';
import { Summary } from '../../../shared/styles/Summary';
import { GenreBioProps } from './GenreBio.interface';

const GenreBio: React.FunctionComponent<GenreBioProps> = ({ tag }) => {
  return (
    <>
      <PrimaryTitle>{`${tag && tag.name}`}</PrimaryTitle>
      {tag && tag.wiki && (
        <>
          <Summary dangerouslySetInnerHTML={{ __html: tag && tag.wiki && tag.wiki.summary }} />
        </>
      )}
    </>
  );
};

export default GenreBio;

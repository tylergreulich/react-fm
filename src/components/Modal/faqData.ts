interface Faq {
  id: number;
  question: string;
  answer: string;
}

export const faq: Faq[] = [
  {
    id: 1,
    question: 'Why is the wrong song or a version of a song loaded?',
    answer: `ReactFM uses YouTube for streaming music. It returns a search
                  for a given song and takes the first video that is allowed to
                  be embedded outside of YouTube. So, sometimes you'll get a
                  live version, cover, or even the wrong song since it doesn't
                  filter the results. The reason for not filtering the results
                  is that the first result is usually the most probable match.`
  },
  {
    id: 2,
    question: 'Why is my favorite song not included in the Top Tracks list?',
    answer: `The Top Tracks list is formed by taking the Top 15 all-time most listened songs from the Last.fm API. If the song you're looking for isn't included in the list, it means that it's not in the Top 15.`
  }
];

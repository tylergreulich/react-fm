import { useState } from 'react';

export const isVideoLoadingHook = () => {
  const [isVideoLoading, setIsVideoLoading] = useState<boolean>(true);

  return { isVideoLoading, setIsVideoLoading };
};

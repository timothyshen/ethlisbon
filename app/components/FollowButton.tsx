import { Button } from '@chakra-ui/react';
import { ProfileOwnedByMe, Profile, useFollow } from '@lens-protocol/react-web';

type ProfileFollowProps = {
  followee: Profile,
  follower: ProfileOwnedByMe;
};

export function FollowButton({followee,follower}:ProfileFollowProps) {

    const { execute: follow, error, isPending, } = useFollow({ followee:followee as Profile, follower:follower });

  return (
    <Button onClick={follow} disabled={isPending} backgroundColor={'rgb(171 254 44)'} color={'0 80 30'} width={'full'} mt={'10px'}>
      { isPending ? 'Follow in progress...' : followee.isFollowedByMe ? 'Following' : 'Follow' }
    </Button>
  );
}



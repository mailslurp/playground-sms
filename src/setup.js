import Amplify, { Auth } from 'aws-amplify';

export default function setup() {
  Amplify.configure({
      Auth: {
          identityPoolId: process.env.REACT_APP_identity_pool_id,
          region: process.env.REACT_APP_region,
          identityPoolRegion: process.env.REACT_APP_region,
          userPoolId: process.env.REACT_APP_user_pool_id,
          userPoolWebClientId: process.env.REACT_APP_user_pool_client_id,
          mandatorySignIn: false,
      }
  });
}

import Amplify from 'aws-amplify';

export default function setup() {
  Amplify.configure({
      Auth: {
          region: "us-west-2",
          identityPoolRegion: "us-west-2",
          mandatorySignIn: false,
          identityPoolId : "us-west-2:f97c01a8-725e-4102-b8cc-a6fcd3fd7519",
          userPoolId : "us-west-2_0m1VwBjXs",
          userPoolWebClientId : "4sajgpeh9gm1c1c7k7jjgdkq87"

      }
  });
}

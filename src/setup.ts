import Amplify from 'aws-amplify';

export default function setup() {
  Amplify.configure({
      Auth: {
          identityPoolId: "us-west-2:b0e8c98c-e3d1-4cea-9a50-0f6e622e6524",
          region: "us-west-2",
          identityPoolRegion: "us-west-2",
          userPoolId: "us-west-2_FI96DSSak",
          userPoolWebClientId: "2bt28jddbpf3gfc91q4pg9824o",
          mandatorySignIn: false,
      }
  });
}

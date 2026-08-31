import { Meta } from '@storybook/nextjs-vite';

import { SignInScreen } from '../components/authetication/auth.signin.container3';

type Story = Meta<typeof SignInScreen>;

export default {
  component: SignInScreen,
  title: 'Authentication/SignInScreen',
} satisfies Story;

export const Default = {
  args: {
    data: {
      description2: 'Forgot your password? Click here to reset it.',
      title: 'Welcome Back!',
      description: 'Please sign in to continue.',
      bgImageUrl:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F88212%2Fpexels-photo-88212.jpeg%3Fcs%3Dsrgb%26dl%3Dbeach-blue-sky-boat-88212.jpg%26fm%3Djpg&f=1&nofb=1&ipt=0a8bbb858e782be3e522e339a2a5386bc0f8612d11fe70a4b377553228c4f7d3',
      bgBrightness: 0.8,
    },
    loginForm: '<div className="p-8">Login Form Placeholder</div>',
  },
} satisfies Story;

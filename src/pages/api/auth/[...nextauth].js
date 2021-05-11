import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.Twitter({
            clientId: process.env.TWITTER_KEY,
            clientSecret: process.env.TWITTER_SECRET,
        }),
        Providers.Facebook({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,

        })
    ]
}

export default (req, res) => NextAuth(req, res, options);
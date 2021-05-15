import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    providers: [
        Providers.Twitter({
            clientId: process.env.TWITTER_KEY,
            clientSecret: process.env.TWITTER_SECRET,
        })
    ]
}

export default (req, res) => NextAuth(req, res, options);
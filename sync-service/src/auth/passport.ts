//@ts-nocheck

import passport from 'passport';
import { Strategy } from 'passport-localapikey';
import { ApiKey } from '../../../packages/model'


const LocalApiKeyStratagy = Strategy
passport.use(new LocalApiKeyStratagy(
    (apiKey, done) => {
        try {
            const apiKeyData = await ApiKey.findOne({ key: apiKey })
            if(!apiKeyData){ return done(null, false) }
            return done(null, apiKeyData); 
        } catch (error) {
            return done(error)
        }
    }
))

import { config, list } from '@keystone-6/core';
import {text, integer, password} from '@keystone-6/core/fields';
import {withAuth, session} from './auth';

export default withAuth(
    config({
        server: {
            cors: {
                origin: '*',
                methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
            }
        },
        db: {
            provider: 'sqlite',
            url: 'file:./keystone.db',
            useMigrations: true
        },
        ui: {
            // We check that someone has session data before letting them see the Admin UI.
            isAccessAllowed: (context) => !!context.session?.data,
        },
        lists: {
            Player: list({
                fields: {
                    name: text({validation: {isRequired: true}, isIndexed: 'unique'}),
                    seed: text({validation: {isRequired: true}, isIndexed: 'unique'}),
                    rooms_cleared: integer({
                        defaultValue: 0,
                        validation: {
                            isRequired: true,
                        },
                    })
                },
            }),
            User: list({
                // Here are the fields that `User` will have. We want an email and password so they can log in
                // a name so we can refer to them, and a way to connect users to posts.
                fields: {
                    name: text({validation: {isRequired: true}}),
                    email: text({
                        validation: {isRequired: true},
                        isIndexed: 'unique',
                        isFilterable: true,
                    }),
                    // The password field takes care of hiding details and hashing values
                    password: password({validation: {isRequired: true}}),
                },
                // Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
                ui: {
                    listView: {
                        initialColumns: ['name'],
                    },
                },
            }),
        },
        session,
    })
);
